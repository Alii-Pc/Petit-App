'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import Sidebar from './Sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {/* Left: Hamburger + Teaser Nav */}
          <div className={styles.leftGroup}>
            <button 
              className={styles.hamburger} 
              aria-label="Toggle menu"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 7.5H19" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 16.5H19" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            </button>
            <nav className={styles.teaserNav}>
              <Link href="/pages/why-petit">Why Petit?</Link>
              <Link href="/products/petit-app">The App</Link>
              <Link href="/products/petit" className={styles.highlight}>Buy Petit</Link>
            </nav>
          </div>

          {/* Center: Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/petit-logo.svg"
                alt="Petit"
                width={90}
                height={37}
                priority
              />
            </Link>
          </div>

          {/* Right: Account + Cart */}
          <div className={styles.rightGroup}>
            <button className={styles.iconBtn} aria-label="Account">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
              </svg>
            </button>
            <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 6h15l-1.5 9h-12z"/>
                <circle cx="9" cy="19" r="1.5"/>
                <circle cx="18" cy="19" r="1.5"/>
                <path d="M6 6L5 2H2"/>
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Slide-out Sidebar Menu */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
