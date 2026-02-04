"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getAllBikes } from "../lib/bikes-data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const allBikes = getAllBikes();

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allBikes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [allBikes.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pb-32 overflow-hidden">
      {/* Background Images Slideshow */}
      {allBikes.map((bike, index) => (
        <div
          key={bike.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={bike.images[0]}
            alt={bike.name}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-black/30"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-6">
          <span className="text-white italic">Discover the</span>
          <br />
          <span className="text-secondary italic">Independence</span>
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Premium electric bicycle designed for the contemporary explorer
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/all-bikes" className="btn-light">
            Explore E-Bikes
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/test-ride" className="btn-ghost">
            Book a Test Ride
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-6 flex flex-col items-start gap-3">
        <span className="text-white/60 text-sm font-medium">
          {allBikes[currentSlide]?.name}
        </span>
        <div className="flex gap-3">
          {allBikes.map((bike, index) => (
            <button
              key={bike.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`View ${bike.name}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Side Elements */}
      <button
        className="absolute bottom-8 right-6 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/70 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          width="14"
          height="14"
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
    </section>
  );
}
