import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CompareSection.module.css';

interface FeatureRow {
  left: React.ReactNode;
  title: string;
  right: React.ReactNode;
}

const comparisonFeatures: FeatureRow[] = [
  {
    left: (
      <Image
        src="/images/tick-green.png"
        alt="Yes"
        width={24}
        height={24}
        className={styles.iconMark}
      />
    ),
    title: '2K QHD Video Quality',
    right: (
      <Image
        src="/images/close-red.png"
        alt="No"
        width={20}
        height={20}
        className={styles.iconMark}
      />
    ),
  },
  {
    left: (
      <Image
        src="/images/tick-green.png"
        alt="Yes"
        width={24}
        height={24}
        className={styles.iconMark}
      />
    ),
    title: 'Motion Detection',
    right: (
      <Image
        src="/images/close-red.png"
        alt="No"
        width={20}
        height={20}
        className={styles.iconMark}
      />
    ),
  },
  {
    left: (
      <Image
        src="/images/tick-green.png"
        alt="Yes"
        width={24}
        height={24}
        className={styles.iconMark}
      />
    ),
    title: 'Remote Viewing Access',
    right: (
      <Image
        src="/images/close-red.png"
        alt="No"
        width={20}
        height={20}
        className={styles.iconMark}
      />
    ),
  },
  {
    left: (
      <Image
        src="/images/tick-green.png"
        alt="Yes"
        width={24}
        height={24}
        className={styles.iconMark}
      />
    ),
    title: 'Dual-Band 5GHz Wi-Fi + Bluetooth',
    right: (
      <Image
        src="/images/close-red.png"
        alt="No"
        width={20}
        height={20}
        className={styles.iconMark}
      />
    ),
  },
  {
    left: '3–5 years',
    title: 'Product Lifespan',
    right: '1–2 years',
  },
  {
    left: 'Minimal',
    title: 'Downtime Risk',
    right: 'High',
  },
];

export default function CompareSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4a373"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Trusted by Parents Worldwide</span>
          </div>

          <h2 className={styles.title}>
            See Why Parents <br className={styles.mobileBreak} />
            <span className={styles.highlightTan}>Choose</span>{' '}
            <span className={styles.highlightBlue}>Petit</span>
          </h2>

          <p className={styles.subtitle}>
            Compare Petit Baby Monitor with standard monitors and discover what truly
            matters for your baby’s safety and your peace of mind.
          </p>
        </div>

        {/* Side by Side Product Cards */}
        <div className={styles.cardsGrid}>
          <div className={styles.cardCell}>
            <Image
              src="/images/compare-petit.png"
              alt="Petit Smart Baby Monitor"
              width={450}
              height={435}
              className={styles.cardImage}
              priority
            />
          </div>
          <div className={styles.cardCell}>
            <Image
              src="/images/compare-other.png"
              alt="Standard Baby Monitor"
              width={450}
              height={435}
              className={styles.cardImage}
              priority
            />
          </div>
        </div>

        {/* Comparison Feature Table */}
        <div className={styles.tableWrapper}>
          {/* Table Header Row */}
          <div className={styles.tableHeaderRow}>
            <div className={`${styles.cell} ${styles.cellLeft} ${styles.headerLeft}`}>
              Petit
            </div>
            <div className={`${styles.cell} ${styles.cellCenter}`}></div>
            <div className={`${styles.cell} ${styles.cellRight} ${styles.headerRight}`}>
              Other
            </div>
          </div>

          {/* Feature Rows */}
          {comparisonFeatures.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={`${styles.cell} ${styles.cellLeft}`}>
                {row.left}
              </div>
              <div className={`${styles.cell} ${styles.cellCenter}`}>
                {row.title}
              </div>
              <div className={`${styles.cell} ${styles.cellRight}`}>
                {row.right}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & 30-Day Guarantee Badge */}
        <div className={styles.ctaWrap}>
          <Link href="/products/petit" className={styles.buyBtn}>
            Buy Now from $149
          </Link>
          <div className={styles.guaranteeBadge}>
            <Image
              src="/images/calendar-heart.png"
              alt="Calendar Guarantee Icon"
              width={20}
              height={20}
              className={styles.guaranteeIcon}
            />
            <span>30 days to love it or your money back</span>
          </div>
        </div>
      </div>
    </section>
  );
}
