import { Hero } from './Hero';
// import { ImpactCounter } from './ImpactCounter';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { HomePageCard } from './ui/HomePageCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero />

      {/* <ImpactCounter /> */}

      {/* Introduction Section */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Rooted in Purpose
            </h2>
            <p className="text-lg leading-relaxed text-[#103713]/80 text-center mb-8">
              BuildX Nature Trust is dedicated to protecting and nurturing our planet through meaningful action. 
              We believe in the quiet power of intentional work—planting trees, conserving resources, and building 
              communities that care deeply about the earth.
            </p>
            <div className="text-center">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-[#628B35] hover:gap-4 transition-all duration-300 font-medium"
              >
                Learn More About Us <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-16 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              What Guides Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal delay={0.1}>
              <div className="h-96">
                <HomePageCard 
                  title="Responsibility"
                  description="We take ownership of our impact and commit to sustainable practices that honor the earth."
                  imageUrl="https://images.unsplash.com/photo-1695551407214-25a5dc6300b8?w=400&h=400&fit=crop"
                  altText="Environmental responsibility and sustainability"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-96">
                <HomePageCard 
                  title="Community"
                  description="Real change happens together. We build networks of people who care and act."
                  imageUrl="https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop"
                  altText="Community environmental action"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="h-96">
                <HomePageCard 
                  title="Hope"
                  description="Every seed planted is a promise. We believe in a future where nature and humanity thrive."
                  imageUrl="https://images.unsplash.com/photo-1651349776781-7a8cf162a494?w=400&h=400&fit=crop"
                  altText="Hope for a greener future"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 bg-[#103713] text-[#FFFDF5] relative parallax-bg"
        style={{
          backgroundImage: "url('/assets/images/leaf-background.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-[#103713]/40" /> {/* Mobile overlay for readability */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#FFFDF5]" style={{ fontFamily: 'Cormorant, serif' }}>
              Join the Movement
            </h2>
            <p className="text-lg mb-8 text-[#FFFDF5]/90 leading-relaxed">
              Whether through volunteering, donations, or simply spreading awareness, 
              every action matters. Let's grow a better future together.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-[#628B35] text-[#FFFDF5] hover:bg-[#628B35]/90 transition-colors duration-300 rounded-lg font-medium"
            >
              Get in Touch
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
