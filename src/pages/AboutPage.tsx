export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Culture Sphere</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to preserving and sharing cultural heritage through immersive virtual experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Culture Sphere aims to make cultural heritage accessible to everyone, everywhere. Through our innovative
              360° virtual tours, we bring historical sites, museums, and cultural landmarks to life, allowing people
              to explore and learn about different cultures from the comfort of their homes.
            </p>
            <p className="text-gray-600">
              We work closely with cultural institutions, historians, and local communities to create accurate and
              engaging virtual experiences that preserve and share the stories of our shared human heritage.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Technology</h2>
            <p className="text-gray-600 mb-6">
              Using cutting-edge 360° photography and virtual reality technology, we create immersive experiences
              that allow users to explore cultural sites in unprecedented detail. Our platform features:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                High-resolution 360° panoramas
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Interactive hotspots with detailed information
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Audio guides and expert commentary
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Responsive design for all devices
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600">Cultural Heritage Specialist</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-gray-600">Technical Director</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Emma Rodriguez</h3>
              <p className="text-gray-600">Content Curator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 