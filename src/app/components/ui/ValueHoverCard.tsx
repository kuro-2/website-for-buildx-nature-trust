import React from 'react';

interface ValueHoverCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export function ValueHoverCard({ title, description, imageUrl, altText }: ValueHoverCardProps) {
  return (
    <div className="group relative aspect-auto h-full overflow-hidden rounded-xl bg-white border border-[#d1c7bc] cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Image that shows initially */}
      <div className="w-full h-full overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF5]/60 to-[#FFFDF5]/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-12 h-[1px] bg-[#628B35] mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-[#103713] mb-4 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
          {title}
        </h3>
        <p className="text-[#103713]/70 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}