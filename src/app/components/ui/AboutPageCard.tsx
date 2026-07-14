import { useEffect, useRef, useState } from 'react';

interface AboutPageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export function AboutPageCard({ title, description, imageUrl, altText }: AboutPageCardProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative aspect-auto h-full overflow-hidden rounded-3xl bg-white border border-[#d1c7bc] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col transform hover:-translate-y-2"
    >
      {/* Image with tilt effect */}
      <div className="w-full h-full overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-all duration-600 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Overlay with diagonal slide - reveals on scroll-into-view, and still on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-[#FFFDF5]/80 via-[#E2DBD0]/70 to-[#628B35]/60 backdrop-blur-sm flex flex-col items-start justify-end p-8 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <div
          className={`border-l-4 border-[#628B35] pl-4 transition-all duration-700 ${
            inView ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
          }`}
        >
          <h3 className="text-2xl font-bold text-[#103713] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
            {title}
          </h3>
          <p className="text-[#103713]/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-4 right-4 w-8 h-8 bg-[#628B35] transition-all duration-300 transform ${
        inView ? 'opacity-100 rotate-12' : 'opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-12'
      }`} />
    </div>
  );
}