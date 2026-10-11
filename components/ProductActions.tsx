'use client';

import React from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface ProductActionsProps {
  productName: string;
  productCategory: string;
  productTagline: string;
  productDescription: string;
  productImage: string;
  materialGrade: string;
  dimensions: string;
  finish?: string;
  productUseCase: string;
  leadTime?: string;
}

export const ProductActions: React.FC<ProductActionsProps> = ({
  productName,
  productCategory,
  productTagline,
  productDescription,
  productImage,
  materialGrade,
  dimensions,
  finish,
  productUseCase,
  leadTime,
}) => {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const imageUrl = `${window.location.origin}${productImage}`;
    const message = [
      'Hello, I would like a quotation for this product:',
      '',
      `Product: ${productName}`,
      `Category: ${productCategory}`,
      `Details: ${productTagline}`,
      `Description: ${productDescription}`,
      `Material: ${materialGrade}`,
      `Dimensions: ${dimensions}`,
      finish ? `Finish: ${finish}` : '',
      '',
      `Product image: ${imageUrl}`,
      `Product page: ${window.location.href}`,
    ].join('\n');

    window.open(
      `https://wa.me/918160934696?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let imageDataUrl: string;
    let imageFormat: 'JPEG' | 'PNG';
    try {
      const imageResponse = await fetch(productImage);
      if (!imageResponse.ok) {
        throw new Error(`Image request failed with status ${imageResponse.status}`);
      }

      const imageBlob = await imageResponse.blob();
      imageFormat = imageBlob.type === 'image/png' ? 'PNG' : 'JPEG';
      imageDataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            resolve(reader.result);
          } else {
            reject(new Error('Product image could not be converted for the PDF'));
          }
        };
        reader.onerror = () => reject(reader.error ?? new Error('Product image could not be read'));
        reader.readAsDataURL(imageBlob);
      });
    } catch (error) {
      console.error('Unable to add the product image to the specification sheet', error);
      alert('The product image could not be loaded. Please try downloading the spec sheet again.');
      return;
    }

    const document = new jsPDF();
    const pageWidth = document.internal.pageSize.getWidth();
    const pageHeight = document.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    const footerY = pageHeight - 14;
    let y = 28;

    const addFooter = () => {
      const pageCount = document.getNumberOfPages();
      for (let page = 1; page <= pageCount; page += 1) {
        document.setPage(page);
        document.setDrawColor(229, 231, 235);
        document.line(margin, footerY - 6, pageWidth - margin, footerY - 6);
        document.setFont('helvetica', 'normal');
        document.setFontSize(8);
        document.setTextColor(107, 114, 128);
        document.text('JAY AMBE INDUSTRIES', margin, footerY);
        document.text(`Page ${page} of ${pageCount}`, pageWidth - margin, footerY, {
          align: 'right',
        });
      }
    };

    const addPage = () => {
      document.addPage();
      y = 25;
    };

    const ensureSpace = (height: number) => {
      if (y + height > footerY - 10) {
        addPage();
      }
    };

    document.setTextColor(16, 24, 39);
    document.setFont('helvetica', 'bold');
    document.setFontSize(22);
    document.text('JAY AMBE INDUSTRIES', margin, y);

    y += 10;
    document.setFontSize(10);
    document.setTextColor(161, 123, 54);
    document.text('TRIANGLE PRODUCT SPECIFICATION SHEET', margin, y);

    y += 16;
    document.setDrawColor(201, 163, 90);
    document.line(margin, y, pageWidth - margin, y);

    y += 14;
    document.setTextColor(16, 24, 39);
    document.setFontSize(18);
    document.setFont('helvetica', 'bold');
    const titleLines = document.splitTextToSize(productName, contentWidth);
    document.text(titleLines, margin, y);
    y += titleLines.length * 8 + 3;

    document.setFontSize(10);
    document.setFont('helvetica', 'normal');
    document.setTextColor(75, 85, 99);
    document.text(productCategory, margin, y);

    y += 12;
    const imageWidth = 95;
    const imageHeight = 62;
    const imageX = (pageWidth - imageWidth) / 2;
    document.addImage(imageDataUrl, imageFormat, imageX, y, imageWidth, imageHeight, undefined, 'FAST');
    y += imageHeight + 8;

    const addSection = (label: string, value: string) => {
      document.setFont('helvetica', 'bold');
      document.setTextColor(16, 24, 39);
      document.setFontSize(10);
      const labelHeight = 9;
      const lines = document.splitTextToSize(value, contentWidth);
      const textHeight = lines.length * 5;
      ensureSpace(labelHeight + textHeight + 9);

      document.text(label.toUpperCase(), margin, y);
      y += 6;
      document.setFont('helvetica', 'normal');
      document.setTextColor(75, 85, 99);
      document.text(lines, margin, y, { lineHeightFactor: 1.35 });
      y += textHeight + 9;
    };

    addSection('Product Details', productTagline);
    addSection('Description', productDescription);
    addSection('Material Grade', materialGrade);
    addSection('Available Dimensions', dimensions);
    if (finish) addSection('Finish', finish);
    addSection('Recommended Use', productUseCase);
    if (leadTime) addSection('Lead Time', leadTime);

    ensureSpace(22);
    document.setDrawColor(229, 231, 235);
    document.line(margin, y, pageWidth - margin, y);
    y += 10;
    document.setFontSize(9);
    document.setTextColor(107, 114, 128);
    const noteLines = document.splitTextToSize(
      'Price available on request. Contact JAY AMBE INDUSTRIES for a factory quotation.',
      contentWidth,
    );
    document.text(noteLines, margin, y, { lineHeightFactor: 1.35 });
    addFooter();

    const fileName = `${productName.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}-spec-sheet.pdf`;
    document.save(fileName);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <a
        href="https://wa.me/918160934696"
        onClick={handleWhatsAppClick}
        aria-label={`Request a WhatsApp quote for ${productName}`}
        className="inline-flex min-w-[200px] flex-1 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="h-4 w-4" />
        <span>WhatsApp Quote</span>
      </a>

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
