import watch1 from '@/assets/watch-1.jpg';
import watch2 from '@/assets/watch-2.jpg';
import watch3 from '@/assets/watch-3.jpg';
import watch4 from '@/assets/watch-4.jpg';
import watch5 from '@/assets/watch-5.jpg';
import watch6 from '@/assets/watch-6.jpg';

export interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: 'Dress' | 'Sport' | 'Complication' | 'Diver';
  specs: {
    movement: string;
    caseSize: string;
    waterResistance: string;
    strapMaterial: string;
    dialColor: string;
  };
  stock: number;
  isFeatured: boolean;
  rating: number;
  reviews: number;
}

export const watches: Watch[] = [
  {
    id: '1',
    name: 'The Obsidian Diver',
    brand: 'HORLOGER',
    price: 12400,
    description: 'A masterpiece of aquatic engineering. The Obsidian Diver combines 300m water resistance with an elegant ceramic bezel, creating a timepiece that transitions seamlessly from the ocean depths to the evening gala.',
    images: [watch4, watch2, watch1],
    category: 'Diver',
    specs: {
      movement: 'Automatic Cal. H-420',
      caseSize: '42mm',
      waterResistance: '300m',
      strapMaterial: 'Ceramic Bracelet',
      dialColor: 'Ocean Blue',
    },
    stock: 3,
    isFeatured: true,
    rating: 4.9,
    reviews: 47,
  },
  {
    id: '2',
    name: 'Heritage Chronograph',
    brand: 'HORLOGER',
    price: 28000,
    description: 'Inspired by the racing chronographs of the 1960s, the Heritage Chronograph features a column-wheel mechanism and a tachymeter scale. Each piece is hand-assembled by master watchmakers in our Swiss atelier.',
    images: [watch2, watch1, watch4],
    category: 'Sport',
    specs: {
      movement: 'Manual Cal. H-890',
      caseSize: '40mm',
      waterResistance: '100m',
      strapMaterial: 'Steel Bracelet',
      dialColor: 'Onyx Black',
    },
    stock: 5,
    isFeatured: true,
    rating: 4.8,
    reviews: 63,
  },
  {
    id: '3',
    name: 'Rose Éternelle',
    brand: 'MAISON AUREL',
    price: 34500,
    description: 'The Rose Éternelle embodies understated elegance. Its 18k rose gold case houses a hand-guilloché dial that catches light like liquid metal, creating an ever-changing canvas on the wrist.',
    images: [watch3, watch1, watch5],
    category: 'Dress',
    specs: {
      movement: 'Automatic Cal. MA-200',
      caseSize: '38mm',
      waterResistance: '50m',
      strapMaterial: 'Alligator Leather',
      dialColor: 'Champagne',
    },
    stock: 2,
    isFeatured: true,
    rating: 5.0,
    reviews: 28,
  },
  {
    id: '4',
    name: 'Tourbillon Squelette',
    brand: 'ATELIER NOIR',
    price: 89000,
    description: 'A window into the soul of horology. The Tourbillon Squelette reveals its magnificent flying tourbillon through a skeletonized dial, each bridge hand-beveled and polished to perfection over 40 hours.',
    images: [watch5, watch3, watch6],
    category: 'Complication',
    specs: {
      movement: 'Manual Tourbillon Cal. AN-01',
      caseSize: '41mm',
      waterResistance: '30m',
      strapMaterial: 'Alligator Leather',
      dialColor: 'Skeleton Gold',
    },
    stock: 1,
    isFeatured: true,
    rating: 5.0,
    reviews: 12,
  },
  {
    id: '5',
    name: 'Celestial Navigator',
    brand: 'MAISON AUREL',
    price: 45000,
    description: 'The Celestial Navigator features an astronomical moonphase complication accurate to within one day every 122 years. Its midnight blue grand feu enamel dial depicts the night sky with remarkable fidelity.',
    images: [watch6, watch3, watch5],
    category: 'Complication',
    specs: {
      movement: 'Automatic Cal. MA-500',
      caseSize: '40mm',
      waterResistance: '50m',
      strapMaterial: 'Alligator Leather',
      dialColor: 'Midnight Blue',
    },
    stock: 2,
    isFeatured: false,
    rating: 4.9,
    reviews: 19,
  },
  {
    id: '6',
    name: 'Sovereign Classic',
    brand: 'HORLOGER',
    price: 8900,
    description: 'The entry point to the HORLOGER collection. The Sovereign Classic proves that accessible luxury need not compromise on craftsmanship. Swiss automatic movement, sapphire crystal, and impeccable finishing.',
    images: [watch1, watch3, watch2],
    category: 'Dress',
    specs: {
      movement: 'Automatic Cal. H-100',
      caseSize: '39mm',
      waterResistance: '50m',
      strapMaterial: 'Alligator Leather',
      dialColor: 'Noir',
    },
    stock: 8,
    isFeatured: false,
    rating: 4.7,
    reviews: 92,
  },
  {
    id: '7',
    name: 'Titanium Apex',
    brand: 'ATELIER NOIR',
    price: 19500,
    description: 'Forged from Grade 5 titanium, the Apex is 40% lighter than steel while offering superior strength. Its sandblasted finish creates a matte surface that absorbs light, creating an almost stealth aesthetic.',
    images: [watch2, watch4, watch1],
    category: 'Sport',
    specs: {
      movement: 'Automatic Cal. AN-300',
      caseSize: '44mm',
      waterResistance: '200m',
      strapMaterial: 'Titanium Bracelet',
      dialColor: 'Gunmetal',
    },
    stock: 4,
    isFeatured: false,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: '8',
    name: 'Perpetual Calendar',
    brand: 'MAISON AUREL',
    price: 72000,
    description: 'A grand complication that tracks the date, day, month, moonphase, and leap year cycle. The Perpetual Calendar requires no manual adjustment until the year 2100, a testament to mechanical ingenuity.',
    images: [watch6, watch5, watch3],
    category: 'Complication',
    specs: {
      movement: 'Automatic Cal. MA-800',
      caseSize: '40mm',
      waterResistance: '30m',
      strapMaterial: 'Alligator Leather',
      dialColor: 'Silver Opaline',
    },
    stock: 1,
    isFeatured: false,
    rating: 5.0,
    reviews: 8,
  },
];

export const brands = ['HORLOGER', 'MAISON AUREL', 'ATELIER NOIR'] as const;
export const categories = ['Dress', 'Sport', 'Complication', 'Diver'] as const;
export const strapTypes = ['Alligator Leather', 'Steel Bracelet', 'Ceramic Bracelet', 'Titanium Bracelet'] as const;
