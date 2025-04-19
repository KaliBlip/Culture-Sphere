import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Calendar, Clock, Award, ArrowRight } from 'lucide-react';
import '../pages/styles/HomePage.css';

export const HeritageSitesPage: React.FC = () => {
  return (
    <div className="vr-gradient min-h-screen text-white">
      {/* Hero Section */}
      <section className="vr-hero">
        <div className="vr-hero-content">
          <h1 className="vr-hero-title vr-heading">
            Heritage Sites
          </h1>
          <p className="vr-hero-subtitle vr-subheading">
            Discover and explore UNESCO World Heritage Sites from around the globe
          </p>
        </div>
      </section>

      {/* Featured Sites Section */}
      <section className="vr-section">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-8 text-center">Featured Heritage Sites</h2>
          <div className="vr-grid">
            {[
              {
                id: 'angkor-wat',
                title: 'Angkor Wat',
                location: 'Cambodia',
                year: '12th Century',
                status: 'UNESCO World Heritage',
                description: 'The largest religious monument in the world, originally constructed as a Hindu temple',
                image: '/images/heritage/angkor-wat.jpg',
                highlights: [
                  'Ancient Khmer architecture',
                  'Intricate bas-reliefs',
                  'Sunrise viewpoints',
                  'Temple complex'
                ]
              },
              {
                id: 'petra',
                title: 'Petra',
                location: 'Jordan',
                year: '312 BC',
                status: 'UNESCO World Heritage',
                description: 'The Rose City, an ancient Nabataean city carved into pink sandstone cliffs',
                image: '/images/heritage/petra.jpg',
                highlights: [
                  'The Treasury (Al-Khazneh)',
                  'The Monastery',
                  'Royal Tombs',
                  'Ancient water system'
                ]
              },
              {
                id: 'taj-mahal',
                title: 'Taj Mahal',
                location: 'India',
                year: '17th Century',
                status: 'UNESCO World Heritage',
                description: 'An ivory-white marble mausoleum, one of the New Seven Wonders of the World',
                image: '/images/heritage/taj-mahal.jpg',
                highlights: [
                  'Marble inlay work',
                  'Symmetrical gardens',
                  'Moonlight views',
                  'Mughal architecture'
                ]
              },
              {
                id: 'acropolis',
                title: 'Acropolis of Athens',
                location: 'Greece',
                year: '5th Century BC',
                status: 'UNESCO World Heritage',
                description: 'The ancient citadel containing the remains of several ancient buildings',
                image: '/images/heritage/acropolis.jpg',
                highlights: [
                  'Parthenon temple',
                  'Erechtheion',
                  'Propylaea gateway',
                  'Ancient theater'
                ]
              }
            ].map((site) => (
              <div key={site.id} className="vr-card group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={site.image} 
                    alt={site.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="vr-heading text-xl mb-2">{site.title}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-blue-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      {site.location}
                    </div>
                    <div className="flex items-center text-sm text-blue-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {site.year}
                    </div>
                    <div className="flex items-center text-sm text-blue-400">
                      <Award className="w-4 h-4 mr-1" />
                      {site.status}
                    </div>
                  </div>
                  <p className="vr-paragraph text-gray-300 mb-4">{site.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {site.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/heritage-sites/${site.id}`}
                    className="vr-button inline-flex items-center justify-center w-full"
                  >
                    Explore Site <ArrowRight className="ml-2" />
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
          <h2 className="vr-heading text-3xl mb-12 text-center">Explore by Region</h2>
          <div className="vr-grid">
            {[
              {
                icon: <Globe className="vr-icon" />,
                title: 'Asia & Pacific',
                count: '28 Sites',
                description: 'Ancient temples, palaces, and cultural landscapes'
              },
              {
                icon: <MapPin className="vr-icon" />,
                title: 'Europe & North America',
                count: '35 Sites',
                description: 'Historic cities, castles, and archaeological sites'
              },
              {
                icon: <Calendar className="vr-icon" />,
                title: 'Africa',
                count: '15 Sites',
                description: 'Ancient civilizations and natural wonders'
              },
              {
                icon: <Award className="vr-icon" />,
                title: 'Latin America',
                count: '22 Sites',
                description: 'Pre-Columbian cities and colonial heritage'
              }
            ].map((region, index) => (
              <div key={index} className="vr-feature-card">
                <div className="vr-feature-icon">
                  {region.icon}
                </div>
                <h3 className="vr-heading text-xl mb-2">{region.title}</h3>
                <p className="text-blue-400 mb-2">{region.count}</p>
                <p className="vr-paragraph text-gray-300">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="vr-section">
        <div className="vr-container text-center">
          <h2 className="vr-heading text-3xl mb-4">Start Your Journey</h2>
          <p className="vr-paragraph text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the world's most significant cultural and natural heritage sites through our immersive experiences.
          </p>
          <Link to="/explore" className="vr-button inline-flex items-center">
            Discover More <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}; 