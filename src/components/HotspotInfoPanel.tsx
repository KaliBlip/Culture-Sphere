import { X, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface HotspotInfoPanelProps {
  hotspot: {
    title: string;
    description: string;
    audioUrl?: string;
  };
  onClose: () => void;
}

export function HotspotInfoPanel({ hotspot, onClose }: HotspotInfoPanelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (hotspot.audioUrl) {
      audioRef.current = new Audio(hotspot.audioUrl);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [hotspot.audioUrl]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-lg shadow-xl p-4 z-50">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{hotspot.title}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <p className="text-gray-600 mb-4">{hotspot.description}</p>
      
      {hotspot.audioUrl && (
        <button
          onClick={toggleAudio}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
        >
          {isPlaying ? (
            <>
              <Volume2 className="h-5 w-5" />
              <span>Pause Audio</span>
            </>
          ) : (
            <>
              <VolumeX className="h-5 w-5" />
              <span>Play Audio</span>
            </>
          )}
        </button>
      )}
    </div>
  );
} 