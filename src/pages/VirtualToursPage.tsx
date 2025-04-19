import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import '../pages/styles/HomePage.css';

export const VirtualToursPage: React.FC = () => {
  return (
    <div className="vr-gradient min-h-screen text-white">
      {/* Hero Section */}
      <section className="vr-hero">
        <div className="vr-hero-content">
          <h1 className="vr-hero-title vr-heading">
            Virtual Tours
          </h1>
          <p className="vr-hero-subtitle vr-subheading">
            Explore the world's most iconic cultural sites in immersive 360° virtual reality
          </p>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="vr-section">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-8 text-center">Featured Virtual Tours</h2>
          <div className="vr-grid">
            {[
              {
                id: 'machu-picchu',
                title: 'Machu Picchu',
                location: 'Peru',
                duration: '45 min',
                visitors: '2.5M+',
                description: 'Explore the ancient Incan citadel nestled in the Andes Mountains',
                image: '/images/tours/machu-picchu.jpg',
                features: [
                  '360° panoramic views',
                  'Expert audio guide',
                  'Interactive hotspots',
                  'Historical reconstructions'
                ]
              },
              {
                id: 'great-wall',
                title: 'Great Wall of China',
                location: 'China',
                duration: '60 min',
                visitors: '3.2M+',
                description: 'Walk along the world\'s longest man-made structure',
                image: '/images/tours/great-wall.jpg',
                features: [
                  'Multiple viewpoints',
                  'Time-lapse views',
                  'Cultural insights',
                  'Seasonal variations'
                ]
              },
              {
                id: 'pyramids',
                title: 'Pyramids of Giza',
                location: 'Egypt',
                duration: '50 min',
                visitors: '1.8M+',
                description: 'Discover the ancient wonders of Egyptian civilization',
                image: '/images/tours/pyramids.jpg',
                features: [
                  'Inside pyramid views',
                  'Archaeological details',
                  'Historical context',
                  'Night-time experience'
                ]
              },
              {
                id: 'colosseum',
                title: 'Roman Colosseum',
                location: 'Italy',
                duration: '40 min',
                visitors: '2.1M+',
                description: 'Step into the world\'s largest ancient amphitheater',
                image: '/images/tours/colosseum.jpg',
                features: [
                  'Gladiator arena view',
                  'Underground chambers',
                  'Historical reenactments',
                  'Architectural details'
                ]
              }
            ].map((tour) => (
              <div key={tour.id} className="vr-card group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="vr-heading text-xl mb-2">{tour.title}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-blue-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-sm text-blue-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-blue-400">
                      <Users className="w-4 h-4 mr-1" />
                      {tour.visitors}
                    </div>
                  </div>
                  <p className="vr-paragraph text-gray-300 mb-4">{tour.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {tour.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/virtual-tours/${tour.id}`}
                    className="vr-button inline-flex items-center justify-center w-full"
                  >
                    Start Tour <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="vr-section bg-opacity-50">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-12 text-center">Explore by Category</h2>
          <div className="vr-grid">
            {[
              {
                icon: <Globe className="vr-icon" />,
                title: 'Ancient Wonders',
                count: '12 Tours',
                description: 'Explore the world\'s most iconic ancient sites'
              },
              {
                icon: <MapPin className="vr-icon" />,
                title: 'World Heritage',
                count: '24 Tours',
                description: 'Discover UNESCO World Heritage sites'
              },
              {
                icon: <Clock className="vr-icon" />,
                title: 'Historical Periods',
                count: '8 Collections',
                description: 'Journey through different historical eras'
              },
              {
                icon: <Users className="vr-icon" />,
                title: 'Cultural Experiences',
                count: '15 Tours',
                description: 'Immerse yourself in diverse cultures'
              }
            ].map((category, index) => (
              <div key={index} className="vr-feature-card">
                <div className="vr-feature-icon">
                  {category.icon}
                </div>
                <h3 className="vr-heading text-xl mb-2">{category.title}</h3>
                <p className="text-blue-400 mb-2">{category.count}</p>
                <p className="vr-paragraph text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="vr-section">
        <div className="vr-container text-center">
          <h2 className="vr-heading text-3xl mb-4">Ready to Explore?</h2>
          <p className="vr-paragraph text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey through time and culture with our immersive virtual tours.
          </p>
          <Link to="/explore" className="vr-button inline-flex items-center">
            Browse All Tours <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}; 