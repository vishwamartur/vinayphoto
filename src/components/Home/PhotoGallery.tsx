import React from 'react';
import { usePhotos } from '../../hooks/usePhotos';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Camera } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const { getFeaturedPhotos } = usePhotos();
  const featuredPhotos = getFeaturedPhotos();

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-rose-600 mr-3" />
            <span className="text-lg font-medium text-rose-600 tracking-wide uppercase">
              Photo Gallery
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            The Best Photographers{' '}
            <Heart className="inline-block h-8 w-8 md:h-12 md:w-12 text-rose-500 fill-current mx-2" />
            <span className="text-rose-600">Bangalore</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing the essence of love and celebration across Bangalore's most beautiful venues. 
            From intimate ceremonies to grand celebrations, we create timeless memories that last forever.
          </p>
        </div>

        {/* Featured Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredPhotos.slice(0, 8).map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 || index === 3 ? 'h-96 md:h-full' : 'h-64'
                }`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-rose-600 text-xs font-medium rounded-full">
                    {photo.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{photo.style}</h3>
                <p className="text-sm text-gray-200">{photo.location}</p>
              </div>

              {/* Featured Badge */}
              {(index === 0 || index === 3) && (
                <div className="absolute top-4 right-4">
                  <div className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bangalore Specialties */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">
              Bangalore's Premier Wedding Photography
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specializing in capturing the rich cultural heritage and modern elegance 
              of Bangalore weddings across the city's most prestigious venues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Traditional Ceremonies</h4>
              <p className="text-gray-600 text-sm">
                Expert in capturing South Indian, North Indian, and cross-cultural wedding traditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-rose-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Venues</h4>
              <p className="text-gray-600 text-sm">
                Experienced at Bangalore's top wedding venues including palaces, resorts, and heritage sites
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-rose-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Complete Coverage</h4>
              <p className="text-gray-600 text-sm">
                From engagement shoots to reception parties, comprehensive wedding documentation
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-colors duration-300 group shadow-lg hover:shadow-xl"
          >
            View Complete Gallery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="mt-4 text-gray-600">
            Discover why couples across Bangalore choose us for their special day
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;