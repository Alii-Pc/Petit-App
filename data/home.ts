import { ComparisonFeatureRow, TestimonialItem } from './types';

export const homeHeroFeatures: string[] = [
  "Monitor your baby even when you're away",
  "Private, secure streaming you can trust",
  "Parent-friendly from first use",
];

export const homeComparisonFeatures: ComparisonFeatureRow[] = [
  {
    left: true,
    title: '2K QHD Video Quality',
    right: false,
  },
  {
    left: true,
    title: 'Motion Detection',
    right: false,
  },
  {
    left: true,
    title: 'Remote Viewing Access',
    right: false,
  },
  {
    left: true,
    title: 'Dual-Band 5GHz Wi-Fi + Bluetooth',
    right: false,
  },
  {
    left: '3–5 years',
    title: 'Product Lifespan',
    right: '1–2 years',
  },
  {
    left: 'Minimal',
    title: 'Downtime Risk',
    right: 'High',
  },
];

export const homeTestimonials: TestimonialItem[] = [
  {
    id: 1,
    title: 'A Must-Have for New Parents',
    text: 'This monitor gave us confidence from day one. The picture is sharp, the app is smooth, and it just works when you need it most.',
    author: '- Mark R., verified parent',
    avatar: '/images/pic-3.jpg',
  },
  {
    id: 2,
    title: 'Worth Every Penny',
    text: 'We’ve tried other baby monitors, but PETIT stands out. Reliable performance, modern design, and real peace of mind.',
    author: '- Michael T., verified parent',
    avatar: '/images/pic-4.jpg',
  },
  {
    id: 3,
    title: 'Finally, Peace of Mind at Night',
    text: 'The video quality is incredibly clear and the connection is always stable. I can finally relax knowing my baby is safe, even when I’m not in the room.',
    author: '- Anna M., verified parent',
    avatar: '/images/pic-1.jpg',
  },
  {
    id: 4,
    title: 'Simple, Reliable, and Beautifully Designed',
    text: 'PETIT was so easy to set up and fits perfectly into our home. It does exactly what we need — no stress, no complicated settings.',
    author: '- Marta L., verified parent',
    avatar: '/images/pic-2.jpg',
  },
];

export const marqueeBenefits: string[] = [
  '30-days Risk-free Return',
  '2 Year Warranty',
  'Quick Assistant within 24h',
  '24h Free Shipping',
];
