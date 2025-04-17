import { ArrowRight, Globe, Play } from 'lucide-react';
import { useState } from 'react';
import { ThreeDViewer } from './ThreeDViewer';

export function Hero() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languages = ['English', 'Español', 'Français', '中文', '日本語', 'العربية'];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Preserve and Experience
            <span className="block text-indigo-600">Global Cultural Heritage</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to democratize access to cultural heritage through immersive technology.
            Explore, learn, and contribute to preserving humanity's shared legacy.
          </p>
          
          {/* Language Selection */}
          <div className="mt-8">
            <div className="relative inline-block">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="appearance-none bg-white border border-indigo-200 rounded-full px-6 py-2 pr-10 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-600" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Start Exploring
            </button>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold border border-indigo-200 hover:bg-indigo-50 transition-colors flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* 3D Preview Section */}
          <div className="mt-16 relative">
            <div className="aspect-w-16 aspect-h-9 bg-indigo-50 rounded-2xl overflow-hidden shadow-xl">
              <ThreeDViewer className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}