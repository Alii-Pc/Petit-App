import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IconStrip from '@/components/IconStrip';
import FeatureCarousel from '@/components/FeatureCarousel';
import BabyWorldSection from '@/components/BabyWorldSection';
import ProductShowcase from '@/components/ProductShowcase';
import ShoppableRoomSection from '@/components/ShoppableRoomSection';
import CompareSection from '@/components/CompareSection';
import ScrollBlurSection from '@/components/ScrollBlurSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeatureSpecsSection from '@/components/FeatureSpecsSection';
import AsSeenInStrip from '@/components/AsSeenInStrip';
import AppScrollBlurSection from '@/components/AppScrollBlurSection';
import FaqSection from '@/components/FaqSection';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Icon Strip */}
        <IconStrip />

        {/* 3. Feature Carousel */}
        <FeatureCarousel />

        {/* 4. Baby World Section ("Because Your Baby's World Matters") */}
        <BabyWorldSection />

        {/* 5. Product Showcase Section (Includes 99% / 150° View / 1 Second stats bar) */}
        <ProductShowcase />

        {/* 6. Interactive 3D Room Section ("Designed for Peaceful Nights") */}
        <ShoppableRoomSection />

        {/* 7. Compare Section ("See Why Parents Choose Petit") */}
        <CompareSection />

        {/* 8. Scroll Blur Section ("Total Peace of Mind, Day and Night") */}
        <ScrollBlurSection />

        {/* 9. Testimonials Section ("Loved by Modern Parents") */}
        <TestimonialsSection />

        {/* 10. Split Feature Specs Section ("Peace of Mind. Total Comfort.") */}
        <FeatureSpecsSection />

        {/* 11. "As seen in" Moving Press Logo Strip */}
        <AsSeenInStrip />

        {/* 12. "Discover Petit App" Scroll Blur Section */}
        <AppScrollBlurSection />

        {/* 13. Interactive FAQ Section ("Frequently Asked Questions") */}
        <FaqSection />

        {/* 14. "Peace of Mind Starts Today" CTA Banner & Bottom Benefits Marquee */}
        <CTAAndBenefitsBanner />
      </main>

      <Footer />
    </div>
  );
}
