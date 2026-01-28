import { Hero } from './Hero';
import { ImpactCounter } from './ImpactCounter';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero />

      <ImpactCounter />

      {/* Introduction Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-8 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              Rooted in Purpose
            </h2>
            <p className="text-lg leading-relaxed text-[#6B6B6B] text-center mb-8">
              BuildX Nature Trust is dedicated to protecting and nurturing our planet through meaningful action. 
              We believe in the quiet power of intentional work—planting trees, conserving resources, and building 
              communities that care deeply about the earth.
            </p>
            <div className="text-center">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-[#2F6B4F] hover:gap-4 transition-all duration-300"
              >
                Learn More About Us <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-16 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              What Guides Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-12 h-[1px] bg-[#2F6B4F] mx-auto mb-6" />
                <h3 className="text-2xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Responsibility
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  We take ownership of our impact and commit to sustainable practices that honor the earth.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-12 h-[1px] bg-[#2F6B4F] mx-auto mb-6" />
                <h3 className="text-2xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Community
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  Real change happens together. We build networks of people who care and act.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-12 h-[1px] bg-[#2F6B4F] mx-auto mb-6" />
                <h3 className="text-2xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Hope
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  Every seed planted is a promise. We believe in a future where nature and humanity thrive.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 bg-[#2F6B4F] text-white relative"
        style={{
          backgroundImage: "url('/assets/images/leaf-background.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Join the Movement
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Whether through volunteering, donations, or simply spreading awareness, 
              every action matters. Let's grow a better future together.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-white text-[#2F6B4F] hover:bg-white/90 transition-colors duration-300"
            >
              Get in Touch
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
