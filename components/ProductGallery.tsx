'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-border-light shadow-card">
        <Image
          src={images[selectedImage] || images[0]}
          alt={`${productName} Main View`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
          className="object-cover transition-opacity duration-300"
        />
        <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
          SS 304 Certified
        </div>
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((imgUrl, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? 'border-gold-500 ring-2 ring-gold-400/30'
                  : 'border-border-light opacity-75 hover:opacity-100'
              }`}
              aria-label={`View ${productName} image ${index + 1}`}
            >
              <Image
                src={imgUrl}
                alt={`${productName} view ${index + 1}`}
                fill
                sizes="150px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
