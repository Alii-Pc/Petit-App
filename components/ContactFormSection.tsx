'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ContactFormSection.module.css';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Column: Image of Parents & Baby */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/contact-hero.jpg"
              alt="Parents watching sleeping baby in wooden crib"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className={styles.formCol}>
          <div className={styles.formInner}>
            <h1 className={styles.title}>Contact form</h1>
            <p className={styles.subtitle}>
              Be the first to know about new collections and exclusive offers.
            </p>

            {submitted ? (
              <div className={styles.successMessage}>
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#257BF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Thank you for reaching out!</h3>
                <p>We have received your message and will get back to you shortly.</p>
                <button 
                  className={styles.resetBtn} 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', comment: '' }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.rowTwoCols}>
                  <div className={styles.fieldGroup}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className={styles.input}
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className={styles.input}
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={styles.input}
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <textarea
                    name="comment"
                    id="comment"
                    rows={6}
                    className={styles.textarea}
                    placeholder="Comment"
                    value={formData.comment}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className={styles.btnWrap}>
                  <button type="submit" className={styles.sendBtn}>
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
