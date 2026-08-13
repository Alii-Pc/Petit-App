'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AppProductHero.module.css';
import { useCart } from '@/context/CartContext'; // assuming standard cart context if needed

export default function AppProductHero() {
  // App images gallery
  const images = [
    '/images/iphone-cam.jpg',
    '/images/petit.jpg',
    '/images/sleeping-phone.jpg',
    '/images/petit-teaser.jpg'
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [purchaseType, setPurchaseType] = useState<'subscribe' | 'onetime'>('subscribe');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <motion.section 
      className={styles.heroSection}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div className={styles.heroGrid}>

          {/* Left Column — Gallery */}
          <div className={styles.galleryColumn}>
            <div className={styles.thumbnails}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`${styles.thumbnailBtn} ${mainImage === img ? styles.activeThumb : ''}`}
                  onClick={() => setMainImage(img)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image src={img} alt={`App Thumbnail ${idx + 1}`} fill className={styles.thumbnailImg} />
                </button>
              ))}
            </div>
            <div className={styles.mainImageWrapper}>
              <Image
                src={mainImage}
                alt="Petit App on Phone"
                fill
                className={styles.mainImage}
                priority
              />
            </div>
          </div>

          {/* Right Column — Info */}
          <div className={styles.infoColumn}>
            <div className={styles.stickyContent}>
              
              <div className={styles.reviews}>
                <span className={styles.stars}>★★★★★</span>
                <span>4.8 rating from 50k+ Parents</span>
              </div>

              <h1 className={styles.productTitle}>Petit App</h1>

              <p className={styles.shortDescription}>
                Petit App lets you stay close to your baby no matter where you are. With live HD video, intelligent notifications, and detailed sleep monitoring, you can check on your little one anytime.
              </p>

              <div className={styles.purchaseOptions}>
                
                {/* Subscribe Option */}
                <div 
                  className={`${styles.optionBox} ${purchaseType === 'subscribe' ? styles.optionBoxActive : ''}`}
                  onClick={() => setPurchaseType('subscribe')}
                >
                  {purchaseType === 'subscribe' && <div className={styles.bestValueTag}>Best Value</div>}
                  <div className={styles.optionHeader}>
                    <div className={styles.optionLeft}>
                      <div className={styles.radioInput}>
                        {purchaseType === 'subscribe' && <div className={styles.radioInner} />}
                      </div>
                      <span className={styles.optionLabel}>Subscribe and save</span>
                    </div>
                    <div className={styles.optionRight}>
                      <span className={styles.comparePrice}>$400.00</span>
                      <span className={styles.price}>$380.00</span>
                    </div>
                  </div>

                  {purchaseType === 'subscribe' && (
                    <div className={styles.subscriptionDetails}>
                      <select className={styles.dropdownSelect} defaultValue="Deliver every month, 5% off">
                        <option value="Deliver every month, 5% off">Deliver every month, 5% off</option>
                      </select>
                      <ul className={styles.benefitsList}>
                        <li><span className={styles.checkBlue}>✓</span> 10GB cloud storage — always safe</li>
                        <li><span className={styles.checkBlue}>✓</span> Up to 3 cameras & all features included</li>
                        <li><span className={styles.checkBlue}>✓</span> 30-day video history</li>
                        <li><span className={styles.checkBlue}>✓</span> Smart alerts — cancel anytime</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* One-Time Option */}
                <div 
                  className={`${styles.optionBox} ${purchaseType === 'onetime' ? styles.optionBoxActive : ''}`}
                  onClick={() => setPurchaseType('onetime')}
                >
                  <div className={styles.optionHeader}>
                    <div className={styles.optionLeft}>
                      <div className={styles.radioInput}>
                        {purchaseType === 'onetime' && <div className={styles.radioInner} />}
                      </div>
                      <span className={styles.optionLabel}>One - Time Purchase</span>
                    </div>
                    <div className={styles.optionRight}>
                      <span className={styles.price}>$400.00</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className={styles.discountBanner}>
                🔥 Save up to 20% in value with subscription
              </div>

              <button className={styles.addToCartBtn}>
                Add to cart
              </button>

              <div className={styles.paymentIcons}>
                {/* Simplified Payment Badges */}
                <svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="3" fill="#1A1F71"/><text x="16" y="14" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">VISA</text></svg>
                <svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="3" fill="#222"/><circle cx="12" cy="10" r="6" fill="#EB001B"/><circle cx="20" cy="10" r="6" fill="#F79E1B" opacity="0.8"/></svg>
                <svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="3" fill="#0079C1"/><text x="16" y="14" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontStyle="italic" fontFamily="sans-serif">PayPal</text></svg>
              </div>

              <ul className={styles.featureBullets}>
                <li>Available for iOS and Android devices</li>
                <li>Requires internet connection (Wi-Fi / LTE / 5G)</li>
                <li>Real-time HD video streaming with low latency</li>
                <li>Multiple devices support</li>
              </ul>

              <div className={styles.guaranteeIcons}>
                <div className={styles.guaranteeItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M5 11h14M5 15h14M5 7h14M3 3h18v18H3z"/></svg>
                  <span className={styles.guaranteeText}>24h Free Delivery</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M21 10v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9m18 0l-9-6-9 6"/></svg>
                  <span className={styles.guaranteeText}>30-days Free Return</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  <span className={styles.guaranteeText}>2 Year Warranty</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M15 10l4.5 4.5M10 15l4.5 4.5M5 10l4.5 4.5"/></svg>
                  <span className={styles.guaranteeText}>Quick Assistant 24h</span>
                </div>
              </div>

              <div className={styles.accordions}>
                <div className={styles.accordionItem}>
                  <button className={styles.accordionHeader} onClick={() => toggleAccordion('desc')}>
                    <span>Description</span>
                    <span className={styles.accordionIcon}>{openAccordion === 'desc' ? '−' : '+'}</span>
                  </button>
                  {openAccordion === 'desc' && (
                    <div className={styles.accordionContent}>
                      Get the most out of your Petit Baby Monitor with our companion app. It gives you full control and real-time insights right from your smartphone.
                    </div>
                  )}
                </div>
                <div className={styles.accordionItem}>
                  <button className={styles.accordionHeader} onClick={() => toggleAccordion('specs')}>
                    <span>Technical Specs</span>
                    <span className={styles.accordionIcon}>{openAccordion === 'specs' ? '−' : '+'}</span>
                  </button>
                  {openAccordion === 'specs' && (
                    <div className={styles.accordionContent}>
                      Compatibility: iOS 14+ or Android 9.0+<br/>
                      Storage: Local SD card up to 128GB or Cloud Subscription<br/>
                      Language: Available in 12 languages
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
