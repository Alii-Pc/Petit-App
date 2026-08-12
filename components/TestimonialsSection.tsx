'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import styles from './TestimonialsSection.module.css';
import { homeTestimonials } from '@/data/home';

// Duplicate list for infinite smooth marquee scrolling
const marqueeList = [...homeTestimonials, ...homeTestimonials, ...homeTestimonials];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <SectionHeader
          eyebrow={
            <>
              <div className={styles.starsRow}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#e5a93c"
                    stroke="#e5a93c"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span>5-Star Reviews</span>
            </>
          }
          title={
            <>
              Loved by <br />
              <span className={styles.highlightTan}>Modern</span>{' '}
              <span className={styles.highlightBlue}>Parents</span>
            </>
          }
          subtitle="Real stories from families who sleep better knowing their baby is safe."
        />
      </div>

      {/* Infinite Marquee Slider Wrap */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {marqueeList.map((review, index) => (
            <div key={`${review.id}-${index}`} className={styles.card}>
              <h3 className={styles.cardTitle}>{review.title}</h3>
              <p className={styles.cardText}>{review.text}</p>

              <div className={styles.authorRow}>
                <div className={styles.avatarWrap}>
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    width={44}
                    height={44}
                    className={styles.avatar}
                  />
                </div>

                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{review.author}</span>
                  <div className={styles.cardStars}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#e5a93c"
                        stroke="#e5a93c"
                        strokeWidth="1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className={styles.btnWrap}>
        <Button href="/reviews" variant="secondary">
          See all Parent Reviews
        </Button>
      </div>
    </section>
  );
}
