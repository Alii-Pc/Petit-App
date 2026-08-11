import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CompareModelsPage.module.css';

export default function CompareModelsPage() {
  const CheckMark = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#4CAF50"/>
      <path d="M17 8L10 15L7 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const XMark = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#dddddd"/>
      <path d="M15 9L9 15M9 9L15 15" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.badge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Trusted by Parents Worldwide
        </div>
        <h1 className={styles.title}>
          See Why Parents <span className={styles.gradientText}>Choose Petit</span>
        </h1>
        <p className={styles.subtitle}>
          Compare Petit Baby Monitor with standard monitors and discover what truly matters for your baby's safety and your peace of mind.
        </p>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableScroll}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={styles.highlightCol}>Petit</th>
                <th>Petit Pro</th>
                <th>Baby Luma</th>
                <th>Lunet Monitor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Live video monitoring</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
              </tr>
              <tr>
                <td>Sleep tracking</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
                <td><CheckMark /></td>
              </tr>
              <tr>
                <td>Health monitoring</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
              </tr>
              <tr>
                <td>Smart notifications</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
                <td><XMark /></td>
              </tr>
              <tr>
                <td>24h battery backup</td>
                <td className={styles.highlightCol}><XMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
                <td><XMark /></td>
              </tr>
              <tr>
                <td>Two-way audio</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
              </tr>
              <tr>
                <td>Night vision</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
              </tr>
              <tr>
                <td>Cry detection</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
                <td><XMark /></td>
              </tr>
              <tr>
                <td>Temperature sensor</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
                <td><CheckMark /></td>
              </tr>
              <tr>
                <td>Wall mountable</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
              </tr>
              <tr>
                <td>Free app included</td>
                <td className={styles.highlightCol}><CheckMark /></td>
                <td><CheckMark /></td>
                <td><XMark /></td>
                <td><XMark /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <Link href="/products/petit" className={styles.buyButton}>
          Buy Now from $149
        </Link>
        <p className={styles.guarantee}>30 days to love it or your money back</p>
      </div>

         {/* ===== SECTION: 98% of Parents Recommend ===== */}
      <div className={styles.recommendSection}>
        <div className={styles.recommendImageWrap}>
          <Image
            src="/images/baby-camera-room.jpg"
            alt="Baby smiling in crib with Petit Monitor camera on shelf"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.recommendOverlay}>
            <h2 className={styles.recommendTitle}>
              &ldquo;98% of Parents Recommend Petit Monitor&rdquo;
            </h2>
          </div>
        </div>
      </div>

      {/* ===== SECTION: Feel Close Even When You're Apart ===== */}
      <div className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>
          <p className={styles.benefitsEyebrow}>Feel Close</p>
          <h2 className={styles.benefitsTitle}>Even When You&apos;re Apart</h2>
          <p className={styles.benefitsSubtitle}>
            With real-time visibility, instant alerts, and a setup anyone can handle, you get the support you need
            — exactly when you need it.
          </p>
        </div>

        <div className={styles.benefitsGrid}>

          {/* Left column features */}
          <div className={styles.benefitsCol}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#494742" strokeWidth="1.2">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
                </svg>
              </div>
              <h3 className={styles.benefitName}>Crystal-clear night vision</h3>
              <p className={styles.benefitDesc}>See your baby clearly at any hour without disturbing their sleep.</p>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#494742" strokeWidth="1.2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className={styles.benefitName}>Real-time health monitoring</h3>
              <p className={styles.benefitDesc}>Track pulse, oxygen, and sleep data continuously while your baby rests.</p>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#494742" strokeWidth="1.2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <h3 className={styles.benefitName}>AI-powered sleep tracking</h3>
              <p className={styles.benefitDesc}>Advanced algorithms help you understand and improve your baby&apos;s sleep.</p>
            </div>
          </div>

          {/* Center camera video */}
          <div className={styles.benefitsCenterImage}>
            <video
              src="/videos/petit-camera-rotate.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              className={styles.cameraImg}
            />
            <div className={styles.benefitsCenterCta}>
              <Link href="/products/petit" className={styles.buyButton}>
                Buy Now from $149
              </Link>
            </div>
          </div>

          {/* Right column features */}
          <div className={styles.benefitsCol}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#494742" strokeWidth="1.2">
                  <path d="M5 12.55a11 11 0 0114.08 0"/>
                  <path d="M1.42 9a16 16 0 0121.16 0"/>
                  <path d="M8.53 16.11a6 6 0 016.95 0"/>
                  <circle cx="12" cy="20" r="1"/>
                </svg>
              </div>
              <h3 className={styles.benefitName}>Works even on weak Wi-Fi</h3>
              <p className={styles.benefitDesc}>Reliable connection even with unstable internet, so you never lose sight of your baby.</p>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#494742" strokeWidth="1.2">
                  <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
                  <path d="M23 6l-6 5 6 5V6z"/>
                  <path d="M6 14v-4" strokeWidth="1.5"/>
                  <path d="M10 14v-4" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className={styles.benefitName}>24h battery backup</h3>
              <p className={styles.benefitDesc}>Stay protected all day and night, even during power outages.</p>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#494742" strokeWidth="1.2">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
              </div>
              <h3 className={styles.benefitName}>Instant alerts &amp; notifications</h3>
              <p className={styles.benefitDesc}>Receive immediate updates if something needs your attention.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
