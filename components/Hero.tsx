import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background image (right side) */}
      <div className={styles.imageHalf}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Baby with Petit monitor"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* Slide-out colored background on left */}
      <div className={styles.slideOut}></div>

      {/* Content on left */}
      <div className={styles.content}>
        {/* Rating */}
        <div className={styles.rating}>
          <Image
            src="/images/star-rating.png"
            alt="Stars"
            width={100}
            height={18}
          />
          <span>4.8 rating from 50k+ Parents</span>
        </div>

        {/* Heading */}
        <h1 className={styles.title}>Because Every Moment Matters</h1>

        {/* Feature bullets */}
        <ul className={styles.features}>
          <li>
            <Image src="/images/tick-petit.png" alt="" width={22} height={22} style={{ width: 'auto', height: 'auto' }} />
            <span>Monitor your baby even when you&apos;re away</span>
          </li>
          <li>
            <Image src="/images/tick-petit.png" alt="" width={22} height={22} style={{ width: 'auto', height: 'auto' }} />
            <span>Private, secure streaming you can trust</span>
          </li>
          <li>
            <Image src="/images/tick-petit.png" alt="" width={22} height={22} style={{ width: 'auto', height: 'auto' }} />
            <span>Parent-friendly from first use</span>
          </li>
        </ul>

        {/* CTA */}
        <Link href="/products/petit" className={styles.ctaButton}>
          Discover Smarter Monitoring
        </Link>

        {/* Guarantee */}
        <div className={styles.guarantee}>
          <Image
            src="/images/calendar-heart.png"
            alt=""
            width={18}
            height={18}
          />
          <span>30 days to love it or your money back</span>
        </div>
      </div>
    </section>
  );
}
