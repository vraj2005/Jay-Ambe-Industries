'use client';

import React from 'react';
import { ProductSpec } from '@/lib/types';

interface SpecTableProps {
  specs: ProductSpec;
}

export const SpecTable: React.FC<SpecTableProps> = ({ specs }) => {
  const specRows = [
    { label: 'Material Grade', value: specs.materialGrade },
    { label: 'Dimensions', value: specs.dimensions },
    { label: 'Tier / Configuration', value: specs.tierConfiguration },
    { label: 'Load Capacity', value: specs.loadCapacity },
    { label: 'Surface Finish', value: specs.finish || 'Mirror Polished Chrome / SS 304' },
    { label: 'Mounting Type', value: specs.mountingType || 'Side & Bottom Mount Frame' },
    { label: 'Warranty & Certifications', value: specs.warranty || '10 Year Anti-Corrosion Warranty' },
  ];

  return (
    <div className="bg-white rounded-xl border border-border-light shadow-subtle overflow-hidden">
      <div className="bg-cream-50 px-6 py-4 border-b border-border-light">
        <h3 className="font-sans text-sm font-bold text-navy-900 uppercase tracking-wider">
          Technical Specifications
        </h3>
      </div>
      <div className="divide-y divide-border-light text-xs sm:text-sm">
        {specRows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-12 px-6 py-3.5 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-cream-50/40'
            }`}
          >
            <div className="col-span-5 font-bold text-navy-900">{row.label}</div>
            <div className="col-span-7 text-charcoal-800 font-medium">{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
