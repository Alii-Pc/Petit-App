'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AwardsMarquee.module.css';

const AWARDS = [
  { id: 1, src: '/images/badge-1.png', alt: 'Award 1' },
  { id: 2, src: '/images/badge-2.png', alt: 'Award 2' },
  { id: 3, src: '/images/badge-3.png', alt: 'Award 3' },
  { id: 4, src: '/images/badge-4.png', alt: 'Award 4' },
  { id: 5, src: '/images/badge-5.png', alt: 'Award 5' },
];

export default function AwardsMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Petit earns the awards so you can get the rest</h2>
        
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {/* First set of awards */}
            {AWARDS.map((award) => (
              <div key={`set1-${award.id}`} className={styles.awardItem}>
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={150}
                  height={150}
                  className={styles.awardImage}
                />
              </div>
            ))}
            {/* Second set of awards (duplicate for infinite scroll) */}
            {AWARDS.map((award) => (
              <div key={`set2-${award.id}`} className={styles.awardItem} aria-hidden="true">
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={150}
                  height={150}
                  className={styles.awardImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
