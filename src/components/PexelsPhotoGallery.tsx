import React, { useState, useEffect } from 'react';
import { searchPhotos, Photo } from '../services/pexels';

interface PexelsPhotoGalleryProps {
  query?: string;
  perPage?: number;
}

export const PexelsPhotoGallery: React.FC<PexelsPhotoGalleryProps> = ({ 
  query = 'heritage', 
  perPage = 12 
}) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await searchPhotos(query, 1, perPage);
        setPhotos(response.photos);
        setError(null);
      } catch (err) {
        setError('Failed to load photos. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query, perPage]);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo) => (
        <div key={photo.id} className="relative group">
          <img
            src={photo.src.medium}
            alt={photo.alt}
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-medium">Photo by</p>
              <a
                href={photo.photographer_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                {photo.photographer}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 