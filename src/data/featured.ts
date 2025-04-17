import { FeaturedCollection } from '../types';

export const featuredCollections: FeaturedCollection[] = [
  {
    id: '1',
    title: 'Ancient Wonders',
    description: 'Explore remarkable archaeological sites that have stood the test of time.',
    sites: [
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
      }
    ]
  },
  {
    id: '2',
    title: 'Living Traditions',
    description: 'Discover vibrant cultural practices that continue to thrive today.',
    sites: [
      {
        id: '3',
        name: 'Kyoto Tea Houses',
        location: 'Japan',
        description: 'Traditional tea houses preserving centuries-old ceremonies.',
        imageUrl: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
        category: 'Cultural Practice',
        period: 'Traditional'
      },
      {
        id: '4',
        name: 'Varanasi Ghats',
        location: 'India',
        description: 'Sacred riverfront steps embodying spiritual and cultural traditions.',
        imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
        category: 'Sacred Site',
        period: 'Contemporary'
      }
    ]
  }
];