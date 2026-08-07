import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.header}>
          <span className={styles.title}>Shop by</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <Link href="/products" className={styles.navLink} onClick={onClose}>
              Our Products
            </Link>
            <span className={styles.iconPlus}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </span>
          </div>
          <div className={styles.navItem}>
            <Link href="/app" className={styles.navLink} onClick={onClose}>
              Petit App
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/why-petit" className={styles.navLink} onClick={onClose}>
              Why Petit?
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/compare" className={styles.navLink} onClick={onClose}>
              Compare Models
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/faq" className={styles.navLink} onClick={onClose}>
              Faq
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/contact" className={styles.navLink} onClick={onClose}>
              Contact
            </Link>
          </div>
        </nav>

        <div className={styles.bottomSection}>
          <Link href="/login" className={styles.loginLink} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className={styles.loginText}>Log in</span>
          </Link>
        </div>
      </div>
    </>
  );
}
