'use client';

import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6">
            
            {/* Eyebrow label */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                PREMIUM ARCHITECTURAL HARDWARE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12]">
              Premium Stainless Steel <br className="hidden sm:inline" />
              Kitchen Storage Solutions
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl font-normal leading-relaxed">
              Durable, elegant, and space-saving kitchen organizers built to last.
              Engineered with commercial-grade SS 304 for modern home efficiency.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products-section"
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Explore Products
              </a>
              <a
                href="#contact-section"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center border border-navy-900/30 text-navy-900 hover:bg-navy-900 hover:text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all duration-200"
              >
                Get a Quote
              </a>
            </div>

            {/* 3 Stat Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-light max-w-xl">
              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">
                  SS 304
                </div>
                <div className="text-xs sm:text-sm text-charcoal-600 font-medium">
                  Certified Grade
                </div>
              </div>

              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-charcoal-600 font-medium">
                  Rust Resistant
                </div>
              </div>

              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">
                  25+ Yrs
                </div>
                <div className="text-xs sm:text-sm text-charcoal-600 font-medium">
                  Industry Experience
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border-light bg-white aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/hero_section_kitchen_photo.webp"
                alt="Triangle Premium Stainless Steel Kitchen Storage Solution by JAY AMBE INDUSTRIES"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg border border-border-light shadow-sm flex items-center space-x-3">
                <div className="w-9 h-9 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Architectural Grade SS 304</div>
                  <div className="text-[10px] text-charcoal-600 font-medium">Precision German Soft-Close Motion</div>
                </div>
              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-200/30 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
