import { useInView } from 'react-intersection-observer';
import { CulturalSite } from '../types';

interface SiteCardProps {
  site: CulturalSite;
  delay: number;
}

function SiteCard({ site, delay }: SiteCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={site.imageUrl}
          alt={site.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{site.name}</h3>
            <p className="text-sm text-gray-600">{site.location}</p>
          </div>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
            {site.category}
          </span>
        </div>
        <p className="mt-4 text-gray-600">{site.description}</p>
      </div>
    </div>
  );
}

export function FeaturedSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Heritage Sites</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover remarkable cultural sites from around the world
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: '1',
              name: 'Petra',
              location: 'Jordan',
              description: 'Ancient city carved into rose-colored rock faces, revealing architectural mastery.',
              imageUrl: 'https://images.unsplash.com/photo-1563177978-4c5ebf35c1fd',
              category: 'Archaeological Site',
              period: 'Ancient'
            },
            {
              id: '2',
              name: 'Angkor Wat',
              location: 'Cambodia',
              description: 'Magnificent temple complex showcasing classical Khmer architecture.',
              imageUrl: 'https://images.unsplash.com/photo-1600639564503-c57dbc5b4fa1',
              category: 'Temple',
              period: 'Medieval'
            },
            {
              id: '3',
              name: 'Kyoto Tea Houses',
              location: 'Japan',
              description: 'Traditional tea houses preserving centuries-old ceremonies.',
              imageUrl: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
              category: 'Cultural Practice',
              period: 'Traditional'
            }
          ].map((site, index) => (
            <SiteCard key={site.id} site={site} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}