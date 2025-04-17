import { useState } from 'react';
import { Search, MapPin, Clock, Tag, Globe } from 'lucide-react';

interface SearchFilters {
  keywords: string;
  location: string;
  timePeriod: string;
  category: string;
}

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void;
}

const timePeriods = [
  'All Periods',
  'Prehistoric',
  'Ancient',
  'Medieval',
  'Renaissance',
  'Modern',
  'Contemporary'
];

const categories = [
  'All Categories',
  'Architecture',
  'Art',
  'Archaeology',
  'Religion',
  'Traditions',
  'Language',
  'Music',
  'Dance',
  'Cuisine'
];

const locations = [
  'All Locations',
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Oceania',
  'Middle East'
];

export function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    keywords: '',
    location: 'All Locations',
    timePeriod: 'All Periods',
    category: 'All Categories'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Keywords Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by keywords..."
            value={filters.keywords}
            onChange={(e) => setFilters({ ...filters, keywords: e.target.value })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Time Period Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={filters.timePeriod}
              onChange={(e) => setFilters({ ...filters, timePeriod: e.target.value })}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
            >
              {timePeriods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Tag className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </button>
        </div>
      </form>

      {/* Active Filters Display */}
      {(filters.location !== 'All Locations' || 
        filters.timePeriod !== 'All Periods' || 
        filters.category !== 'All Categories') && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {filters.location !== 'All Locations' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                <MapPin className="h-3 w-3 mr-1" />
                {filters.location}
              </span>
            )}
            {filters.timePeriod !== 'All Periods' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                <Clock className="h-3 w-3 mr-1" />
                {filters.timePeriod}
              </span>
            )}
            {filters.category !== 'All Categories' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                <Tag className="h-3 w-3 mr-1" />
                {filters.category}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 