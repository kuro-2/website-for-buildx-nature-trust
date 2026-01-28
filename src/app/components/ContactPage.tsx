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
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="text-2xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                Our Office
              </h3>
              <div className="w-12 h-[1px] bg-[#2F6B4F] mx-auto mb-6" />
              <address className="not-italic text-[#6B6B6B] leading-relaxed mb-6">
                BUILDX INTERIOR PRODUCTS PRIVATE LIMITED <br />
                No 4/2 MELUKOTE, West of Chord Road <br />
                Stage 2, 1st Main Road industrial town, <br />
                Bengaluru, Bengaluru Urban, Karnataka, <br />
                560010
              </address>
            </div>
            
            {/* Embedded Map */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#E5E5E5] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9999999999995!2d77.527738!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168305fb2ad9%3A0x2c63f0a96955b030!2sBUILDX%20INTERIOR%20PRODUCTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BuildX Nature Trust Location"
              ></iframe>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=BUILDX+INTERIOR+PRODUCTS+PRIVATE+LIMITED+No+4/2+MELUKOTE+West+of+Chord+Road+Stage+2+1st+Main+Road+industrial+town+Bengaluru+Bengaluru+Urban+Karnataka+560010', '_blank')}
                className="absolute bottom-4 right-4 bg-white text-[#2F6B4F] px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Open in Maps
              </button>
            </div>
          </ScrollReveal>
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
