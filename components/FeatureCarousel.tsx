'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './FeatureCarousel.module.css';

const carouselData = [
  {
    id: 1,
    title: 'Your baby, always within reach',
    image: '/images/peace-1.jpg',
    theme: 'light' // white text
  },
  {
    id: 2,
    title: 'Smart AI Phone',
    image: '/images/iphone-cam.jpg',
    theme: 'dark' // dark text because background is light
  },
  {
    id: 3,
    title: 'Private & Secured',
    image: '/images/petit.jpg', // Replace with the lock image if we have it, petit is white bg
    theme: 'dark'
  },
  {
    id: 4,
    title: 'Smart monitor sleep',
    image: '/images/baby-camera-room.jpg',
    theme: 'light'
  }
];

export default function FeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
    const gap = 24;
    // Calculate which card is most visible
    const newIndex = Math.round(scrollPosition / (cardWidth + gap));
    setActiveIndex(newIndex);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
    const gap = 24;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Every parent deserves<br/>
          <span className={styles.highlightTan}>peace </span>
          <span className={styles.highlightBlue}>of mind.</span>
        </h2>
        <p className={styles.subtitle}>
          Discover the features that set Petit apart and help you rest easier.
        </p>
      </div>

      <div 
        className={styles.carouselContainer} 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {carouselData.map((card) => (
          <div key={card.id} className={styles.card}>
            <Image 
              src={card.image} 
              alt={card.title} 
              fill 
              className={styles.cardImage} 
            />
            {/* Dark overlay for light theme cards so white text is readable */}
            {card.theme === 'light' && <div className={styles.cardOverlay} />}
            
            <h3 className={`${styles.cardTitle} ${card.theme === 'dark' ? styles.cardTitleDark : ''}`}>
              {card.title}
            </h3>

            <button className={styles.plusButton} aria-label="Learn more">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.plusIcon}>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {carouselData.map((_, idx) => (
          <button 
            key={idx} 
            className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
