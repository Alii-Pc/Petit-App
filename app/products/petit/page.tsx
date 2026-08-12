import ProductPage from '@/components/ProductPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

export const metadata = {
  title: 'Petit Baby Monitor - Smart Video Monitoring',
  description: 'Stay connected to your little one from anywhere with Petit — the smart baby monitor app featuring real-time HD streaming, night vision, and sound monitoring.',
};

export default function PetitProductRoute() {
  return (
    <>
      <Header />
      <main>
        <ProductPage />
      </main>
      <Footer />
    </>
  );
}
