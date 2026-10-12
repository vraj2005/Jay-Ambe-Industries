import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Triangle by JAY AMBE INDUSTRIES - Factory Procurement Desk',
  description:
    'Contact JAY AMBE INDUSTRIES for Triangle stainless steel kitchen storage solutions, custom CAD fabrication, dealer partnerships, and factory quotations in Rajkot, Gujarat.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
