'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TestimonialsSection.module.css';

interface ReviewItem {
  id: number;
  title: string;
  text: string;
  author: string;
  avatar: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: 1,
    title: 'A Must-Have for New Parents',
    text: 'This monitor gave us confidence from day one. The picture is sharp, the app is smooth, and it just works when you need it most.',
    author: '- Mark R., verified parent',
    avatar: '/images/pic-3.jpg',
  },
  {
    id: 2,
    title: 'Worth Every Penny',
    text: 'We’ve tried other baby monitors, but PETIT stands out. Reliable performance, modern design, and real peace of mind.',
    author: '- Michael T., verified parent',
    avatar: '/images/pic-4.jpg',
  },
  {
    id: 3,
    title: 'Finally, Peace of Mind at Night',
    text: 'The video quality is incredibly clear and the connection is always stable. I can finally relax knowing my baby is safe, even when I’m not in the room.',
    author: '- Anna M., verified parent',
    avatar: '/images/pic-1.jpg',
  },
  {
    id: 4,
    title: 'Simple, Reliable, and Beautifully Designed',
    text: 'PETIT was so easy to set up and fits perfectly into our home. It does exactly what we need — no stress, no complicated settings.',
    author: '- Marta L., verified parent',
    avatar: '/images/pic-2.jpg',
  },
];

// Duplicate list for infinite smooth marquee scrolling
const marqueeList = [...reviewsData, ...reviewsData, ...reviewsData];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
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
          </div>

          <h2 className={styles.title}>
            Loved by <br />
            <span className={styles.highlightTan}>Modern</span>{' '}
            <span className={styles.highlightBlue}>Parents</span>
          </h2>

          <p className={styles.subtitle}>
            Real stories from families who sleep better knowing their baby is safe.
          </p>
        </div>
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
        <Link href="/reviews" className={styles.reviewsBtn}>
          See all Parent Reviews
        </Link>
      </div>
    </section>
  );
}
