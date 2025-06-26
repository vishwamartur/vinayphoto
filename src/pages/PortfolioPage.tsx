import React, { useState } from 'react';
import GalleryGrid from '../components/Portfolio/GalleryGrid';
import { usePhotos } from '../hooks/usePhotos';

const PortfolioPage: React.FC = () => {
  const { getGalleriesByCategory } = usePhotos();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'Wedding', name: 'Weddings' },
    { id: 'Engagement', name: 'Engagements' },
    { id: 'Maternity', name: 'Maternity' },
    { id: 'Baby', name: 'Baby & Newborn' },
    { id: 'Birthday', name: 'Celebrations' }
  ];

  const filteredGalleries = selectedCategory === 'all' 
    ? getGalleriesByCategory() 
    : getGalleriesByCategory(selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Photography Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each session tells a unique story. Browse through our curated collection 
            of galleries, capturing the magic, emotion, and beauty of life's most 
            precious moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-rose-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <GalleryGrid galleries={filteredGalleries} />
      </div>
    </div>
  );
};

export default PortfolioPage;