'use client';

import React from 'react';
import { WHY_US_ITEMS } from '@/data/products';
import { ShieldCheck, Sliders, Maximize2, Ruler } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-gold-600" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-gold-600" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6 text-gold-600" />;
      case 'Ruler':
        return <Ruler className="w-6 h-6 text-gold-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-gold-600" />;
    }
  };

  return (
    <section id="why-us-section" className="py-20 md:py-28 bg-[#F7F5F1] border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              ENGINEERING INTEGRITY
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-navy-900">
            Why Global Architects Specify Triangle
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl border border-border-light shadow-subtle hover:border-gold-400/80 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gold-50/80 border border-gold-200/60 rounded-lg flex items-center justify-center">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-sans text-lg font-bold text-navy-900">
                  {item.title}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
