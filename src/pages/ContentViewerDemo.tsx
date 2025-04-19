import { useState } from 'react';
import { ContentViewer } from '../components/ContentViewer';
import { Image, Box, Video, ChevronRight, Play, Globe, Award } from 'lucide-react';
import '../pages/styles/HomePage.css';

interface DemoContent {
  type: 'image' | '3d' | 'video';
  title: string;
  description: string;
  url: string;
  gallery?: string[];
  location?: string;
  year?: string;
  status?: string;
}

const demoContent: DemoContent[] = [
  {
    type: 'image',
    title: 'Angkor Wat Temple',
    description: 'A magnificent temple complex from the 12th century, showcasing intricate carvings and architectural brilliance of the Khmer Empire.',
    url: '/images/heritage/angkor-wat.jpg',
    gallery: [
      '/images/heritage/angkor-wat.jpg',
      '/images/heritage/angkor-wat-interior.jpg',
      '/images/heritage/angkor-wat-detail.jpg'
    ],
    location: 'Siem Reap, Cambodia',
    year: '12th Century',
    status: 'UNESCO World Heritage Site'
  },
  {
    type: '3d',
    title: 'Terracotta Warriors',
    description: 'A detailed 3D model of the famous Terracotta Army, allowing for close examination of these ancient Chinese sculptures.',
    url: '/models/terracotta-warrior.glb',
    location: 'Xi\'an, China',
    year: '3rd Century BCE',
    status: 'UNESCO World Heritage Site'
  },
  {
    type: 'video',
    title: 'Traditional Japanese Tea Ceremony',
    description: 'An immersive video showcasing the ancient art of Japanese tea ceremony, highlighting its cultural significance and intricate rituals.',
    url: '/videos/tea-ceremony.mp4',
    location: 'Kyoto, Japan',
    year: '16th Century',
    status: 'Intangible Cultural Heritage'
  }
];

export function ContentViewerDemo() {
  const [selectedContent, setSelectedContent] = useState<DemoContent | null>(null);
  const [hoveredContent, setHoveredContent] = useState<string | null>(null);

  return (
    <div className="vr-gradient min-h-screen text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="vr-heading text-4xl mb-4">Cultural Heritage Explorer</h1>
          <p className="vr-subheading text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the world's cultural treasures through immersive content and interactive exploration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demoContent.map((content) => (
            <div
              key={content.title}
              className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredContent === content.title ? 'ring-4 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedContent(content)}
              onMouseEnter={() => setHoveredContent(content.title)}
              onMouseLeave={() => setHoveredContent(null)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="h-64 bg-gray-800/50 flex items-center justify-center">
                  {content.type === 'image' && <Image className="h-20 w-20 text-blue-400" />}
                  {content.type === '3d' && <Box className="h-20 w-20 text-blue-400" />}
                  {content.type === 'video' && <Play className="h-20 w-20 text-blue-400" />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-blue-400">{content.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-blue-400">{content.status}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="vr-heading text-xl mb-2">{content.title}</h2>
                <p className="text-gray-300 line-clamp-2 mb-4">{content.description}</p>
                <div className="flex items-center text-blue-400">
                  <span className="text-sm">Explore Content</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedContent && (
          <ContentViewer
            type={selectedContent.type}
            content={{
              url: selectedContent.url,
              title: selectedContent.title,
              description: selectedContent.description
            }}
            gallery={selectedContent.gallery}
            onClose={() => setSelectedContent(null)}
          />
        )}
      </div>
    </div>
  );
} 