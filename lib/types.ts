export interface ProductSpec {
  materialGrade: string;
  dimensions: string;
  tierConfiguration: string;
  loadCapacity: string;
  finish?: string;
  mountingType?: string;
  warranty?: string;
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
  features: string[];
  leadTime?: string;
  isFeatured?: boolean;
  priceNote?: string;
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
