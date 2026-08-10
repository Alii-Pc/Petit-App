'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeatureCarousel.module.css';

const featuresData = [
  {
    id: 1,
    shortTitle: 'Capture Every Moment',
    fullTitle: 'Capture Every Precious Moment',
    description: "The little things become the biggest memories. Save milestones, create highlight clips, and share your baby's sweetest moments — effortlessly.",
    image: '/images/photo-1.jpg',
    drawerImage: '/images/photo-1.jpg',
    textWhite: true,
  },
  {
    id: 2,
    shortTitle: 'Always Stay Connected',
    fullTitle: 'Always Stay Connected',
    description: 'Stay close to your baby — wherever you are. Real-time monitoring, intelligent alerts, and privacy-first security help you feel connected without constantly checking.',
    image: '/images/iphone-cam.jpg',
    drawerImage: '/images/iphone-cam.jpg',
    textWhite: false,
  },
  {
    id: 3,
    shortTitle: 'Smarter Than\nLive Video',
    fullTitle: 'Smarter Than Live Video',
    description: "Live video is just the beginning. Get smarter insights, clearer context, and features that help you understand what's happening — not just watch it.",
    image: '/images/mobile-img-3.jpg',
    drawerImage: '/images/mobile-img-3.jpg',
    textWhite: true,
  }
];

export default function FeatureCarousel() {
  const [activeDrawer, setActiveDrawer] = useState<number | null>(null);

  const activeFeature = featuresData.find(f => f.id === activeDrawer);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header Text */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            The Baby Monitor<br />
            Trusted by <span className={styles.highlightTan}>Thousands</span> <span className={styles.highlightBlue}>of Parents</span>
          </h2>
          <p className={styles.subtitle}>
            Keep an eye on your baby anytime, anywhere with smart HD monitoring,<br />
            two-way audio and real-time alerts.
          </p>
        </div>

        {/* Carousel / Grid */}
        <div className={styles.carouselWrap}>
          <div className={styles.carouselScroll}>
            {featuresData.map((feature) => (
              <div key={feature.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={feature.image}
                    alt={feature.shortTitle.replace('\n', ' ')}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  {feature.textWhite && <div className={styles.overlayGradientDark}></div>}
                </div>
                <h3 className={`${styles.cardTitle} ${feature.textWhite ? styles.textWhite : styles.textDark}`}>
                  {feature.shortTitle.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}{i === 0 && feature.shortTitle.includes('\n') && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                
                <button 
                  className={styles.plusBtn} 
                  aria-label="Expand"
                  onClick={() => setActiveDrawer(feature.id)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <line x1="10" y1="4" x2="10" y2="16"/>
                    <line x1="4" y1="10" x2="16" y2="10"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotActive}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrap}>
          <Link href="/products/petit" className={styles.buyBtn}>
            Buy Now from $149
          </Link>
        </div>
      </div>

      {/* Feature Drawer */}
      <>
        <div 
          className={`${styles.drawerOverlay} ${activeDrawer ? styles.drawerOverlayOpen : ''}`} 
          onClick={() => setActiveDrawer(null)}
          aria-hidden="true"
        />
        <div className={`${styles.drawer} ${activeDrawer ? styles.drawerOpen : ''}`}>
          <div className={styles.drawerHeader}>
            <button className={styles.closeDrawerBtn} onClick={() => setActiveDrawer(null)} aria-label="Close details">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {activeFeature && (
            <div className={styles.drawerContent}>
              <div className={styles.drawerImageWrap}>
                <Image 
                  src={activeFeature.drawerImage} 
                  alt={activeFeature.fullTitle} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 400px" 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <h3 className={styles.drawerTitle}>{activeFeature.fullTitle}</h3>
              <p className={styles.drawerDesc}>{activeFeature.description}</p>
              
              <Link href="/products/petit" className={styles.drawerBuyBtn} onClick={() => setActiveDrawer(null)}>
                Discover Petit Monitor
              </Link>
            </div>
          )}
        </div>
      </>
    </section>
  );
}
