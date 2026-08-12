import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuizPage from '@/components/QuizPage';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';

export const metadata: Metadata = {
  title: 'Find Your Perfect Monitor | PETIT Baby Monitor',
  description: 'Take our 1-minute quiz to discover the best baby monitor for your nursery, routine, and peace of mind.',
};

export default function QuizRoute() {
  return (
    <>
      <Header />
      <main>
        <QuizPage />
      </main>
      <CTAAndBenefitsBanner hideBanner={true} />
      <Footer />
    </>
  );
}
