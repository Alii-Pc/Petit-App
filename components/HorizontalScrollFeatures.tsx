'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HorizontalScrollFeatures.module.css';

interface Feature {
  id: number | string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface HorizontalScrollFeaturesProps {
  features: Feature[];
}

export default function HorizontalScrollFeatures({ features }: HorizontalScrollFeaturesProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // useScroll tracks the progress of the scroll through the target element
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the maximum horizontal translation percentage
  // E.g., for 3 items, the track needs to move -66.66% to show the 3rd item
  const maxTranslate = -100 * ((features.length - 1) / features.length);
  
  // Map the vertical scroll progress (0 to 1) to horizontal translation (0% to maxTranslate%)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `${maxTranslate}%`]);

  // Make the parent container tall enough to scroll through. 
  // 100vh per item allows for a very smooth, paced scroll.
  const scrollHeight = `${features.length * 100}vh`;

  return (
    <section ref={targetRef} className={styles.carouselContainer} style={{ height: scrollHeight }}>
      <div className={styles.stickyViewport}>
        <motion.div style={{ x }} className={styles.horizontalTrack}>
          {features.map((feature, index) => {
            // Alternate layout: Image Left on even indices, Image Right on odd indices
            const isImageLeft = index % 2 === 0; 
            
            return (
              <div key={feature.id} className={styles.featureCard}>
                <div className={`${styles.cardInner} ${!isImageLeft ? styles.cardInnerReverse : ''}`}>
                  
                  {/* Image Column */}
                  <div className={styles.imageColumn}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        fill
                        className={styles.image}
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={styles.textColumn}>
                    <h3 className={styles.title}>{feature.title}</h3>
                    <p className={styles.description}>{feature.description}</p>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
