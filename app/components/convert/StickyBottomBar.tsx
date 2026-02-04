"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { convertKit } from "../../lib/convert-data";

export default function StickyBottomBar() {
  const { addToCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  // Show bar when scrolled past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 600; // Show after scrolling 600px
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: convertKit.id,
      name: convertKit.name,
      price: convertKit.price,
      image: convertKit.images[0],
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 lg:hidden safe-area-bottom">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-4">
        {/* Product info */}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-black text-sm sm:text-base truncate">
            {convertKit.name}
          </div>
          <div className="text-base sm:text-lg font-bold text-black">
            {convertKit.priceFormatted}
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-800 active:bg-gray-900 transition-colors shrink-0"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
