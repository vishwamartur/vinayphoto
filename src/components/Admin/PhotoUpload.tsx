import React, { useState, useCallback } from 'react';
import { usePhotos } from '../../hooks/usePhotos';
import { Upload, X, Plus, Image as ImageIcon } from 'lucide-react';

const PhotoUpload: React.FC = () => {
  const { galleries, addPhoto } = usePhotos();
  const [selectedGallery, setSelectedGallery] = useState('');
  const [newGalleryName, setNewGalleryName] = useState('');
  const [isCreatingGallery, setIsCreatingGallery] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    setUploadedFiles(prev => [...prev, ...files]);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (!selectedGallery || uploadedFiles.length === 0) return;

    // Simulate upload process
    for (const file of uploadedFiles) {
      const photoData = {
        src: URL.createObjectURL(file),
        alt: file.name.replace(/\.[^/.]+$/, ""),
        category: galleries.find(g => g.id === selectedGallery)?.category || 'Wedding',
        location: 'New Location',
        date: new Date().toISOString().split('T')[0],
        style: 'Modern'
      };
      
      addPhoto(selectedGallery, photoData);
    }

    setUploadedFiles([]);
    alert('Photos uploaded successfully!');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload New Photos</h2>
      
      {/* Gallery Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Gallery
        </label>
        <div className="flex items-center space-x-4">
          <select
            value={selectedGallery}
            onChange={(e) => setSelectedGallery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Choose existing gallery...</option>
            {galleries.map((gallery) => (
              <option key={gallery.id} value={gallery.id}>
                {gallery.title}
              </option>
            ))}
          </select>
          <button
            onClick={() => setIsCreatingGallery(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>New Gallery</span>
          </button>
        </div>
      </div>

      {/* New Gallery Form */}
      {isCreatingGallery && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Gallery</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Gallery name"
              value={newGalleryName}
              onChange={(e) => setNewGalleryName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  // In a real app, this would create a new gallery
                  setIsCreatingGallery(false);
                  setNewGalleryName('');
                }}
                className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setIsCreatingGallery(false);
                  setNewGalleryName('');
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* File Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver
            ? 'border-rose-400 bg-rose-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Drop your photos here, or click to browse
        </h3>
        <p className="text-gray-600 mb-4">
          Support for JPEG, PNG, and WebP files up to 10MB each
        </p>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 cursor-pointer transition-colors"
        >
          <ImageIcon className="h-4 w-4 mr-2" />
          Choose Files
        </label>
      </div>

      {/* Uploaded Files Preview */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Selected Photos ({uploadedFiles.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleUpload}
            disabled={!selectedGallery}
            className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Upload {uploadedFiles.length} Photo{uploadedFiles.length !== 1 ? 's' : ''}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;