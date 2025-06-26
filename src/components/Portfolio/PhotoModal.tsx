import React from 'react';
import { X, ChevronLeft, ChevronRight, Share2, Download } from 'lucide-react';
import { Photo } from '../../types';

interface PhotoModalProps {
  photo: Photo;
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  photo,
  photos,
  isOpen,
  onClose,
  onNext,
  onPrevious
}) => {
  if (!isOpen) return null;

  const currentIndex = photos.findIndex(p => p.id === photo.id);
  const hasNext = currentIndex < photos.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: photo.alt,
          text: `Check out this beautiful wedding photo from ${photo.location}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Share failed:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Photo URL copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-rose-400 transition-colors"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Navigation */}
      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:text-rose-400 transition-colors"
        >
          <ChevronLeft className="h-12 w-12" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:text-rose-400 transition-colors"
        >
          <ChevronRight className="h-12 w-12" />
        </button>
      )}

      {/* Image */}
      <div className="max-w-7xl max-h-full p-4 flex items-center justify-center">
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Photo Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="max-w-4xl mx-auto flex items-end justify-between">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-1">{photo.style}</h3>
            <p className="text-sm text-gray-300">{photo.location} • {photo.date}</p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={handleShare}
              className="p-2 text-white hover:text-rose-400 transition-colors"
              title="Share photo"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <a
              href={photo.src}
              download
              className="p-2 text-white hover:text-rose-400 transition-colors"
              title="Download photo"
            >
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;