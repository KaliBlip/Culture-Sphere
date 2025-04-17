import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface VRUIProps {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale?: number;
  onClose?: () => void;
  children: React.ReactNode;
}

export function VRUI({ position, rotation, scale = 1, onClose, children }: VRUIProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a group to hold the UI elements
    const group = new THREE.Group();
    group.position.copy(position);
    group.rotation.copy(rotation);
    group.scale.set(scale, scale, scale);
    uiRef.current = group;

    // Create a plane for the UI background
    const geometry = new THREE.PlaneGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });
    const background = new THREE.Mesh(geometry, material);
    background.position.z = -0.01; // Slightly behind the content
    group.add(background);

    // Create a close button if onClose is provided
    if (onClose) {
      const buttonGeometry = new THREE.PlaneGeometry(0.2, 0.2);
      const buttonMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.8
      });
      const closeButton = new THREE.Mesh(buttonGeometry, buttonMaterial);
      closeButton.position.set(0.9, 0.4, 0);
      closeButton.userData = { onClick: onClose };
      group.add(closeButton);
    }

    return () => {
      // Cleanup
      group.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [position, rotation, scale, onClose]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, ${position.z}px) rotateX(${rotation.x}rad) rotateY(${rotation.y}rad) rotateZ(${rotation.z}rad) scale(${scale})`,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
} 