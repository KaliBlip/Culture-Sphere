import { useState } from 'react';
import { Camera, Info, Map, Navigation } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Viewpoint {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const viewpoints: Viewpoint[] = [
  {
    id: '1',
    name: 'Great Hall',
    description: 'The central ceremonial space featuring intricate stone carvings and astronomical alignments.',
    imageUrl: 'https://images.unsplash.com/photo-1563177978-4c5ebf35c1fd'
  },
  {
    id: '2',
    name: 'Treasury',
    description: 'Famous rock-cut facade that served as a royal tomb and later a temple.',
    imageUrl: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be'
  },
  {
    id: '3',
    name: 'Monastery',
    description: 'Massive monastery carved high in the mountains, showing advanced architectural techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3'
  }
];

export function VirtualTourSection() {
  const [selectedViewpoint, setSelectedViewpoint] = useState<Viewpoint>(viewpoints[0]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Virtual Tour Experience</h2>
          <p className="mt-4 text-xl text-gray-300">
            Explore the ancient city of Petra through our interactive 3D tour
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Viewer */}
          <div className="lg:col-span-2 bg-gray-800 rounded-xl overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={selectedViewpoint.imageUrl}
                alt={selectedViewpoint.name}
                className="w-full h-full object-cover"
              />
              {/* Controls Overlay */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
                  <Navigation className="h-5 w-5" />
                </button>
                <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
                  <Map className="h-5 w-5" />
                </button>
                <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
                  <Camera className="h-5 w-5" />
                </button>
              </div>
              {/* Info Overlay */}
              <div className="absolute bottom-4 left-4 max-w-md bg-black/50 text-white p-4 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{selectedViewpoint.name}</h3>
                    <p className="text-sm text-gray-300">{selectedViewpoint.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Viewpoints List */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Viewpoints</h3>
            <div className="space-y-4">
              {viewpoints.map((viewpoint) => (
                <button
                  key={viewpoint.id}
                  onClick={() => setSelectedViewpoint(viewpoint)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    selectedViewpoint.id === viewpoint.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <h4 className="font-medium">{viewpoint.name}</h4>
                  <p className="text-sm mt-1 line-clamp-2">
                    {viewpoint.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}