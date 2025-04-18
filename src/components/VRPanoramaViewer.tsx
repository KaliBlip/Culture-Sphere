import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
import { LoadingScreen } from './LoadingScreen';
import { XRTargetRaySpace } from 'three';
import { Hotspot } from '../types/hotspot';

interface XRControllerWithGamepad extends XRTargetRaySpace {
  gamepad?: {
    hapticActuators?: {
      pulse: (value: number, duration: number) => void;
    }[];
  };
}

interface VRPanoramaViewerProps {
  imageUrl: string;
  hotspots?: Hotspot[];
  onHotspotClick?: (hotspot: Hotspot) => void;
  onVRModeChange?: (isVR: boolean) => void;
  className?: string;
}

export function VRPanoramaViewer({ 
  imageUrl, 
  hotspots = [], 
  onHotspotClick,
  onVRModeChange,
  className = '' 
}: VRPanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isVRMode, setIsVRMode] = useState(false);
  const [activeController, setActiveController] = useState<THREE.XRTargetRaySpace | null>(null);
  const audioLoader = new THREE.AudioLoader();
  const audioContext = useRef<AudioContext | null>(null);
  const audioListener = useRef<THREE.AudioListener | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize audio context
    try {
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioListener.current = new THREE.AudioListener();
    } catch (error) {
      console.warn('Audio context initialization failed:', error);
    }

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.6, 0); // Set to average human height
    cameraRef.current = camera;

    // Initialize renderer with WebXR support
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.xr.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add VR button
    const vrButton = VRButton.createButton(renderer);
    containerRef.current.appendChild(vrButton);

    // Initialize controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controlsRef.current = controls;

    // Create sphere geometry for panorama
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Flip the geometry inside out

    // Load panorama texture with progress tracking
    const textureLoader = new THREE.TextureLoader();
    const manager = new THREE.LoadingManager();
    
    manager.onProgress = (url, loaded, total) => {
      setLoadingProgress((loaded / total) * 100);
    };

    manager.onLoad = () => {
      setLoading(false);
    };

    manager.onError = (url) => {
      console.error('Error loading:', url);
      setError('Failed to load panorama');
      setLoading(false);
    };

    textureLoader.setCrossOrigin('anonymous');
    textureLoader.load(
      imageUrl,
      (texture) => {
        const material = new THREE.MeshBasicMaterial({
          map: texture
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      },
      (xhr) => {
        setLoadingProgress((xhr.loaded / xhr.total) * 100);
      },
      (error) => {
        console.error('Error loading panorama:', error);
        setError('Failed to load panorama');
        setLoading(false);
      }
    );

    // Add hotspots with spatial audio
    const hotspotMeshes: THREE.Mesh[] = [];
    hotspots.forEach((hotspot) => {
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0xff0000,
        transparent: true,
        opacity: 0.8
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(hotspot.position);
      sphere.userData = { hotspot };
      scene.add(sphere);
      hotspotMeshes.push(sphere);

      // Add spatial audio if available and audio context is initialized
      if (hotspot.audioUrl && audioListener.current) {
        try {
          const audio = new THREE.PositionalAudio(audioListener.current);
          audioLoader.load(hotspot.audioUrl, (buffer) => {
            audio.setBuffer(buffer);
            audio.setRefDistance(20);
            audio.setRolloffFactor(1);
            audio.setDistanceModel('inverse');
            sphere.add(audio);
          });
        } catch (error) {
          console.warn('Failed to create audio for hotspot:', error);
        }
      }
    });

    // Handle VR session changes
    renderer.xr.addEventListener('sessionstart', () => {
      setIsVRMode(true);
      onVRModeChange?.(true);
      // Initialize VR controllers
      const controller1 = renderer.xr.getController(0);
      const controller2 = renderer.xr.getController(1);
      
      // Add controller models
      const controllerModel1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 0.02, 0.1),
        new THREE.MeshBasicMaterial({ color: 0x4444ff })
      );
      const controllerModel2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 0.02, 0.1),
        new THREE.MeshBasicMaterial({ color: 0x4444ff })
      );
      
      controller1.add(controllerModel1);
      controller2.add(controllerModel2);
      scene.add(controller1);
      scene.add(controller2);

      // Handle controller input
      controller1.addEventListener('selectstart', () => {
        setActiveController(controller1);
        handleControllerSelect(controller1);
      });
      controller2.addEventListener('selectstart', () => {
        setActiveController(controller2);
        handleControllerSelect(controller2);
      });
    });

    renderer.xr.addEventListener('sessionend', () => {
      setIsVRMode(false);
      onVRModeChange?.(false);
      setActiveController(null);
    });

    const handleControllerSelect = (controller: XRControllerWithGamepad) => {
      const tempMatrix = new THREE.Matrix4();
      const raycaster = new THREE.Raycaster();
      
      tempMatrix.identity().extractRotation(controller.matrixWorld);
      raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
      raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
      
      const intersects = raycaster.intersectObjects(hotspotMeshes);
      if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.userData.hotspot && onHotspotClick) {
          onHotspotClick(object.userData.hotspot);
          
          // Trigger haptic feedback if available
          if (controller.gamepad?.hapticActuators?.[0]) {
            controller.gamepad.hapticActuators[0].pulse(0.5, 100);
          }
        }
      }
    };

    // Add click handler for hotspots
    const handleClick = (event: MouseEvent) => {
      if (!camera || !renderer) return;
      
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(hotspotMeshes);
      if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.userData.hotspot && onHotspotClick) {
          onHotspotClick(object.userData.hotspot);
        }
      }
    };

    window.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      containerRef.current?.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
      if (audioContext.current) {
        audioContext.current.close();
      }
    };
  }, [imageUrl, hotspots, onHotspotClick, onVRModeChange]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    >
      {loading && (
        <LoadingScreen
          progress={loadingProgress}
          message="Loading panorama..."
        />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      )}
      {isVRMode && (
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
          VR Mode Active
        </div>
      )}
    </div>
  );
} 