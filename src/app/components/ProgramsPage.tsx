import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sprout, Droplets, Recycle, Users, BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CityGalleryProps {
  cityName: string;
  images: string[];
}

function CityGallery({ cityName, images }: CityGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#d1c7bc] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-[#FFFDF5] hover:bg-[#FAFAFA] transition-colors"
      >
        <span className="text-lg text-[#103713]">{cityName}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-[#628B35]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-[#FFFDF5]">
              {images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden group">
                  <img
                    src={image}
                    alt={`${cityName} project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ProgramsPageProps {
  onNavigate?: (page: string) => void;
}

export function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  const bangaloreImages = [
    'https://images.unsplash.com/photo-1695551407214-25a5dc6300b8?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1656783208368-a7d176736535?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1642265466368-2a491569308a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1758599668125-e154250f24bd?w=400&h=400&fit=crop',
  ];

  const gularbaImages = [
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1656783208368-a7d176736535?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1642265466368-2a491569308a?w=400&h=400&fit=crop',
  ];

  const mysuruImages = [
    'https://images.unsplash.com/photo-1651349776781-7a8cf162a494?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1656783208368-a7d176736535?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1642265466368-2a491569308a?w=400&h=400&fit=crop',
  ];

  const focusAreas = [
    {
      icon: <Sprout size={40} strokeWidth={1.5} />,
      title: 'Plantation',
      description: 'Strategic tree planting initiatives to restore green cover and combat climate change.',
    },
    {
      icon: <Droplets size={40} strokeWidth={1.5} />,
      title: 'Soil and Water Care',
      description: 'Conservation programs to protect soil health and water resources for future generations.',
    },
    {
      icon: <Recycle size={40} strokeWidth={1.5} />,
      title: 'Interior Waste Management',
      description: 'Sustainable waste solutions for buildings and communities.',
    },
    {
      icon: <Users size={40} strokeWidth={1.5} />,
      title: 'Community Action',
      description: 'Empowering local communities to take ownership of environmental initiatives.',
    },
    {
      icon: <BookOpen size={40} strokeWidth={1.5} />,
      title: 'Knowledge & Awareness',
      description: 'Educational programs to build environmental consciousness and informed action.',
    },
  ];

  return (
    <div className="pt-24 bg-[#E2DBD0]">
      {/* Hero Section */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-center mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Our Programs
            </h1>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
            <p className="text-lg text-center leading-relaxed text-[#103713]/80">
              Through targeted initiatives and community partnerships, we're creating lasting environmental impact across multiple cities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tree Plantation Program */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Tree Plantation
            </h2>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
            <p className="text-center text-[#103713]/70 mb-16 max-w-3xl mx-auto">
              Our tree plantation drives are creating urban forests across Karnataka, improving air quality 
              and providing green spaces for communities to thrive.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <CityGallery cityName="Bangalore" images={bangaloreImages} />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <CityGallery cityName="Gulbarga" images={gularbaImages} />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <CityGallery cityName="Mysuru" images={mysuruImages} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Waste Management */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Waste Management
            </h2>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-8" />
            <div className="inline-block px-8 py-16 border-2 border-[#d1c7bc] bg-[#FFFDF5]">
              <p className="text-xl text-[#628B35]">In Process</p>
              <p className="text-sm text-[#103713]/70 mt-4">
                We're developing comprehensive waste management solutions. Stay tuned.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Our Focus
            </h2>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 0.1}>
                <div className="p-8 bg-[#FFFDF5] border border-[#d1c7bc] hover:border-[#628B35] transition-colors group h-full flex flex-col">
                  <div className="text-[#628B35] mb-6 transition-transform group-hover:scale-110 duration-300 shrink-0">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                    {area.title}
                  </h3>
                  <p className="text-[#103713]/70 leading-relaxed flex-grow">{area.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
