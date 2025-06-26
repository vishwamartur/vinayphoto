import { useState, useEffect } from 'react';
import { Photo, Gallery } from '../types';

// Sample wedding photography data with Pexels images
const sampleGalleries: Gallery[] = [
  {
    id: 'romantic-garden',
    title: 'Romantic Garden Wedding',
    description: 'A dreamy outdoor celebration surrounded by blooming flowers',
    coverImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wedding',
    photos: [
      {
        id: '1',
        src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Bride and groom in garden setting',
        category: 'Wedding',
        location: 'Botanical Gardens, California',
        date: '2024-06-15',
        style: 'Romantic',
        featured: true
      },
      {
        id: '2',
        src: 'https://images.pexels.com/photos/1445324/pexels-photo-1445324.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Wedding ceremony outdoor',
        category: 'Wedding',
        location: 'Botanical Gardens, California',
        date: '2024-06-15',
        style: 'Romantic'
      },
      {
        id: '3',
        src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Bride portrait with flowers',
        category: 'Wedding',
        location: 'Botanical Gardens, California',
        date: '2024-06-15',
        style: 'Romantic'
      }
    ]
  },
  {
    id: 'elegant-ballroom',
    title: 'Elegant Ballroom Reception',
    description: 'Sophisticated indoor celebration with timeless elegance',
    coverImage: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wedding',
    photos: [
      {
        id: '4',
        src: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Elegant ballroom reception',
        category: 'Wedding',
        location: 'Grand Hotel, New York',
        date: '2024-05-20',
        style: 'Classic',
        featured: true
      },
      {
        id: '5',
        src: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Wedding table decorations',
        category: 'Wedding',
        location: 'Grand Hotel, New York',
        date: '2024-05-20',
        style: 'Classic'
      },
      {
        id: '6',
        src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'First dance moment',
        category: 'Wedding',
        location: 'Grand Hotel, New York',
        date: '2024-05-20',
        style: 'Classic'
      }
    ]
  },
  {
    id: 'beach-sunset',
    title: 'Beach Sunset Ceremony',
    description: 'Intimate beachside wedding with golden hour magic',
    coverImage: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wedding',
    photos: [
      {
        id: '7',
        src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Beach wedding ceremony at sunset',
        category: 'Wedding',
        location: 'Malibu Beach, California',
        date: '2024-07-08',
        style: 'Bohemian',
        featured: true
      },
      {
        id: '8',
        src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Couple walking on beach',
        category: 'Wedding',
        location: 'Malibu Beach, California',
        date: '2024-07-08',
        style: 'Bohemian'
      }
    ]
  },
  {
    id: 'engagement-session',
    title: 'Romantic Engagement Session',
    description: 'Beautiful couple portraits in natural settings',
    coverImage: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Engagement',
    photos: [
      {
        id: '9',
        src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Romantic engagement portrait',
        category: 'Engagement',
        location: 'Central Park, New York',
        date: '2024-04-12',
        style: 'Natural',
        featured: true
      }
    ]
  },
  {
    id: 'maternity-session',
    title: 'Beautiful Maternity Session',
    description: 'Celebrating the journey to motherhood',
    coverImage: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Maternity',
    photos: [
      {
        id: '10',
        src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Beautiful maternity portrait',
        category: 'Maternity',
        location: 'Studio, California',
        date: '2024-03-18',
        style: 'Studio',
        featured: true
      }
    ]
  }
];

export const usePhotos = () => {
  const [galleries, setGalleries] = useState<Gallery[]>(sampleGalleries);
  const [loading, setLoading] = useState(false);

  const addPhoto = (galleryId: string, photo: Omit<Photo, 'id'>) => {
    const newPhoto = { ...photo, id: Date.now().toString() };
    setGalleries(prev => 
      prev.map(gallery => 
        gallery.id === galleryId 
          ? { ...gallery, photos: [...gallery.photos, newPhoto] }
          : gallery
      )
    );
  };

  const deletePhoto = (galleryId: string, photoId: string) => {
    setGalleries(prev => 
      prev.map(gallery => 
        gallery.id === galleryId 
          ? { ...gallery, photos: gallery.photos.filter(p => p.id !== photoId) }
          : gallery
      )
    );
  };

  const getFeaturedPhotos = () => {
    return galleries.flatMap(gallery => 
      gallery.photos.filter(photo => photo.featured)
    );
  };

  const getGalleriesByCategory = (category?: string) => {
    if (!category) return galleries;
    return galleries.filter(gallery => gallery.category === category);
  };

  return {
    galleries,
    loading,
    addPhoto,
    deletePhoto,
    getFeaturedPhotos,
    getGalleriesByCategory
  };
};