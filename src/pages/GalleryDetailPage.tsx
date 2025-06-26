import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePhotos } from '../hooks/usePhotos';
import PhotoModal from '../components/Portfolio/PhotoModal';
import { ArrowLeft, Calendar, MapPin, Camera } from 'lucide-react';
import { Photo } from '../types';

const GalleryDetailPage: React.FC = () => {
  const { galleryId } = useParams<{ galleryId: string }>();
  const { galleries } = usePhotos();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gallery = galleries.find(g => g.id === galleryId);

  if (!gallery) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Gallery not found</h1>
          <Link to="/portfolio" className="text-rose-600 hover:text-rose-700">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto) {
      const currentIndex = gallery.photos.findIndex(p => p.id === selectedPhoto.id);
      const nextIndex = (currentIndex + 1) % gallery.photos.length;
      setSelectedPhoto(gallery.photos[nextIndex]);
    }
  };

  const previousPhoto = () => {
    if (selectedPhoto) {
      const currentIndex = gallery.photos.findIndex(p => p.id === selectedPhoto.id);
      const prevIndex = currentIndex === 0 ? gallery.photos.length - 1 : currentIndex - 1;
      setSelectedPhoto(gallery.photos[prevIndex]);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <Link
          to="/portfolio"
          className="inline-flex items-center text-gray-600 hover:text-rose-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Link>

        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            {gallery.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            {gallery.description}
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{gallery.photos[0]?.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{gallery.photos[0]?.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Camera className="h-4 w-4" />
              <span>{gallery.photos.length} Photos</span>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.photos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          photos={gallery.photos}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={nextPhoto}
          onPrevious={previousPhoto}
        />
      )}
    </div>
  );
};

export default GalleryDetailPage;