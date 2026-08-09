'use client';

import React from 'react';
import Image from 'next/image';

export const CraftSection: React.FC = () => {
  return (
    <section id="craft-section" className="py-20 md:py-28 bg-[#F7F5F1] border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Factory Manufacturing Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-card border border-border-light bg-white aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                alt="JAY AMBE INDUSTRIES State of the Art Manufacturing Factory Floor"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-navy-900/80 backdrop-blur-md p-4 rounded-lg text-white border border-white/10">
                <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase">Factory Precision Engineering</p>
                <p className="text-xs text-gray-200 mt-1">Laser cutting & robotic welding facility operating under ISO 9001 standards.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Paragraph, 3 Spec Chips */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                OUR CRAFT & QUALITY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Engineered for Modern Culinary Sanctuaries
            </h2>

            {/* Paragraph */}
            <p className="text-base text-charcoal-600 leading-relaxed">
              For over two decades, JAY AMBE INDUSTRIES has been at the forefront of manufacturing high-performance kitchen storage utilities under the brand name Triangle. Operating from our advanced manufacturing facility, we specialize in food-grade SS 304 stainless steel, heavy-duty wire structures, and premium trolleys for modern homes.
            </p>

            {/* 3 Spec Chips Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* Chip 1 */}
              <div className="bg-white p-4 rounded-lg border border-border-light shadow-subtle hover:border-gold-400 transition-colors">
                <div className="text-sm font-bold text-navy-900 mb-1">
                  SS 304 Grade
                </div>
                <div className="text-xs text-charcoal-600 leading-normal">
                  Rust-proof architectural kitchen-grade steel built for high moisture environments.
                </div>
              </div>

              {/* Chip 2 */}
              <div className="bg-white p-4 rounded-lg border border-border-light shadow-subtle hover:border-gold-400 transition-colors">
                <div className="text-sm font-bold text-navy-900 mb-1">
                  Handwoven Rattan
                </div>
                <div className="text-xs text-charcoal-600 leading-normal">
                  Natural rattan baskets on robust wooden frames for breathable produce storage.
                </div>
              </div>

              {/* Chip 3 */}
              <div className="bg-white p-4 rounded-lg border border-border-light shadow-subtle hover:border-gold-400 transition-colors">
                <div className="text-sm font-bold text-navy-900 mb-1">
                  Chrome-Plated Wire
                </div>
                <div className="text-xs text-charcoal-600 leading-normal">
                  Multi-layer chrome plating engineered for maximum scratch resistance and durability.
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
