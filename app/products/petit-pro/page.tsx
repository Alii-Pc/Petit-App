import ProductProPage from '@/components/ProductProPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Petit Pro Baby Monitor - Smart Video Monitoring',
  description: 'Stay connected to your little one from anywhere with Petit Pro — the ultimate baby monitor featuring enhanced 4K streaming, superior night vision, and advanced AI analytics.',
};

export default function PetitProProductRoute() {
  return (
    <>
      <Header />
      <main>
        <ProductProPage />
      </main>
      <Footer />
    </>
  );
}
