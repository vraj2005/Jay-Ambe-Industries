import React from 'react';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { WhyUs } from '@/components/WhyUs';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <WhyUs />
      <ContactSection />
    </>
  );
}
