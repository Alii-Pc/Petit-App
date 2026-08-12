import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppPage from '@/components/AppPage';

export const metadata: Metadata = {
  title: 'Petit Smart Baby Monitor App | Real-time HD Video & Alerts',
  description: 'Download the Petit Baby Monitor App. Experience real-time HD video streaming, cry detection, temperature alerts, and sleep insights.',
};

export default function PetitAppRoute() {
  return (
    <>
      <Header />
      <main>
        <AppPage />
      </main>
      <Footer />
    </>
  );
}
