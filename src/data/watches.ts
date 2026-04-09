import watch1 from '@/assets/watch-1.jpg';
import watch2 from '@/assets/watch-2.jpg';
import watch3 from '@/assets/watch-3.jpg';
import watch4 from '@/assets/watch-4.jpg';
import watch5 from '@/assets/watch-5.jpg';
import watch6 from '@/assets/watch-6.jpg';
import watch7 from '@/assets/watch-7.jpg';
import watch8 from '@/assets/watch-8.jpg';
import watch9 from '@/assets/watch-9.jpg';
import watch10 from '@/assets/watch-10.jpg';
import watch11 from '@/assets/watch-11.jpg';
import watch12 from '@/assets/watch-12.jpg';
import watch13 from '@/assets/watch-13.jpg';
import watch14 from '@/assets/watch-14.jpg';
import watch15 from '@/assets/watch-15.jpg';
import watch16 from '@/assets/watch-16.jpg';
import watchSport1 from '@/assets/watch-sport-1.jpg';
import watchSport2 from '@/assets/watch-sport-2.jpg';
import watchDress1 from '@/assets/watch-dress-1.jpg';
import watchDress2 from '@/assets/watch-dress-2.jpg';
import watchDiver1 from '@/assets/watch-diver-1.jpg';
import watchDiver2 from '@/assets/watch-diver-2.jpg';
import watchChrono1 from '@/assets/watch-chrono-1.jpg';
import watchAviation1 from '@/assets/watch-aviation-1.jpg';
import watchField1 from '@/assets/watch-field-1.jpg';
import watchRacing1 from '@/assets/watch-racing-1.jpg';
import watchLuxury1 from '@/assets/watch-luxury-1.jpg';
import watchLuxury2 from '@/assets/watch-luxury-2.jpg';
import watchGmt1 from '@/assets/watch-gmt-1.jpg';
import watchCasual1 from '@/assets/watch-casual-1.jpg';
import watchFormal1 from '@/assets/watch-formal-1.jpg';
import watchVintage1 from '@/assets/watch-vintage-1.jpg';

export interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: typeof categories[number];
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

export const categories = [
  'Sports', 'Formal', 'Casual', 'Diver', 'Aviation', 'Vintage',
  'Luxury', 'Chronograph', 'Field', 'Dress', 'GMT', 'Racing',
] as const;

export const brands = ['HORLOGER', 'MAISON AUREL', 'ATELIER NOIR', 'GENÈVE & CO', 'KRONOS'] as const;

export const strapTypes = [
  'Alligator Leather', 'Steel Bracelet', 'Ceramic Bracelet', 'Titanium Bracelet',
  'Rubber Strap', 'Canvas NATO', 'Woven Textile', 'Quick-Release Leather',
  'Cordovan Leather', 'Perforated Leather', 'Mesh Steel', 'Two-Tone Bracelet',
] as const;

export const watches: Watch[] = [
  // ── DIVER (1-5) ───────────────────────────
  {
    id: '1',
    name: 'The Obsidian Diver',
    brand: 'HORLOGER',
    price: 12400,
    description: 'A masterpiece of aquatic engineering. 300m water resistance with an elegant ceramic bezel, seamlessly transitioning from ocean depths to the evening gala.',
    images: [watchDiver1, watchDiver2, watch9],
    category: 'Diver',
    specs: { movement: 'Automatic Cal. H-420', caseSize: '42mm', waterResistance: '300m', strapMaterial: 'Ceramic Bracelet', dialColor: 'Ocean Blue' },
    stock: 3, isFeatured: true, rating: 4.9, reviews: 47,
  },
  {
    id: '2',
    name: 'Abyssal 600',
    brand: 'ATELIER NOIR',
    price: 18700,
    description: 'Engineered for extreme saturation diving. Helium escape valve, 600m depth rating, and a luminous dial readable in absolute darkness.',
    images: [watch9, watchDiver1, watchDiver2],
    category: 'Diver',
    specs: { movement: 'Automatic Cal. AN-600', caseSize: '44mm', waterResistance: '600m', strapMaterial: 'Rubber Strap', dialColor: 'Deep Black' },
    stock: 2, isFeatured: false, rating: 4.8, reviews: 29,
  },
  {
    id: '3',
    name: 'Coral Reef Pro',
    brand: 'KRONOS',
    price: 8900,
    description: 'Inspired by tropical reefs. Vibrant turquoise dial with uni-directional bezel and SuperLuminova indices for underwater legibility.',
    images: [watchDiver1, watchDiver2, watch9],
    category: 'Diver',
    specs: { movement: 'Automatic Cal. K-200', caseSize: '40mm', waterResistance: '200m', strapMaterial: 'Rubber Strap', dialColor: 'Turquoise' },
    stock: 6, isFeatured: false, rating: 4.6, reviews: 55,
  },
  {
    id: '4',
    name: 'Arctic Explorer',
    brand: 'HORLOGER',
    price: 15200,
    description: 'Built for polar expeditions. Anti-freeze lubrication, titanium case, and a white dial inspired by Arctic ice formations.',
    images: [watchDiver2, watch9, watchDiver1],
    category: 'Diver',
    specs: { movement: 'Automatic Cal. H-450', caseSize: '43mm', waterResistance: '300m', strapMaterial: 'Titanium Bracelet', dialColor: 'Ice White' },
    stock: 4, isFeatured: false, rating: 4.7, reviews: 33,
  },
  {
    id: '5',
    name: 'Neptune\'s Crown',
    brand: 'GENÈVE & CO',
    price: 22000,
    description: 'The flagship diver. 18k gold crown guards, sapphire bezel insert, and a movement chronometer-certified for precision at any depth.',
    images: [watch9, watchDiver1, watchDiver2],
    category: 'Diver',
    specs: { movement: 'Automatic Cal. GC-500', caseSize: '42mm', waterResistance: '500m', strapMaterial: 'Steel Bracelet', dialColor: 'Royal Navy' },
    stock: 1, isFeatured: true, rating: 5.0, reviews: 14,
  },

  // ── CHRONOGRAPH (6-10) ────────────────────
  {
    id: '6',
    name: 'Heritage Chronograph',
    brand: 'HORLOGER',
    price: 28000,
    description: 'Inspired by 1960s racing chronographs. Column-wheel mechanism and tachymeter scale, hand-assembled in our Swiss atelier.',
    images: [watchDiver1, watchDiver2, watch9],
    category: 'Chronograph',
    specs: { movement: 'Manual Cal. H-890', caseSize: '40mm', waterResistance: '100m', strapMaterial: 'Steel Bracelet', dialColor: 'Onyx Black' },
    stock: 5, isFeatured: true, rating: 4.8, reviews: 63,
  },
  {
    id: '7',
    name: 'Veloce Tri-Compax',
    brand: 'ATELIER NOIR',
    price: 35000,
    description: 'Triple register chronograph with flyback function. Inspired by vintage motorsport dashboards with a pulsating racing spirit.',
    images: [watchSport1, watch14, watchChrono1],
    category: 'Chronograph',
    specs: { movement: 'Automatic Cal. AN-CHR', caseSize: '41mm', waterResistance: '100m', strapMaterial: 'Perforated Leather', dialColor: 'Panda White' },
    stock: 3, isFeatured: false, rating: 4.9, reviews: 21,
  },
  {
    id: '8',
    name: 'Zenith Rattrapante',
    brand: 'GENÈVE & CO',
    price: 68000,
    description: 'Split-seconds chronograph for measuring intermediate times. A grand complication rarely seen at this level of finishing.',
    images: [watch14, watchChrono1, watchSport1],
    category: 'Chronograph',
    specs: { movement: 'Manual Cal. GC-RAT', caseSize: '42mm', waterResistance: '50m', strapMaterial: 'Alligator Leather', dialColor: 'Silver' },
    stock: 1, isFeatured: false, rating: 5.0, reviews: 7,
  },
  {
    id: '9',
    name: 'Chrono Pulse',
    brand: 'KRONOS',
    price: 9800,
    description: 'Entry-level chronograph with a bold personality. Quartz precision meets sporty aesthetics in a versatile daily driver.',
    images: [watchChrono1, watchSport1, watch14],
    category: 'Chronograph',
    specs: { movement: 'Quartz Cal. K-QC1', caseSize: '42mm', waterResistance: '100m', strapMaterial: 'Steel Bracelet', dialColor: 'Charcoal' },
    stock: 12, isFeatured: false, rating: 4.5, reviews: 104,
  },
  {
    id: '10',
    name: 'Mono-Pusher 1923',
    brand: 'MAISON AUREL',
    price: 42000,
    description: 'Single-button chronograph faithful to the original 1923 design. Enamel dial, blued steel hands, and a pulsometer for medical professionals.',
    images: [watchSport1, watch14, watchChrono1],
    category: 'Chronograph',
    specs: { movement: 'Manual Cal. MA-MP1', caseSize: '39mm', waterResistance: '30m', strapMaterial: 'Cordovan Leather', dialColor: 'Grand Feu White' },
    stock: 2, isFeatured: false, rating: 4.9, reviews: 18,
  },

  // ── FORMAL / DRESS (11-15) ────────────────
  {
    id: '11',
    name: 'Rose Éternelle',
    brand: 'MAISON AUREL',
    price: 34500,
    description: 'Understated elegance. 18k rose gold case with hand-guilloché dial that catches light like liquid metal.',
    images: [watch14, watchChrono1, watchSport1],
    category: 'Formal',
    specs: { movement: 'Automatic Cal. MA-200', caseSize: '38mm', waterResistance: '50m', strapMaterial: 'Alligator Leather', dialColor: 'Champagne' },
    stock: 2, isFeatured: true, rating: 5.0, reviews: 28,
  },
  {
    id: '12',
    name: 'Sovereign Classic',
    brand: 'HORLOGER',
    price: 8900,
    description: 'The entry point to HORLOGER. Proves that accessible luxury need not compromise craftsmanship.',
    images: [watchFormal1, watchDress1, watch3],
    category: 'Formal',
    specs: { movement: 'Automatic Cal. H-100', caseSize: '39mm', waterResistance: '50m', strapMaterial: 'Alligator Leather', dialColor: 'Noir' },
    stock: 8, isFeatured: false, rating: 4.7, reviews: 92,
  },
  {
    id: '13',
    name: 'Platinum Soir',
    brand: 'GENÈVE & CO',
    price: 52000,
    description: 'An evening companion in platinum 950. Ultra-thin 6.8mm case with a mesmerizing sunburst anthracite dial.',
    images: [watchDress1, watch3, watchFormal1],
    category: 'Dress',
    specs: { movement: 'Manual Cal. GC-UT1', caseSize: '37mm', waterResistance: '30m', strapMaterial: 'Alligator Leather', dialColor: 'Anthracite' },
    stock: 1, isFeatured: false, rating: 5.0, reviews: 9,
  },
  {
    id: '14',
    name: 'Gala Moonphase',
    brand: 'MAISON AUREL',
    price: 29000,
    description: 'A dress watch elevated by an astronomical moonphase display. Slim enough to slip beneath a French cuff.',
    images: [watchFormal1, watchDress1, watchDress2],
    category: 'Dress',
    specs: { movement: 'Automatic Cal. MA-310', caseSize: '38mm', waterResistance: '30m', strapMaterial: 'Alligator Leather', dialColor: 'Ivory' },
    stock: 3, isFeatured: true, rating: 4.9, reviews: 36,
  },
  {
    id: '15',
    name: 'Opéra Minute Repeater',
    brand: 'ATELIER NOIR',
    price: 125000,
    description: 'The pinnacle of haute horlogerie. Cathedral gongs chime hours, quarters, and minutes on demand with crystalline clarity.',
    images: [watchDress1, watchDress2, watchFormal1],
    category: 'Dress',
    specs: { movement: 'Manual Cal. AN-MR1', caseSize: '40mm', waterResistance: '30m', strapMaterial: 'Alligator Leather', dialColor: 'Grand Feu Blue' },
    stock: 1, isFeatured: false, rating: 5.0, reviews: 3,
  },

  // ── LUXURY (16-20) ────────────────────────
  {
    id: '16',
    name: 'Tourbillon Squelette',
    brand: 'ATELIER NOIR',
    price: 89000,
    description: 'A window into horology\'s soul. Flying tourbillon through a skeletonized dial, each bridge hand-beveled over 40 hours.',
    images: [watchDress2, watchFormal1, watchDress1],
    category: 'Luxury',
    specs: { movement: 'Manual Tourbillon Cal. AN-01', caseSize: '41mm', waterResistance: '30m', strapMaterial: 'Alligator Leather', dialColor: 'Skeleton Gold' },
    stock: 1, isFeatured: true, rating: 5.0, reviews: 12,
  },
  {
    id: '17',
    name: 'Celestial Navigator',
    brand: 'MAISON AUREL',
    price: 45000,
    description: 'Astronomical moonphase accurate to within one day every 122 years. Grand feu enamel midnight blue dial.',
    images: [watch2, watchLuxury1, watchLuxury2],
    category: 'Luxury',
    specs: { movement: 'Automatic Cal. MA-500', caseSize: '40mm', waterResistance: '50m', strapMaterial: 'Alligator Leather', dialColor: 'Midnight Blue' },
    stock: 2, isFeatured: false, rating: 4.9, reviews: 19,
  },
  {
    id: '18',
    name: 'Perpetual Calendar',
    brand: 'MAISON AUREL',
    price: 72000,
    description: 'Tracks date, day, month, moonphase, and leap year. No adjustment needed until the year 2100.',
    images: [watchLuxury1, watchLuxury2, watch2],
    category: 'Luxury',
    specs: { movement: 'Automatic Cal. MA-800', caseSize: '40mm', waterResistance: '30m', strapMaterial: 'Alligator Leather', dialColor: 'Silver Opaline' },
    stock: 1, isFeatured: false, rating: 5.0, reviews: 8,
  },
  {
    id: '19',
    name: 'Imperial Grande Sonnerie',
    brand: 'GENÈVE & CO',
    price: 320000,
    description: 'The rarest complication. Automatic striking of hours and quarters, petite and grande sonnerie modes, plus minute repeater.',
    images: [watchLuxury2, watch2, watchLuxury1],
    category: 'Luxury',
    specs: { movement: 'Manual Cal. GC-GS1', caseSize: '43mm', waterResistance: '30m', strapMaterial: 'Alligator Leather', dialColor: 'Guilloché Rose' },
    stock: 1, isFeatured: false, rating: 5.0, reviews: 2,
  },
  {
    id: '20',
    name: 'Diamond Constellation',
    brand: 'KRONOS',
    price: 56000,
    description: 'Pavé-set with 184 VS1 diamonds totaling 2.8 carats. A dazzling statement piece for collectors who dare.',
    images: [watch2, watchLuxury1, watchLuxury2],
    category: 'Luxury',
    specs: { movement: 'Automatic Cal. K-LUX', caseSize: '38mm', waterResistance: '30m', strapMaterial: 'Two-Tone Bracelet', dialColor: 'Mother of Pearl' },
    stock: 2, isFeatured: true, rating: 4.8, reviews: 15,
  },

  // ── SPORTS (21-26) ────────────────────────
  {
    id: '21',
    name: 'Rally Master GT',
    brand: 'HORLOGER',
    price: 15800,
    description: 'Born on the racetrack. Pulsometer scale, 1/10th second chronograph, and shock-resistant case.',
    images: [watchLuxury1, watchLuxury2, watch2],
    category: 'Sports',
    specs: { movement: 'Automatic Cal. H-550', caseSize: '43mm', waterResistance: '100m', strapMaterial: 'Rubber Strap', dialColor: 'Racing Red' },
    stock: 6, isFeatured: true, rating: 4.7, reviews: 54,
  },
  {
    id: '22',
    name: 'Titanium Apex',
    brand: 'ATELIER NOIR',
    price: 19500,
    description: 'Grade 5 titanium, 40% lighter than steel. Sandblasted matte finish creates a stealth aesthetic.',
    images: [watchSport2, watch7, watchSport1],
    category: 'Sports',
    specs: { movement: 'Automatic Cal. AN-300', caseSize: '44mm', waterResistance: '200m', strapMaterial: 'Titanium Bracelet', dialColor: 'Gunmetal' },
    stock: 4, isFeatured: false, rating: 4.8, reviews: 35,
  },
  {
    id: '23',
    name: 'Endurance Pro',
    brand: 'HORLOGER',
    price: 11200,
    description: 'For extreme endurance athletes. Ultra-light composite case with chronograph and lap timer.',
    images: [watch7, watchSport1, watchSport2],
    category: 'Sports',
    specs: { movement: 'SuperQuartz Cal. H-77', caseSize: '44mm', waterResistance: '100m', strapMaterial: 'Rubber Strap', dialColor: 'Volt Green' },
    stock: 9, isFeatured: false, rating: 4.6, reviews: 88,
  },
  {
    id: '24',
    name: 'Summit Carbon',
    brand: 'KRONOS',
    price: 7500,
    description: 'Carbon fiber case and forged composite bezel. Weighs just 48g — you\'ll forget you\'re wearing it.',
    images: [watchSport1, watchSport2, watch7],
    category: 'Sports',
    specs: { movement: 'Quartz Cal. K-SP1', caseSize: '45mm', waterResistance: '100m', strapMaterial: 'Rubber Strap', dialColor: 'Carbon Black' },
    stock: 11, isFeatured: false, rating: 4.4, reviews: 72,
  },
  {
    id: '25',
    name: 'Triathlon Edge',
    brand: 'GENÈVE & CO',
    price: 13400,
    description: 'Swim-bike-run ready. Triple timezone, countdown timer, and a bezel that converts pace to speed.',
    images: [watchSport2, watch7, watchSport1],
    category: 'Sports',
    specs: { movement: 'Automatic Cal. GC-TRI', caseSize: '42mm', waterResistance: '200m', strapMaterial: 'Rubber Strap', dialColor: 'Signal Orange' },
    stock: 5, isFeatured: false, rating: 4.7, reviews: 41,
  },
  {
    id: '26',
    name: 'Alpine Shock',
    brand: 'ATELIER NOIR',
    price: 10800,
    description: 'ISO 764 magnetic-resistant, ISO 1413 shock-resistant. Designed for mountaineers and adventurers.',
    images: [watch7, watchSport1, watchSport2],
    category: 'Sports',
    specs: { movement: 'Automatic Cal. AN-ALP', caseSize: '43mm', waterResistance: '100m', strapMaterial: 'Canvas NATO', dialColor: 'Forest Green' },
    stock: 7, isFeatured: false, rating: 4.6, reviews: 59,
  },

  // ── AVIATION (27-30) ─────────────────────
  {
    id: '27',
    name: 'Aviator Meridian',
    brand: 'ATELIER NOIR',
    price: 22000,
    description: 'Dual-time GMT for pilots. Anti-magnetic case and Super-LumiNova readable at 30,000 feet.',
    images: [watchSport1, watchSport2, watch7],
    category: 'Aviation',
    specs: { movement: 'Automatic Cal. AN-GMT', caseSize: '42mm', waterResistance: '100m', strapMaterial: 'Canvas NATO', dialColor: 'Matte Black' },
    stock: 3, isFeatured: true, rating: 4.9, reviews: 31,
  },
  {
    id: '28',
    name: 'Sky Command',
    brand: 'HORLOGER',
    price: 31000,
    description: 'Ultimate pilot instrument. Slide-rule bezel for in-flight calculations, second timezone, cockpit-inspired dial.',
    images: [watchField1, watch10, watchAviation1],
    category: 'Aviation',
    specs: { movement: 'Automatic Cal. H-700', caseSize: '45mm', waterResistance: '60m', strapMaterial: 'Steel Bracelet', dialColor: 'Cockpit Black' },
    stock: 2, isFeatured: false, rating: 4.8, reviews: 22,
  },
  {
    id: '29',
    name: 'Bravo Zulu',
    brand: 'KRONOS',
    price: 9200,
    description: 'NATO phonetic alphabet-inspired aviation watch. Bold oversized crown for gloved operation.',
    images: [watch10, watchAviation1, watchField1],
    category: 'Aviation',
    specs: { movement: 'Automatic Cal. K-AV1', caseSize: '44mm', waterResistance: '100m', strapMaterial: 'Canvas NATO', dialColor: 'Instrument Black' },
    stock: 8, isFeatured: false, rating: 4.5, reviews: 67,
  },
  {
    id: '30',
    name: 'Stratosphere GMT',
    brand: 'GENÈVE & CO',
    price: 26500,
    description: 'World timer with 24 city ring. Rotate the bezel to read any timezone at a glance — a true global traveler.',
    images: [watchAviation1, watchField1, watch10],
    category: 'Aviation',
    specs: { movement: 'Automatic Cal. GC-WT', caseSize: '41mm', waterResistance: '100m', strapMaterial: 'Steel Bracelet', dialColor: 'Globe Blue' },
    stock: 3, isFeatured: false, rating: 4.8, reviews: 26,
  },

  // ── VINTAGE (31-34) ───────────────────────
  {
    id: '31',
    name: 'Nineteen Fifty-Eight',
    brand: 'HORLOGER',
    price: 18500,
    description: 'Faithful reissue of the legendary 1958 dress watch. Slender profile, domed crystal, dauphine hands.',
    images: [watchField1, watch10, watchAviation1],
    category: 'Vintage',
    specs: { movement: 'Manual Cal. H-58R', caseSize: '37mm', waterResistance: '30m', strapMaterial: 'Cordovan Leather', dialColor: 'Cream Patina' },
    stock: 2, isFeatured: false, rating: 4.9, reviews: 41,
  },
  {
    id: '32',
    name: 'Monaco Revival',
    brand: 'ATELIER NOIR',
    price: 24500,
    description: 'Bold reinterpretation of the iconic square-cased racing chronograph with unmistakable presence.',
    images: [watch11, watchVintage1, watch6],
    category: 'Vintage',
    specs: { movement: 'Automatic Cal. AN-V69', caseSize: '39mm', waterResistance: '50m', strapMaterial: 'Perforated Leather', dialColor: 'Gulf Blue' },
    stock: 3, isFeatured: false, rating: 4.9, reviews: 37,
  },
  {
    id: '33',
    name: 'Compressor \'67',
    brand: 'GENÈVE & CO',
    price: 14800,
    description: 'Super-compressor case revived with modern internals. Double crown system, tropical dial finish.',
    images: [watchVintage1, watch6, watch11],
    category: 'Vintage',
    specs: { movement: 'Automatic Cal. GC-67', caseSize: '38mm', waterResistance: '200m', strapMaterial: 'Rubber Strap', dialColor: 'Tropical Brown' },
    stock: 4, isFeatured: false, rating: 4.7, reviews: 48,
  },
  {
    id: '34',
    name: 'Art Deco Tonneau',
    brand: 'MAISON AUREL',
    price: 21000,
    description: 'Barrel-shaped case inspired by 1920s Art Deco. Hand-engraved case flanks with Breguet numerals.',
    images: [watch6, watch11, watchVintage1],
    category: 'Vintage',
    specs: { movement: 'Manual Cal. MA-ADT', caseSize: '34×42mm', waterResistance: '30m', strapMaterial: 'Alligator Leather', dialColor: 'Aged Silver' },
    stock: 2, isFeatured: false, rating: 4.8, reviews: 22,
  },

  // ── CASUAL (35-38) ────────────────────────
  {
    id: '35',
    name: 'Côte d\'Azur',
    brand: 'MAISON AUREL',
    price: 6500,
    description: 'Inspired by the French Riviera. Lightweight titanium with woven textile strap for Mediterranean weekends.',
    images: [watch11, watchVintage1, watch6],
    category: 'Casual',
    specs: { movement: 'Automatic Cal. MA-100', caseSize: '38mm', waterResistance: '100m', strapMaterial: 'Woven Textile', dialColor: 'Azure Blue' },
    stock: 10, isFeatured: false, rating: 4.6, reviews: 78,
  },
  {
    id: '36',
    name: 'Urban Explorer',
    brand: 'ATELIER NOIR',
    price: 7800,
    description: 'Quick-release interchangeable strap system — switch leather to bracelet in seconds.',
    images: [watchCasual1, watch5, watch8],
    category: 'Casual',
    specs: { movement: 'Automatic Cal. AN-200', caseSize: '40mm', waterResistance: '100m', strapMaterial: 'Quick-Release Leather', dialColor: 'Slate Grey' },
    stock: 7, isFeatured: false, rating: 4.5, reviews: 66,
  },
  {
    id: '37',
    name: 'Weekend Drift',
    brand: 'KRONOS',
    price: 3900,
    description: 'Effortless style for off-duty days. Soft curved case, mesh bracelet, and a clean dial that pairs with anything.',
    images: [watch5, watch8, watchCasual1],
    category: 'Casual',
    specs: { movement: 'Quartz Cal. K-WD', caseSize: '38mm', waterResistance: '50m', strapMaterial: 'Mesh Steel', dialColor: 'Warm Grey' },
    stock: 15, isFeatured: false, rating: 4.3, reviews: 112,
  },
  {
    id: '38',
    name: 'Canvas Club',
    brand: 'HORLOGER',
    price: 5200,
    description: 'NATO strap versatility meets Swiss reliability. The perfect grab-and-go companion.',
    images: [watch8, watchCasual1, watch5],
    category: 'Casual',
    specs: { movement: 'Automatic Cal. H-080', caseSize: '40mm', waterResistance: '100m', strapMaterial: 'Canvas NATO', dialColor: 'Sand' },
    stock: 9, isFeatured: false, rating: 4.5, reviews: 84,
  },

  // ── FIELD (39-42) ─────────────────────────
  {
    id: '39',
    name: 'Recon Tactical',
    brand: 'ATELIER NOIR',
    price: 6800,
    description: 'MIL-SPEC tested. Matte DLC coating, tritium gas tubes, and a virtually indestructible Cordura strap.',
    images: [watchCasual1, watch5, watch8],
    category: 'Field',
    specs: { movement: 'Automatic Cal. AN-TAC', caseSize: '42mm', waterResistance: '100m', strapMaterial: 'Canvas NATO', dialColor: 'Olive Drab' },
    stock: 6, isFeatured: false, rating: 4.7, reviews: 73,
  },
  {
    id: '40',
    name: 'Pathfinder II',
    brand: 'HORLOGER',
    price: 8400,
    description: 'Compass bezel with cardinal directions. Built for trail navigation when digital fails.',
    images: [watchAviation1, watch13, watchField1],
    category: 'Field',
    specs: { movement: 'Automatic Cal. H-PF2', caseSize: '41mm', waterResistance: '100m', strapMaterial: 'Canvas NATO', dialColor: 'Khaki Green' },
    stock: 5, isFeatured: false, rating: 4.6, reviews: 51,
  },
  {
    id: '41',
    name: 'Desert Storm',
    brand: 'KRONOS',
    price: 5500,
    description: 'Sand-colored PVD case designed for arid environments. Anti-reflective coating eliminates glare.',
    images: [watch13, watchField1, watchAviation1],
    category: 'Field',
    specs: { movement: 'Quartz Cal. K-DS1', caseSize: '43mm', waterResistance: '100m', strapMaterial: 'Canvas NATO', dialColor: 'Desert Tan' },
    stock: 8, isFeatured: false, rating: 4.4, reviews: 63,
  },
  {
    id: '42',
    name: 'Expedition Noir',
    brand: 'GENÈVE & CO',
    price: 11500,
    description: 'All-black stealth field watch with date and power reserve indicator. For those who operate in the shadows.',
    images: [watchField1, watchAviation1, watch13],
    category: 'Field',
    specs: { movement: 'Automatic Cal. GC-EXP', caseSize: '42mm', waterResistance: '200m', strapMaterial: 'Rubber Strap', dialColor: 'Stealth Black' },
    stock: 4, isFeatured: true, rating: 4.8, reviews: 38,
  },

  // ── GMT (43-46) ───────────────────────────
  {
    id: '43',
    name: 'Meridian Pepsi',
    brand: 'HORLOGER',
    price: 16500,
    description: 'Classic blue-red ceramic bezel GMT. Track two timezones with a single glance at the 24-hour hand.',
    images: [watchAviation1, watch13, watchField1],
    category: 'GMT',
    specs: { movement: 'Automatic Cal. H-GMT2', caseSize: '40mm', waterResistance: '100m', strapMaterial: 'Steel Bracelet', dialColor: 'Jet Black' },
    stock: 5, isFeatured: true, rating: 4.9, reviews: 76,
  },
  {
    id: '44',
    name: 'Noir GMT Root Beer',
    brand: 'ATELIER NOIR',
    price: 19800,
    description: 'Warm brown and black ceramic bezel. Rose gold accents on a sport-luxe steel case — the traveler\'s choice.',
    images: [watch15, watchGmt1, watchDiver1],
    category: 'GMT',
    specs: { movement: 'Automatic Cal. AN-G2', caseSize: '41mm', waterResistance: '100m', strapMaterial: 'Steel Bracelet', dialColor: 'Root Beer' },
    stock: 3, isFeatured: false, rating: 4.8, reviews: 34,
  },
  {
    id: '45',
    name: 'World Timer Azimuth',
    brand: 'GENÈVE & CO',
    price: 38000,
    description: 'Cloisonné enamel world map dial showing all 24 timezones. A wrist-mounted window to the world.',
    images: [watchGmt1, watchDiver1, watch15],
    category: 'GMT',
    specs: { movement: 'Automatic Cal. GC-AZ', caseSize: '41mm', waterResistance: '50m', strapMaterial: 'Alligator Leather', dialColor: 'Cloisonné Blue' },
    stock: 1, isFeatured: false, rating: 5.0, reviews: 11,
  },
  {
    id: '46',
    name: 'Dual Time Sport',
    brand: 'KRONOS',
    price: 6900,
    description: 'Affordable dual-timezone with jumping hour hand. Perfect for frequent flyers on a budget.',
    images: [watchDiver1, watch15, watchGmt1],
    category: 'GMT',
    specs: { movement: 'Quartz Cal. K-DT1', caseSize: '42mm', waterResistance: '100m', strapMaterial: 'Rubber Strap', dialColor: 'Marine Blue' },
    stock: 10, isFeatured: false, rating: 4.4, reviews: 89,
  },

  // ── RACING (47-50) ────────────────────────
  {
    id: '47',
    name: 'Le Mans 24',
    brand: 'HORLOGER',
    price: 21000,
    description: 'Official-style 24-hour chronograph. Tachymeter, pulsometer, and telemeter scales on a triple-register dial.',
    images: [watch15, watchGmt1, watchDiver1],
    category: 'Racing',
    specs: { movement: 'Automatic Cal. H-LM24', caseSize: '43mm', waterResistance: '100m', strapMaterial: 'Perforated Leather', dialColor: 'Racing White' },
    stock: 3, isFeatured: false, rating: 4.8, reviews: 42,
  },
  {
    id: '48',
    name: 'Pit Lane Carbon',
    brand: 'ATELIER NOIR',
    price: 17500,
    description: 'Forged carbon case with tire-tread rubber strap. Dashboard-inspired dial with rev-counter sub-dials.',
    images: [watchRacing1, watchChrono1, watchSport1],
    category: 'Racing',
    specs: { movement: 'Automatic Cal. AN-PLC', caseSize: '44mm', waterResistance: '50m', strapMaterial: 'Rubber Strap', dialColor: 'Carbon Fiber' },
    stock: 4, isFeatured: false, rating: 4.7, reviews: 31,
  },
  {
    id: '49',
    name: 'Scuderia Rosso',
    brand: 'GENÈVE & CO',
    price: 28500,
    description: 'Italian racing red meets Swiss precision. Flyback chronograph with big date at 12 o\'clock.',
    images: [watchChrono1, watchSport1, watchRacing1],
    category: 'Racing',
    specs: { movement: 'Automatic Cal. GC-SCR', caseSize: '42mm', waterResistance: '100m', strapMaterial: 'Perforated Leather', dialColor: 'Rosso Corsa' },
    stock: 2, isFeatured: true, rating: 4.9, reviews: 27,
  },
  {
    id: '50',
    name: 'Drag Strip',
    brand: 'KRONOS',
    price: 8200,
    description: 'Quarter-mile countdown timer with 1/100th second digital display. The most aggressive sports watch in the collection.',
    images: [watchSport1, watchRacing1, watchChrono1],
    category: 'Racing',
    specs: { movement: 'Quartz Cal. K-DRG', caseSize: '46mm', waterResistance: '50m', strapMaterial: 'Rubber Strap', dialColor: 'Neon Yellow' },
    stock: 7, isFeatured: false, rating: 4.5, reviews: 58,
  },
];
