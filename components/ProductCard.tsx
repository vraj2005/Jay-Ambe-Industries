'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

export const ProductCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-border-light shadow-subtle hover:shadow-card hover:border-gold-400/80 transition-all duration-300 flex flex-col justify-between h-full">
      {/* Category Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-navy-900/85 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-sm">
          {category.itemCount}
        </div>
      </div>

      {/* Category Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="font-sans text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-xs text-charcoal-600 mt-2 leading-relaxed line-clamp-3">
            {category.description}
          </p>
        </div>

        {/* View All Products in Category Link */}
        <div className="pt-3 border-t border-border-light/60">
          <Link
            href={`/categories/${category.slug}`}
            className="inline-flex items-center text-xs font-bold text-navy-900 group-hover:text-gold-600 tracking-wider uppercase transition-colors"
          >
            <span>Explore Category Products</span>
            <svg
              className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform text-gold-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
