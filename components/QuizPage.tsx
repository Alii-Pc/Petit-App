'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './QuizPage.module.css';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/GuaranteeBadge';
import { quizQuestions, QuizOption } from '@/data/quiz';
import { petitProductData } from '@/data/product';

export default function QuizPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, QuizOption>>({});

  const question = quizQuestions[currentStep];
  const isLastQuestion = currentStep === quizQuestions.length - 1;
  const isFinished = currentStep >= quizQuestions.length;

  const handleSelectOption = (option: QuizOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [question.id]: option,
    }));
  };

  const handleNext = () => {
    if (!selectedOptions[question.id]) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedOptions({});
    setCurrentStep(0);
  };

  // Calculate winner recommendation
  const calculateRecommendation = () => {
    let petitScore = 0;
    let proScore = 0;

    Object.values(selectedOptions).forEach((opt) => {
      if (opt.targetModel === 'petit-pro') {
        proScore += 1;
      } else {
        petitScore += 1;
      }
    });

    if (proScore > petitScore) {
      return {
        id: 'petit-pro',
        title: 'Petit Pro Baby Monitor',
        price: '$299.00',
        matchRate: '98%',
        image: '/images/petit-pro.jpg',
        href: '/products/petit-pro',
        reasons: [
          '360° Pan & Tilt for wide room coverage',
          '4K Ultra HD Streaming with dual camera support',
          'Extended 48-Hour battery backup for peace of mind',
        ],
      };
    }

    return {
      id: 'petit',
      title: petitProductData.title,
      price: `$${petitProductData.price.toFixed(2)}`,
      matchRate: '96%',
      image: petitProductData.images[0],
      href: '/products/petit',
      reasons: [
        '2K QHD video quality for crystal clear monitoring',
        'Smart cry detection & instant phone alerts',
        '30-day risk free home trial guarantee',
      ],
    };
  };

  const recommendation = isFinished ? calculateRecommendation() : null;

  if (!hasStarted) {
    return (
      <div className={styles.introHero}>
        <div className={styles.introOverlay}>
          <div className={styles.introContent}>
            <h1 className={styles.introTitle}>Choose the Baby Monitor tailored to your family&apos;s rhythm</h1>
            <Button 
              variant="primary" 
              onClick={() => setHasStarted(true)}
              className={styles.introButton}
            >
              Start quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {!isFinished ? (
          <div className={styles.quizFlow}>
            
            {/* Baby Icon & Question Title */}
            <div className={styles.questionSection}>
              <div className={styles.babyIconWrapper}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Cute simplified baby face outline */}
                  <path d="M24 6C16 6 10 12 10 20C10 22 11 25 13 28C14 34 18 38 24 38C30 38 34 34 35 28C37 25 38 22 38 20C38 12 32 6 24 6Z" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 20C16 20 17 22 19 22C21 22 22 20 22 20" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26 20C26 20 27 22 29 22C31 22 32 20 32 20" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 26C22.5 26 21 27.5 21 29C21 30.5 22.5 32 24 32C25.5 32 27 30.5 27 29C27 27.5 25.5 26 24 26Z" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 10C24 10 24.5 7 26 6" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 11C21 11 20 8 18 8" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 22C7 22 6 20 6 18C6 16 8 16 9 16" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M38 22C41 22 42 20 42 18C42 16 40 16 39 16" stroke="#494742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className={styles.questionTitle}>{question.title}</h1>
            </div>

            {/* Options List */}
            <div className={styles.optionsList}>
              {question.options.map((opt) => {
                const isSelected = selectedOptions[question.id]?.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    className={`${styles.optionCard} ${isSelected ? styles.selectedOption : ''}`}
                    onClick={() => handleSelectOption(opt)}
                  >
                    <div className={styles.optionTextWrap}>
                      <h3 className={styles.optionTitle}>{opt.title}</h3>
                      <p className={styles.optionSubtitle}>{opt.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Bar Fixed to Bottom */}
            <div className={styles.navBar}>
              <button 
                onClick={handleBack} 
                disabled={currentStep === 0}
                className={styles.prevBtn}
              >
                Previous
              </button>
              <button 
                onClick={handleNext}
                disabled={!selectedOptions[question.id]}
                className={styles.nextBtn}
              >
                {isLastQuestion ? 'See Results' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          /* Results Step */
          <div className={styles.resultsCard}>
            <div className={styles.matchBadge}>
              <span>🎯 {recommendation?.matchRate} Match</span>
            </div>

            <h1 className={styles.resultsTitle}>We Found Your Perfect Match!</h1>
            <p className={styles.resultsSubtitle}>
              Based on your nursery layout and monitoring preferences, here is our top recommendation:
            </p>

            <div className={styles.recommendationBox}>
              <div className={styles.recImageWrap}>
                <Image 
                  src={recommendation!.image} 
                  alt={recommendation!.title} 
                  fill 
                  className={styles.recImage} 
                />
              </div>

              <div className={styles.recDetails}>
                <span className={styles.recTag}>Top Recommendation</span>
                <h2 className={styles.recTitle}>{recommendation!.title}</h2>
                <div className={styles.recPrice}>{recommendation!.price}</div>

                <ul className={styles.reasonsList}>
                  {recommendation!.reasons.map((reason, idx) => (
                    <li key={idx}>✓ {reason}</li>
                  ))}
                </ul>

                <div className={styles.recActions}>
                  <Button href={recommendation!.href} className={styles.buyNowBtn}>
                    View Product & Buy Now
                  </Button>
                  <button onClick={handleRestart} className={styles.retakeBtn}>
                    Retake Quiz ↺
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.guaranteeWrap}>
              <GuaranteeBadge />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
