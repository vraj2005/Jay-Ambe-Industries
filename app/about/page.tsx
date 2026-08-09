import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, CreditCard, Factory, Award, CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'About Us & Payment Terms | Triangle Kitchen Storage Solutions by JAY AMBE INDUSTRIES',
  description: 'Learn about JAY AMBE INDUSTRIES manufacturing heritage, Triangle brand quality standards, and commercial payment conditions.',
};

export default function AboutPage() {
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
            <span className="text-navy-900 font-bold">About Us & Commercial Terms</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-gold-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Company Overview Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                MANUFACTURING HERITAGE
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
              About Triangle Storage Solutions
            </h1>

            <p className="text-base text-charcoal-600 leading-relaxed">
              For over two decades, JAY AMBE INDUSTRIES has been a pioneer in engineering and fabricating commercial-grade <strong>SS 304 stainless steel kitchen storage systems</strong> under the brand name <strong>Triangle</strong>. Operating from our state-of-the-art manufacturing facility, we serve architects, interior designers, modular kitchen manufacturers, and enterprise clients worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-border-light shadow-subtle flex items-start space-x-3">
                <Factory className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Direct Factory Producer</h4>
                  <p className="text-xs text-charcoal-600">Laser cutting, precision bending & robotic welding.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-border-light shadow-subtle flex items-start space-x-3">
                <Award className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900">SS 304 Certified</h4>
                  <p className="text-xs text-charcoal-600">100% rust-resistant commercial food-grade steel.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-border-light bg-cream-100">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
              alt="JAY AMBE INDUSTRIES Manufacturing Factory Floor"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* PAYMENT CONDITION SECTION (HIGHLIGHTED) */}
        <div id="payment-terms" className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-elevated border border-navy-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-navy-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-gold-400">
                <CreditCard className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">COMMERCIAL TERMS</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white">
                Official Payment Terms & Conditions
              </h2>
            </div>
            <div className="mt-4 sm:mt-0 bg-navy-800 text-gold-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-md border border-gold-500/30">
              Standard Factory Policy
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Advance Payment Block */}
            <div className="bg-navy-800/90 p-8 rounded-2xl border border-gold-500/40 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 font-extrabold text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Phase 1
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gold-400">
                90% to 95%
              </div>
              <h3 className="font-sans text-xl font-bold text-white">
                Advance Payment Upon Order Confirmation
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                To initiate custom raw material allocation, SS 304 sheet laser cutting, and precision fabrication work, an advance deposit of <strong>90% to 95%</strong> of the total quotation dossier value is required upon technical blueprint approval.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Locks in raw steel pricing & production queue.</span>
              </div>
            </div>

            {/* Remaining Payment Block */}
            <div className="bg-navy-800/90 p-8 rounded-2xl border border-white/10 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white/20 text-white font-extrabold text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Phase 2
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                5% to 10%
              </div>
              <h3 className="font-sans text-xl font-bold text-white">
                Balance Payment After Delivery of Goods
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                The remaining balance payment of <strong>5% to 10%</strong> is payable immediately upon the successful delivery of goods to the client's specified site or destination address.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Payable upon physical receipt and verification of shipment.</span>
              </div>
            </div>

          </div>

          {/* Payment Note Summary */}
          <div className="bg-navy-950 p-6 rounded-xl border border-navy-800 text-xs text-gray-300 leading-relaxed">
            <strong className="text-gold-400">Summary Note:</strong> Orders are fabricated according to approved custom CAD drawings or standard modular specifications. The 90%–95% advance ensures prioritized production scheduling, while the remaining 5%–10% balance is settled after physical delivery of the shipment.
          </div>
        </div>

        {/* Quality Guarantee Block */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-border-light shadow-subtle space-y-6">
          <h3 className="font-sans text-2xl font-bold text-navy-900">
            Quality Assurance & Fabrication Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-charcoal-700">
            <div className="space-y-2">
              <h4 className="font-bold text-navy-900">100% SS 304 Grade Certified</h4>
              <p className="text-charcoal-600 leading-relaxed">
                Every batch of steel plate and wire undergoes lab testing for 18% Chromium and 8% Nickel content to guarantee lifetime rust resistance.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-navy-900">Custom Dimensions Available</h4>
              <p className="text-charcoal-600 leading-relaxed">
                We re-engineer drawer baskets and pantry units to match non-standard architectural cabinet blueprints with zero compromise on motion smoothness.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-navy-900">Factory Support</h4>
              <p className="text-charcoal-600 leading-relaxed">
                Our engineering sales desk provides technical advice, installation guidance, and post-delivery assistance for bulk project implementations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
