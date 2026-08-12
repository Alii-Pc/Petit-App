'use client';

import React, { useState } from 'react';
import styles from './AnnouncementBar.module.css';

const messages = [
  '🚚 Free shipping on all orders',
  '🔄 30-day risk-free returns',
  '🛡️ 2-year warranty included',
];

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            {messages.map((msg, i) => (
              <span key={i} className={styles.message}>
                {msg}
              </span>
            ))}
            {messages.map((msg, i) => (
              <span key={`dup-${i}`} className={styles.message}>
                {msg}
              </span>
            ))}
          </div>
        </div>
        <button
          className={styles.closeBtn}
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  );
}
