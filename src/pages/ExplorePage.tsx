import { useState } from 'react';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { Globe2, Map, Calendar, Camera, BookOpen } from 'lucide-react';

interface SearchResult {
  id: number;
  type: 'site' | 'artifact' | 'period';
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  timePeriod: string;
  category: string;
}

export function ExplorePage() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // This would typically come from an API
  const sampleResults: SearchResult[] = [
    {
      id: 1,
      type: 'site',
      title: 'Ancient Temple Complex',
      description: 'A magnificent temple complex dating back to the 12th century.',
      imageUrl: '/images/heritage/temple.jpg',
      location: 'Asia',
      timePeriod: 'Medieval',
      category: 'Architecture'
    },
    {
      id: 2,
      type: 'artifact',
      title: 'Bronze Age Vase',
      description: 'Exquisitely crafted pottery from the Bronze Age.',
      imageUrl: '/images/artifacts/vase.jpg',
      location: 'Europe',
      timePeriod: 'Ancient',
      category: 'Art'
    },
    {
      id: 3,
      type: 'period',
      title: 'Renaissance Era',
      description: 'A period of cultural rebirth and artistic innovation.',
      imageUrl: '/images/periods/renaissance.jpg',
      location: 'Europe',
      timePeriod: 'Renaissance',
      category: 'Art'
    }
  ];

  const handleSearch = (filters: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(sampleResults);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Cultural Heritage</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cultural sites, artifacts, and historical periods from around the world.
            Use our advanced search to find exactly what you're looking for.
          </p>
        </div>

        <div className="mb-12">
          <AdvancedSearch onSearch={handleSearch} />
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((result) => (
              <div key={result.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-800 relative">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {result.type === 'site' && <Globe2 className="h-12 w-12 text-white" />}
                    {result.type === 'artifact' && <Camera className="h-12 w-12 text-white" />}
                    {result.type === 'period' && <Calendar className="h-12 w-12 text-white" />}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{result.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Map className="h-4 w-4 mr-1" />
                    <span>{result.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{result.timePeriod}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{result.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{result.description}</p>
                  <button className="text-indigo-600 font-semibold hover:text-indigo-800">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No results found. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 