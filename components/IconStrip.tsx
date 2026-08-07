import React from 'react';
import styles from './IconStrip.module.css';

const items = [
  {
    text: "Works even on weak Wi-Fi",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
        <circle cx="17" cy="6" r="3" fill="var(--color-background)" />
        <path d="M17 4v2" />
        <circle cx="17" cy="8" r="0.5" fill="currentColor" />
      </svg>
    )
  },
  {
    text: "Crystal-clear night vision",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4V2M12 22v-2M4.5 12h-2M21.5 12h-2M7.5 7.5L6 6M18 18l-1.5-1.5M7.5 16.5L6 18M18 6l-1.5 1.5" />
      </svg>
    )
  },
  {
    text: "24h battery backup",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="16" height="10" rx="2" ry="2" />
        <path d="M21 11v4" />
        <path d="M9 11v4" />
        <path d="M13 11v4" />
        <path d="M17 11v4" />
        <circle cx="5" cy="6" r="4" fill="var(--color-background)" />
        <circle cx="5" cy="6" r="4" />
        <polyline points="5 4 5 6 6.5 7" />
      </svg>
    )
  },
  {
    text: "AI Sleep & Motion Tracking",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  }
];

export default function IconStrip() {
  // Duplicate items exactly 4 times so we have two perfectly identical halves for seamless 50% translation.
  // Half 1: items x2, Half 2: items x2. Total = items x4.
  const multipliedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.stripWrapper}>
      <div className={styles.stripTrack}>
        {multipliedItems.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.text}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
