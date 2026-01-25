import { ScrollReveal } from './ScrollReveal';
import { Phone, Instagram, Linkedin, Mail } from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl text-center mb-8 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              Get in Touch
            </h1>
            <div className="w-16 h-[1px] bg-[#2F6B4F] mx-auto mb-12" />
            <p className="text-lg text-center leading-relaxed text-[#6B6B6B]">
              Whether you want to volunteer, partner with us, or simply learn more about our work, 
              we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Phone */}
            <ScrollReveal>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2F6B4F] text-white mb-6">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Phone
                </h3>
                <div className="space-y-2 text-[#6B6B6B]">
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={0.1}>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2F6B4F] text-white mb-6">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Email
                </h3>
                <p className="text-[#6B6B6B]">contact@buildxnaturetrust.org</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Social Media */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <h3 className="text-2xl mb-6 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                Connect With Us
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://instagram.com/buildx_nature_trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] hover:border-[#2F6B4F] transition-colors group"
                >
                  <Instagram size={20} className="text-[#6B6B6B] group-hover:text-[#2F6B4F] transition-colors" />
                  <span className="text-[#6B6B6B] group-hover:text-[#2F6B4F] transition-colors">Instagram</span>
                </a>
                <a
                  href="https://linkedin.com/company/buildxnaturetrust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] hover:border-[#2F6B4F] transition-colors group"
                >
                  <Linkedin size={20} className="text-[#6B6B6B] group-hover:text-[#2F6B4F] transition-colors" />
                  <span className="text-[#6B6B6B] group-hover:text-[#2F6B4F] transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="text-2xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                Our Office
              </h3>
              <div className="w-12 h-[1px] bg-[#2F6B4F] mx-auto mb-6" />
              <address className="not-italic text-[#6B6B6B] leading-relaxed">
                BuildX Nature Trust<br />
                #123, Green Valley Road<br />
                Koramangala, Bangalore - 560034<br />
                Karnataka, India
              </address>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2F6B4F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Join Our Mission
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Every conversation is an opportunity to create change. Whether you're an individual, 
              organization, or community group, let's work together to nurture our planet.
            </p>
            <p className="text-white/80">
              We typically respond within 24-48 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
