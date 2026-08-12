export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  variantTitle?: string;
}

export const initialCartItems: CartItem[] = [
  {
    id: 'petit-monitor',
    title: 'Petit Baby Monitor',
    price: 149.00,
    image: '/images/petit.jpg',
    quantity: 1,
    variantTitle: 'Standard Package',
  },
];

export const FREE_SHIPPING_THRESHOLD = 150.00;

export const cartUpsellProducts = [
  {
    id: 'petit-pro',
    title: 'Petit Pro Baby Monitor',
    price: 299.00,
    image: '/images/petit-pro.jpg',
  },
  {
    id: 'wall-mount',
    title: 'Flex Wall Mount Bracket',
    price: 29.00,
    image: '/images/petit-camera-center.jpg',
  },
];
