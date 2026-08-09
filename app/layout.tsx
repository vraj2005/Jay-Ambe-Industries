import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Triangle | Premium SS 304 Kitchen Storage Solutions by JAY AMBE INDUSTRIES',
  description: 'Durable, elegant, and space-saving kitchen organizers built to last. Engineered with commercial-grade SS 304 for modern home efficiency.',
  keywords: [
    'Stainless Steel Kitchen Baskets',
    'SS 304 Kitchen Storage',
    'Modular Kitchen Hardware',
    'Triangle Kitchen Baskets',
    'Utility Trolleys',
    'JAY AMBE INDUSTRIES',
  ],
  authors: [{ name: 'JAY AMBE INDUSTRIES' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F7F5F1] text-charcoal-900 antialiased selection:bg-gold-500 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
