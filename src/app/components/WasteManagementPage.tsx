import { ScrollReveal } from './ScrollReveal';
import { BackgroundTexture } from './BackgroundTexture';
import { SectionDivider } from './SectionDivider';

export function WasteManagementPage() {
  return (
    <div className="relative pt-24 bg-[#E2DBD0]">
      <section className="py-20 bg-[#E2DBD0] relative z-0 overflow-hidden">
        <BackgroundTexture variant="leaf" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-center mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Waste Management
            </h1>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
            <p className="text-lg text-center leading-relaxed text-[#103713]/80">
              Addressing waste generated at corporate interior sites by reducing landfill impact and enabling responsible handling, reuse, upcycling and recycling of materials.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-[#FFFDF5] relative z-0 overflow-hidden">
        <BackgroundTexture variant="leaf" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-block px-8 py-16 border-2 border-[#d1c7bc] bg-[#E2DBD0]">
              <p className="text-xl text-[#628B35]">In Process</p>
              <p className="text-sm text-[#103713]/70 mt-4">
                We're developing comprehensive waste management solutions. Stay tuned.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
