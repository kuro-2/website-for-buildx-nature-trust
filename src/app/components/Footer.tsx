import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'About Us', page: 'about' },
    { label: 'Plantation Drive', page: 'programs' },
    { label: 'Waste Management', page: 'waste-management' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <footer className="relative bg-[#E2DBD0] border-t border-[#d1c7bc] overflow-hidden">
      {/* Footer Content */}
      <div className="footer-content max-w-7xl mx-auto px-5 pt-3 pb-3 relative z-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center">

          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start md:-ml-2">
            <img
              src="/assets/images/X-nobg.svg"
              alt="BuildX Nature Trust"
              className="h-20 md:h-32 w-auto object-contain"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-2 text-[#103713] font-medium">Quick Links</h4>
            <ul className="space-y-1 text-sm text-[#103713]/70">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate?.(link.page)}
                    className="hover:text-[#628B35] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-2 text-[#103713] font-medium">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/buildx_nature_trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#103713]/70 hover:text-[#628B35] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/buildx-interior-products-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#103713]/70 hover:text-[#628B35] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - sits with the content, above the forest */}
      <div className="relative z-50 max-w-7xl mx-auto px-5 pt-2 pb-6 border-t border-[#d1c7bc] text-center text-xs md:text-sm text-[#103713]/60">
        © 2026 BuildX Nature Trust. All rights reserved.
      </div>

      {/* Forest Band - the footer's foundation, flush with the bottom edge */}
      <div className="forest-band">
        <div className="parallax-container">
          <div
            className="parallax-layer parallax-layer-1"
            style={{ backgroundImage: "url('/assets/images/footer-animation.png')" }}
          />
          <div
            className="parallax-layer parallax-layer-2"
            style={{ backgroundImage: "url('/assets/images/footer-animation.png')" }}
          />
          <div
            className="parallax-layer parallax-layer-3"
            style={{ backgroundImage: "url('/assets/images/footer-animation.png')" }}
          />
        </div>
      </div>
    </footer>
  );
}
