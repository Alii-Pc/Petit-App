'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from 'framer-motion';
import styles from './ProductShowcase.module.css';

const FRAME_COUNT = 3;
const FRAME_PATH = (i: number): string =>
  `/images/canvas-${i + 1}.png`;

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Preload all 3 angle photos
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        if (!cancelled && loadedCount === FRAME_COUNT) setLoaded(true);
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
    };
  }, []);

  // Draw a crossfade between frame[index] and frame[index+1] at ratio `frac`
  const drawBlend = useCallback((index: number, frac: number) => {
    const canvas = canvasRef.current;
    const imgs = imagesRef.current;
    if (!canvas || !imgs[index]) return;

    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const drawOne = (img: HTMLImageElement | undefined, alpha: number) => {
      if (!img || !img.complete || alpha <= 0) return;
      const scale = Math.min(cssW / img.width, cssH / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, (cssW - w) / 2, (cssH - h) / 2, w, h);
      ctx.globalAlpha = 1;
    };

    drawOne(imgs[index], 1 - frac);
    if (imgs[index + 1]) drawOne(imgs[index + 1], frac);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Map 0 -> 1 scroll progress to 0 -> 2 frames
      const pos = Math.min(
        FRAME_COUNT - 1.001,
        Math.max(0, progress * (FRAME_COUNT - 1))
      );
      const index = Math.floor(pos);
      const frac = pos - index;
      drawBlend(index, frac);
    });

    drawBlend(0, 0);
    return () => unsubscribe();
  }, [loaded, scrollYProgress, drawBlend]);

  useEffect(() => {
    const handleResize = () => {
      if (!loaded) return;
      const progress = scrollYProgress.get();
      const pos = Math.min(
        FRAME_COUNT - 1.001,
        Math.max(0, progress * (FRAME_COUNT - 1))
      );
      drawBlend(Math.floor(pos), pos - Math.floor(pos));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, drawBlend, scrollYProgress]);

  return (
    <section className="bg-white">
      {/* Intro Text - Scrolls away naturally */}
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <p className={styles.eyebrow}>
            Feel <span>Close</span>
          </p>
          <h1>Even When You&apos;re Apart</h1>
          <p className={styles.introCopy}>
            With real-time visibility, instant alerts, and a setup anyone can handle, you get the support you need - exactly when you need it.
          </p>
          <Link href="/products/petit" className={styles.button}>
            Buy Now from $149
          </Link>
        </div>
      </div>

      {/* 3D Motion Sticky Canvas Container */}
      <div ref={sectionRef} className={styles.story}>
        <div className={styles.sticky}>
          
          {/* Loading Spinner */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center z-30 bg-white">
              <div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-800 rounded-full animate-spin" />
            </div>
          )}

          <div className={styles.visual}>
            <canvas
              ref={canvasRef}
              className={styles.canvas}
            />
          </div>

        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className={styles.statsWrapper}>
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            
            <div className={styles.statItem}>
              <h4 className={styles.statNumber}>
                99%
              </h4>
              <p className={styles.statText}>
                Reliable monitoring when it matters most.
              </p>
            </div>

            <div className={styles.statItem}>
              <h4 className={styles.statNumber}>
                150&deg; View
              </h4>
              <p className={styles.statText}>
                Wide-angle lens to see the entire crib clearly.
              </p>
            </div>

            <div className={styles.statItem}>
              <h4 className={styles.statNumber}>
                1 Second
              </h4>
              <p className={styles.statText}>
                Real-time video with almost zero delay.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
