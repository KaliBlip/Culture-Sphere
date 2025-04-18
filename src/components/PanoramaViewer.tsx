import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Hotspot } from '../types/hotspot';

interface PanoramaViewerProps {
  imageUrl: string;
  hotspots?: Hotspot[];
  onHotspotClick?: (hotspot: Hotspot) => void;
  className?: string;
}

export function PanoramaViewer({ 
  imageUrl, 
  hotspots = [], 
  onHotspotClick,
  className = '' 
}: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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
    camera.position.z = 0.1;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Initialize controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controlsRef.current = controls;

    // Create sphere geometry for panorama
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Flip the geometry inside out

    // Load panorama texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      imageUrl,
      (texture) => {
        const material = new THREE.MeshBasicMaterial({
          map: texture
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading panorama:', error);
        setError('Failed to load panorama');
        setLoading(false);
      }
    );

    // Add hotspots
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
    });

    // Add click handler for hotspots
    const handleClick = (event: MouseEvent) => {
      if (!camera || !renderer) return;
      
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);
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
    };
  }, [imageUrl, hotspots, onHotspotClick]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4">Loading panorama...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
} 