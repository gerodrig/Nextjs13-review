import { Metadata } from 'next';
import { CartCounter } from '@/shopping-cart/components/CartCounter';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'counter in shopping cart',
};

export default function CounterPage() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in cart</span>
      <CartCounter value={10} />
    </div>
  );
}
