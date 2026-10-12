'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Building2,
  User,
  ArrowRight,
  ExternalLink,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
  AlertCircle,
  Share2,
  Navigation,
  Check,
} from 'lucide-react';

interface ContactFormState {
  fullName: string;
  organization: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
}

const QUICK_TOPICS = [
  'Custom Basket Dimensions',
  'Modular Kitchen Setup',
  'Bulk Dealer Inquiry',
  'Catalog & Price List',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    organization: '',
    phoneNumber: '',
    emailAddress: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleQuickTopicClick = (topic: string) => {
    setFormData((prev) => {
      const current = prev.message.trim();
      if (!current) {
        return { ...prev, message: `Hi, I am reaching out regarding: ${topic}. ` };
      }
      if (current.includes(topic)) return prev;
      return { ...prev, message: `${current}\n• Regarding: ${topic}` };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || 'Something went wrong while sending your note. Please try again or WhatsApp us!'
        );
      }

      setSuccessMessage(
        data.message ||
          `Thank you ${formData.fullName}! Your note just reached our desk. We sent a confirmation to your email too.`
      );
      setFormData({
        fullName: '',
        organization: '',
        phoneNumber: '',
        emailAddress: '',
        message: '',
      });
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          'Could not reach the server right now. Feel free to message us directly on WhatsApp!'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-[#F7F5F1] text-charcoal-900 selection:bg-gold-500 selection:text-white">
      
      {/* 1. Compact Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-b from-[#F0EDF6]/40 via-[#F7F5F1] to-[#F7F5F1] border-b border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight"
          >
            Let&apos;s get connected.
            <br />
            <span className="text-gold-600">Let&apos;s exchange our thoughts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto leading-relaxed"
          >
            We are always here to talk about your kitchen requirements, custom baskets, or any questions you have. Choose the way you want to talk to us below.
          </motion.p>
        </div>
      </section>

      {/* 2. Ways to Connect With Us Section (Compact 4 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="space-y-1.5 mb-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-bold uppercase tracking-widest text-gold-600"
          >
            Communication Channels
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900"
          >
            Ways to connect with us
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* 1. Mobile Number */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white p-5 rounded-2xl border border-border-light shadow-subtle hover:border-gold-300 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-700 shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-sans text-base font-bold text-navy-900">
                  Call Us Directly
                </h3>
                <p className="text-xs text-charcoal-500 leading-snug">
                  Ready to hear you, Monday to Saturday.
                </p>
              </div>
              <div className="pt-1 text-xs sm:text-sm font-bold text-navy-900 space-y-0.5">
                <a
                  href="tel:+918160934696"
                  className="block hover:text-gold-700 transition-colors"
                >
                  +91 8160934696
                </a>
                <a
                  href="tel:+919925372296"
                  className="block hover:text-gold-700 transition-colors"
                >
                  +91 9925372296
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="tel:+918160934696"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-700 hover:text-navy-900 transition-colors"
              >
                <span>Call now</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* 2. Mail */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white p-5 rounded-2xl border border-border-light shadow-subtle hover:border-gold-300 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-700 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-sans text-base font-bold text-navy-900">
                  Send an Email
                </h3>
                <p className="text-xs text-charcoal-500 leading-snug">
                  Drop your requirements, will get back within a day.
                </p>
              </div>
              <div className="pt-1 text-xs font-bold text-navy-900 break-all">
                <a
                  href="mailto:popatjaydeep21@gmail.com"
                  className="hover:text-gold-700 transition-colors"
                >
                  popatjaydeep21@gmail.com
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="mailto:popatjaydeep21@gmail.com"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-700 hover:text-navy-900 transition-colors"
              >
                <span>Write an email</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* 3. WhatsApp */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white p-5 rounded-2xl border border-border-light shadow-subtle hover:border-emerald-300 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-sans text-base font-bold text-navy-900">
                  WhatsApp Us
                </h3>
                <p className="text-xs text-charcoal-500 leading-snug">
                  Just click it, we will handle remaining all.
                </p>
              </div>
              <div className="pt-1 text-xs font-bold text-emerald-800">
                +91 8160934696
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://wa.me/918160934696?text=Hello%20Jay%20Ambe%20Industries,%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                <span>Start chat</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* 4. Social Platforms */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white p-5 rounded-2xl border border-border-light shadow-subtle hover:border-gold-300 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-700 shadow-sm">
                <Share2 className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-sans text-base font-bold text-navy-900">
                  See Our Work
                </h3>
                <p className="text-xs text-charcoal-500 leading-snug">
                  Follow us across multiple platforms for photos and updates.
                </p>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-cream-100 hover:bg-pink-50 border border-border-light hover:border-pink-300 flex items-center justify-center text-charcoal-700 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-cream-100 hover:bg-blue-50 border border-border-light hover:border-blue-300 flex items-center justify-center text-charcoal-700 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-cream-100 hover:bg-blue-50 border border-border-light hover:border-blue-300 flex items-center justify-center text-charcoal-700 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-cream-100 hover:bg-red-50 border border-border-light hover:border-red-300 flex items-center justify-center text-charcoal-700 hover:text-red-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-700 hover:text-navy-900 transition-colors"
              >
                <span>Visit social pages</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. SIDE BY SIDE: Location Map (Left) + Form (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column (5 cols): Compact Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white rounded-3xl border border-border-light shadow-card overflow-hidden flex flex-col"
          >
            {/* Header info */}
            <div className="p-5 sm:p-6 border-b border-border-light space-y-2">
              <div className="inline-flex items-center space-x-1.5 text-gold-600 text-[11px] font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Our Factory Location</span>
              </div>
              <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900 leading-snug">
                See the location, so you know where to reach.
              </h2>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Plot No-13, Revenue survey no-9, Shivay Industrial Area-A, Lothda, Rajkot, Gujarat - 360024.
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/E7Y5b1tmSYNCEL9P8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] bg-cream-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14778.972405820774!2d70.81521518715819!3d22.1738489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39584b4d4d6b62d5%3A0x2fe362123143d179!2sJAY%20AMBEY%20INDUSTRIES!5e0!3m2!1sen!2sus!4v1791821662992!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="JAY AMBEY INDUSTRIES Location Map"
                className="w-full h-full"
              />
            </div>

            {/* Practical Notes Footer */}
            <div className="p-4 bg-[#FDFBF7] border-t border-border-light space-y-1.5 text-[11px] text-charcoal-600">
              <div className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                <span>Heavy vehicle and truck access available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                <span>Direct factory pickup and sample view room</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Compact Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-border-light shadow-card relative"
          >
            {/* Form Header */}
            <div className="mb-5 pb-4 border-b border-border-light">
              <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900">
                Be our next happy customer
              </h2>
            </div>

            {/* Feedback Banners */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1.5"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <h4 className="font-bold text-xs">Thank you, we received your details!</h4>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed pl-6">
                    {successMessage}
                  </p>
                  <div className="pl-6 pt-0.5">
                    <button
                      type="button"
                      onClick={() => setSuccessMessage(null)}
                      className="text-xs font-semibold text-emerald-950 underline hover:no-underline"
                    >
                      Need to send another query? Click here
                    </button>
                  </div>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start space-x-2.5"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <span className="font-bold block">Could not send your message</span>
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Full Name & Organization Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-navy-900"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g., Rajesh Patel"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-cream-50 border border-border-light rounded-xl text-xs sm:text-sm text-navy-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    />
                  </div>
                </div>

                {/* Organization Name */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="organization"
                      className="block text-xs font-bold uppercase tracking-wider text-navy-900"
                    >
                      Organization
                    </label>
                    <span className="text-[10px] text-charcoal-400 font-medium">
                      (Optional)
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g., Patel Modular or Homeowner"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-cream-50 border border-border-light rounded-xl text-xs sm:text-sm text-navy-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Row 2: Contact Number & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Contact Number */}
                <div className="space-y-1">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-bold uppercase tracking-wider text-navy-900"
                  >
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-cream-50 border border-border-light rounded-xl text-xs sm:text-sm text-navy-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label
                    htmlFor="emailAddress"
                    className="block text-xs font-bold uppercase tracking-wider text-navy-900"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      required
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="rajesh@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-cream-50 border border-border-light rounded-xl text-xs sm:text-sm text-navy-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Requirements / Message */}
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-navy-900"
                >
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Basket types, cabinet sizes, quantities, or general questions..."
                  className="w-full p-3 bg-cream-50 border border-border-light rounded-xl text-xs sm:text-sm text-navy-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all resize-y"
                ></textarea>

                {/* Quick Suggestion Pills */}
                <div className="pt-1.5 space-y-1.5">
                  <span className="text-[10px] font-semibold text-charcoal-500 uppercase tracking-wider block">
                    Quickly add a topic to your message:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_TOPICS.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => handleQuickTopicClick(topic)}
                        className="text-xs px-2.5 py-1 rounded-full bg-cream-100 hover:bg-gold-50 border border-border-light hover:border-gold-300 text-charcoal-800 transition-all duration-150 flex items-center space-x-1"
                      >
                        <span>+</span>
                        <span>{topic}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center space-x-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all duration-200 shadow-card hover:shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending your requirements...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Requirements</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              <p className="text-[10px] text-charcoal-400 text-center leading-relaxed">
                Both you and our team will receive an email confirmation.
              </p>

            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
