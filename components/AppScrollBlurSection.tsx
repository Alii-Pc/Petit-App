'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AppScrollBlurSection.module.css';

const appCards = [
  {
    id: 1,
    title: 'Real-Time HD Baby Monitoring',
    description:
      'Stay close to your baby with crystal-clear HD live streaming. Use night vision, monitor sound and movement, and receive instant smart alerts so you can respond the moment your little one needs you.',
    image: '/images/petit-app-scr-1.jpg',
  },
  {
    id: 2,
    title: 'Smarter Sleep Monitoring',
    description:
      'Track room temperature and key comfort indicators to create the perfect sleep environment. Petit helps you maintain optimal conditions and notifies you when something needs your attention.',
    image: '/images/petit-app-scr-2.jpg',
  },
  {
    id: 3,
    title: 'Detailed Sleep Insights',
    description:
      'Access clear, easy-to-read sleep reports and daily summaries. Track patterns, understand routines, and make informed decisions to support your baby’s healthy sleep development.',
    image: '/images/petit-app-scr-3.jpg',
  },
];

export default function AppScrollBlurSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

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

  // Initial Content: visible at p=0..0.35, fades out by p=0.45
  const initialOpacity = Math.max(0, 1 - progress * 2.3);
  const initialTranslateY = -progress * 40;

  // Scrolled State Layout: fades in at p=0.22..1.0
  const cardsOpacity = Math.min(1, Math.max(0, (progress - 0.22) * 2.2));
  const cardsTranslateY = Math.max(0, (1 - progress) * 50);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        {/* Hero Background Image — Hand holding iPhone with Petit App */}
        <div className={styles.imageWrap}>
          <Image
            src="/images/petit-app-bg.png"
            alt="Discover Petit App - Your Smart Baby Monitor App"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Dynamic Scroll Blur & Dark Tint Overlay */}
        <div
          className={styles.overlay}
          style={{
            backdropFilter: `blur(${progress * 16}px)`,
            WebkitBackdropFilter: `blur(${progress * 16}px)`,
            backgroundColor: `rgba(0, 0, 0, ${progress * 0.45})`,
          }}
        />

        {/* Content Container */}
        <div className={styles.contentWrap}>
          
          {/* Initial State: Hero Title & Description (Bottom Right) */}
          <div
            className={styles.initialContent}
            style={{
              opacity: initialOpacity,
              transform: `translateY(${initialTranslateY}px)`,
              pointerEvents: initialOpacity > 0.2 ? 'auto' : 'none',
            }}
          >
            <h2 className={styles.heroTitle}>
              Discover Petit App <br />
              <span className={styles.subHeader}>– Your Smart Baby Monitor App</span>
            </h2>
            <p className={styles.heroDesc}>
              Petit keeps you confidently connected to your little one wherever
              you are. With real-time HD streaming, smart alerts, and advanced
              sleep tracking, you always know what your baby is doing — giving you
              full control, reassurance, and the freedom to relax.
            </p>
          </div>

          {/* Scrolled State Layout */}
          <div
            className={styles.scrolledContentWrap}
            style={{
              opacity: cardsOpacity,
              transform: `translateY(${cardsTranslateY}px)`,
              pointerEvents: cardsOpacity > 0.3 ? 'auto' : 'none',
            }}
          >
            {/* Top Center Title (Scrolled State) */}
            <div className={styles.scrolledHeader}>
              <h2 className={styles.scrolledTitle}>
                Discover Petit App <br className={styles.mobileBreak} />
                <span className={styles.subHeader}>– Your Smart Baby Monitor App</span>
              </h2>
              <p className={styles.scrolledDesc}>
                Petit keeps you confidently connected to your little one wherever you are.
                With real-time HD streaming, smart alerts, and advanced sleep tracking,
                you always know what your baby is doing — giving you full control, reassurance,
                and the freedom to relax.
              </p>
            </div>

            {/* 3 App Feature Cards Grid */}
            <div className={styles.cardsGrid}>
              {appCards.map((card) => (
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

            {/* Bottom CTA Button */}
            <div className={styles.btnWrap}>
              <Link href="/products/petit-app" className={styles.discoverBtn}>
                Discover Petit App
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
