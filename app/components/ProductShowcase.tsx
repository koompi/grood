"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "siem-reap",
    name: "Siem Reap",
    tagline: "CITY CRUISER",
    price: "$1,249",
    image: "/images/bikes/siemreap/white/body.JPG",
    href: "/bikes/siemreap",
    soldOut: false,
  },
  {
    id: "cargo-doek-doek",
    name: "Cargo Doek Doek",
    tagline: "CARGO HAULER",
    price: "$1,780",
    image: "/images/bikes/cargo/background3.JPG",
    href: "/bikes/cargodoekdoek",
    soldOut: false,
  },
  {
    id: "phnom-penh",
    name: "Phnom Penh",
    tagline: "URBAN EXPLORER",
    price: "$690",
    image: "/images/bikes/phnompenh/background.jpg",
    href: "/bikes/phnompenh",
    soldOut: true,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-[#FAFAFA] py-32 px-6">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-primary text-sm font-bold tracking-widest uppercase block mb-4">
          The Collection
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black">
          Find your perfect ride
        </h2>
      </div>

      {/* Products Grid - Two Columns */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {products.map((product, idx) => (
          <Link key={product.id} href={product.href} className="block group">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority={idx === 0}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 pb-4">
                <span className="text-white/70 text-xs font-medium tracking-widest uppercase block md:mb-2">
                  {product.tagline}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-0 md:mb-3">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  {product.soldOut ? (
                    <span className="px-4 py-2 bg-red-400   text-white text-sm font-bold rounded-full">
                      Sold Out
                    </span>
                  ) : (
                    <span className="text-xl md:text-2xl font-bold text-white">
                      {product.price}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-black -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-8 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-secondary hover:text-black transition-colors z-40 group"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white group-hover:text-black transition-colors"
        >
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
