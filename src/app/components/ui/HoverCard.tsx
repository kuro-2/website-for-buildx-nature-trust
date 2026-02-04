import React from 'react';

interface HoverCardProps {
  image: string;
  title: string;
  description: string;
  altText: string;
}

export function HoverCard({ image, title, description, altText }: HoverCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg bg-white border border-[#d1c7bc] cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image that shows initially */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={image}
          alt={altText}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#103713]/50 to-[#103713]/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
        <h3 className="text-xl font-semibold text-white mb-2 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
          {title}
        </h3>
        <p className="text-sm text-white/90 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}