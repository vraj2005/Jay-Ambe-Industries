import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) {
    return {
      title: 'Category Not Found | KROMSTEEL',
    };
  }

  return {
    title: `${category.name} | KROMSTEEL Kitchen Storage`,
    description: category.description,
  };
}

export default function CategoryDetailPage({ params }: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

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
            <Link href="/#products-section" className="hover:text-navy-900 transition-colors">
              Categories
            </Link>
            <span>/</span>
            <span className="text-navy-900 font-bold">{category.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-gold-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Categories</span>
        </Link>

        {/* Category Header Banner */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-border-light shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                CATEGORY RANGE
              </span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-navy-900">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-gold-700 font-semibold">
              {category.tagline}
            </p>
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-3xl">
              {category.description}
            </p>
          </div>

          <div className="lg:col-span-4 relative aspect-[4/3] rounded-xl overflow-hidden border border-border-light bg-cream-100">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Products List under this Category */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border-light pb-4">
            <h2 className="font-sans text-2xl font-bold text-navy-900">
              Products in {category.name} ({categoryProducts.length})
            </h2>
            <span className="text-xs font-medium text-charcoal-600">
              Click any product to view technical blueprints & specifications
            </span>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="bg-white p-10 rounded-xl text-center border border-border-light">
              <p className="text-sm text-charcoal-600">No products currently listed under this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((prod) => (
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-navy-900/80 text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded-sm">
                      SS 304 Certified
                    </div>
                  </div>

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
          )}
        </div>
      </div>
    </div>
  );
}
