import { Link } from 'react-router-dom';
import { MapPin, Filter, Search, Clock, Map } from 'lucide-react';
import { useState } from 'react';

export function HeritageSitesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Sites' },
    { id: 'unesco', name: 'UNESCO World Heritage' },
    { id: 'national', name: 'National Heritage' },
    { id: 'religious', name: 'Religious Sites' },
    { id: 'archaeological', name: 'Archaeological Sites' }
  ];

  const sites = [
    {
      id: 1,
      title: 'Ancient Temple Complex',
      location: 'Kathmandu, Nepal',
      category: 'unesco',
      description: 'A magnificent temple complex dating back to the 12th century, featuring intricate carvings and stunning architecture.',
      imageUrl: '/images/heritage/temple.jpg',
      year: '12th Century'
    },
    {
      id: 2,
      title: 'Royal Palace',
      location: 'Bhaktapur, Nepal',
      category: 'national',
      description: 'Former royal residence showcasing traditional Newari architecture and historical artifacts.',
      imageUrl: '/images/heritage/palace.jpg',
      year: '15th Century'
    },
    {
      id: 3,
      title: 'Ancient Stupa',
      location: 'Lalitpur, Nepal',
      category: 'religious',
      description: 'One of the oldest Buddhist stupas in the world, surrounded by prayer wheels and monasteries.',
      imageUrl: '/images/heritage/stupa.jpg',
      year: '3rd Century BCE'
    }
  ];

  const filteredSites = sites.filter(site => {
    const matchesSearch = site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Heritage Sites</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and explore our rich cultural heritage through these remarkable sites.
            Each location tells a unique story of our past and present.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search heritage sites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Showing {filteredSites.length} of {sites.length} sites
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => (
            <div key={site.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Map className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{site.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{site.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{site.year}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{site.description}</p>
                <Link
                  to={`/heritage-sites/${site.id}`}
                  className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}

          {filteredSites.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No heritage sites found matching your search criteria.</p>
            </div>
          )}

          {/* Coming Soon Placeholders */}
          {filteredSites.length > 0 && (
            <>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-purple-900"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                  <p className="text-gray-600 mb-4">
                    More heritage sites will be added to our collection.
                  </p>
                  <span className="text-gray-400 font-semibold">Stay Tuned</span>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-green-900"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                  <p className="text-gray-600 mb-4">
                    More heritage sites will be added to our collection.
                  </p>
                  <span className="text-gray-400 font-semibold">Stay Tuned</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 