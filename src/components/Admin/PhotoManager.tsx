import React, { useState } from 'react';
import { usePhotos } from '../../hooks/usePhotos';
import { Trash2, Edit3, Star, Eye } from 'lucide-react';

const PhotoManager: React.FC = () => {
  const { galleries, deletePhoto } = usePhotos();
  const [selectedGallery, setSelectedGallery] = useState(galleries[0]?.id || '');

  const currentGallery = galleries.find(g => g.id === selectedGallery);

  const handleDeletePhoto = (photoId: string) => {
    if (confirm('Are you sure you want to delete this photo?')) {
      deletePhoto(selectedGallery, photoId);
    }
  };

  const toggleFeatured = (photoId: string) => {
    // In a real app, this would update the photo's featured status
    console.log('Toggle featured for photo:', photoId);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Manage Photos</h2>

      {/* Gallery Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Gallery to Manage
        </label>
        <select
          value={selectedGallery}
          onChange={(e) => setSelectedGallery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
        >
          {galleries.map((gallery) => (
            <option key={gallery.id} value={gallery.id}>
              {gallery.title} ({gallery.photos.length} photos)
            </option>
          ))}
        </select>
      </div>

      {/* Gallery Info */}
      {currentGallery && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {currentGallery.title}
          </h3>
          <p className="text-gray-600 mb-2">{currentGallery.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Category: {currentGallery.category}</span>
            <span>Photos: {currentGallery.photos.length}</span>
          </div>
        </div>
      )}

      {/* Photos Grid */}
      {currentGallery && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentGallery.photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 object-cover"
                />
                {photo.featured && (
                  <div className="absolute top-2 left-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-1 truncate">
                  {photo.alt}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {photo.location} • {photo.date}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  Style: {photo.style}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleFeatured(photo.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        photo.featured
                          ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                      title="Toggle featured"
                    >
                      <Star className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Edit photo"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                      title="View photo"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleDeletePhoto(photo.id)}
                    className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                    title="Delete photo"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {currentGallery && currentGallery.photos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Eye className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No photos in this gallery
          </h3>
          <p className="text-gray-600">
            Upload some photos to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoManager;