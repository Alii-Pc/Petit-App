'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FaqSection.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'How fast is PETIT shipped?',
    answer: 'Orders are processed within 24–48 business hours. Delivery typically takes 2–5 business days depending on your location.',
  },
  {
    question: 'Does PETIT require Wi-Fi?',
    answer: 'Yes. PETIT connects to a 2.4 GHz Wi-Fi network to stream live video to your smartphone via the dedicated mobile app.',
  },
  {
    question: 'Does it have two-way audio?',
    answer: 'Yes. The built-in microphone and speaker allow you to hear your baby and speak to them in real time.',
  },
  {
    question: 'Is the video stream secure?',
    answer: 'Yes. PETIT uses encrypted data transmission to ensure your family’s privacy and security.',
  },
  {
    question: 'What is the video quality?',
    answer: 'PETIT streams in high-definition (HD) resolution for clear and detailed monitoring.',
  },
  {
    question: 'What devices are compatible?',
    answer: 'The PETIT app is compatible with both iOS and Android smartphones.',
  },
  {
    question: 'Can the camera be wall-mounted?',
    answer: 'Yes. PETIT can be placed on a flat surface or mounted on a wall for optimal viewing angle.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Frequently Asked <br />
            <span className={styles.highlightTan}>Que</span>
            <span className={styles.highlightBlue}>stions</span>
          </h2>
          <p className={styles.subtitle}>
            Quick answers about PETIT baby monitor features, setup, and support.
          </p>
        </div>

        {/* 2-Column Split: Image Left, Accordion Right */}
        <div className={styles.grid}>
          {/* Left Column: Camera + Phone Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/faq-camera-app.webp"
                alt="Petit Smart Camera with iPhone App"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className={styles.accordionCol}>
            {faqData.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                >
                  <button
                    className={styles.questionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={styles.iconBox}>
                      {isOpen ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.answerWrap}>
                      <p className={styles.answerText}>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
