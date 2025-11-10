import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useKey } from 'react-use';
import Masonry from 'react-masonry-css';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Category, Photo } from '../types';
import { photos, categories } from '../data/photos';

const categoryLabels: Record<Category, string> = {
  'all': 'Toutes',
  'portrait': 'Portrait',
  'paysage': 'Paysage',
  'architecture': 'Architecture',
  'street': 'Street',
  'corporate': 'Corporate'
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('all');
  const [selectedPhoto, setSelectedPhoto] = React.useState<Photo | null>(null);

  // Get the base URL from Vite's environment (e.g., '/portfolio-photo-site/' for GitHub Pages)
  const baseUrl = import.meta.env.BASE_URL;

  const filteredPhotos = React.useMemo(() => {
    const photosToFilter = selectedCategory === 'all'
      ? photos
      : photos.filter(photo => photo.category === selectedCategory);
    
    // Prepend base URL to all photo URLs
    return photosToFilter.map(photo => ({
      ...photo,
      url: `${baseUrl}${photo.url.startsWith('/') ? photo.url.slice(1) : photo.url}`
    }));
  }, [selectedCategory, baseUrl]);

  const currentIndex = selectedPhoto ? filteredPhotos.findIndex(p => p.id === selectedPhoto.id) : -1;

  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  useKey('ArrowRight', () => navigatePhoto('next'));
  useKey('ArrowLeft', () => navigatePhoto('prev'));
  useKey('Escape', () => setSelectedPhoto(null));

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center space-x-4 mb-8"
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-black text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </motion.div>

      {/* Photo Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredPhotos.map(photo => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => setSelectedPhoto(photo)}
              />
            ))}
          </Masonry>
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigatePhoto('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigatePhoto('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-5xl mx-auto p-4">
              <motion.img
                key={selectedPhoto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
                style={{ objectFit: 'contain' }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-white text-center"
              >
                <h3 className="text-2xl font-semibold">{selectedPhoto.title}</h3>
                <p className="mt-2 text-gray-300">{selectedPhoto.description}</p>
                <div className="mt-4 text-sm text-gray-400 space-y-1">
                  <p>{selectedPhoto.metadata.camera} | {selectedPhoto.metadata.lens}</p>
                  <p>{selectedPhoto.metadata.settings}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PhotoCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    setImageLoaded(false);
  }, [photo.id]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-4 group cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse" />
        )}
        <img
          src={photo.url}
          alt={photo.title}
          className={`w-full h-auto rounded-lg transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ pointerEvents: 'none' }}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100">
          <div className="text-white">
            <h3 className="text-lg font-semibold">{photo.title}</h3>
            <p className="text-sm text-gray-200">{photo.metadata.camera}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}