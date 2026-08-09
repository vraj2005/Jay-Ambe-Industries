import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ProductGallery } from '@/components/ProductGallery';
import { SpecTable } from '@/components/SpecTable';
import { RelatedProducts } from '@/components/RelatedProducts';
import { ProductActions } from '@/components/ProductActions';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductDetailPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: 'Product Not Found | Triangle',
    };
  }

  return {
    title: `${product.name} | Triangle by JAY AMBE INDUSTRIES`,
    description: product.tagline,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

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
            <Link href="/products" className="hover:text-navy-900 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-navy-900 font-bold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-gold-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products Catalog</span>
        </Link>

        {/* 2-Column Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Details, Features, & Actions */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header info */}
            <div className="space-y-3 border-b border-border-light pb-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  {product.category}
                </span>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-gold-700 font-semibold">
                {product.tagline}
              </p>

              <div className="inline-block bg-cream-100 border border-gold-300/60 text-navy-900 text-xs font-medium px-3 py-1.5 rounded-md mt-2">
                {product.priceNote || 'Price Available on Request — Factory Quotation Desk'}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                Product Description
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features Bullet List */}
            <div className="space-y-3 bg-white p-6 rounded-xl border border-border-light shadow-subtle">
              <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Key Performance Features
              </h3>
              <div className="space-y-2.5">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-charcoal-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <ProductActions productName={product.name} />

            {product.leadTime && (
              <div className="text-xs text-charcoal-600 flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>{product.leadTime}</span>
              </div>
            )}

          </div>

        </div>

        {/* Specifications Table Section */}
        <div className="mt-16">
          <SpecTable specs={product.specs} />
        </div>

      </div>

      {/* Related Products Carousel / Grid */}
      <RelatedProducts currentSlug={product.slug} allProducts={PRODUCTS} />
    </div>
  );
}
