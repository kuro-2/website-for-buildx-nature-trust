import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sprout, Droplets, Recycle, Users, BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HoverCard } from './ui/HoverCard';
import { ProgramsPageCard } from './ui/ProgramsPageCard';

interface CityGalleryProps {
  cityName: string;
  images: string[];
  imageDetails?: Array<{
    title: string;
    description: string;
    alt: string;
  }>;
}

function CityGallery({ cityName, images, imageDetails }: CityGalleryProps) {
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
              {images.map((image, index) => {
                // Check if we have image details to show interactive cards
                if (imageDetails && imageDetails[index]) {
                  const detail = imageDetails[index];
                  return (
                    <HoverCard 
                      key={index}
                      image={image}
                      title={detail.title}
                      description={detail.description}
                      altText={detail.alt || `${cityName} project ${index + 1}`}
                    />
                  );
                } else {
                  // Fallback to regular image if no details provided
                  return (
                    <div key={index} className="aspect-square overflow-hidden group">
                      <img
                        src={image}
                        alt={`${cityName} project ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  );
                }
              })}
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
  
  const bangaloreImageDetails = [
    {
      title: "Urban Forest",
      description: "Creating green spaces in the heart of Bangalore with native species.",
      alt: "Bangalore urban forest plantation"
    },
    {
      title: "Community Park",
      description: "Developing community green spaces for recreation and biodiversity.",
      alt: "Bangalore community park project"
    },
    {
      title: "School Garden",
      description: "Educational gardens at schools to teach children about sustainability.",
      alt: "Bangalore school garden initiative"
    },
    {
      title: "Rooftop Garden",
      description: "Transforming unused rooftops into productive green spaces.",
      alt: "Bangalore rooftop garden project"
    },
    {
      title: "Street Greening",
      description: "Adding trees and plants along streets to improve air quality.",
      alt: "Bangalore street greening project"
    },
    {
      title: "Waste to Wealth",
      description: "Converting organic waste into compost for urban gardening.",
      alt: "Bangalore waste to wealth project"
    }
  ];

  const gularbaImages = [
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1656783208368-a7d176736535?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1642265466368-2a491569308a?w=400&h=400&fit=crop',
  ];
  
  const gularbaImageDetails = [
    {
      title: "Industrial Green Belt",
      description: "Establishing green barriers around industrial areas.",
      alt: "Gulbarga industrial green belt project"
    },
    {
      title: "Water Conservation",
      description: "Planting drought-resistant species to conserve water.",
      alt: "Gulbarga water conservation project"
    },
    {
      title: "Agricultural Forestry",
      description: "Integrating trees with farming for sustainable agriculture.",
      alt: "Gulbarga agricultural forestry project"
    },
    {
      title: "Desert Restoration",
      description: "Restoring degraded land in semi-arid regions.",
      alt: "Gulbarga desert restoration project"
    }
  ];

  const mysuruImages = [
    'https://images.unsplash.com/photo-1651349776781-7a8cf162a494?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1656783208368-a7d176736535?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1642265466368-2a491569308a?w=400&h=400&fit=crop',
  ];
  
  const mysuruImageDetails = [
    {
      title: "Heritage Gardens",
      description: "Preserving traditional garden designs with native plants.",
      alt: "Mysuru heritage garden project"
    },
    {
      title: "River Restoration",
      description: "Planting along riverbanks to prevent erosion and pollution.",
      alt: "Mysuru river restoration project"
    },
    {
      title: "Temple Grounds",
      description: "Greening temple premises with sacred groves and trees.",
      alt: "Mysuru temple grounds greening"
    },
    {
      title: "Urban Forest",
      description: "Creating contiguous forest patches in urban areas.",
      alt: "Mysuru urban forest project"
    },
    {
      title: "Biodiversity Corridor",
      description: "Connecting fragmented habitats for wildlife movement.",
      alt: "Mysuru biodiversity corridor"
    }
  ];

  const getFocusAreaImage = (title: string) => {
    const imageMap: Record<string, string> = {
      'Plantation': 'https://images.unsplash.com/photo-1695551407214-25a5dc6300b8?w=400&h=400&fit=crop',
      'Interior Waste Management': 'https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop',
      'Community Action': 'https://images.unsplash.com/photo-1651349776781-7a8cf162a494?w=400&h=400&fit=crop',
      'Knowledge & Awareness': 'https://images.unsplash.com/photo-1656783208368-a7d176736535?w=400&h=400&fit=crop'
    };
    return imageMap[title] || 'https://images.unsplash.com/photo-1695551407214-25a5dc6300b8?w=400&h=400&fit=crop';
  };

  const focusAreas = [
    {
      icon: <Sprout size={40} strokeWidth={1.5} />,
      title: 'Plantation',
      description: 'Strategic tree planting initiatives to restore green cover and combat climate change.',
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
              <CityGallery cityName="Bangalore" images={bangaloreImages} imageDetails={bangaloreImageDetails} />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <CityGallery cityName="Gulbarga" images={gularbaImages} imageDetails={gularbaImageDetails} />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <CityGallery cityName="Mysuru" images={mysuruImages} imageDetails={mysuruImageDetails} />
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
                <div className="h-96">
                  <ProgramsPageCard 
                    title={area.title}
                    description={area.description}
                    imageUrl={getFocusAreaImage(area.title)}
                    altText={`Focus area: ${area.title}`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
