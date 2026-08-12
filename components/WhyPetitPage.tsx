import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WhyPetitPage.module.css';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import { whyPetitMission, whyPetitFeatures } from '@/data/why-petit';
import StickyScrollFeatures from '@/components/StickyScrollFeatures';
import AwardsMarquee from '@/components/AwardsMarquee';
import ScrollBlurSection from '@/components/ScrollBlurSection';
import CompareSection from '@/components/CompareSection';

export default function WhyPetitPage() {
  return (
    <div className={styles.container}>
      {/* 1. Hero Video Section */}
      <section className={styles.heroSection}>
        <video 
          className={styles.heroVideo}
          src="/videos/hero-baby.mp4"
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Petit Baby Monitor</h1>
            <p className={styles.heroSubtitle}>
              Because every parent feels safe <br /> when baby is in sight
            </p>
          </div>
        </div>
      </section>


      {/* 2. Our Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h6 className={styles.missionEyebrow}>{whyPetitMission.eyebrow}</h6>
          <h2 className={styles.missionHeading}>
            {whyPetitMission.headingLine1}
            <br />
            <span className={styles.headingLine2Wrap}>
              {whyPetitMission.headingLine2}
              <svg className={styles.squigglyLine} viewBox="0 0 350 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hand-drawn style squiggly underline with a loop */}
                <path d="M5,25 Q40,15 80,25 T150,25 C170,25 180,5 170,10 C160,15 170,25 200,20 Q270,10 340,15" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h2>
          <p className={styles.missionText}>
            {whyPetitMission.text}
          </p>
        </div>
      </section>

      
      {/* 4. Interactive Sticky Scroll Features */}
      <StickyScrollFeatures features={whyPetitFeatures} />

      
      {/* Awards Marquee */}
      <AwardsMarquee />

      {/* 5. Total Peace of Mind Section */}
      <ScrollBlurSection />

      {/* 6. Comparison Section */}
      <CompareSection />

      
    </div>
  );
}
