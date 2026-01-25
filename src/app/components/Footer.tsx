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
    <footer className="bg-[#F5F5F5] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              BuildX Nature Trust
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Nurturing the earth, one action at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-[#1C1C1C]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#6B6B6B]">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button 
                    onClick={() => onNavigate?.(link.page)}
                    className="hover:text-[#2F6B4F] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-[#1C1C1C]">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B6B6B] hover:text-[#2F6B4F] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B6B6B] hover:text-[#2F6B4F] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#E5E5E5] text-center text-sm text-[#9A9A9A]">
          © 2026 BuildX Nature Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
