'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface RelatedProductsProps {
  currentSlug: string;
  allProducts: Product[];
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentSlug, allProducts }) => {
  const related = allProducts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-[#F7F5F1] border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-1">
              EXPAND YOUR SYSTEM
            </div>
            <h3 className="font-sans text-2xl font-bold text-navy-900">
              Related KROMSTEEL Organizers
            </h3>
          </div>
          <Link
            href="/#products-section"
            className="text-xs font-bold text-navy-900 uppercase tracking-wider hover:text-gold-600 transition-colors mt-2 sm:mt-0"
          >
            View All Range →
          </Link>
        </div>

        {/* 3 Related Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((prod) => (
            <Link
              key={prod.id}
              href={`/products/${prod.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-border-light shadow-subtle hover:shadow-card hover:border-gold-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                <Image
                  src={prod.images[0]}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold-600">
                  {prod.category}
                </div>
                <h4 className="font-sans text-base font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {prod.name}
                </h4>
                <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                  {prod.tagline}
                </p>
                <div className="pt-3 text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center space-x-1 group-hover:text-gold-600">
                  <span>Explore Product</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
