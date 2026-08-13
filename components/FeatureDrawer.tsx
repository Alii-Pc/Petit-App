'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './FeatureDrawer.module.css';
import { featureDetails, FeatureDetail } from '@/data/carousel-details';

interface FeatureDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  featureId: number | null;
}

export default function FeatureDrawer({ isOpen, onClose, featureId }: FeatureDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!featureId) return null;

  const detail: FeatureDetail | undefined = featureDetails[featureId];

  if (!detail) return null;

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>{detail.mainTitle}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close details">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className={styles.content}>
          <p className={styles.introText}>{detail.introText}</p>
          
          <div className={styles.badges}>
            {detail.badges.map((badge, idx) => (
              <span key={idx} className={styles.badge}>{badge}</span>
            ))}
          </div>

          {detail.sections.map((section, idx) => (
            <div key={idx} className={styles.section}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <p className={styles.sectionDesc}>{section.description}</p>
              
              {section.image && (
                <div className={styles.sectionImageWrap}>
                  <Image 
                    src={section.image} 
                    alt={section.title} 
                    fill 
                    className={styles.sectionImage} 
                  />
                </div>
              )}

              {section.bullets && (
                <ul className={styles.bullets}>
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className={styles.bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
