import React from 'react';

interface ProgramsPageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export function ProgramsPageCard({ title, description, imageUrl, altText }: ProgramsPageCardProps) {
  return (
    <div className="group relative aspect-auto h-full overflow-hidden rounded-xl bg-white border-2 border-[#d1c7bc] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Image with zoom and blur effect */}
      <div className="w-full h-full overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
        />
      </div>
      
      {/* Overlay with fade-in and slide effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#628B35]/80 via-[#103713]/70 to-[#103713]/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-400 transform scale-75 group-hover:scale-100">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 border-2 border-white/30">
          <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
          {title}
        </h3>
        <p className="text-white/90 text-center leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}