export interface SizeChart {
  width: string,
  length: string,
  height: string
}
export interface ProductSpec {
  materialGrade: string;
  dimensions: SizeChart;
  holeType: string;
  finish?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categorySlug: string;
  images: string[];
  specs: ProductSpec;
  useCase: string;
  leadTime?: string;
  priceNote?: string;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Sliders' | 'Maximize2' | 'Ruler';
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  specifications: string;
}
