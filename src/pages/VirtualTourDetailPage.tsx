import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VRVideoViewer } from '../components/VRVideoViewer';
import { getVideo, Video, testApiConnection } from '../services/pexelsVideos';
import * as THREE from 'three';

// Sample hotspots for demonstration
const sampleHotspots = [
  {
    position: new THREE.Vector3(0, 0, -10),
    title: 'Main Entrance',
    description: 'The grand entrance to the heritage site'
  },
  {
    position: new THREE.Vector3(10, 0, 0),
    title: 'Historical Artifact',
    description: 'A significant artifact from the site\'s history'
  },
  {
    position: new THREE.Vector3(-10, 0, 0),
    title: 'Viewpoint',
    description: 'A scenic viewpoint of the surrounding area'
  }
];

// Real 360° video IDs from Pexels
const VIDEO_IDS = {
  TAJ_MAHAL: 3150103,    // Drone footage of a rocky mountain
  PETRA: 4342563,        // Cave under the cliff
  MACHU_PICCHU: 6635693  // Cliff by the sea
};

export const VirtualTourDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        // Test API connection first
        const apiConnected = await testApiConnection();
        if (!apiConnected) {
          throw new Error('Failed to connect to Pexels API');
        }

        setLoading(true);
        const videoId = VIDEO_IDS[id as keyof typeof VIDEO_IDS] || VIDEO_IDS.TAJ_MAHAL;
        const videoData = await getVideo(videoId);
        setVideo(videoData);
        setError(null);
      } catch (err) {
        setError('Failed to load the virtual tour. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
        <p className="text-gray-600 text-center">{error || 'Video not found'}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <VRVideoViewer video={video} hotspots={sampleHotspots} />
    </div>
  );
}; 