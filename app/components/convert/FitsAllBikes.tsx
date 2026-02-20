"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BikeType {
  name: string;
  image: string;
}

const bikeTypes: BikeType[] = [
  { name: "City Bike", image: "/images/convert/bikes/city.webp" },
  { name: "Folding Bike", image: "/images/convert/bikes/folding.webp" },
  { name: "Mountain Bike", image: "/images/convert/bikes/mountain.webp" },
  { name: "Racing Bike", image: "/images/convert/bikes/racing.webp" },
  { name: "Cargo Bike", image: "/images/convert/bikes/cargo.webp" },
  { name: "Fat Bike", image: "/images/convert/bikes/fat.webp" },
];

export default function FitsAllBikes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBikes, setVisibleBikes] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleBikes(1);
      } else {
        setVisibleBikes(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const max = Math.max(0, bikeTypes.length - visibleBikes);
    if (currentIndex > max) {
      setCurrentIndex(max);
    }
  }, [visibleBikes, currentIndex]);

  const maxIndex = Math.max(0, bikeTypes.length - visibleBikes);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-12 sm:mb-16">
          Fits All Type of Bikes
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 text-primary hover:text-primary-deep disabled:text-gray-300 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 text-primary hover:text-primary-deep disabled:text-gray-300 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleBikes)}%)`,
              }}
            >
              {bikeTypes.map((bike) => (
                <div
                  key={bike.name}
                  className="flex-shrink-0 w-full md:w-1/3 px-4 text-center"
                >
                  {/* Bike Image */}
                  <div className="rounded-lg p-4 mb-4 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <Image
                      src={bike.image}
                      alt={bike.name}
                      width={280}
                      height={210}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">
                    {bike.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
