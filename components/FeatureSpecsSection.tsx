import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeatureSpecsSection.module.css';

interface SpecRow {
  name: string;
  description: string;
}

const specRows: SpecRow[] = [
  { name: 'AI Sleep & Motion Tracking:', description: '✓ Included' },
  { name: 'Night Vision:', description: '✓ Included' },
  { name: 'Two-Way Audio:', description: '✓ Included' },
  { name: '4K Video Mode:', description: '4k or 2K Mode' },
  { name: 'App Alerts:', description: '✓ Included' },
];

export default function FeatureSpecsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Column: Feature Specs Table & CTA */}
        <div className={styles.leftCol}>
          <div className={styles.contentInner}>
            <h2 className={styles.title}>Peace of Mind. Total Comfort.</h2>
            <p className={styles.subtitle}>
              Baby Monitor Petit is an AI-powered smart camera designed to give you
              real-time monitoring, sleep tracking, and complete control.
            </p>

            {/* Specs Table */}
            <div className={styles.tableWrapper}>
              <div className={styles.tableHeaderRow}>
                <span className={styles.headerCellLeft}>Feature name:</span>
                <span className={styles.headerCellRight}>Description:</span>
              </div>

              {specRows.map((row, idx) => (
                <div key={idx} className={styles.tableRow}>
                  <span className={styles.cellLeft}>{row.name}</span>
                  <span className={styles.cellRight}>{row.description}</span>
                </div>
              ))}
            </div>

            {/* CTA & Guarantee */}
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
        </div>

        {/* Right Column: Teaser Image & Floating AI Badge */}
        <div className={styles.rightCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/petit-teaser.jpg"
              alt="Baby in wooden crib with Petit camera on bedside table"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Floating Circular AI Tracking Badge */}
          <div className={styles.aiBadge}>
            <span className={styles.aiBadgeTitle}>AI</span>
            <span className={styles.aiBadgeSub}>Tracking APP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
