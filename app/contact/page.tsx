import Header from '@/components/Header';
import ContactFormSection from '@/components/ContactFormSection';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | PETIT Baby Monitor',
  description: 'Get in touch with PETIT support team. We are here to answer your questions about setup, features, and orders.',
};

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        <ContactFormSection />
        {/* Bottom Benefits Moving Marquee */}
        <CTAAndBenefitsBanner hideBanner={true} />
      </main>
      <Footer />
    </div>
  );
}
