import * as THREE from 'three';

export interface Hotspot {
  id: string;
  position: THREE.Vector3;
  title: string;
  description: string;
  audioUrl?: string;
  linkedSceneId?: string;
} 