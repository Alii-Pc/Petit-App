import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/GuaranteeBadge';
import { Icon } from '@/components/ui/Icon';
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
            <Icon name="tick-petit" size={22} />
            <span>Monitor your baby even when you&apos;re away</span>
          </li>
          <li>
            <Icon name="tick-petit" size={22} />
            <span>Private, secure streaming you can trust</span>
          </li>
          <li>
            <Icon name="tick-petit" size={22} />
            <span>Parent-friendly from first use</span>
          </li>
        </ul>

        {/* CTA */}
        <Button href="/products/petit" className={styles.ctaButtonSpacing}>
          Discover Smarter Monitoring
        </Button>

        {/* Guarantee */}
        <GuaranteeBadge className={styles.guaranteeSpacing} />
      </div>
    </section>
  );
}
