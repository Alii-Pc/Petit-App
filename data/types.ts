export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface SpecRow {
  name: string;
  value: string;
}

export interface StoryFeature {
  title: string;
  description: string;
  image: string;
  bullets: string[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  compareAtPrice: number;
  image: string;
  href: string;
}

export interface WhyFeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  petit: string | boolean;
  traditional: string | boolean;
}

export interface ReviewItem {
  id: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductData {
  id: string;
  title: string;
  price: number;
  compareAtPrice: number;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  features: string[];
  images: string[];
  accordions: AccordionItem[];
  specs: SpecRow[];
  storyFeatures: StoryFeature[];
  variants: ProductVariant[];
  whyFeatures: WhyFeatureCard[];
  comparisonRows: ComparisonRow[];
  reviews: ReviewItem[];
  productFaqs: FaqItem[];
}

export interface ComparisonFeatureRow {
  left: string | boolean;
  title: string;
  right: string | boolean;
}

export interface TestimonialItem {
  id: number;
  title: string;
  text: string;
  author: string;
  avatar: string;
}

export interface ModelMatrixFeature {
  featureName: string;
  petit: boolean | string;
  petitPro: boolean | string;
  babyLuma: boolean | string;
  lunetMonitor: boolean | string;
}
