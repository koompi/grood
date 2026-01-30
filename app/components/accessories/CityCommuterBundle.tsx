"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function CityCommuterBundle() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "bundle-city-commuter",
      name: "City Commuter Bundle",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    });
  };

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
              alt="City Commuter Bundle"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <span className="bg-secondary text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
              Bundle & Save
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              City Commuter Bundle
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Everything you need for the perfect urban ride. Save $50 when you
              buy the bundle.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <span className="text-gray-700">Front Carrier</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <span className="text-gray-700">LED Light Set</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <span className="text-gray-700">Phone Mount Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <span className="text-gray-700">Rain Cover</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-black">$249</span>
              <span className="text-2xl text-gray-400 line-through decoration-gray-400 decoration-2">
                $299
              </span>
              <span className="text-secondary font-medium">Save $50</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
