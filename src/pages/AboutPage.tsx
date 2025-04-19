import React from 'react';
import { Globe, Users, BookOpen, Heart, Award, Shield } from 'lucide-react';
import '../pages/styles/HomePage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="vr-gradient min-h-screen text-white">
      {/* Hero Section */}
      <section className="vr-hero">
        <div className="vr-hero-content">
          <h1 className="vr-hero-title vr-heading">
            About Culture Sphere
          </h1>
          <p className="vr-hero-subtitle vr-subheading">
            Bridging the gap between cultural heritage and modern technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="vr-section">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-8 text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="vr-paragraph text-lg mb-6">
              Culture Sphere is dedicated to preserving and sharing the world's cultural heritage through immersive technology. 
              We believe that everyone should have access to these treasures, regardless of physical or geographical limitations.
            </p>
            <p className="vr-paragraph text-lg">
              Our platform combines cutting-edge VR technology with expert cultural knowledge to create authentic, 
              educational, and engaging experiences that bring history to life.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="vr-section bg-opacity-50">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-12 text-center">Our Core Values</h2>
          <div className="vr-grid">
            {[
              {
                icon: <Globe className="vr-icon" />,
                title: 'Accessibility',
                description: 'Making cultural heritage accessible to everyone, everywhere'
              },
              {
                icon: <Heart className="vr-icon" />,
                title: 'Preservation',
                description: 'Protecting and preserving cultural heritage for future generations'
              },
              {
                icon: <BookOpen className="vr-icon" />,
                title: 'Education',
                description: 'Providing accurate, engaging, and educational content'
              },
              {
                icon: <Users className="vr-icon" />,
                title: 'Community',
                description: 'Building a global community of cultural enthusiasts'
              },
              {
                icon: <Award className="vr-icon" />,
                title: 'Excellence',
                description: 'Maintaining the highest standards in content and technology'
              },
              {
                icon: <Shield className="vr-icon" />,
                title: 'Integrity',
                description: 'Ensuring ethical and respectful representation of cultures'
              }
            ].map((value, index) => (
              <div key={index} className="vr-feature-card">
                <div className="vr-feature-icon">
                  {value.icon}
                </div>
                <h3 className="vr-heading text-xl mb-2">{value.title}</h3>
                <p className="vr-paragraph text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="vr-section">
        <div className="vr-container">
          <h2 className="vr-heading text-3xl mb-8 text-center">Our Team</h2>
          <div className="vr-grid">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Cultural Heritage Director',
                bio: 'PhD in Cultural Anthropology with 15 years of experience in heritage preservation',
                image: '/images/team/sarah-chen.jpg'
              },
              {
                name: 'Michael Rodriguez',
                role: 'VR Technology Lead',
                bio: 'Expert in immersive technologies and digital preservation',
                image: '/images/team/michael-rodriguez.jpg'
              },
              {
                name: 'Aisha Patel',
                role: 'Educational Content Director',
                bio: 'Specialist in creating engaging educational experiences',
                image: '/images/team/aisha-patel.jpg'
              },
              {
                name: 'David Kim',
                role: 'Community Engagement Manager',
                bio: 'Dedicated to building and nurturing our global community',
                image: '/images/team/david-kim.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="vr-card group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="vr-heading text-xl mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-2">{member.role}</p>
                  <p className="vr-paragraph text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="vr-section">
        <div className="vr-container text-center">
          <h2 className="vr-heading text-3xl mb-4">Join Our Mission</h2>
          <p className="vr-paragraph text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our journey to preserve and share the world's cultural heritage through technology.
          </p>
          <button className="vr-button">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 