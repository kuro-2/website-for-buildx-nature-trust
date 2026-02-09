import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import Masonry from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryPageProps {
  onNavigate?: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'volunteers'>('projects');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1656783208368-a7d176736535?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1642265466368-2a491569308a?w=600&h=500&fit=crop',
    'https://images.unsplash.com/photo-1695551407214-25a5dc6300b8?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1651349776781-7a8cf162a494?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=600&h=500&fit=crop',
    'https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=600&h=600&fit=crop',
  ];

  const volunteerImages = [
    'https://images.unsplash.com/photo-1758599668125-e154250f24bd?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556139930-c23fa4a4f934?w=600&h=500&fit=crop',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=500&fit=crop',
  ];

  const images = activeTab === 'projects' ? projectImages : volunteerImages;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="pt-24 bg-[#E2DBD0]">
      {/* Hero Section */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-center mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Gallery
            </h1>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
            <p className="text-lg text-center leading-relaxed text-[#103713]/80">
              Moments from our journey—people planting hope, communities taking action, 
              and nature reclaiming its rightful space.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-20 bg-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex justify-center gap-8 mb-12">
              <button
                onClick={() => setActiveTab('projects')}
                className={`relative pb-2 text-lg transition-colors font-medium ${
                  activeTab === 'projects' ? 'text-[#103713]' : 'text-[#628B35]/60 hover:text-[#103713]'
                }`}
              >
                Projects
                {activeTab === 'projects' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#628B35]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('volunteers')}
                className={`relative pb-2 text-lg transition-colors font-medium ${
                  activeTab === 'volunteers' ? 'text-[#103713]' : 'text-[#628B35]/60 hover:text-[#103713]'
                }`}
              >
                Volunteers
                {activeTab === 'volunteers' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#628B35]" />
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="block md:hidden">
            <Masonry columnsCount={1} gutter="1rem">
              {images.map((image, index) => (
                <ScrollReveal key={`${activeTab}-${index}`} delay={index * 0.05}>
                  <div 
                    className="group overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`${activeTab} ${index + 1}`}
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </Masonry>
          </div>
          
          <div className="hidden md:block lg:hidden">
            <Masonry columnsCount={2} gutter="1.5rem">
              {images.map((image, index) => (
                <ScrollReveal key={`${activeTab}-${index}`} delay={index * 0.05}>
                  <div 
                    className="group overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`${activeTab} ${index + 1}`}
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </Masonry>
          </div>

          <div className="hidden lg:block">
            <Masonry columnsCount={3} gutter="1.5rem">
              {images.map((image, index) => (
                <ScrollReveal key={`${activeTab}-${index}`} delay={index * 0.05}>
                  <div 
                    className="group overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`${activeTab} ${index + 1}`}
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </Masonry>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-3 text-white hover:text-[#628B35] transition-colors backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 p-4 text-white hover:text-[#628B35] transition-all backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Container with Glass Effect */}
            <motion.div
              key={currentImageIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[85vh] p-4 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIndex]}
                alt={`${activeTab} ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 p-4 text-white hover:text-[#628B35] transition-all backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Counter with Glass Effect */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium shadow-lg">
              {currentImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}