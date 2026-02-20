"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import { getAllBikes } from "../lib/bikes-data";
import { useCart } from "../context/CartContext";

export default function AllBikes() {
  const bikes = getAllBikes();
  const { addToCart } = useCart();

  const handleAddToCart = (bike: ReturnType<typeof getAllBikes>[0]) => {
    addToCart({
      id: bike.id,
      name: bike.name,
      price: bike.priceNumber,
      image: bike.images[0],
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary-deep pt-32 pb-20 px-6 text-center text-white h-[40vh] flex flex-col items-center justify-center">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4">
          OUR RIDES
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Find your perfect ride
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Every Grood is engineered for the city. Choose the frame that fits
          your style.
        </p>
      </section>

      {/* Bike List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {bikes.map((bike, index) => (
            <div
              key={bike.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute top-6 left-6 z-10 flex gap-2">
                  {bike.soldOut && (
                    <span className="text-white text-sm font-bold px-3 py-1 rounded-full bg-red-500">
                      Sold Out
                    </span>
                  )}
                </div>
                <Link
                  href={`/bikes/${bike.id}`}
                  className="block relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-50 cursor-pointer"
                >
                  <Image
                    src={bike.images[0]}
                    alt={bike.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="max-w-md mx-auto lg:mx-0">
                  <span className="text-xs font-bold tracking-widest uppercase mb-2 block text-primary">
                    {bike.model}
                  </span>
                  <Link
                    href={`/bikes/${bike.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    <h2 className="text-5xl font-bold mb-4">{bike.name}</h2>
                  </Link>
                  <p className="text-gray-500 mb-8">{bike.tagline}</p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-gray-100 mb-8">
                    <div>
                      <div className="text-2xl font-bold">
                        {bike.specs.range}
                      </div>
                      <div className="text-gray-400 text-xs">Range</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {bike.specs.speed}
                        <span className="text-sm text-gray-400 ml-1">km/h</span>
                      </div>
                      <div className="text-gray-400 text-xs">Top Speed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {bike.specs.weight}
                      </div>
                      <div className="text-gray-400 text-xs">Weight</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl font-bold">{bike.price}</span>
                  </div>

                  <div className="flex gap-4">
                    {bike.soldOut ? (
                      <button
                        disabled
                        className="bg-red-500 text-white px-6 lg:px-8 py-4 rounded-full font-semibold cursor-not-allowed opacity-80"
                      >
                        Sold Out
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleAddToCart(bike)}
                          className="bg-secondary-deep text-white px-6 lg:px-8 py-4 rounded-full font-semibold hover:bg-secondary-deep/90 transition-colors flex items-center gap-2"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 19C9 20.105 8.105 21 7 21C5.895 21 5 20.105 5 19C5 17.895 5.895 17 7 17C8.105 17 9 17.895 9 19Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Add to Cart
                        </button>
                        <Link
                          href="/test-ride"
                          className="bg-transparent text-primary-deep border border-primary-deep px-6 lg:px-8 py-4 rounded-full font-semibold hover:bg-primary-deep/10 transition-colors"
                        >
                          Book Test Ride
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Scroll Top */}
      <button
        className="fixed bottom-8 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
