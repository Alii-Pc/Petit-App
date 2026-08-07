import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IconStrip from '@/components/IconStrip';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main>
        {/* 1. Hero Section - Split layout */}
        <Hero />
        
        {/* 2. Scrolling Icon Strip */}
        <IconStrip />
      </main>

      <Footer />
    </div>
  );
}
