import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import Masonry from 'react-responsive-masonry';

interface GalleryPageProps {
  onNavigate?: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'volunteers'>('projects');

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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl text-center mb-8 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              Gallery
            </h1>
            <div className="w-16 h-[1px] bg-[#2F6B4F] mx-auto mb-12" />
            <p className="text-lg text-center leading-relaxed text-[#6B6B6B]">
              Moments from our journey—people planting hope, communities taking action, 
              and nature reclaiming its rightful space.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex justify-center gap-8 mb-12">
              <button
                onClick={() => setActiveTab('projects')}
                className={`relative pb-2 text-lg transition-colors ${
                  activeTab === 'projects' ? 'text-[#2F6B4F]' : 'text-[#6B6B6B] hover:text-[#2F6B4F]'
                }`}
              >
                Projects
                {activeTab === 'projects' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2F6B4F]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('volunteers')}
                className={`relative pb-2 text-lg transition-colors ${
                  activeTab === 'volunteers' ? 'text-[#2F6B4F]' : 'text-[#6B6B6B] hover:text-[#2F6B4F]'
                }`}
              >
                Volunteers
                {activeTab === 'volunteers' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2F6B4F]" />
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="block md:hidden">
            <Masonry columnsCount={1} gutter="1rem">
              {images.map((image, index) => (
                <ScrollReveal key={`${activeTab}-${index}`} delay={index * 0.05}>
                  <div className="group overflow-hidden cursor-pointer">
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
                  <div className="group overflow-hidden cursor-pointer">
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
                  <div className="group overflow-hidden cursor-pointer">
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
    </div>
  );
}