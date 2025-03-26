"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="border p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer bg-white"
      >
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain rounded-md mb-3"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-green-600 font-bold mt-1">${product.price}</p>
      </motion.div>
    </Link>
  );
}
