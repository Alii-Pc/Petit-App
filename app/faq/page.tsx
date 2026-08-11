import Header from '@/components/Header';
import FaqSection from '@/components/FaqSection';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FAQ | PETIT Baby Monitor',
  description: 'Quick answers about PETIT baby monitor features, Wi-Fi setup, shipping, two-way audio, and support.',
};

export default function FaqPage() {
  return (
    <div>
      <Header />
      <main>
        <FaqSection />
        {/* Bottom Benefits Moving Marquee */}
        <CTAAndBenefitsBanner hideBanner={true} />
      </main>
      <Footer />
    </div>
  );
}
