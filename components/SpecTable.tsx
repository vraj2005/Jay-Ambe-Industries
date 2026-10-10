'use client';

import React from 'react';
import { ProductSpec } from '@/lib/types';

interface SpecTableProps {
  specs: ProductSpec;
}

export const SpecTable: React.FC<SpecTableProps> = ({ specs }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border-light bg-white shadow-subtle">
      {/* Header */}
      <div className="border-b border-border-light bg-cream-50 px-5 py-3">
        <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy-900">
          Technical Specifications
        </h3>
      </div>

      {/* Main Table */}
      <div className="divide-y divide-border-light">
        {/* Material Grade */}
        <div className="grid grid-cols-12 px-5 py-3">
          <div className="col-span-5 text-xs font-bold text-navy-900 sm:text-sm">
            Material Grade
          </div>

          <div className="col-span-7 text-xs font-medium text-charcoal-800 sm:text-sm">
            {specs.materialGrade}
          </div>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-12 px-5 py-3">
          <div className="col-span-5 text-xs font-bold text-navy-900 sm:text-sm">
            <div>Available Dimensions (width × length)</div>
            <span>-If you need a custom size, we can do it for you, provided it is feasible</span>
          </div>

          <div className="col-span-7">
            <div className="w-full max-w-md overflow-hidden rounded-md border border-border-light">
              <table className="w-full table-fixed text-xs">
                <thead>
                  <tr className="bg-cream-50">
                    <th className="w-1/3 border-r border-border-light px-3 py-2 text-center font-bold text-navy-900">
                      Width
                    </th>
                    <th className="w-1/3 border-r border-border-light px-3 py-2 text-center font-bold text-navy-900">
                      Length
                    </th>
                    <th className="w-1/3 px-3 py-2 text-center font-bold text-navy-900">
                      Height
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="w-1/3 border-r border-border-light px-2 py-2 text-center text-[10px] font-medium text-charcoal-800 sm:px-3 sm:text-xs">
                      <div className="flex flex-wrap justify-center gap-1">
                        {specs.dimensions.width.split(',').map((value) => (
                          <span
                            key={value}
                            className="rounded bg-cream-50 px-1.5 py-0.5"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="w-1/3 border-r border-border-light px-2 py-2 text-center text-[10px] font-medium text-charcoal-800 sm:px-3 sm:text-xs">
                      <div className="flex flex-wrap justify-center gap-1">
                        {specs.dimensions.length.split(',').map((value) => (
                          <span
                            key={value}
                            className="rounded bg-cream-50 px-1.5 py-0.5"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="w-1/3 px-2 py-2 text-center text-[10px] font-medium text-charcoal-800 sm:px-3 sm:text-xs">
                      <div className="flex flex-wrap justify-center gap-1">
                        {specs.dimensions.height.split(',').map((value) => (
                          <span
                            key={value}
                            className="rounded bg-cream-50 px-1.5 py-0.5"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Hole Type */}
        <div className="grid grid-cols-12 px-5 py-3">
          <div className="col-span-5 text-xs font-bold text-navy-900 sm:text-sm">
            Hole Type
          </div>

          <div className="col-span-7 text-xs font-medium text-charcoal-800 sm:text-sm">
            {specs.holeType}
          </div>
        </div>

        {/* Finish */}
        <div className="grid grid-cols-12 px-5 py-3">
          <div className="col-span-5 text-xs font-bold text-navy-900 sm:text-sm">
            Surface Finish
          </div>

          <div className="col-span-7 text-xs font-medium text-charcoal-800 sm:text-sm">
            {specs.finish}
          </div>
        </div>
      </div>
    </div>
  );
};