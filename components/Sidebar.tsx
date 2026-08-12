import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function Sidebar({ isOpen, onClose, onOpenLogin }: SidebarProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
            <button 
              className={`${styles.navLinkBtn} ${isProductsOpen ? styles.navLinkBtnActive : ''}`} 
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              aria-expanded={isProductsOpen}
            >
              <span className={styles.navLinkText}>Our Products</span>
              <span className={styles.iconPlus}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" className={`${styles.iconVertical} ${isProductsOpen ? styles.iconVerticalHidden : ''}`}></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </button>
            <div className={`${styles.dropdownContent} ${isProductsOpen ? styles.dropdownContentOpen : ''}`}>
              <div className={styles.dropdownGrid}>
                <Link href="/products/petit" className={styles.dropdownCard} onClick={onClose}>
                  <div className={styles.dropdownImageWrapper}>
                    <Image src="/images/petit.jpg" alt="Petit" fill className={styles.dropdownImage} />
                  </div>
                  <span className={styles.dropdownCardTitle}>Petit Baby Monitor</span>
                </Link>
                <Link href="/products/petit-pro" className={styles.dropdownCard} onClick={onClose}>
                  <div className={styles.dropdownImageWrapper}>
                    <Image src="/images/petit-pro.jpg" alt="Petit Pro" fill className={styles.dropdownImage} />
                  </div>
                  <span className={styles.dropdownCardTitle}>Petit Pro Baby Monitor</span>
                </Link>
              </div>
            </div>
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
            <Link href="/quiz" className={styles.navLink} onClick={onClose}>
               Quiz
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
          <button 
            className={styles.loginLink} 
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className={styles.loginText}>Log in</span>
          </button>
        </div>
      </div>
    </>
  );
}
