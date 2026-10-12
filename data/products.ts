import { Product, Category, WhyUsItem } from '@/lib/types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    slug: 'prp-basket',
    name: 'PRP Baskets',
    tagline: 'Premium PRP baskets designed for organized and efficient kitchen storage.',
    description: 'Durable stainless steel PRP baskets designed for smooth, practical storage in modern kitchen cabinets and modular kitchen systems.',
    image: '/Basket/with_items/PRP_Basket/PRP-Cutlery-Basket-4.webp',
    itemCount: 'Products Available',
  },
  {
    id: 'cat-2',
    slug: 'folding-basket',
    name: 'Folding Baskets',
    tagline: 'Space-saving folding baskets designed for flexible and convenient kitchen storage.',
    description: 'Practical stainless steel folding baskets that provide easy access, efficient space utilization, and convenient storage when installed in modern kitchen cabinets.',
    image: '/Basket/without_items/Folding_Basket/Folding_Basket_items.webp',
    itemCount: 'Products Available',
  },
];

export const PRODUCTS: Product[] = [
  // 1. SS PRP Baskets
  {
    id: 'PRP-basket-1',
    slug: 'plain-basket',
    name: 'Plain Basket',
    tagline: 'SS 202 Plain PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Plain PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Plain-Basket-4.webp',
      '/Basket/without_items/PRP_Basket/PRP-Plain-Basket-4.webp',
      '/Basket/with_items/PRP_Basket/PRP-Plain-Basket-6.webp',
      '/Basket/without_items/PRP_Basket/PRP-Plain-Basket-6.webp',
      '/Basket/with_items/PRP_Basket/PRP-Plain-Basket-8.webp',
      '/Basket/without_items/PRP_Basket/PRP-Plain-Basket-8.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '4,6,8'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'Ideal for storing kitchen essentials such as utensils, cookware, plates, containers, and other daily-use items in modular kitchen cabinets.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-2',
    slug: 'cutlery-basket',
    name: 'Cutlery Basket',
    tagline: 'SS 202 Cutlery PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Cutlery PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Cutlery-Basket-4.webp',
      '/Basket/without_items/PRP_Basket/PRP-Cutlery-Basket-4.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '4'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel modular cutlery basket organizes daily eating utensils, small prep tools, and longer items like rolling pins into dedicated compartments. Designed for smooth modular kitchen drawers, its perforated base ensures hygienic airflow and easy access while cooking.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-3',
    slug: 'cup-saucer-basket',
    name: 'Cup & Saucer Basket',
    tagline: 'SS 202 Cup & Saucer PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Cup & Saucer PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Cup-Saucer-Basket-4.webp',
      '/Basket/without_items/PRP_Basket/PRP-Cup-Basket-4.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '4'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel cup and saucer basket features built-in wire racks to keep tea saucers safely stacked upright and tea cups neatly arranged. Designed for modular kitchen drawers, it offers easy access while protecting delicate stoneware and china from chipping.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-4',
    slug: 'thali-basket',
    name: 'Thali Basket',
    tagline: 'SS 202 Thali PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Thali PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Thali-Basket-8.webp'
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '8'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel thali basket features deep-slotted dividers to keep large dinner plates, thalis, and serving trays organized vertically. Ideal for modular kitchen pull-out drawers, its sturdy frame prevents heavy dinnerware from rattling or chipping while ensuring quick, easy access.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-5',
    slug: 'partition-basket',
    name: 'Partition Basket',
    tagline: 'SS 202 Partition PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Partition PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Partition-Basket-4.webp',
      '/Basket/without_items/PRP_Basket/PRP-Partition-Basket-4.webp',
      '/Basket/with_items/PRP_Basket/PRP-Partition-Basket-6.webp',
      '/Basket/without_items/PRP_Basket/PRP-Partition-Basket-6.webp',
      '/Basket/with_items/PRP_Basket/PRP-Partition-Basket-8.webp',
      '/Basket/without_items/PRP_Basket/PRP-Partition-Basket-8.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '4,6,8'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel partition basket features an adjustable divider to separate bowls, spice jars, and snack packets into organized zones. Designed for deep modular kitchen drawers, it keeps everyday pantry essentials neatly arranged and instantly accessible.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-6',
    slug: 'bottle-basket',
    name: 'Bottle Basket',
    tagline: 'SS 202 Bottle PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Bottle PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Bottle-Basket-6.webp',
      '/Basket/without_items/PRP_Basket/PRP-Bottle-Basket-6.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '6'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel bottle basket is equipped with dedicated wire dividers to hold oil dispensers, sauce bottles, and glass jars securely upright. Designed for modular kitchen drawers, it prevents spills and keep everyday cooking liquids organized and readily accessible.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-7',
    slug: 'plate-basket',
    name: 'Plate Basket',
    tagline: 'SS 202 Plate PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Plate PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Plate-Basket-6.webp',
      '/Basket/without_items/PRP_Basket/PRP-Plate-Basket-6.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '6'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel plate basket features built-in wire racks designed specifically to store medium and small plates vertically. Ideal for modular kitchen pull-out drawers, it holds quarter plates and side dishes securely in place, preventing chipping and ensuring easy everyday access.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-8',
    slug: 'glass-basket',
    name: 'Glass Basket',
    tagline: 'SS 202 Glass PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Glass PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-Glass-Basket-4.webp',
      '/Basket/without_items/PRP_Basket/PRP-Glass-Basket-4.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '6'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel glass basket features grid dividers designed to hold drinking glasses, tumblers, and stainless steel cups securely in place. Built for modular kitchen drawers, it prevents fragile glassware from sliding or clinking, ensuring safe storage and effortless access.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'PRP-basket-9',
    slug: 'pull-out-basket',
    name: 'Pull Out',
    tagline: 'SS 202 Pull Out PRP drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Pull Out PRP basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'PRP Baskets',
    categorySlug: 'prp-basket',
    images: [
      '/Basket/with_items/PRP_Basket/PRP-PullOut-Double.webp',
      '/Basket/without_items/PRP_Basket/PRP-PullOut-Double.webp',
      '/Basket/with_items/PRP_Basket/PRP-PullOut-Triple.webp',
      '/Basket/without_items/PRP_Basket/PRP-PullOut-Triple.webp',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '4,6,8,10,12',
        length: '20,22',
        height: '17,21'
      },
      holeType: 'Square',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel 2/3-tier pull-out organizer fits into narrow, vertical modular kitchen cabinets to maximize tight gaps. It keeps spice jars, seasoning packets, and small prep bowls organized in tiered shelves for smooth, space-saving, and immediate access while cooking.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  //------------------------------------------------
  //Folding
  {
    id: 'Folding-basket-9',
    slug: 'folding-plain-basket',
    name: 'Plain Basket',
    tagline: 'SS 202 Plain Folding drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Plain Folding basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'Folding Baskets',
    categorySlug: 'folding-basket',
    images: [
      '/Basket/with_items/Folding_Basket/Folding-Plain-Basket-4.webp',
      '/Basket/without_items/Folding_Basket/Folding-Plain-Basket-SquareHole-4',
      '/Basket/with_items/Folding_Basket/Folding-Plain-Basket-6.webp',
      '/Basket/with_items/Folding_Basket/Folding-Plain-Basket-8.webp',
      '/Basket/without_items/Folding_Basket/Folding-Plain-Basket-SquareHole-8',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '4,6,8'
      },
      holeType: 'Square & Round',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'Ideal for storing kitchen essentials such as utensils, cookware, plates, containers, and other daily-use items in modular kitchen cabinets.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'Folding-basket-10',
    slug: 'folding-cutlery-basket',
    name: 'Cutlery Basket',
    tagline: 'SS 202 Cutlery Folding drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Cutlery Folding basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'Folding Baskets',
    categorySlug: 'folding-basket',
    images: [
      '/Basket/with_items/Folding_Basket/Folding-Cutlery-Basket-4.webp',
      '/Basket/without_items/Folding_Basket/Folding-Cutlery-Basket-SquareHole-4',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '4'
      },
      holeType: 'Square & Round',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel modular cutlery basket organizes daily eating utensils, small prep tools, and longer items like rolling pins into dedicated compartments. Designed for smooth modular kitchen drawers, its perforated base ensures hygienic airflow and easy access while cooking.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'Folding-basket-11',
    slug: 'folding-cup-saucer-basket',
    name: 'Cup & Saucer Basket',
    tagline: 'SS 202 Cup & Saucer Folding drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Cup & Saucer Folding basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'Folding Baskets',
    categorySlug: 'folding-basket',
    images: [
      '/Basket/with_items/Folding_Basket/Folding-Cup-Basket-4.webp',
      '/Basket/without_items/Folding_Basket/Folding-Cup-Basket-SquareHole-4',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '4'
      },
      holeType: 'Square & Round',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel cup and saucer basket features built-in wire racks to keep tea saucers safely stacked upright and tea cups neatly arranged. Designed for modular kitchen drawers, it offers easy access while protecting delicate stoneware and china from chipping.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'Folding-basket-12',
    slug: 'folding-thali-basket',
    name: 'Thali Basket',
    tagline: 'SS 202 Thali Folding drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Thali Folding basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'Folding Baskets',
    categorySlug: 'folding-basket',
    images: [
      '/Basket/with_items/Folding_Basket/Folding-Thali-Basket-8.webp',
      '/Basket/without_items/Folding_Basket/Folding-Thali-Basket-SquareHole-8',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '8'
      },
      holeType: 'Square & Round',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel thali basket features deep-slotted dividers to keep large dinner plates, thalis, and serving trays organized vertically. Ideal for modular kitchen pull-out drawers, its sturdy frame prevents heavy dinnerware from rattling or chipping while ensuring quick, easy access.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
  {
    id: 'Folding-basket-13',
    slug: 'folding-plate-basket',
    name: 'Plate Basket',
    tagline: 'SS 202 Plate Folding drawer basket with premium mirror chrome finish.',
    description: 'Fabricated by JAY AMBE INDUSTRIES, this Triangle brand Plate Folding basket is engineered for modern modular kitchen cabinets. Crafted with heavy-gauge solid SS 202 stainless steel.',
    category: 'Folding Baskets',
    categorySlug: 'folding-basket',
    images: [
      '/Basket/with_items/Folding_Basket/Folding-Plate-Basket-6.webp',
      '/Basket/without_items/Folding_Basket/Folding-Plate-Basket-SquareHole-6',
    ],
    specs: {
      materialGrade: 'Commercial SS 202',
      dimensions: {
        width: '12,15,17,19,21,23,24',
        length: '20,22',
        height: '8'
      },
      holeType: 'Square & Round',
      finish: 'Mirror Polished Chrome Finish',
    },
    useCase: 'This stainless steel plate basket features built-in wire racks designed specifically to store medium and small plates vertically. Ideal for modular kitchen pull-out drawers, it holds quarter plates and side dishes securely in place, preventing chipping and ensuring easy everyday access.',
    leadTime: 'Standard Lead Time: 3-5 Days',
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 'why-1',
    title: 'Heavy-Duty Casters',
    description: 'Smooth-rolling wheels or heavy-load ball-bearing drawer slides for silent, whisper-quiet slide movement.',
    iconName: 'Sliders',
  },
  {
    id: 'why-2',
    title: 'Space-Saving Modular',
    description: 'Engineered to maximize every inch of dead space inside blind corners and tall vertical kitchen cupboards.',
    iconName: 'Maximize2',
  },
  {
    id: 'why-3',
    title: 'Custom Sizes Available',
    description: 'Re-engineered to custom dimension blueprints matching your specific architectural layout perfectly.',
    iconName: 'Ruler',
  },
];
