'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-navy-800">
          
          {/* Brand Info (2 columns wide) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-16 h-16 flex-shrink-0 bg-white/10 rounded p-0.5 flex items-center justify-center">
                <Image
                  src="/logo/triangle_logo_cropped.png"
                  alt="Triangle Brand Logo"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-lg font-extrabold tracking-wider text-white leading-tight">
                  Triangle
                </span>
                <span className="text-[9px] font-bold tracking-widest text-gold-400 uppercase leading-none">
                  JAY AMBE INDUSTRIES
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Premium kitchen storage utilities fabricated with commercial-grade SS 304 by JAY AMBE INDUSTRIES under the brand name Triangle.
            </p>

            <div className="p-4 rounded-lg bg-navy-800/60 border border-gold-500/25 max-w-sm">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                Payment Condition
              </h5>
              <p className="text-[11px] text-gray-300 mt-1 leading-normal">
                <strong>90% to 95% Advance Payment</strong> upon order & CAD blueprint confirmation. Remaining <strong>5% to 10% Balance Payment</strong> due immediately after delivery of goods.
              </p>
            </div>
          </div>

          {/* Column 1: Product Range */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Product Range
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/products/ss-pull-out-baskets" className="hover:text-white transition-colors">
                  SS Pull-Out Baskets
                </Link>
              </li>
              <li>
                <Link href="/products/utility-trolleys" className="hover:text-white transition-colors">
                  Utility Trolleys
                </Link>
              </li>
              <li>
                <Link href="/products/wicker-storage-baskets" className="hover:text-white transition-colors">
                  Wicker Storage Baskets
                </Link>
              </li>
              <li>
                <Link href="/products/wire-racks-stands" className="hover:text-white transition-colors">
                  Wire Racks & Stands
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Technical Specs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Technical Specs
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  SS 304 Specs Cert
                </Link>
              </li>
              <li>
                <a href="#why-us-section" className="hover:text-white transition-colors">
                  Drawer Load Testing
                </a>
              </li>
              <li>
                <a href="#why-us-section" className="hover:text-white transition-colors">
                  Weight Limit Testing
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  OEM/ODM Blueprints
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About JAY AMBE & Payment Terms
                </Link>
              </li>
              <li>
                <Link href="/about#payment-terms" className="hover:text-white transition-colors">
                  Commercial Conditions
                </Link>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Enquiry Desk
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Factory Location
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 space-y-4 sm:space-y-0">
          <div>
            © 2026 JAY AMBE INDUSTRIES. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <Link href="/about#payment-terms" className="hover:text-white transition-colors">
              Terms of Fabrication & Payment
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
