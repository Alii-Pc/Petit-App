'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FaqSection.module.css';
import { faqList } from '@/data/faq';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column: Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/faq-camera-app.webp" 
                alt="Petit Baby Monitor and App" 
                fill 
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className={styles.contentColumn}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                Frequently Asked <br />
                <span className={styles.highlightTan}>Que</span>
                <span className={styles.highlightBlue}>stions</span>
              </h2>
              <p className={styles.subtitle}>
                Have questions about PETIT? Here are the answers to the most common questions from parents.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqList.map((item, idx) => (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${openIdx === idx ? styles.activeItem : ''}`}
                >
                  <button
                    className={styles.questionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={styles.toggleIcon}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" className={styles.iconVerticalLine} />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div 
                    className={`${styles.answerWrap} ${openIdx === idx ? styles.answerWrapOpen : ''}`}
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
