import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundTexture } from './BackgroundTexture';

interface GalleryPageProps {
  onNavigate?: (page: string) => void;
}

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  alt: string;
  category: 'project' | 'volunteer';
}

const allGalleryImages: GalleryImage[] = [
  { src: '/assets/images/gallery/IMG_6848 (1).jpeg', title: 'A Child\'s First Sapling', description: 'A child from the partner care institution proudly holding a sapling to be planted.', alt: 'Bangalore - child holding sapling at care institution', category: 'volunteer' },
  { src: '/assets/images/gallery/5ba500c0-20f5-4eef-9a86-cf640f8f928e.jpeg', title: 'Best Out of Waste', description: 'A BuildX team member poses in a handmade upcycled photo frame during the office sustainability challenge.', alt: 'Bangalore - Best Out of Waste office activity photo frame', category: 'volunteer' },
  { src: '/assets/images/gallery/80a8156a-eff6-413a-9f25-d928e551a2c9.jpeg', title: 'Green Team Spirit', description: 'Celebrating creativity and sustainability at the Best Out of Waste office activity.', alt: 'Bangalore - Best Out of Waste office activity celebration', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_4536.jpeg', title: 'Ground Water Recharge Program', description: 'Signage for the Kalyana Vana 2 ground water recharge cum afforestation program overlooking the plantation site.', alt: 'Kalaburagi - Kalyana Vana 2 signage and landscape', category: 'project' },
  { src: '/assets/images/gallery/IMG_5712.jpeg', title: 'Watering a New Sapling', description: 'Carefully watering a newly planted sapling on the semi-arid Kalyana Vana grounds.', alt: 'Kalaburagi - watering sapling at Kalyana Vana', category: 'project' },
  { src: '/assets/images/gallery/IMG_5802.jpeg', title: 'Panel Discussion', description: 'University officials and BuildX representatives at the Kalyana Vana dedication seminar.', alt: 'Kalaburagi - panel discussion at dedication seminar', category: 'project' },
  { src: '/assets/images/gallery/IMG_1623 (1).jpeg', title: 'Team by the Lake', description: 'The BuildX team pausing for a moment by Varuna Lake during the Environmental Day plantation drive.', alt: 'Mysuru Varuna Lake - team photo by the water', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_1682 (3).jpeg', title: 'Dedicated Sapling Care', description: 'Officials and volunteers watering a newly planted sapling at the Varuna Lake Environmental Day event.', alt: 'Mysuru Varuna Lake - watering a sapling', category: 'project' },
  { src: '/assets/images/gallery/IMG_1329.jpeg', title: 'Press Coverage – Odanadi', description: 'A newspaper clipping covering the plantation and awareness drive with the Odanadi Boys Rehabilitation Centre.', alt: 'Mysuru - press clipping on Odanadi plantation event', category: 'project' },
  { src: '/assets/images/gallery/d3ecd84a597a4020bd18d8ae336220c5.jpg', title: 'Press Coverage – Environment Day', description: 'Local newspaper coverage of the Environmental Day plantation and awareness activities in Mysuru.', alt: 'Mysuru - press clipping on Environment Day event', category: 'project' },
  { src: '/assets/images/gallery/IMG_2974.jpeg', title: 'Nurturing New Growth', description: 'Hands gently watering a freshly planted sapling in the red soil.', alt: 'Community plantation drive - watering a sapling', category: 'project' },
  { src: '/assets/images/gallery/DSC_3564.JPG', title: 'Community Plantation Drive', description: 'Officials and community members gathered for a tree plantation ceremony.', alt: 'Community plantation drive - dedication ceremony', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG-20250606-WA0003.jpg', title: 'Mango Sapling Planting', description: 'A small group planting a mango sapling as part of a community greening effort.', alt: 'Community plantation drive - mango sapling planting', category: 'project' },
  { src: '/assets/images/gallery/IMG_2978.jpeg', title: 'Dedication Gathering', description: 'A community plantation ceremony bringing together officials, volunteers, and residents.', alt: 'Community plantation drive - gathering around new sapling', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_2982.jpeg', title: 'Watering the New Tree', description: 'Officials watering a newly planted sapling to mark a community greening event.', alt: 'Community plantation drive - watering new tree', category: 'project' },
  { src: '/assets/images/gallery/IMG_2986.jpeg', title: 'BuildX Team Moment', description: 'A quiet moment shared by BuildX team members during an office event.', alt: 'BuildX office - team moment', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_2994.jpeg', title: 'Recognition Moment', description: 'BuildX team members marking a special recognition at the office.', alt: 'BuildX office - recognition moment', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_2996.jpeg', title: 'Office Celebration', description: 'The BuildX team coming together to celebrate a shared milestone.', alt: 'BuildX office - team celebration', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_3016.jpeg', title: 'Careful Watering', description: 'Watering a newly planted sapling to help it take root.', alt: 'Community plantation drive - careful watering of sapling', category: 'project' },
];

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'volunteers'>('projects');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = allGalleryImages.filter((img) => img.category === 'project');
  const volunteerImages = allGalleryImages.filter((img) => img.category === 'volunteer');

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

  const renderImageCard = (image: GalleryImage, index: number) => (
    <ScrollReveal key={`${activeTab}-${index}`} delay={index * 0.05}>
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer"
        onClick={() => openLightbox(index)}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103713]/90 via-[#103713]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </ScrollReveal>
  );

  return (
    <div className="relative pt-24 bg-[#E2DBD0]">
      {/* Hero Section */}
      <section className="py-20 bg-[#E2DBD0] relative z-0 overflow-hidden">
        <BackgroundTexture variant="rangoli" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
      <section className="pb-20 bg-[#E2DBD0] relative z-0 overflow-hidden">
        <BackgroundTexture variant="rangoli" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
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

          {/* Gallery Grid — a single Masonry instance is mounted at a time (columns/gutter
              swap via JS resize listener), instead of mounting three breakpoint variants
              simultaneously, which used to make every image download three times. */}
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3 }}
            gutterBreakPoints={{ 0: '1rem', 768: '1.5rem' }}
          >
            <Masonry>
              {images.map((image, index) => renderImageCard(image, index))}
            </Masonry>
          </ResponsiveMasonry>
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-14 sm:px-16 md:px-20"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-3 text-white hover:text-[#628B35] transition-colors backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg"
              aria-label="Close lightbox"
            >
              <X size={22} className="sm:hidden" />
              <X size={28} className="hidden sm:block" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-1 sm:left-2 md:left-4 z-50 p-2 sm:p-3 md:p-4 text-white hover:text-[#628B35] transition-all backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} className="sm:hidden" />
              <ChevronLeft size={28} className="hidden sm:block" />
            </button>

            {/* Image Container with Glass Effect */}
            <motion.div
              key={currentImageIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full p-4 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full max-h-[65vh] object-contain rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-1 sm:right-2 md:right-4 z-50 p-2 sm:p-3 md:p-4 text-white hover:text-[#628B35] transition-all backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight size={22} className="sm:hidden" />
              <ChevronRight size={28} className="hidden sm:block" />
            </button>

            {/* Image Counter with Glass Effect */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
              {currentImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
