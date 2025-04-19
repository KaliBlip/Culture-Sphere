import React, { useState, useEffect } from 'react';
import { searchPhotos, Photo } from '../services/pexels';

interface PexelsPhotoGalleryProps {
  query: string;
  perPage: number;
  className?: string;
}

const PexelsPhotoGallery: React.FC<PexelsPhotoGalleryProps> = ({ query, perPage, className }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('PexelsPhotoGallery mounted');
    console.log('API Key:', import.meta.env.VITE_PEXELS_API_KEY ? 'Present' : 'Missing');
    
    const fetchPhotos = async () => {
      try {
        console.log('Fetching photos...');
        setLoading(true);
        const response = await searchPhotos(query, 1, perPage);
        console.log('Photos fetched:', response.photos.length);
        setPhotos(response.photos);
        setError(null);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError('Failed to load photos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query, perPage]);

  console.log('Current state:', { loading, error, photosCount: photos.length });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">
        No photos found
      </div>
    );
  }

  return (
    <div className={className}>
      {photos.map((photo) => (
        <div key={photo.id} className="vr-gallery-item">
          <img 
            src={photo.src.medium} 
            alt={photo.alt}
            className="vr-gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default PexelsPhotoGallery; 