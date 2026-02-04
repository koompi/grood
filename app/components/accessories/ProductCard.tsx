"use client";

import Image from "next/image";
import Link from "next/link";
import { Accessory } from "@/app/lib/accessories-data";
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: Accessory;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="group relative bg-white shadow rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5">
      {/* Badge */}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          {/* Can add quick view/add buttons here if needed */}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-gray-500 line-clamp-2 mb-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through decoration-gray-400">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white p-3 rounded-full hover:bg-secondary-deep transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 20C9 21.1046 8.10457 22 7 22C5.89543 22 5 21.1046 5 20C5 18.8954 5.89543 18 7 18C8.10457 18 9 18.8954 9 20Z"
                fill="currentColor"
              />
              <path
                d="M21 20C21 21.1046 20.1046 22 19 22C17.8954 22 17 21.1046 17 20C17 18.8954 17.8954 18 19 18C20.1046 18 21 18.8954 21 20Z"
                fill="currentColor"
              />
              <path
                d="M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
