import React from 'react';
import styles from './AsSeenInStrip.module.css';

const pressLogos = [
  'The New York Times',
  'goop',
  'FAST COMPANY',
  'VARIETY',
  'THE WALL STREET JOURNAL',
  'Forbes',
];

// Quadruple for smooth infinite scrolling
const marqueeList = [...pressLogos, ...pressLogos, ...pressLogos, ...pressLogos];

export default function AsSeenInStrip() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>As seen in</p>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {marqueeList.map((logo, idx) => (
            <span key={idx} className={styles.logoItem}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
