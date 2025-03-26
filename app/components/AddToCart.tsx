"use client";

import { useCart } from '@/app/context/CartContext'; 
import { Product } from '@/app/types/types';

export default function AddToCartButton({ product }: { product: Product }) {
  const { cart, addToCart } = useCart(); 

  const isInCart = cart.some((cartItem) => cartItem.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`mt-4 px-4 py-2 rounded-lg transition ${
        isInCart ? 'bg-gray-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
      disabled={isInCart}
    >
      {isInCart ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
}