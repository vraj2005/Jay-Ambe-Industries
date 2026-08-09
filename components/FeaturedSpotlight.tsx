'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const SPOTLIGHT_IMAGES = [
  '/product-images/PRP-Plain-Basket-101-6.jpg',
  '/product-images/PRP-Plain-Basket-101-4.jpg',
  '/product-images/PRP-Plain-Basket-101-8.jpg',
];

export const FeaturedSpotlight: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F7F5F1] border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              FEATURED OPEN SPOTLIGHT
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-navy-900">
            Triangle Plain Wire Basket (PRP-101)
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 sm:p-10 rounded-2xl border border-border-light shadow-card">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-100 border border-border-light">
              <Image
                src={SPOTLIGHT_IMAGES[selectedImage]}
                alt="Triangle Plain Wire Basket"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                className="object-cover transition-opacity duration-300"
              />
            </div>

            {/* 3 Thumbnails Strip */}
            <div className="grid grid-cols-3 gap-3">
              {SPOTLIGHT_IMAGES.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-gold-500 ring-2 ring-gold-400/30'
                      : 'border-border-light opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`View spotlight thumbnail ${index + 1}`}
                >
                  <Image
                    src={imgUrl}
                    alt={`Thumbnail view ${index + 1}`}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Spotlight Details & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-sans text-2xl font-bold text-navy-900 mb-2">
                Triangle Premium Wire Base
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Fabricated by JAY AMBE INDUSTRIES, this plain wire basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 304 stainless steel wires, it provides maximum storage and ventilation.
              </p>
            </div>

            {/* Spec Table */}
            <div className="border border-border-light rounded-lg overflow-hidden divide-y divide-border-light text-xs sm:text-sm">
              <div className="grid grid-cols-12 bg-cream-50 p-3">
                <div className="col-span-5 font-bold text-navy-900">Material Grade</div>
                <div className="col-span-7 text-charcoal-800 font-medium">
                  Commercial SS 304 (18/8 Stainless Steel Wire)
                </div>
              </div>

              <div className="grid grid-cols-12 bg-white p-3">
                <div className="col-span-5 font-bold text-navy-900">Dimensions</div>
                <div className="col-span-7 text-charcoal-800">
                  450mm, 600mm, 750mm, 900mm Widths
                </div>
              </div>

              <div className="grid grid-cols-12 bg-cream-50 p-3">
                <div className="col-span-5 font-bold text-navy-900">Tier Configuration</div>
                <div className="col-span-7 text-charcoal-800">
                  Single Deep Wire Deck Unit
                </div>
              </div>

              <div className="grid grid-cols-12 bg-white p-3">
                <div className="col-span-5 font-bold text-navy-900">Load Capacity</div>
                <div className="col-span-7 text-charcoal-800">
                  Certified up to 40 kg per basket
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact-section"
                onClick={scrollToContact}
                className="bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-sm shadow transition-colors"
              >
                Request Price Sheet
              </a>

              <div className="inline-flex items-center space-x-2 text-xs text-charcoal-600 font-medium">
                <svg className="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Standard Lead Time: 3-5 Days</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
