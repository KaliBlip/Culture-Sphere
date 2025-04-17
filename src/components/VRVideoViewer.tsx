import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Video } from '../services/pexelsVideos';

interface VRVideoViewerProps {
  video: Video;
  hotspots?: {
    position: THREE.Vector3;
    title: string;
    description: string;
  }[];
}

export const VRVideoViewer: React.FC<VRVideoViewerProps> = ({ video, hotspots = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVRSupported, setIsVRSupported] = useState(false);
  const [isVRMode, setIsVRMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textureRef = useRef<THREE.VideoTexture | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for WebXR support
    if ('xr' in navigator) {
      navigator.xr?.isSessionSupported('immersive-vr').then((supported) => {
        setIsVRSupported(supported);
      });
    }

    // Create Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;

    // Create video element with CORS settings
    const videoElement = document.createElement('video');
    videoElement.crossOrigin = 'anonymous';
    videoElement.src = video.video_files[0].link;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.setAttribute('playsinline', '');
    videoRef.current = videoElement;

    // Create video texture
    const texture = new THREE.VideoTexture(videoElement);
    textureRef.current = texture;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add hotspots
    hotspots.forEach((hotspot) => {
      const hotspotGeometry = new THREE.SphereGeometry(1, 32, 32);
      const hotspotMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const hotspotMesh = new THREE.Mesh(hotspotGeometry, hotspotMaterial);
      hotspotMesh.position.copy(hotspot.position);
      scene.add(hotspotMesh);
    });

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (textureRef.current) {
        textureRef.current.dispose();
      }
    };
  }, [video, hotspots]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  };

  const enterVR = async () => {
    if (!isVRSupported || !rendererRef.current) return;

    try {
      const session = await navigator.xr?.requestSession('immersive-vr');
      if (session) {
        setIsVRMode(true);
        await rendererRef.current.xr.setSession(session);
      }
    } catch (error) {
      console.error('Failed to enter VR mode:', error);
    }
  };

  const exitVR = () => {
    if (!rendererRef.current?.xr.getSession()) return;
    rendererRef.current.xr.getSession()?.end();
    setIsVRMode(false);
  };

  return (
    <div className="relative w-full h-screen" ref={containerRef}>
      <div className="absolute bottom-4 left-4 z-10 flex space-x-4">
        <button
          onClick={togglePlay}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {isVRSupported && (
          <button
            onClick={isVRMode ? exitVR : enterVR}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg"
          >
            {isVRMode ? 'Exit VR' : 'Enter VR'}
          </button>
        )}
      </div>
    </div>
  );
}; 