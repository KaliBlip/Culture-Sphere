import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Camera, Headphones, Share2, ArrowRight } from 'lucide-react';
import PhotoGallery from '../components/PhotoGallery';
import '../pages/styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="vr-gradient min-h-screen text-white">
      {/* Hero Section */}
      <section className="vr-hero">
        <div className="vr-hero-content">
          <h1 className="vr-hero-title vr-heading">
            Immerse Yourself in Cultural Heritage
          </h1>
          <p className="vr-hero-subtitle vr-subheading">
            Experience the world's most iconic cultural sites through immersive VR technology
          </p>
          <Link to="/explore" className="vr-button inline-flex items-center">
            Start Exploring <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Sites Section */}
      <section className="vr-section">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-8 text-center">Featured Cultural Sites</h2>
          <div className="vr-grid">
            {[
              {
                title: 'Machu Picchu',
                description: 'Ancient Incan citadel in the Andes',
                image: '/images/machu-picchu.jpg'
              },
              {
                title: 'Great Wall of China',
                description: 'Ancient defensive structure spanning thousands of miles',
                image: '/images/great-wall.jpg'
              },
              {
                title: 'Pyramids of Giza',
                description: 'Ancient Egyptian architectural marvels',
                image: '/images/pyramids.jpg'
              }
            ].map((site, index) => (
              <div key={index} className="vr-card rounded-lg overflow-hidden">
                <img src={site.image} alt={site.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="vr-heading text-xl mb-2">{site.title}</h3>
                  <p className="vr-paragraph text-gray-300">{site.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="vr-section bg-opacity-50">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-12 text-center">Why Choose Our Platform</h2>
          <div className="vr-grid">
            {[
              {
                icon: <Globe className="vr-icon" />,
                title: 'Global Access',
                description: 'Explore cultural sites from around the world without leaving home'
              },
              {
                icon: <Camera className="vr-icon" />,
                title: 'High-Quality Content',
                description: 'Experience stunning 360° views and detailed 3D models'
              },
              {
                icon: <Headphones className="vr-icon" />,
                title: 'Immersive Audio',
                description: 'Listen to authentic sounds and expert commentary'
              },
              {
                icon: <Share2 className="vr-icon" />,
                title: 'Social Sharing',
                description: 'Share your experiences with friends and family'
              }
            ].map((feature, index) => (
              <div key={index} className="vr-feature-card">
                <div className="vr-feature-icon">
                  {feature.icon}
                </div>
                <h3 className="vr-heading text-xl mb-2">{feature.title}</h3>
                <p className="vr-paragraph text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="vr-section">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-8 text-center">Featured Photos</h2>
          <PhotoGallery />
      </div>
      </section>

      {/* Call to Action */}
      <section className="vr-section">
        <div className="vr-container text-center">
          <h2 className="vr-heading text-3xl mb-4">Ready to Explore?</h2>
          <p className="vr-paragraph text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of cultural enthusiasts who are already experiencing the world's heritage in virtual reality.
          </p>
          <Link to="/signup" className="vr-button">
            Get Started
            </Link>
        </div>
      </section>
    </div>
  );
}; 

export default HomePage; 