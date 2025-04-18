import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VRVideoViewer } from '../components/VRVideoViewer';
import { getVideo, Video, testApiConnection } from '../services/pexelsVideos';
import * as THREE from 'three';
import { Hotspot } from '../types/hotspot';
import { VirtualTour } from '../components/VirtualTour';

// Sample hotspots for demonstration
const sampleHotspots: Hotspot[] = [
  {
    id: 'main-entrance',
    position: new THREE.Vector3(0, 0, -10),
    title: 'Main Entrance',
    description: 'The grand entrance to the heritage site'
  },
  {
    id: 'historical-artifact',
    position: new THREE.Vector3(10, 0, 0),
    title: 'Historical Artifact',
    description: 'A significant artifact from the site\'s history'
  },
  {
    id: 'viewpoint',
    position: new THREE.Vector3(-10, 0, 0),
    title: 'Viewpoint',
    description: 'A scenic viewpoint of the surrounding area'
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