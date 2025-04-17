import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VRPanoramaViewer } from '../components/VRPanoramaViewer';
import { VRUI } from '../components/VRUI';
import { HotspotInfoPanel } from '../components/HotspotInfoPanel';
import { sampleTour, PanoramaLocation } from '../data/panoramaTours';
import * as THREE from 'three';

export function PanoramaTourPage() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [selectedHotspot, setSelectedHotspot] = useState<PanoramaLocation['hotspots'][0] | null>(null);
  const [isVRMode, setIsVRMode] = useState(false);

  const currentLocation = sampleTour.find(loc => loc.id === tourId) || sampleTour[0];
  const currentIndex = sampleTour.findIndex(loc => loc.id === tourId);
  const hasNext = currentIndex < sampleTour.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleHotspotClick = (hotspot: PanoramaLocation['hotspots'][0]) => {
    setSelectedHotspot(hotspot);
  };

  const handleCloseInfo = () => {
    setSelectedHotspot(null);
  };

  const handleNext = () => {
    if (hasNext) {
      navigate(`/panorama/${sampleTour[currentIndex + 1].id}`);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      navigate(`/panorama/${sampleTour[currentIndex - 1].id}`);
    }
  };

  const handleVRModeChange = (isVR: boolean) => {
    setIsVRMode(isVR);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative w-full h-screen">
        <VRPanoramaViewer
          imageUrl={currentLocation.imageUrl}
          hotspots={currentLocation.hotspots}
          onHotspotClick={handleHotspotClick}
          onVRModeChange={handleVRModeChange}
          className="w-full h-full"
        />
        
        {selectedHotspot && isVRMode ? (
          <VRUI
            position={new THREE.Vector3(0, 1.6, -2)}
            rotation={new THREE.Euler(0, 0, 0)}
            scale={0.5}
            onClose={handleCloseInfo}
          >
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">{selectedHotspot.title}</h3>
              <p className="mt-2">{selectedHotspot.description}</p>
            </div>
          </VRUI>
        ) : selectedHotspot ? (
          <HotspotInfoPanel
            hotspot={selectedHotspot}
            onClose={handleCloseInfo}
          />
        ) : null}

        {isVRMode ? (
          <VRUI
            position={new THREE.Vector3(0, 1.6, -1.5)}
            rotation={new THREE.Euler(0, 0, 0)}
            scale={0.3}
          >
            <div className="p-4 text-white">
              <h2 className="text-2xl font-bold">{currentLocation.title}</h2>
              <p className="mt-2">{currentLocation.description}</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handlePrevious}
                  disabled={!hasPrevious}
                  className={`px-4 py-2 rounded-lg ${
                    hasPrevious
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={!hasNext}
                  className={`px-4 py-2 rounded-lg ${
                    hasNext
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </VRUI>
        ) : (
          <>
            <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900">{currentLocation.title}</h2>
              <p className="text-gray-600 mt-2">{currentLocation.description}</p>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-4">
              <button
                onClick={handlePrevious}
                disabled={!hasPrevious}
                className={`px-4 py-2 rounded-lg ${
                  hasPrevious
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!hasNext}
                className={`px-4 py-2 rounded-lg ${
                  hasNext
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 