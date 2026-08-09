'use client';

import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

interface ProductActionsProps {
  productName: string;
}

export const ProductActions: React.FC<ProductActionsProps> = ({ productName }) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Spec Sheet PDF for "${productName}" download initiated.`);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <Link
        href="/#contact-section"
        className="flex-1 min-w-[200px] text-center bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold uppercase tracking-wider py-4 rounded-sm shadow-md transition-colors"
      >
        Request Quote
      </Link>

      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex items-center justify-center space-x-2 border border-navy-900/30 text-navy-900 hover:bg-navy-900 hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-sm transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Download Spec Sheet</span>
      </button>
    </div>
  );
};
