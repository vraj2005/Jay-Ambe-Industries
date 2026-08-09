'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  return (
    <section id="products-section" className="py-20 md:py-28 bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 space-y-4 md:space-y-0">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                PRODUCT CATEGORIES
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-navy-900">
              Industrial Grade Storage Categories
            </h2>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Explore our specialized manufacturing categories. Select any category to view all engineered products fabricated under that specification.
            </p>
          </div>

          <div>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};
