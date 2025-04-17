import { useState } from 'react';
import { ThreeDViewer } from './ThreeDViewer';
import { HotspotInfoPanel } from './HotspotInfoPanel';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';

interface Hotspot {
  position: THREE.Vector3;
  title: string;
  description: string;
  audioUrl?: string;
}

interface VirtualTourProps {
  modelUrl: string;
  hotspots: Hotspot[];
  tourName: string;
  tourDescription: string;
}

export function VirtualTour({ modelUrl, hotspots, tourName, tourDescription }: VirtualTourProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentHotspotIndex, setCurrentHotspotIndex] = useState(0);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setSelectedHotspot(hotspot);
    setIsPlaying(false);
  };

  const handleCloseInfo = () => {
    setSelectedHotspot(null);
    setIsPlaying(false);
  };

  const handleNextHotspot = () => {
    setCurrentHotspotIndex((prev) => (prev + 1) % hotspots.length);
    setSelectedHotspot(hotspots[(currentHotspotIndex + 1) % hotspots.length]);
  };

  const handlePreviousHotspot = () => {
    setCurrentHotspotIndex((prev) => (prev - 1 + hotspots.length) % hotspots.length);
    setSelectedHotspot(hotspots[(currentHotspotIndex - 1 + hotspots.length) % hotspots.length]);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900">{tourName}</h2>
        <p className="text-gray-600 mt-2">{tourDescription}</p>
      </div>

      <ThreeDViewer
        modelUrl={modelUrl}
        hotspots={hotspots}
        onHotspotClick={handleHotspotClick}
        className="w-full h-full"
      />

      {selectedHotspot && (
        <HotspotInfoPanel
          hotspot={selectedHotspot}
          onClose={handleCloseInfo}
        />
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white bg-opacity-90 rounded-full px-4 py-2 shadow-lg">
        <button
          onClick={handlePreviousHotspot}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={handlePlayPause}
          className="p-2 text-indigo-600 hover:text-indigo-700"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>
        
        <button
          onClick={handleNextHotspot}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
} 