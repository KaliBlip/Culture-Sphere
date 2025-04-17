import { useState } from 'react';
import { ContentViewer } from '../components/ContentViewer';
import { Image, Box, Video } from 'lucide-react';

interface DemoContent {
  type: 'image' | '3d' | 'video';
  title: string;
  description: string;
  url: string;
  gallery?: string[];
}

const demoContent: DemoContent[] = [
  {
    type: 'image',
    title: 'Ancient Temple',
    description: 'A magnificent temple from the 12th century, showcasing intricate carvings and architectural brilliance.',
    url: '/images/heritage/temple.jpg',
    gallery: [
      '/images/heritage/temple.jpg',
      '/images/heritage/temple-interior.jpg',
      '/images/heritage/temple-detail.jpg'
    ]
  },
  {
    type: '3d',
    title: 'Historical Artifact',
    description: 'A 3D model of an ancient artifact, allowing for detailed examination from all angles.',
    url: '/models/ancient-artifact.glb'
  },
  {
    type: 'video',
    title: 'Cultural Performance',
    description: 'A traditional dance performance showcasing the rich cultural heritage of the region.',
    url: '/videos/cultural-performance.mp4'
  }
];

export function ContentViewerDemo() {
  const [selectedContent, setSelectedContent] = useState<DemoContent | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Content Viewer Demo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoContent.map((content) => (
            <div
              key={content.title}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedContent(content)}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {content.type === 'image' && <Image className="h-12 w-12 text-gray-400" />}
                {content.type === '3d' && <Box className="h-12 w-12 text-gray-400" />}
                {content.type === 'video' && <Video className="h-12 w-12 text-gray-400" />}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h2>
                <p className="text-gray-600 line-clamp-2">{content.description}</p>
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