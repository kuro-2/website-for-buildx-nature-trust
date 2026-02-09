import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sprout, Droplets, Recycle, Users, BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProgramsPageCard } from './ui/ProgramsPageCard';

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
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`${cityName} project ${index + 1}`}
                    className="w-full h-full object-cover"
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
  
  const bangaloreImageDetails = [
    {
      title: "School Plantation Drive",
      description: "Government school students participating in tree plantation and environmental awareness.",
      alt: "Bangalore govt school plantation drive - students planting trees"
    },
    {
      title: "Community Engagement",
      description: "Local community members actively involved in the greening initiative.",
      alt: "Bangalore school plantation - community participation"
    },
    {
      title: "Youth Awareness",
      description: "Educating young minds about the importance of environmental conservation.",
      alt: "Bangalore plantation drive - student awareness program"
    },
    {
      title: "Tree Planting Activity",
      description: "Hands-on tree planting experience for school children.",
      alt: "Bangalore school - tree planting activity"
    },
    {
      title: "Environmental Education",
      description: "Teaching sustainable practices through practical involvement.",
      alt: "Bangalore govt school - environmental education"
    },
    {
      title: "Green Initiative",
      description: "Transforming school grounds into green learning spaces.",
      alt: "Bangalore plantation - green school initiative"
    },
    {
      title: "Student Participation",
      description: "Enthusiastic students contributing to the plantation drive.",
      alt: "Bangalore school - student tree planting"
    },
    {
      title: "Community Support",
      description: "Building community awareness through collaborative action.",
      alt: "Bangalore plantation - community and students together"
    },
    {
      title: "Sapling Distribution",
      description: "Distributing saplings to students for the plantation drive.",
      alt: "Bangalore school - sapling distribution event"
    },
    {
      title: "Team Effort",
      description: "Students and volunteers working together for a greener future.",
      alt: "Bangalore plantation - teamwork and collaboration"
    },
    {
      title: "School Grounds Greening",
      description: "Enhancing school infrastructure with green cover.",
      alt: "Bangalore govt school - grounds transformation"
    },
    {
      title: "Awareness Campaign",
      description: "Spreading environmental consciousness among young students.",
      alt: "Bangalore school - environmental awareness campaign"
    },
    {
      title: "Hands-On Learning",
      description: "Practical learning experience about ecology and sustainability.",
      alt: "Bangalore plantation - practical environmental education"
    },
    {
      title: "Group Activity",
      description: "Students collaborating in the plantation initiative.",
      alt: "Bangalore school - group plantation activity"
    },
    {
      title: "Green Mission",
      description: "School's commitment to environmental responsibility.",
      alt: "Bangalore govt school - green mission project"
    },
    {
      title: "Planting Together",
      description: "Students learning the value of collective environmental action.",
      alt: "Bangalore plantation - students planting together"
    },
    {
      title: "Future Stewards",
      description: "Nurturing the next generation of environmental stewards.",
      alt: "Bangalore school - future environmental leaders"
    },
    {
      title: "School Engagement",
      description: "Active participation from the entire school community.",
      alt: "Bangalore plantation - school-wide engagement"
    },
    {
      title: "Green Education",
      description: "Integrating environmental values into education.",
      alt: "Bangalore govt school - green education program"
    },
    {
      title: "Plantation Success",
      description: "Successful completion of the school plantation drive.",
      alt: "Bangalore school - successful plantation event"
    },
    {
      title: "Community Impact",
      description: "Creating lasting impact through community-school partnership.",
      alt: "Bangalore plantation - community impact"
    },
    {
      title: "Youth Leadership",
      description: "Empowering students to lead environmental initiatives.",
      alt: "Bangalore school - youth environmental leadership"
    },
    {
      title: "Sustainable Future",
      description: "Building a sustainable future through education and action.",
      alt: "Bangalore govt school - sustainable future initiative"
    }
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
  
  const gularbaImageDetails = [
    {
      title: "Kalyana Vana Plantation",
      description: "Large-scale tree plantation initiative at Kalyana Vana forest area.",
      alt: "Gulbarga Kalyana Vana plantation drive"
    },
    {
      title: "Community Mobilization",
      description: "Local community members gathering for the plantation drive.",
      alt: "Gulbarga plantation - community participation"
    },
    {
      title: "Forest Restoration",
      description: "Restoring native forest cover in the Kalyana Vana region.",
      alt: "Gulbarga Kalyana Vana forest restoration"
    },
    {
      title: "Tree Sapling Distribution",
      description: "Distributing saplings to volunteers for plantation.",
      alt: "Gulbarga plantation - sapling distribution"
    },
    {
      title: "Planting in Action",
      description: "Volunteers actively planting trees across the Kalyana Vana area.",
      alt: "Gulbarga Kalyana Vana - tree planting activity"
    },
    {
      title: "Group Participation",
      description: "Team members working together in the plantation drive.",
      alt: "Gulbarga plantation - group activity"
    },
    {
      title: "Native Species Planting",
      description: "Planting native tree species suitable for the region.",
      alt: "Gulbarga Kalyana Vana - native species plantation"
    },
    {
      title: "Volunteer Engagement",
      description: "Dedicated volunteers contributing to the green mission.",
      alt: "Gulbarga plantation - volunteer engagement"
    },
    {
      title: "Land Preparation",
      description: "Preparing the land for successful tree plantation.",
      alt: "Gulbarga Kalyana Vana - land preparation"
    },
    {
      title: "Mass Plantation Event",
      description: "Large-scale community plantation event at Kalyana Vana.",
      alt: "Gulbarga plantation - mass tree planting event"
    },
    {
      title: "Green Cover Expansion",
      description: "Expanding forest cover in the semi-arid Gulbarga region.",
      alt: "Gulbarga Kalyana Vana - green cover expansion"
    },
    {
      title: "Environmental Conservation",
      description: "Conservation efforts through strategic tree plantation.",
      alt: "Gulbarga plantation - environmental conservation"
    },
    {
      title: "Successful Drive",
      description: "Completion of the successful Kalyana Vana plantation drive.",
      alt: "Gulbarga Kalyana Vana - successful plantation"
    },
    {
      title: "Community Achievement",
      description: "Collective achievement in creating a greener Gulbarga.",
      alt: "Gulbarga plantation - community achievement"
    }
  ];

  const mysuruImages = [
    // Environmental day 2025 - Varuna Lake
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
    // New folder
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
  
  const mysuruImageDetails = [
    // Environmental day 2025 - Varuna Lake
    {
      title: "Varuna Lake Restoration",
      description: "Environmental Day 2025 celebration at Varuna Lake with conservation activities.",
      alt: "Mysuru Varuna Lake - Environmental Day 2025"
    },
    {
      title: "Lake Cleanup Drive",
      description: "Community members participating in Varuna Lake cleanup initiative.",
      alt: "Mysuru Varuna Lake - cleanup drive"
    },
    {
      title: "Environmental Awareness",
      description: "Raising awareness about lake conservation and environmental protection.",
      alt: "Mysuru Environmental Day - awareness campaign"
    },
    {
      title: "Community Gathering",
      description: "Large community turnout for Environmental Day at Varuna Lake.",
      alt: "Mysuru Varuna Lake - community event"
    },
    {
      title: "Lake Conservation",
      description: "Active conservation efforts to protect and restore Varuna Lake.",
      alt: "Mysuru Varuna Lake - conservation project"
    },
    {
      title: "Volunteer Action",
      description: "Dedicated volunteers working on lake restoration activities.",
      alt: "Mysuru Environmental Day - volunteer participation"
    },
    {
      title: "Water Body Protection",
      description: "Protecting vital water resources through community engagement.",
      alt: "Mysuru Varuna Lake - water body protection"
    },
    {
      title: "Environmental Pledge",
      description: "Participants taking pledge to protect the environment.",
      alt: "Mysuru Environmental Day - environmental pledge"
    },
    {
      title: "Lake Greenery",
      description: "Plantation activities around Varuna Lake to enhance green cover.",
      alt: "Mysuru Varuna Lake - lakeside plantation"
    },
    {
      title: "Community Impact",
      description: "Creating lasting impact through community-led environmental action.",
      alt: "Mysuru Environmental Day - community impact"
    },
    {
      title: "Nature Conservation",
      description: "Preserving natural habitats around the lake ecosystem.",
      alt: "Mysuru Varuna Lake - nature conservation"
    },
    {
      title: "Group Participation",
      description: "Collaborative efforts in Environmental Day activities.",
      alt: "Mysuru Environmental Day - group activity"
    },
    {
      title: "Lake Ecosystem",
      description: "Working to maintain and restore the lake's ecosystem health.",
      alt: "Mysuru Varuna Lake - ecosystem restoration"
    },
    {
      title: "Environmental Education",
      description: "Educational programs about lake conservation and sustainability.",
      alt: "Mysuru Environmental Day - education program"
    },
    {
      title: "Lakeside Activities",
      description: "Various conservation activities conducted at the lake premises.",
      alt: "Mysuru Varuna Lake - conservation activities"
    },
    {
      title: "Celebration of Nature",
      description: "Environmental Day celebration highlighting importance of natural resources.",
      alt: "Mysuru Environmental Day - nature celebration"
    },
    // New folder
    {
      title: "Plantation Initiative",
      description: "Tree plantation drive as part of Mysuru green initiative.",
      alt: "Mysuru plantation - tree planting drive"
    },
    {
      title: "Sapling Care",
      description: "Volunteers nurturing saplings for successful growth.",
      alt: "Mysuru plantation - sapling care"
    },
    {
      title: "Green Mission",
      description: "Community-driven mission to increase Mysuru's green cover.",
      alt: "Mysuru plantation - green mission"
    },
    {
      title: "Urban Greening",
      description: "Strategic tree planting in urban areas of Mysuru.",
      alt: "Mysuru plantation - urban greening project"
    },
    {
      title: "Tree Planting Day",
      description: "Special tree planting event with community participation.",
      alt: "Mysuru plantation - tree planting day"
    },
    {
      title: "Environmental Action",
      description: "Taking concrete action towards environmental sustainability.",
      alt: "Mysuru plantation - environmental action"
    },
    {
      title: "Native Species",
      description: "Planting native tree species suitable for Mysuru climate.",
      alt: "Mysuru plantation - native species planting"
    },
    {
      title: "Volunteer Team",
      description: "Dedicated team of volunteers contributing to the plantation.",
      alt: "Mysuru plantation - volunteer team"
    },
    {
      title: "Green Mysuru",
      description: "Building a greener and more sustainable Mysuru city.",
      alt: "Mysuru plantation - green city initiative"
    },
    {
      title: "Planting Success",
      description: "Successful completion of the plantation drive in Mysuru.",
      alt: "Mysuru plantation - successful drive"
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
