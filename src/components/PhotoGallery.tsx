import React from 'react';
import PexelsPhotoGallery from './PexelsPhotoGallery';
import '../styles/VRGallery.css';

const PhotoGallery: React.FC = () => {
  return (
    <div className="vr-gallery">
      <PexelsPhotoGallery 
        query="cultural heritage site" 
        perPage={8}
        className="vr-gallery-grid"
      />
    </div>
  );
};

export default PhotoGallery; 