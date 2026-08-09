'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-section';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F1]/90 backdrop-blur-md shadow-subtle border-b border-border-light/80 py-4.5'
          : 'bg-[#F7F5F1] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/logo/triangle_logo_cropped.png"
                alt="Triangle Brand Logo"
                fill
                priority
                className="object-contain object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-extrabold tracking-wider text-navy-900 leading-tight">
                Triangle
              </span>
              <span className="text-[9px] font-bold tracking-widest text-gold-600 uppercase leading-none">
                JAY AMBE INDUSTRIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-charcoal-800">
            <Link
              href="/"
              className="hover:text-navy-900 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-navy-900 transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-navy-900 transition-colors duration-200"
            >
              About & Terms
            </Link>
            <Link
              href="/#why-us-section"
              className="hover:text-navy-900 transition-colors duration-200"
            >
              Why Us
            </Link>
            <Link
              href="/#contact-section"
              className="hover:text-navy-900 transition-colors duration-200"
            >
              Custom Orders
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact-section"
              onClick={scrollToContact}
              className="bg-navy-900 text-white hover:bg-navy-800 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-navy-900 p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F5F1] border-b border-border-light px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-navy-900 py-1"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-navy-900 py-1"
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-navy-900 py-1"
          >
            About & Terms
          </Link>
          <Link
            href="/#why-us-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-navy-900 py-1"
          >
            Why Us
          </Link>
          <Link
            href="/#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-navy-900 py-1"
          >
            Custom Orders
          </Link>
          <div className="pt-2">
            <a
              href="#contact-section"
              onClick={(e) => {
                setMobileMenuOpen(false);
                scrollToContact(e);
              }}
              className="block text-center bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
