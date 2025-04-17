import * as THREE from 'three';
import { Hotspot } from '../components/VRPanoramaViewer';

export interface PanoramaLocation {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  hotspots: Hotspot[];
}

export const sampleTour: PanoramaLocation[] = [
  {
    id: 'venice',
    title: 'Venice Sunset',
    description: 'Experience the magical sunset over the canals of Venice',
    imageUrl: '/panoramas/venice_sunset_1k.hdr',
    hotspots: [
      {
        position: new THREE.Vector3(0, 1.6, -10),
        title: 'Grand Canal',
        description: 'The main waterway of Venice, lined with historic buildings',
        audioUrl: '/audio/venice_canal.mp3'
      },
      {
        position: new THREE.Vector3(5, 1.6, -8),
        title: 'Gondola Station',
        description: 'Traditional Venetian boats ready for a romantic ride',
        audioUrl: '/audio/venice_gondola.mp3'
      }
    ]
  },
  {
    id: 'grand-canyon',
    title: 'Grand Canyon',
    description: 'Marvel at the breathtaking views of the Grand Canyon',
    imageUrl: '/panoramas/grand_canyon_1k.hdr',
    hotspots: [
      {
        position: new THREE.Vector3(0, 1.6, -15),
        title: 'South Rim',
        description: 'The most popular viewpoint of the Grand Canyon',
        audioUrl: '/audio/grand_canyon_south_rim.mp3'
      },
      {
        position: new THREE.Vector3(-8, 1.6, -12),
        title: 'Colorado River',
        description: 'The mighty river that carved this natural wonder',
        audioUrl: '/audio/grand_canyon_river.mp3'
      }
    ]
  },
  {
    id: 'temple-heaven',
    title: 'Temple of Heaven',
    description: 'Explore the ancient Chinese temple complex in Beijing',
    imageUrl: '/panoramas/temple_heaven_1k.hdr',
    hotspots: [
      {
        position: new THREE.Vector3(0, 1.6, -12),
        title: 'Hall of Prayer',
        description: 'The iconic circular building used for ceremonies',
        audioUrl: '/audio/temple_heaven_hall.mp3'
      },
      {
        position: new THREE.Vector3(6, 1.6, -10),
        title: 'Imperial Vault',
        description: 'A smaller circular building with intricate designs',
        audioUrl: '/audio/temple_heaven_vault.mp3'
      }
    ]
  }
]; 