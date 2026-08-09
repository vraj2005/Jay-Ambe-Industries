'use client';

import React, { useState } from 'react';
import { MapPin, PhoneCall, MessageSquare, Send } from 'lucide-react';
import { ContactFormData } from '@/lib/types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    specifications: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact-section" className="py-20 md:py-28 bg-[#F7F5F1] border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0EDF6]/40 p-8 sm:p-12 rounded-3xl border border-border-light shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Desk Details */}
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  FACTORY DIRECT
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Connect with Our Factory Procurement Desk
              </h2>

              <p className="text-sm text-charcoal-600 leading-relaxed">
                Discuss your kitchen layout specs, bulk order, or custom sizes design requests. Our engineering representatives revert within 4 hours.
              </p>
            </div>

            {/* Address & Phone Info Blocks */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start space-x-4 bg-white p-5 rounded-xl border border-border-light shadow-subtle">
                <div className="w-10 h-10 bg-gold-50 border border-gold-200/60 rounded-lg flex items-center justify-center flex-shrink-0 text-gold-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Head Factory & Central Hub</h4>
                  <p className="text-xs text-charcoal-600 mt-1">Plot 120, Phase II, Industrial Metropole Zone, IN</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-5 rounded-xl border border-border-light shadow-subtle">
                <div className="w-10 h-10 bg-gold-50 border border-gold-200/60 rounded-lg flex items-center justify-center flex-shrink-0 text-gold-600">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Enterprise Sales Desk</h4>
                  <p className="text-xs text-charcoal-600 mt-1">+91 (800) 456-7890 | Toll Free | 24/7 Desk Support</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/918004567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+918004567890"
                className="inline-flex items-center space-x-2 border border-navy-900/30 text-navy-900 hover:bg-navy-900 hover:text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Direct</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-border-light shadow-card">
            <h3 className="font-sans text-xl font-bold text-navy-900 mb-6 pb-4 border-b border-border-light">
              Submit Enquiry Dossier
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl space-y-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                  <Send className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base">Enquiry Dossier Received</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, <strong>{formData.fullName || 'Valued Architect'}</strong>. Our factory procurement desk has queued your enquiry. A technical specialist will contact you within 4 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', phoneNumber: '', emailAddress: '', specifications: '' });
                  }}
                  className="mt-2 text-xs font-bold text-emerald-800 underline uppercase tracking-wider"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="e.g. Arch. Vikram Roy"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-cream-50/50 border border-border-light rounded-md px-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full bg-cream-50/50 border border-border-light rounded-md px-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="emailAddress" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    required
                    placeholder="e.g. vikram@studioarch.com"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full bg-cream-50/50 border border-border-light rounded-md px-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="specifications" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Your Dimension / Cabinet Specifications
                  </label>
                  <textarea
                    id="specifications"
                    rows={4}
                    required
                    placeholder="Specify cabinet widths, basket types, or custom SS 304 requirements..."
                    value={formData.specifications}
                    onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                    className="w-full bg-cream-50/50 border border-border-light rounded-md px-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold uppercase tracking-wider py-3.5 rounded-sm shadow transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Processing Dossier...</span>
                  ) : (
                    <>
                      <span>Submit Quotation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
