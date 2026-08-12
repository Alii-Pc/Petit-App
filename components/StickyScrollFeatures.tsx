'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './StickyScrollFeatures.module.css';

interface Feature {
  id: number | string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface StickyScrollFeaturesProps {
  features: Feature[];
}

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function StickyScrollFeatures({ features }: StickyScrollFeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'] // Track progress from top of section to bottom
  });

  // The text container needs to translate vertically.
  // There are features.length items. The distance to translate is exactly 
  // -100% * ((features.length - 1) / features.length) of the text track's height.
  // We can use a percentage string for y transform.
  const maxTranslate = -100 * ((features.length - 1) / features.length);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${maxTranslate}%`]);

  // Update active index based on scroll progress to fade images
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // latest is 0 to 1
    const newIndex = Math.min(features.length - 1, Math.floor(latest * features.length));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  // Calculate 100vh per feature for the scroll wrapper
  const scrollHeight = `${features.length * 100}vh`;

  return (
    <section ref={targetRef} className={styles.section} style={{ height: scrollHeight }}>
      <div className={styles.stickyViewport}>
        <div className={styles.container}>
          
          {/* Left Side: Sticky Images */}
          <div className={styles.stickyCol}>
            <div className={styles.stickyImageContainer}>
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`${styles.imageWrap} ${index === activeIndex ? styles.imageWrapActive : ''}`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className={styles.image}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Scrolling Text Track */}
          <div className={styles.scrollCol}>
            <motion.div style={{ y }} className={styles.textTrack}>
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`${styles.textBlock} ${index === activeIndex ? styles.textBlockActive : ''}`}
                >
                  <div className={styles.mobileImageWrap}>
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className={styles.image}
                    />
                  </div>
                  <h3 className={styles.title}>{feature.title}</h3>
                  <p className={styles.description}>{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
