'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ScrollBlurSection.module.css';

const featureCards = [
  {
    id: 1,
    title: 'AI Motion Detection',
    description:
      'See, hear, and soothe your baby anytime. A simple tap lets you check in and respond with love instantly.',
    image: '/images/card-ai-motion.jpg',
  },
  {
    id: 2,
    title: 'Smart Room Monitoring',
    description:
      'Track temperature and humidity in real time to maintain the perfect sleep environment. Get notified instantly if conditions change.',
    image: '/images/card-room-monitoring.jpg',
  },
  {
    id: 3,
    title: 'Share Precious Moments',
    description:
      'With the Petit App, you can safely share live access with loved ones so they never miss a milestone. Whether it’s grandparents, relatives, or your partner at work — everyone can stay close to what matters most.',
    image: '/images/card-share-moments.jpg',
  },
];

export default function ScrollBlurSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress from 0 (entering) to 1 (leaving)
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      let p = -rect.top / totalScrollable;
      p = Math.min(1, Math.max(0, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text block (Initial state): visible at p=0..0.35, fades out by p=0.45
  const initialOpacity = Math.max(0, 1 - progress * 2.3);
  const initialTranslateY = -progress * 40;

  // Cards grid (Scrolled state): fades in at p=0.25..1.0
  const cardsOpacity = Math.min(1, Math.max(0, (progress - 0.22) * 2.2));
  const cardsTranslateY = Math.max(0, (1 - progress) * 50);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        {/* Background Image — Mother in bed looking at phone */}
        <div className={styles.imageWrap}>
          <Image
            src="/images/sleeping_phone.webp"
            alt="Total Peace of Mind, Day and Night - Petit Smart Monitor"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Dynamic Blur & Dark Tint Overlay */}
        <div
          className={styles.overlay}
          style={{
            backdropFilter: `blur(${progress * 16}px)`,
            WebkitBackdropFilter: `blur(${progress * 16}px)`,
            backgroundColor: `rgba(0, 0, 0, ${progress * 0.42})`,
          }}
        />

        {/* Content Container */}
        <div className={styles.contentWrap}>
          
          {/* Initial State: Hero Title & Description (Bottom-Left) */}
          <div
            className={styles.initialContent}
            style={{
              opacity: initialOpacity,
              transform: `translateY(${initialTranslateY}px)`,
              pointerEvents: initialOpacity > 0.2 ? 'auto' : 'none',
            }}
          >
            <h2 className={styles.heroTitle}>
              Total Peace of Mind, <br className={styles.mobileBreak} />
              Day and Night
            </h2>
            <p className={styles.heroDesc}>
              Stay confidently connected to your little one wherever you are. With
              real-time HD streaming and smart alerts, you always know what your
              baby is doing - giving you full control, reassurance, and the freedom
              to relax.
            </p>

            <div className={styles.btnGroup}>
              <Link href="/features" className={styles.secondaryBtn}>
                Check all Features
              </Link>
              <Link href="/products/petit" className={styles.primaryBtn}>
                Buy Now from $149
              </Link>
            </div>
          </div>

          {/* Scrolled State: 3 Feature Cards Grid (Center / Bottom Overlay) */}
          <div
            className={styles.cardsGridContainer}
            style={{
              opacity: cardsOpacity,
              transform: `translateY(${cardsTranslateY}px)`,
              pointerEvents: cardsOpacity > 0.3 ? 'auto' : 'none',
            }}
          >
            <div className={styles.cardsGrid}>
              {featureCards.map((card) => (
                <div key={card.id} className={styles.cardItem}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
