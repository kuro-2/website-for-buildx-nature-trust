import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundTexture } from './BackgroundTexture';

interface CityEvent {
  title: string;
  description: string;
  image?: string;
}

interface CityGalleryProps {
  cityName: string;
  images: string[];
  eventTitle?: string;
  description?: string;
  extraEvents?: CityEvent[];
  noPhotosNote?: string;
}

function CityGallery({ cityName, images, eventTitle, description, extraEvents, noPhotosNote }: CityGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#d1c7bc] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-[#FFFDF5] hover:bg-[#628B35]/10 transition-colors"
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
            <div className="p-6 bg-[#FFFDF5] space-y-6">
              {(eventTitle || description) && (
                <div>
                  {eventTitle && (
                    <h3 className="text-lg mb-1 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                      {eventTitle}
                    </h3>
                  )}
                  {description && (
                    <p className="text-sm text-[#103713]/70 leading-relaxed max-w-3xl">{description}</p>
                  )}
                </div>
              )}

              {images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden">
                      <img
                        src={image}
                        alt={`${cityName} project ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              ) : noPhotosNote ? (
                <p className="text-sm italic text-[#103713]/50">{noPhotosNote}</p>
              ) : null}

              {extraEvents && extraEvents.length > 0 && (
                <div className="space-y-4 pt-2 border-t border-[#d1c7bc]">
                  {extraEvents.map((event, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 items-start">
                      {event.image && (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full sm:w-48 max-w-xs rounded-lg object-cover aspect-square"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      <div>
                        <h3 className="text-lg mb-1 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                          {event.title}
                        </h3>
                        <p className="text-sm text-[#103713]/70 leading-relaxed max-w-3xl">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6778.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6788 (1).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6801 (1).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6807.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6812 (1).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6814.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6821.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6858 (2).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6866 (3).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6867 (1).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6869.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6875 (3).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6881 (3).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6892.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6895 (2).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6896 (2).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6897 (2).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6899.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6903 (3).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6917 (3).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6921.jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6930 (1).jpeg',
    '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6957 (2).jpeg',
  ];

  const gularbaImages = [
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5730 (1).jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5736.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5745 (2).jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5748.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5751.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5755.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5815.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5827 (1).jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5831.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5865 (1).jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5879.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5917 (1).jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5935.jpeg',
    '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/WhatsApp Image 2025-09-12 at 6.29.03 PM (2).jpeg',
  ];

  // World Environment Day at Varuna Lake
  const mysuruVarunaLakeImages = [
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1466.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1500.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1514.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1516.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1519.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1528 (1).jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1542.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1547.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1577.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1584 (1).jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1586.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1587.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1665 (1).jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1682 (2).jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1722.jpeg',
    '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_4563.jpeg',
  ];

  // Planting & Learning at Odanadi (images from the unlabeled "New folder" set —
  // not confirmed to be Odanadi photos, see report)
  const mysuruOdanadiImages = [
    '/assets/images/Mysuru/New folder/IMG_1739 (1).jpeg',
    '/assets/images/Mysuru/New folder/IMG_1752.jpeg',
    '/assets/images/Mysuru/New folder/IMG_1770.jpeg',
    '/assets/images/Mysuru/New folder/IMG_1772.jpeg',
    '/assets/images/Mysuru/New folder/IMG_1775.jpeg',
    '/assets/images/Mysuru/New folder/IMG_1776.jpeg',
    '/assets/images/Mysuru/New folder/IMG_1787.jpeg',
    '/assets/images/Mysuru/New folder/IMG_1993 (1).jpeg',
    '/assets/images/Mysuru/New folder/IMG_2002.jpeg',
    '/assets/images/Mysuru/New folder/IMG_2008 (1).jpeg',
  ];

  // Plantation Drive at Government College of Education, Panvel (with Sahyog Foundation)
  const mumbaiImages = [
    '/assets/images/Mumbai/DSC_4338 (1).jpg',
    '/assets/images/Mumbai/DSC_4342 (1).jpg',
    '/assets/images/Mumbai/DSC_4350 (1).jpg',
    '/assets/images/Mumbai/DSC_4353 (2).jpg',
    '/assets/images/Mumbai/DSC_4364 (2).jpg',
    '/assets/images/Mumbai/DSC_4372.jpg',
    '/assets/images/Mumbai/DSC_4397.jpg',
    '/assets/images/Mumbai/DSC_4409.jpg',
    '/assets/images/Mumbai/DSC_4417.jpg',
    '/assets/images/Mumbai/DSC_4428 (2).jpg',
    '/assets/images/Mumbai/DSC_4434 (1).jpg',
    '/assets/images/Mumbai/DSC_4447.jpg',
    '/assets/images/Mumbai/DSC_4456.jpg',
    '/assets/images/Mumbai/DSC_4460 (2).jpg',
    '/assets/images/Mumbai/DSC_4463 (1).jpg',
    '/assets/images/Mumbai/IMG_2148 (1).jpeg',
    '/assets/images/Mumbai/IMG_2153.jpeg',
  ];

  return (
    <div className="relative pt-24 bg-[#E2DBD0]">
      {/* Hero Section */}
      <section className="py-20 bg-[#E2DBD0] relative z-0 overflow-hidden">
        <BackgroundTexture variant="leaf" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
      <section className="py-20 bg-[#FFFDF5] relative z-0 overflow-hidden">
        <BackgroundTexture variant="leaf" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              <CityGallery
                cityName="Bangalore"
                images={bangaloreImages}
                eventTitle="Plantation Drive – Government School, Bengaluru"
                description="A tree plantation and awareness drive held at a government school in Bengaluru, alongside students from Samrakshana Sankalpa Makkala Dhama."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <CityGallery
                cityName="Kalaburagi"
                images={gularbaImages}
                eventTitle="Plantation Drive at Central University of Karnataka"
                description="A plantation drive at the Kalyana Vana site in Kalaburagi (formerly Gulbarga), organized in partnership with Central University of Karnataka."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <CityGallery
                cityName="Mysuru"
                images={mysuruVarunaLakeImages}
                eventTitle="World Environment Day at Varuna Lake"
                description="A World Environment Day 2025 celebration at Varuna Lake, Mysuru, combining lake conservation activities with community plantation efforts."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <CityGallery
                cityName="Mysuru – Odanadi"
                images={mysuruOdanadiImages}
                eventTitle="Planting & Learning at Odanadi"
                description="A plantation and learning activity held with children from the Odanadi Boys Rehabilitation Centre, Mysuru."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <CityGallery
                cityName="Mumbai"
                images={mumbaiImages}
                eventTitle="Plantation Drive at Government College of Education, Panvel"
                description="A plantation drive at the Government College of Education, Panvel, organized in partnership with Sahyog Foundation."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
