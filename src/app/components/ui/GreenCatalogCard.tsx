import React from 'react';

interface GreenCatalogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export function GreenCatalogCard({ title, description, imageUrl, altText }: GreenCatalogCardProps) {
  return (
    <div className="group relative aspect-auto h-full overflow-hidden rounded-xl bg-white border border-[#d1c7bc] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col transform perspective-1000">
      {/* Image with 3D flip effect */}
      <div className="w-full h-full overflow-hidden flex-shrink-0 transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
        <div className="w-full h-full">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Back side with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#628B35]/80 to-[#103713]/90 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-y-180 group-hover:rotate-y-0">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
          <div className="relative w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
          {title}
        </h3>
        <p className="text-white/90 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}