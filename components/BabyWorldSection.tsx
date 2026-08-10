'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BabyWorldSection.module.css';

const featureColumns = [
  {
    id: 1,
    title: 'Night Vision Mode',
    description:
      'See your baby clearly without disturbing their sleep. Our advanced infrared technology delivers crisp, detailed video—even in complete darkness—so you can rest knowing your little one is safe and comfortable around the clock.',
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Temperature &\nHumidity Tracking',
    description:
      'Ensure the room environment is always comfortable. Real-time monitoring helps you maintain the ideal conditions for safe, healthy sleep, alerting you instantly if anything falls outside the recommended range.',
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        <path d="M12 9v4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Mobile App Control',
    description:
      'Monitor from your phone, wherever you are. Stay connected at home, at work, or on the go with secure app access, instant alerts, and two-way audio that lets you soothe your baby with just a tap.',
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
        <path d="M9 7a4 4 0 0 1 6 0" />
        <path d="M10.5 9.5a2 2 0 0 1 3 0" />
      </svg>
    ),
  },
];

export default function BabyWorldSection() {
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

  // Scrolled Content: fades in at p=0.25..1.0
  const scrolledOpacity = Math.min(1, Math.max(0, (progress - 0.22) * 2.2));
  const scrolledTranslateY = Math.max(0, (1 - progress) * 45);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        {/* Background Image — Baby in crib with Petit monitor */}
        <div className={styles.imageWrap}>
          <Image
            src="/images/baby-crib-bg.jpg"
            alt="Baby in crib with Petit monitor on wooden dresser in warm nursery"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Dynamic Scroll Blur & Dark Overlay */}
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
          {/* Initial State: Hero Title & Description (Right Aligned) */}
          <div
            className={styles.initialContent}
            style={{
              opacity: initialOpacity,
              transform: `translateY(${initialTranslateY}px)`,
              pointerEvents: initialOpacity > 0.2 ? 'auto' : 'none',
            }}
          >
            <h2 className={styles.heroTitle}>
              Because Your Baby&apos;s <br className={styles.mobileBreak} />
              World Matters
            </h2>
            <p className={styles.heroDesc}>
              Stay calm and connected wherever you are. Our baby monitor delivers
              clear HD video, smooth live streaming, and reliable performance. Easy
              to use and beautifully designed for modern parents who want security
              without the stress.
            </p>

            <div className={styles.btnWrap}>
              <Link href="/features" className={styles.btn}>
                Check all Features
              </Link>
            </div>
          </div>

          {/* Scrolled State: 3 Text Columns (Cardless / Seamless Overlay) */}
          <div
            className={styles.scrolledGridContainer}
            style={{
              opacity: scrolledOpacity,
              transform: `translateY(${scrolledTranslateY}px)`,
              pointerEvents: scrolledOpacity > 0.3 ? 'auto' : 'none',
            }}
          >
            <div className={styles.featuresGrid}>
              {featureColumns.map((col) => (
                <div key={col.id} className={styles.featureItem}>
                  <div className={styles.iconWrap}>{col.icon}</div>
                  <div className={styles.textWrap}>
                    <h3 className={styles.featureTitle}>
                      {col.title.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          {idx === 0 && col.title.includes('\n') && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className={styles.featureDesc}>{col.description}</p>
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
