import React from 'react';

interface InteractiveCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  className?: string;
}

export function InteractiveCard({ 
  title, 
  description, 
  imageUrl, 
  altText,
  className = ""
}: InteractiveCardProps) {
  return (
    <div className={`group relative aspect-auto h-full overflow-hidden rounded-2xl bg-white border border-[#d1c7bc] cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col ${className}`}>
      {/* Image that shows initially */}
      <div className="w-full h-full overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF5]/70 to-[#FFFDF5]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
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