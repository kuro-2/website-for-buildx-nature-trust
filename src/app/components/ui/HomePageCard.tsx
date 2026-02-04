import React from 'react';

interface HomePageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export function HomePageCard({ title, description, imageUrl, altText }: HomePageCardProps) {
  return (
    <div className="group relative aspect-auto h-full overflow-hidden rounded-2xl bg-white border border-[#d1c7bc] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
      {/* Image that shows initially */}
      <div className="w-full h-full overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
        />
      </div>
      
      {/* Overlay with slide-up animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#103713]/90 to-[#103713]/40 flex flex-col items-center justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
        <div className="w-16 h-[2px] bg-[#628B35] mx-auto mb-6 rounded-full" />
        <h3 className="text-2xl font-bold text-white mb-3 text-center drop-shadow-lg" style={{ fontFamily: 'Cormorant, serif' }}>
          {title}
        </h3>
        <p className="text-white/90 text-center leading-relaxed drop-shadow">
          {description}
        </p>
      </div>
    </div>
  );
}