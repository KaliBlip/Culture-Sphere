import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Globe, Camera, Users, MapPin, Calendar, Star, ArrowRight } from 'lucide-react';
import { PexelsPhotoGallery } from '../components/PexelsPhotoGallery';

export const HomePage: React.FC = () => {
  const featuredSites = [
    {
      id: 1,
      title: "Taj Mahal",
      location: "Agra, India",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
      category: "UNESCO World Heritage"
    },
    {
      id: 2,
      title: "Petra",
      location: "Ma'an, Jordan",
      image: "https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800",
      category: "World Wonder"
    },
    {
      id: 3,
      title: "Machu Picchu",
      location: "Cusco, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
      category: "Archaeological Site"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Explore Cultural Heritage
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Discover and experience the world's most fascinating cultural sites through immersive virtual tours
          </p>
          <Link
            to="/heritage-sites"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Start Exploring
          </Link>
        </div>
      </div>

      {/* Featured Photos Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Cultural Sites
        </h2>
        <PexelsPhotoGallery query="cultural heritage site" perPage={8} />
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Global Access</h3>
              <p className="text-gray-600">
                Explore cultural sites from around the world without leaving your home
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Interactive Tours</h3>
              <p className="text-gray-600">
                Navigate through sites with interactive hotspots and audio guides
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">VR Ready</h3>
              <p className="text-gray-600">
                Experience sites in virtual reality for an immersive journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience Heritage Like Never Before</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Immerse yourself in cultural heritage through our interactive platform</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Virtual Tours Feature */}
            <div className="relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
              <div className="absolute top-6 right-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                Virtual Tours
              </h3>
              <p className="mt-2 text-gray-600">
                Explore cultural sites through immersive 360° virtual tours
              </p>
            </div>

            {/* Heritage Sites Feature */}
            <div className="relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
              <div className="absolute top-6 right-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                Heritage Sites
              </h3>
              <p className="mt-2 text-gray-600">
                Discover historical landmarks and cultural monuments
              </p>
            </div>

            {/* Interactive Content Feature */}
            <div className="relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
              <div className="absolute top-6 right-6">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                Interactive Content
              </h3>
              <p className="mt-2 text-gray-600">
                Engage with multimedia content and virtual exhibits
              </p>
            </div>

            {/* Community Feature */}
            <div className="relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
              <div className="absolute top-6 right-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                Community
              </h3>
              <p className="mt-2 text-gray-600">
                Connect with heritage enthusiasts and share experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sites Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Heritage Sites</h2>
              <p className="text-lg text-gray-600">Explore some of the world's most remarkable cultural sites</p>
            </div>
            <Link
              to="/heritage-sites"
              className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Sites
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSites.map((site) => (
              <div key={site.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48 sm:h-64">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      {site.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{site.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{site.location}</span>
                  </div>
                  <Link
                    to={`/heritage-sites/${site.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Explore Site
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/heritage-sites"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              View All Sites
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Cultural Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of heritage enthusiasts and start exploring cultural sites from around the world
            </p>
            <Link
              to="/virtual-tours"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Begin Your Adventure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}; 