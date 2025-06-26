import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Gallery } from '../../types';

interface GalleryGridProps {
  galleries?: Gallery[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ galleries }) => {
  // If no galleries prop is provided, we'll use the hook inside the component
  const { galleries: defaultGalleries } = galleries ? { galleries } : require('../../hooks/usePhotos').usePhotos();
  const displayGalleries = galleries || defaultGalleries;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayGalleries.map((gallery) => (
        <Link
          key={gallery.id}
          to={`/portfolio/${gallery.id}`}
          className="group block"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src={gallery.coverImage}
              alt={gallery.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-rose-600 text-xs font-medium rounded-full">
                  {gallery.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-300 transition-colors">
                {gallery.title}
              </h3>
              <p className="text-sm text-gray-200 mb-3">{gallery.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{gallery.photos[0]?.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{gallery.photos.length} photos</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryGrid;