import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Phone, Instagram, Linkedin, Mail, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for "automatic" sending
    // In a production environment, you would use a service like Formspree or EmailJS
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#E2DBD0]">
      {/* Hero Section */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl text-center mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Get in Touch
            </h1>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
            <p className="text-lg text-center leading-relaxed text-[#103713]/80">
              Whether you want to volunteer, partner with us, or simply learn more about our work, 
              we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[#FFFDF5] p-8 md:p-12 rounded-3xl shadow-sm border border-[#d1c7bc]">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#628B35]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-[#628B35]" />
                  </div>
                  <h2 className="text-3xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                    Message Sent Successfully
                  </h2>
                  <p className="text-[#103713]/70 mb-8">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 bg-[#628B35] text-[#FFFDF5] rounded-lg font-medium hover:bg-[#628B35]/90 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-4xl mb-4 text-[#103713] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
                    Send a Message
                  </h2>
                  <p className="text-center text-[#103713]/60 mb-12">
                    Fill out the form below and our team will get back to you via email.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-[#103713]/70 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#E2DBD0]/20 border border-[#d1c7bc] text-[#103713] focus:outline-none focus:border-[#628B35] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#103713]/70 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#E2DBD0]/20 border border-[#d1c7bc] text-[#103713] focus:outline-none focus:border-[#628B35] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#103713]/70 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#E2DBD0]/20 border border-[#d1c7bc] text-[#103713] focus:outline-none focus:border-[#628B35] transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-[#628B35] text-[#FFFDF5] rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#628B35]/90'
                      }`}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Phone */}
            <ScrollReveal>
              <div className="text-center md:text-left bg-[#FFFDF5] p-8 rounded-xl shadow-sm border border-[#d1c7bc] h-full flex flex-col items-center md:items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#628B35] text-[#FFFDF5] mb-6 shrink-0">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Phone
                </h3>
                <div className="space-y-2 text-[#103713]/70 flex-grow">
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={0.1}>
              <div className="text-center md:text-left bg-[#FFFDF5] p-8 rounded-xl shadow-sm border border-[#d1c7bc] h-full flex flex-col items-center md:items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#628B35] text-[#FFFDF5] mb-6 shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Email
                </h3>
                <div className="flex-grow flex items-center">
                  <a 
                    href="mailto:Prajakta.k@buildx.co.in" 
                    className="text-[#103713]/70 hover:text-[#628B35] transition-colors break-all"
                  >
                    Prajakta.k@buildx.co.in
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Social Media */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <h3 className="text-2xl mb-6 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                Connect With Us
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href="https://www.instagram.com/buildx_nature_trust/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-[#d1c7bc] bg-[#FFFDF5] hover:border-[#628B35] transition-colors group rounded-lg"
                >
                  <Instagram size={20} className="text-[#103713]/60 group-hover:text-[#628B35] transition-colors" />
                  <span className="text-[#103713]/60 group-hover:text-[#628B35] transition-colors">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/buildx-interior-products-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-[#d1c7bc] bg-[#FFFDF5] hover:border-[#628B35] transition-colors group rounded-lg"
                >
                  <Linkedin size={20} className="text-[#103713]/60 group-hover:text-[#628B35] transition-colors" />
                  <span className="text-[#103713]/60 group-hover:text-[#628B35] transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                Our Office
              </h2>
              <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-8" />
              <address className="not-italic text-[#103713]/70 leading-relaxed text-lg">
                BUILDX INTERIOR PRODUCTS PRIVATE LIMITED <br />
                No 4/2 MELUKOTE, West of Chord Road <br />
                Stage 2, 1st Main Road industrial town, <br />
                Bengaluru, Bengaluru Urban, Karnataka, <br />
                560010
              </address>
            </div>
            
            {/* Embedded Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#d1c7bc] relative h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9999999999995!2d77.527738!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168305fb2ad9%3A0x2c63f0a96955b030!2sBUILDX%20INTERIOR%20PRODUCTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BuildX Nature Trust Location"
              ></iframe>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=BUILDX+INTERIOR+PRODUCTS+PRIVATE+LIMITED+No+4/2+MELUKOTE+West+of+Chord+Road+Stage+2+1st+Main+Road+industrial+town+Bengaluru+Bengaluru+Urban+Karnataka+560010', '_blank')}
                className="absolute bottom-4 right-4 bg-[#FFFDF5] text-[#628B35] px-4 py-2 rounded-lg shadow-md hover:bg-[#E2DBD0] transition-colors duration-300 flex items-center gap-2 border border-[#d1c7bc]"
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
        className="py-20 bg-[#103713] text-[#FFFDF5] relative parallax-bg"
        style={{
          backgroundImage: "url('/assets/images/leaf-background.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-[#103713]/40" /> {/* Mobile overlay for readability */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#FFFDF5]" style={{ fontFamily: 'Cormorant, serif' }}>
              Join Our Mission
            </h2>
            <p className="text-lg mb-8 text-[#FFFDF5]/90 leading-relaxed max-w-2xl mx-auto">
              Every conversation is an opportunity to create change. Whether you're an individual, 
              organization, or community group, let's work together to nurture our planet.
            </p>
            <p className="text-[#FFFDF5]/80">
              We typically respond within 24-48 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
