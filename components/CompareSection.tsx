import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/GuaranteeBadge';
import { Icon } from '@/components/ui/Icon';
import styles from './CompareSection.module.css';

interface FeatureRow {
  left: React.ReactNode;
  title: string;
  right: React.ReactNode;
}

const comparisonFeatures: FeatureRow[] = [
  {
    left: <Icon name="tick-green" size={24} className={styles.iconMark} />,
    title: '2K QHD Video Quality',
    right: <Icon name="close-red" size={20} className={styles.iconMark} />,
  },
  {
    left: <Icon name="tick-green" size={24} className={styles.iconMark} />,
    title: 'Motion Detection',
    right: <Icon name="close-red" size={20} className={styles.iconMark} />,
  },
  {
    left: <Icon name="tick-green" size={24} className={styles.iconMark} />,
    title: 'Remote Viewing Access',
    right: <Icon name="close-red" size={20} className={styles.iconMark} />,
  },
  {
    left: <Icon name="tick-green" size={24} className={styles.iconMark} />,
    title: 'Dual-Band 5GHz Wi-Fi + Bluetooth',
    right: <Icon name="close-red" size={20} className={styles.iconMark} />,
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
  const eyebrowContent = (
    <>
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
    </>
  );

  const titleContent = (
    <>
      See Why Parents <br className={styles.mobileBreak} />
      <span className={styles.highlightTan}>Choose</span>{' '}
      <span className={styles.highlightBlue}>Petit</span>
    </>
  );

  return (
    <Section backgroundColor="default">
      <SectionHeader
        eyebrow={eyebrowContent}
        title={titleContent}
        subtitle="Compare Petit Baby Monitor with standard monitors and discover what truly matters for your baby’s safety and your peace of mind."
      />

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

      {/* Bottom CTA & Guarantee */}
      <div className={styles.ctaWrap}>
        <Button href="/products/petit">
          Buy Now from $149
        </Button>
        <GuaranteeBadge />
      </div>
    </Section>
  );
}
