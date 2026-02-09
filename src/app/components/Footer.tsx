import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'About Us', page: 'about' },
    { label: 'Programs', page: 'programs' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <footer
      className="relative bg-[#E2DBD0] border-t border-[#d1c7bc] overflow-hidden"
      style={{ minHeight: '450px' }}
    >
      {/* Parallax Forest Background */}
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

      {/* Footer Content */}
      <div className="footer-content max-w-7xl mx-auto px-6 py-12 relative z-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="relative">
            <img
              src="/assets/images/X-nobg.svg"
              alt="BuildX Nature Trust"
              className="
                absolute
                -top-20
                -left-12
                h-60
                w-auto
                object-contain
                z-50
              "
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-[#103713] font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#103713]/70">
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
            <h4 className="mb-3 text-[#103713] font-medium">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/buildx_nature_trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#103713]/70 hover:text-[#628B35] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/buildx-interior-products-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#103713]/70 hover:text-[#628B35] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d1c7bc] text-center text-sm text-[#103713]/60">
          © 2026 BuildX Nature Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
