import type { Metadata } from 'next';
import Header from '@/components/Header';
import CompareModelsPage from '@/components/CompareModelsPage';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Compare Models | PETIT Baby Monitor',
  description: 'Compare Petit Baby Monitor with standard monitors and discover what truly matters for your baby\'s safety and your peace of mind.',
};

export default function ComparePage() {
  return (
    <>
      <Header />
      <main>
        <CompareModelsPage />
      </main>
      <CTAAndBenefitsBanner hideBanner={true} />
      <Footer />
    </>
  );
}
