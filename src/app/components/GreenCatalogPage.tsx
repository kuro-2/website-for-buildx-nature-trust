import { ScrollReveal } from './ScrollReveal';
import { Package } from 'lucide-react';
import { GreenCatalogCard } from './ui/GreenCatalogCard';
import { BackgroundTexture } from './BackgroundTexture';

interface GreenCatalogPageProps {
  onNavigate?: (page: string) => void;
}

export function GreenCatalogPage({ onNavigate }: GreenCatalogPageProps) {
  return (
    <div className="relative pt-24 min-h-screen bg-[#E2DBD0]">
      <section className="py-32 bg-[#E2DBD0] relative z-0 overflow-hidden">
        <BackgroundTexture variant="leaf" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="mb-8">
              <Package size={64} strokeWidth={1.5} className="text-[#628B35] mx-auto mb-8" />
            </div>
            <h1 className="text-5xl md:text-6xl mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Green Catalog
            </h1>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
            
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl text-[#628B35] mb-6">In Process</p>
              <p className="text-lg text-[#103713]/80 leading-relaxed mb-8">
                We're curating a comprehensive catalog of eco-friendly products and sustainable solutions 
                for homes and communities. This space will soon feature carefully selected items that 
                align with our environmental values.
              </p>
              <p className="text-[#103713]/70">
                Check back soon for updates.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20 bg-[#FFFDF5] relative z-0 overflow-hidden">
        <BackgroundTexture variant="leaf" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl text-center mb-12 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              What to Expect
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="h-96">
                <GreenCatalogCard 
                  title="Sustainable Products"
                  description="Eco-friendly alternatives for everyday items, from biodegradable packaging to renewable energy solutions."
                  imageUrl="/assets/images/What-to-expect/micheile-henderson-7iGNwuxjBY8-unsplash.jpg"
                  altText="Sustainable products"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-96">
                <GreenCatalogCard 
                  title="Native Plant Seeds"
                  description="Carefully selected native species to support local biodiversity and ecosystem health."
                  imageUrl="/assets/images/What-to-expect/jonathan-kemper-wzYc-_TIk8o-unsplash.jpg"
                  altText="Native plant seeds"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="h-96">
                <GreenCatalogCard 
                  title="Educational Resources"
                  description="Guides and materials to help individuals and communities make informed environmental choices."
                  imageUrl="/assets/images/What-to-expect/walls-io-BfKX63Q1__0-unsplash.jpg"
                  altText="Educational resources"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
