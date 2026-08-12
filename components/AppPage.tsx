import React from 'react';
import Image from 'next/image';
import styles from './AppPage.module.css';
import AppProductHero from '@/components/AppProductHero';
import AppScrollBlurSection from '@/components/AppScrollBlurSection';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import IconStrip from '@/components/IconStrip';
import StickyScrollFeatures from '@/components/StickyScrollFeatures';
import { whyPetitFeatures } from '@/data/why-petit';
import ShoppableRoomSection from '@/components/ShoppableRoomSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';


export default function AppPage() {
  return (
    <div className={styles.appPage}>
      
      {/* 1. App Product Hero Section */}
      <AppProductHero />
    
      {/* 2. Icon Strip */}
      <IconStrip />

      {/* 3. INTERACTIVE SCROLL BLUR SECTION */}
      <AppScrollBlurSection />

      {/* 4. Interactive Sticky Scroll Features */}
            <StickyScrollFeatures features={whyPetitFeatures} />

      {/* 5. Interactive 3D Room Section ("Designed for Peaceful Nights") */}
              <ShoppableRoomSection />

       {/* 6. Testimonials Section ("Loved by Modern Parents") */}
              <TestimonialsSection />

      {/* 7. Recommend Video Banner */}
      <div className={styles.recommendSectionApp}>
        <div className={styles.recommendContainer}>
          <div className={styles.recommendImageWrapApp}>
            <video
              src="/videos/hero-baby.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={styles.recommendVideoApp}
            />
            <div className={styles.recommendOverlayApp}>
              <h2 className={styles.recommendTitleApp}>
                &ldquo;98% of Parents Recommend Petit Monitor&rdquo;
              </h2>
            </div>
          </div>
        </div>
      </div>

       {/* 8. Interactive FAQ Section ("Frequently Asked Questions") */}
               <FaqSection />       

      {/* 9. BOTTOM CTA BANNER */}
      <CTAAndBenefitsBanner hideBanner = {true}/>
    </div>
  );
}
