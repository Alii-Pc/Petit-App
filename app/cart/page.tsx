import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartPage from '@/components/CartPage';

export const metadata: Metadata = {
  title: 'Your Cart | PETIT Baby Monitor',
  description: 'View your shopping cart, review items, and proceed to checkout.',
};

export default function CartRoute() {
  return (
    <>
      <Header />
      <main>
        <CartPage />
      </main>
      <Footer />
    </>
  );
}
