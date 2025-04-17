import * as THREE from 'three';
import { VirtualTour } from '../components/VirtualTour';

// Sample data for demonstration
const sampleHotspots = [
  {
    position: new THREE.Vector3(0, 1, 0),
    title: "Main Entrance",
    description: "The grand entrance to the historical site, featuring intricate carvings from the 12th century.",
    audioUrl: "/audio/entrance.mp3"
  },
  {
    position: new THREE.Vector3(2, 0.5, -1),
    title: "Central Courtyard",
    description: "The heart of the complex, where daily activities and ceremonies took place.",
    audioUrl: "/audio/courtyard.mp3"
  },
  {
    position: new THREE.Vector3(-1, 0.8, 1.5),
    title: "Ancient Artifacts",
    description: "A collection of artifacts discovered during archaeological excavations.",
    audioUrl: "/audio/artifacts.mp3"
  }
];

export function TourPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <VirtualTour
        modelUrl="/models/ancient-site.glb"
        hotspots={sampleHotspots}
        tourName="Ancient Cultural Site Tour"
        tourDescription="Explore this well-preserved historical site from the 12th century, featuring unique architectural elements and cultural artifacts."
      />
    </div>
  );
} 