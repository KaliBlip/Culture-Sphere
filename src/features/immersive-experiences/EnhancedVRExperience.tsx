import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { XRTargetRaySpace } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { LoadingScreen } from '../../components/LoadingScreen';
import { Hotspot } from '../../types/hotspot';
import './styles/EnhancedVRExperience.css';
import { WebGLRenderer } from 'three';

interface CulturalArtifact {
  id: string;
  name: string;
  description: string;
  modelUrl: string;
  position: THREE.Vector3;
  scale: THREE.Vector3;
  rotation: THREE.Euler;
}

interface TimePeriod {
  id: string;
  name: string;
  year: number;
  description: string;
  environmentUrl: string;
}

interface EnhancedVRExperienceProps {
  baseEnvironmentUrl: string;
  hotspots?: Hotspot[];
  artifacts?: CulturalArtifact[];
  timePeriods?: TimePeriod[];
  onHotspotClick?: (hotspot: Hotspot) => void;
  onArtifactClick?: (artifact: CulturalArtifact) => void;
  onTimePeriodChange?: (timePeriod: TimePeriod) => void;
  onVRModeChange?: (isVR: boolean) => void;
  className?: string;
  modelPath: string;
}

export const EnhancedVRExperience: React.FC<EnhancedVRExperienceProps> = ({
  baseEnvironmentUrl,
  hotspots = [],
  artifacts = [],
  timePeriods = [],
  onHotspotClick,
  onArtifactClick,
  onTimePeriodChange,
  onVRModeChange,
  className = '',
  modelPath
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isVRMode, setIsVRMode] = useState(false);
  const [currentTimePeriod, setCurrentTimePeriod] = useState<TimePeriod | null>(null);
  const [activeController, setActiveController] = useState<THREE.XRTargetRaySpace | null>(null);
  const audioLoader = new THREE.AudioLoader();
  const audioContext = useRef<AudioContext | null>(null);
  const audioListener = useRef<THREE.AudioListener | null>(null);
  const environmentMap = useRef<THREE.Texture | null>(null);
  const [isCardboardMode, setIsCardboardMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVRSupported, setIsVRSupported] = useState(false);
  const [showCardboardInstructions, setShowCardboardInstructions] = useState(false);

  useEffect(() => {
    const checkVRSupport = async () => {
      if ('xr' in navigator) {
        try {
          const isSupported = await (navigator as any).xr.isSessionSupported('immersive-vr');
          setIsVRSupported(isSupported);
        } catch (error) {
          console.error('Error checking VR support:', error);
          setIsVRSupported(false);
        }
      }
    };

    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(isMobileDevice);
    };

    checkVRSupport();
    checkMobile();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Create renderer with WebXR support
    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });

    // Enable WebXR
    renderer.xr.enabled = true;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Add VR button if supported
    if (isVRSupported) {
      const vrButton = VRButton.createButton(renderer);
      vrButton.classList.add('vr-button');
      containerRef.current.appendChild(vrButton);
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf: GLTF) => {
        scene.add(gltf.scene);
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        gltf.scene.scale.multiplyScalar(scale);
        gltf.scene.position.sub(center.multiplyScalar(scale));
      },
      (progress: ProgressEvent) => {
        const percent = (progress.loaded / progress.total) * 100;
        console.log(`${percent}% loaded`);
      },
      (error: unknown) => {
        console.error('Error loading model:', error);
      }
    );

    camera.position.z = 5;

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [modelPath, isVRSupported]);

  const handleCardboardClick = () => {
    setIsCardboardMode(true);
    setShowCardboardInstructions(true);
  };

  return (
    <div className={`enhanced-vr-experience ${className} ${isMobile ? 'mobile' : ''} ${isCardboardMode ? 'cardboard' : ''}`}>
      <div ref={containerRef} className="canvas-container" />
      
      <div className="controls-overlay">
        {isMobile && !isVRSupported && (
          <button className="cardboard-button" onClick={handleCardboardClick}>
            <svg viewBox="0 0 24 24">
              <path d="M20.74 6H3.26C2.56 6 2 6.56 2 7.26v9.47c0 .7.56 1.26 1.26 1.26h17.48c.7 0 1.26-.56 1.26-1.26V7.26c0-.7-.56-1.26-1.26-1.26zM11 13.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm3.5 1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            Enter Cardboard Mode
          </button>
        )}
      </div>

      {showCardboardInstructions && (
        <div className="cardboard-instructions">
          <div className="instructions-content">
            <img src="/cardboard-instructions.svg" alt="Cardboard instructions" />
            <p>Place your phone into your Cardboard viewer.</p>
            <button onClick={() => setShowCardboardInstructions(false)}>Got it</button>
          </div>
        </div>
      )}

      <div className="fps-counter">60 FPS</div>
    </div>
  );
}; 