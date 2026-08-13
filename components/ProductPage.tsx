'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProductPage.module.css';
import { Icon } from '@/components/ui/Icon';
import IconStrip from '@/components/IconStrip';
import { petitProductData } from '@/data/product';
import { useCart } from '@/context/CartContext';
import AppScrollBlurSection from '@/components/AppScrollBlurSection';
import ShoppableRoomSection from '@/components/ShoppableRoomSection';
import FeatureCarousel from '@/components/FeatureCarousel';
import FaqSection from '@/components/FaqSection';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import ScrollBlurSection from '@/components/ScrollBlurSection';

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

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(petitProductData.images[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>('description');
  const [quantity, setQuantity] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { addToCart } = useCart();

  const activeVariant = petitProductData.variants[0]; // Petit is active on this page

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleQtyChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };


  return (
    <div className={styles.productPage}>

      {/* ═══════════════════════════════════════════════════
          SECTION 1: Product Hero (Gallery + Info)
      ═══════════════════════════════════════════════════ */}
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
                {petitProductData.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`${styles.thumbnailBtn} ${mainImage === img ? styles.activeThumb : ''}`}
                    onClick={() => setMainImage(img)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className={styles.thumbnailImg} />
                  </button>
                ))}
              </div>
              <div className={styles.mainImageWrapper}>
                <Image
                  src={mainImage}
                  alt={petitProductData.title}
                  fill
                  className={styles.mainImage}
                  priority
                />
              </div>
            </div>

            {/* Right Column — Product Info */}
            <div className={styles.infoColumn}>
              <div className={styles.stickyContent}>
                <div className={styles.breadcrumb}>
                  <Link href="/">Home</Link> / <span>{petitProductData.title}</span>
                </div>

                <div className={styles.reviews}>
                  <span className={styles.stars}>★★★★★</span>
                  <Link href="#reviews" className={styles.reviewText}>
                    {petitProductData.rating} ({petitProductData.reviewsCount.toLocaleString()} Reviews)
                  </Link>
                </div>

                <h1 className={styles.productTitle}>{petitProductData.title}</h1>

                <div className={styles.pricing}>
                  <span className={styles.price}>${activeVariant.price.toFixed(2)}</span>
                  <span className={styles.comparePrice}>${activeVariant.compareAtPrice.toFixed(2)}</span>
                  <span className={styles.saleBadge}>SALE</span>
                </div>

                <p className={styles.shortDescription}>
                  {petitProductData.shortDescription}
                </p>

                <hr className={styles.separator} />

                {/* Variant Selector */}
                <div className={styles.variantSelector}>
                  {petitProductData.variants.map((variant) => (
                    <Link
                      key={variant.id}
                      href={variant.href}
                      className={`${styles.variantBtn} ${variant.id === activeVariant.id ? styles.variantActive : ''}`}
                    >
                      <span className={styles.variantName}>{variant.name}</span>
                      <span className={styles.variantPrice}>${variant.price.toFixed(2)}</span>
                    </Link>
                  ))}
                </div>

                {/* Feature List */}
                <ul className={styles.featureList}>
                  {petitProductData.features.map((feature, idx) => (
                    <li key={idx}>
                      <Icon name="tick-petit" size={20} className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className={styles.separator} />

                {/* Quantity Selector */}
                <div className={styles.quantityWrapper}>
                  <button onClick={() => handleQtyChange(-1)} className={styles.qtyBtn}>−</button>
                  <span className={styles.qtyValue}>{quantity}</span>
                  <button onClick={() => handleQtyChange(1)} className={styles.qtyBtn}>+</button>
                </div>

                {/* Add to Cart + Buy Now */}
                <div className={styles.addActions}>
                  <button
                    className={styles.addToCartBtn}
                    onClick={() => addToCart({
                      id: petitProductData.id,
                      title: petitProductData.title,
                      price: activeVariant.price,
                      image: mainImage,
                    }, quantity)}
                  >
                    Add to Cart — ${(activeVariant.price * quantity).toFixed(2)}
                  </button>
                  <button className={styles.shopPayBtn}>Buy it now</button>
                </div>

                {/* Free Shipping Callout */}
                <div className={styles.freeShippingCallout}>
                  <span>🚚</span> Free shipping on all orders
                </div>

                {/* Guarantee */}
                <div className={styles.guaranteeRow}>
                  <Icon name="calendar-heart" size={16} />
                  <span>30 days to love it or your money back</span>
                </div>

                {/* Accordions */}
                <div className={styles.accordions}>
                  {petitProductData.accordions.map((acc) => (
                    <div key={acc.id} className={styles.accordionItem}>
                      <button className={styles.accordionHeader} onClick={() => toggleAccordion(acc.id)}>
                        {acc.title}
                        <span className={`${styles.accordionIcon} ${openAccordion === acc.id ? styles.iconOpen : ''}`}>+</span>
                      </button>
                      <div className={`${styles.accordionContent} ${openAccordion === acc.id ? styles.accordionContentOpen : ''}`}>
                        <p>{acc.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Parents Share Their Stories */}
                <div className={styles.storiesSection}>
                  <h3 className={styles.storiesHeading}>Parents Share Their Stories</h3>
                  <div className={styles.storiesList}>
                    {[
                      '/images/peace-1.jpg',
                      '/images/peace-2.jpg',
                      '/images/peace-3.jpg',
                      '/images/baby-camera-room.jpg',
                      '/images/living-room-petit.jpg'
                    ].map((imgSrc, idx) => (
                      <div key={idx} className={styles.storyItem}>
                        <Image src={imgSrc} alt={`Parent Story ${idx + 1}`} fill className={styles.storyImage} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className={styles.shareSection}>
                  <span className={styles.shareText}>Share</span>
                  <div className={styles.shareIcons}>
                    {/* Facebook */}
                    <button><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button>
                    {/* X (Twitter) */}
                    <button><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg></button>
                    {/* WhatsApp */}
                    <button><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg></button>
                    {/* Email */}
                    <button><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 2. Icon Strip */}
              <IconStrip />

      {/* 3. Scroll Blur Section ("Total Peace of Mind, Day and Night") */}
      <ScrollBlurSection />

      {/* 4. Feature Carousel Section ("Every parent deserves peace of mind") */}
      <FeatureCarousel />

      {/* ═══════════════════════════════════════════════════
          SECTION 5: Feel Close Even When You're Apart
      ═══════════════════════════════════════════════════ */}
      <motion.div 
        className={styles.benefitsSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
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
      </motion.div>

      {/* 6. Interactive 3D Room Section ("Designed for Peaceful Nights") */}
              <ShoppableRoomSection />

      

      {/* ═══════════════════════════════════════════════════
          SECTION 7: Advanced Comparison Table
      ═══════════════════════════════════════════════════ */}
      <motion.div 
        className={styles.heroSectionTable}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.badge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Trusted by Parents Worldwide
        </div>
        <h2 className={styles.comparisonHeadingAdvanced}>
          See Why Parents <span className={styles.gradientText}>Choose Petit</span>
        </h2>
        <p className={styles.subtitleTable}>
          Compare Petit Baby Monitor with standard monitors and discover what truly matters for your baby's safety and your peace of mind.
        </p>
      </motion.div>

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

      {/* ===== SECTION 8: 98% of Parents Recommend ===== */}
      <motion.div 
        className={styles.recommendSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
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
      </motion.div>

    
      

      {/* 9. Testimonials Section ("Loved by Modern Parents") */}
              <TestimonialsSection />

      {/* 10. INTERACTIVE SCROLL BLUR SECTION */}
             <AppScrollBlurSection />

      {/* 11. Interactive FAQ Section ("Frequently Asked Questions") */}
              <FaqSection />

      {/* 12. "Peace of Mind Starts Today" CTA Banner & Bottom Benefits Marquee */}
              <CTAAndBenefitsBanner hideBanner = {true} />


    </div>
  );
}
