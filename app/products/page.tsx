'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { ArrowRight, Filter } from 'lucide-react';

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categorySlug === selectedCategory);

  return (
    <div className="pt-28 pb-20 bg-[#F7F5F1]">
      {/* Breadcrumb Bar */}
      <div className="bg-cream-100/60 border-b border-border-light py-4 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs font-medium text-charcoal-600">
            <Link href="/" className="hover:text-navy-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-navy-900 font-bold">Products Catalog</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              FACTORY DIRECT CATALOG
            </span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-navy-900">
            Complete Triangle Product Catalog
          </h1>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            Browse our full range of SS 304 wire baskets, thali racks, and utility trolleys manufactured by JAY AMBE INDUSTRIES. Select any product to view technical blueprints & specifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all ${
              selectedCategory === 'all'
                ? 'bg-navy-900 text-white shadow'
                : 'bg-white text-navy-900 border border-border-light hover:border-gold-400'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.categorySlug === cat.slug).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-navy-900 text-white shadow'
                    : 'bg-white text-navy-900 border border-border-light hover:border-gold-400'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <Link
              key={prod.id}
              href={`/products/${prod.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-border-light shadow-subtle hover:shadow-card hover:border-gold-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                <Image
                  src={prod.images[0]}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-gold-600 text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-sm">
                  {prod.category}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-sans text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                    {prod.tagline}
                  </p>
                  <div className="pt-2 text-[11px] text-charcoal-700 space-y-1">
                    <div className="flex justify-between">
                      <span className="font-semibold text-navy-900">Grade:</span>
                      <span>{prod.specs.materialGrade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-navy-900">Capacity:</span>
                      <span>{prod.specs.loadCapacity}</span>
                    </div>
                  </div>
                </div>

                {/* View Product Specs Button */}
                <div className="pt-3 border-t border-border-light/60">
                  <div className="inline-flex items-center justify-between w-full bg-cream-100 group-hover:bg-navy-900 group-hover:text-white text-navy-900 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all duration-200">
                    <span>View Product Specs & Blueprints</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
