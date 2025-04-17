import { useState } from 'react';
import { Heart, MessageSquare, Star, Share2, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ContentViewerProps {
  type: 'image' | '3d' | 'video';
  content: {
    url: string;
    title: string;
    description?: string;
  };
  gallery?: string[];
  onClose?: () => void;
}

export function ContentViewer({ type, content, gallery, onClose }: ContentViewerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  const handlePreviousImage = () => {
    if (gallery && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (gallery && currentImageIndex < gallery.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && onClose) {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      handlePreviousImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative w-full h-full max-w-7xl mx-auto p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Close viewer"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row h-full gap-4">
          {/* Media Display */}
          <div className="flex-1 flex items-center justify-center">
            {type === 'image' && (
              <img
                src={gallery ? gallery[currentImageIndex] : content.url}
                alt={content.title}
                className="max-h-full max-w-full object-contain"
              />
            )}
            {type === '3d' && (
              <div className="w-full h-full bg-gray-800 rounded-lg">
                {/* 3D Model Viewer would go here */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  3D Model Viewer Coming Soon
                </div>
              </div>
            )}
            {type === 'video' && (
              <video
                src={content.url}
                controls
                className="max-h-full max-w-full"
                aria-label={content.title}
              />
            )}
          </div>

          {/* Info Panel */}
          <div className="w-full md:w-80 bg-gray-900 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{content.title}</h2>
            {content.description && (
              <p className="text-gray-300 mb-4">{content.description}</p>
            )}

            {/* Gallery Navigation */}
            {gallery && gallery.length > 1 && (
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePreviousImage}
                  disabled={currentImageIndex === 0}
                  className="p-2 text-white hover:text-gray-300 disabled:opacity-50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <span className="text-gray-300">
                  {currentImageIndex + 1} / {gallery.length}
                </span>
                <button
                  onClick={handleNextImage}
                  disabled={currentImageIndex === gallery.length - 1}
                  className="p-2 text-white hover:text-gray-300 disabled:opacity-50"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            )}

            {/* Community Features */}
            <div className="space-y-4">
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">Rating:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="text-yellow-400 hover:text-yellow-300 focus:outline-none"
                      aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`h-5 w-5 ${
                          star <= rating ? 'fill-current' : ''
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex items-center space-x-1 ${
                    isFavorite ? 'text-red-500' : 'text-gray-300'
                  } hover:text-red-500`}
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart className="h-5 w-5" />
                  <span>Favorite</span>
                </button>
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white"
                  aria-label="View comments"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Comments</span>
                </button>
                <button
                  className="flex items-center space-x-1 text-gray-300 hover:text-white"
                  aria-label="Share content"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Comments Section */}
              {showComments && (
                <div className="mt-4">
                  <div className="space-y-4">
                    {/* Sample Comments */}
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-300">
                        "This is an amazing piece of cultural heritage!"
                      </p>
                      <p className="text-xs text-gray-400 mt-1">- User123</p>
                    </div>
                    {/* Add Comment */}
                    <div className="space-y-2">
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={3}
                      />
                      <button
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                        onClick={() => {
                          // Handle comment submission
                          setComment('');
                        }}
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 