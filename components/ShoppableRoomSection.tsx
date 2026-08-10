'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ShoppableRoomSection.module.css';

interface Hotspot {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  price: string;
  coords: { top: string; left: string };
  popoverOffset?: { top?: string; left?: string };
}

const hotspots: Hotspot[] = [
  {
    id: 1,
    title: 'Master Bedroom',
    subtitle: 'Night Vision & Sleep Monitoring',
    desc: 'Subtle infrared night-vision stream lets you check on the room without turning on lights.',
    badge: '1080p HD Live',
    price: '$149.00',
    coords: { top: '51%', left: '20.5%' },
    popoverOffset: { top: '35%', left: '23%' },
  },
  {
    id: 2,
    title: 'Baby Nursery',
    subtitle: 'Smart Crib & Cry Alerts',
    desc: 'Positioned directly over the crib for instant cry detection, rollover alerts, and temp tracking.',
    badge: 'Cry Alert Ready',
    price: '$149.00',
    coords: { top: '34.5%', left: '36.5%' },
    popoverOffset: { top: '18%', left: '39%' },
  },
  {
    id: 3,
    title: 'Living Room',
    subtitle: '150° Wide Angle Playtime View',
    desc: 'Keep track of toddler activities across the room with ultra wide-angle coverage and motion alerts.',
    badge: 'Wide Angle View',
    price: '$149.00',
    coords: { top: '75.5%', left: '48.5%' },
    popoverOffset: { top: '52%', left: '51%' },
  },
  {
    id: 4,
    title: 'Kitchen Island',
    subtitle: 'Hands-Free Smart Display',
    desc: 'Stream the nursery feed directly to your smart display while cooking or prepping meals.',
    badge: 'Two-Way Audio',
    price: '$149.00',
    coords: { top: '49%', left: '66.5%' },
    popoverOffset: { top: '32%', left: '69%' },
  },
];

export default function ShoppableRoomSection() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveSpot(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSpotClick = (id: number) => {
    setActiveSpot(activeSpot === id ? null : id);
  };

  const activeHotspotData = hotspots.find((h) => h.id === activeSpot);

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        {/* Isometric Visual Container */}
        <div className={styles.visualWrapper}>
          <div className={styles.imageContainer}>
            {/* Header Text Overlayed cleanly on Top Center without overlapping room */}
            <div className={styles.header}>
              <p className={styles.eyebrow}>Because Every Moment Matters</p>
              <h2 className={styles.title}>
                Designed for{' '}
                <span className={styles.highlightBronze}>Peaceful</span>{' '}
                <span className={styles.highlightBlue}>Nights</span>
              </h2>
            </div>

            {/* Main 3D Home Cutaway Background Image */}
            <Image
              src="/images/petit-shoppable-image-desktop.webp"
              alt="Designed for Peaceful Nights - Petit Smart Home Room Layout"
              width={1920}
              height={1003}
              className={styles.roomImage}
              priority
            />

            {/* Hotspot Pins */}
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                className={`${styles.hotspotPin} ${activeSpot === spot.id ? styles.activePin : ''}`}
                style={{ top: spot.coords.top, left: spot.coords.left }}
                onClick={() => handleSpotClick(spot.id)}
                aria-label={`View ${spot.title} camera details`}
              >
                <div className={styles.pulseRing} />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.plusIcon}
                >
                  <path
                    d="M7 1V13M1 7H13"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            ))}

            {/* Popover Detail Card */}
            {activeHotspotData && (
              <div
                className={styles.popoverCard}
                style={activeHotspotData.popoverOffset}
              >
                <button
                  className={styles.closePopover}
                  onClick={() => setActiveSpot(null)}
                  aria-label="Close popover"
                >
                  &times;
                </button>
                <div className={styles.popoverHeader}>
                  <span className={styles.popoverBadge}>{activeHotspotData.badge}</span>
                  <span className={styles.popoverPrice}>{activeHotspotData.price}</span>
                </div>
                <h4 className={styles.popoverTitle}>{activeHotspotData.title}</h4>
                <p className={styles.popoverSubtitle}>{activeHotspotData.subtitle}</p>
                <p className={styles.popoverDesc}>{activeHotspotData.desc}</p>
                <Link href="/products/petit" className={styles.popoverCta}>
                  Shop Monitor &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
