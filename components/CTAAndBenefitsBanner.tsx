import React from 'react';
import { Button } from '@/components/ui/Button';
import styles from './CTAAndBenefitsBanner.module.css';

const benefitsList = [
  '30-days Risk-free Return',
  '2 Year Warranty',
  'Quick Assistant within 24h',
  '24h Free Shipping',
];

const marqueeBenefits = [...benefitsList, ...benefitsList, ...benefitsList, ...benefitsList];

export default function CTAAndBenefitsBanner({ hideBanner = false }: { hideBanner?: boolean }) {
  return (
    <div className={styles.sectionWrap}>
      {/* Top Gradient CTA Banner */}
      {!hideBanner && (
        <section className={styles.bannerSection}>
          <div className={styles.container}>
            <div className={styles.ratingEyebrow}>
              <div className={styles.starsRow}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span>Trusted by thousands of parents</span>
            </div>

            <h2 className={styles.bannerTitle}>
              Peace of mind <br />
              starts today
            </h2>

            <p className={styles.bannerSubtitle}>
              From first smiles to peaceful sleep. Stay close, even when you&apos;re in another room.
            </p>

            <div className={styles.btnWrap}>
              <Button href="/products/petit">
                Discover Smart Monitoring
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Benefits Moving Marquee Strip */}
      <div className={styles.marqueeStrip}>
        <div className={styles.marqueeTrack}>
          {marqueeBenefits.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className={styles.benefitItem}>{item}</span>
              <span className={styles.bullet}>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
