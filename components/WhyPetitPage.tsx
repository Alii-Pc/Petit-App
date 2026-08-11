import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WhyPetitPage.module.css';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';

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
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            For over 10 years, Petit has combined technology with science-backed expertise to go beyond basic monitoring. We create solutions that support you through every stage of parenthood—with more confidence, calm, and connection.
          </p>
        </div>
      </section>

      {/* 3. Full Image Section */}
      <section className={styles.fullImageSection}>
        <Image 
          src="/images/living-room-petit.jpg" 
          alt="Petit baby monitor in modern living room" 
          width={2000} 
          height={1000} 
          className={styles.fullImage}
        />
      </section>

      {/* 4. Features Alternating Layout */}
      <section className={styles.featuresWrap}>
        
        {/* Feature 1: Image Left, Text Right */}
        <div className={styles.featureRow}>
          <div className={styles.featureImageWrap}>
            <Image 
              src="/images/1-app.jpg" 
              alt="Petit app showing baby in crib" 
              width={800} 
              height={800} 
              className={styles.featureImage}
            />
          </div>
          <div className={styles.featureTextWrap}>
            <p className={styles.featureText}>
              Everything you need to care for your baby—right from your phone. Stay close with real-time monitoring, smart alerts, and a clear view of your baby’s environment. Designed to give you confidence, peace of mind, and effortless control—wherever you are.
            </p>
          </div>
        </div>

        {/* Feature 2: Image Right, Text Left */}
        <div className={styles.featureRowReverse}>
          <div className={styles.featureImageWrap}>
            <Image 
              src="/images/2-app.jpg" 
              alt="Petit app showing sleep tracking and insights" 
              width={800} 
              height={800} 
              className={styles.featureImage}
            />
          </div>
          <div className={styles.featureTextWrap}>
            <p className={styles.featureText}>
              Monitor what matters most with smart, gentle technology. Track your baby’s vital signs in real time - clearly, quietly, and without disruption. Designed to bring reassurance, so you can rest easier knowing they’re safe, always.
            </p>
          </div>
        </div>

        {/* Feature 3: Image Left, Text Right */}
        <div className={styles.featureRow}>
          <div className={styles.featureImageWrap}>
            <Image 
              src="/images/3-app.jpg" 
              alt="Petit app showing daily summary and health reports" 
              width={800} 
              height={800} 
              className={styles.featureImage}
            />
          </div>
          <div className={styles.featureTextWrap}>
            <p className={styles.featureText}>
              Intelligent insights and gentle reminders help you understand your baby’s rhythm—so you’re always one step ahead, with confidence and calm. Because better sleep means better days for both of you.
            </p>
          </div>
        </div>

      </section>

      {/* 5. Awards Marquee */}
      <section className={styles.marqueeSection}>
        <h2 className={styles.marqueeTitle}>Petit earns the awards so you can get the rest</h2>
        <div className={styles.marqueeTrackWrap}>
          <div className={styles.marqueeTrack}>
            <Image src="/images/badge-1.png" alt="Award Badge 1" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-2.png" alt="Award Badge 2" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-3.png" alt="Award Badge 3" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-4.png" alt="Award Badge 4" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-5.png" alt="Award Badge 5" width={200} height={80} className={styles.badgeImg} />
            {/* Duplicate for infinite loop */}
            <Image src="/images/badge-1.png" alt="Award Badge 1" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-2.png" alt="Award Badge 2" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-3.png" alt="Award Badge 3" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-4.png" alt="Award Badge 4" width={200} height={80} className={styles.badgeImg} />
            <Image src="/images/badge-5.png" alt="Award Badge 5" width={200} height={80} className={styles.badgeImg} />
          </div>
        </div>
      </section>

    </div>
  );
}
