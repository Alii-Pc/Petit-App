import type { Metadata } from 'next';
import Header from '@/components/Header';
import WhyPetitPage from '@/components/WhyPetitPage';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Why Petit? | PETIT Baby Monitor',
  description: 'For over 10 years, Petit has combined technology with science-backed expertise to go beyond basic monitoring.',
};

export default function WhyPetitRoute() {
  return (
    <>
      <Header />
      <main>
        <WhyPetitPage />
      </main>
      <CTAAndBenefitsBanner hideBanner={true} />
      <Footer />
    </>
  );
}
