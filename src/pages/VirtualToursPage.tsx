import { Link } from 'react-router-dom';
import { sampleTour } from '../data/panoramaTours';
import { Globe2, Filter, Search } from 'lucide-react';

export function VirtualToursPage() {
  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'temples', name: 'Temples' },
    { id: 'museums', name: 'Museums' },
    { id: 'historical', name: 'Historical Sites' },
    { id: 'natural', name: 'Natural Heritage' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Virtual Tours</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience cultural heritage sites through immersive 360° virtual tours.
            Explore at your own pace and discover hidden details with interactive hotspots.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search virtual tours..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleTour.map((tour) => (
            <Link
              key={tour.id}
              to={`/panorama/${tour.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                <div className="h-48 bg-blue-900 relative">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe2 className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-600 font-semibold">Start Tour →</span>
                    <span className="text-sm text-gray-500">
                      {tour.hotspots.length} points of interest
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon Placeholders */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-purple-900"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                More exciting virtual tours will be available soon.
              </p>
              <span className="text-gray-400 font-semibold">Stay Tuned</span>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-green-900"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                More exciting virtual tours will be available soon.
              </p>
              <span className="text-gray-400 font-semibold">Stay Tuned</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 