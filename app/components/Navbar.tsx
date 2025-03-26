"use client";

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}
