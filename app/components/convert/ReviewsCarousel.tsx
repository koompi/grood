"use client";

import { useState, useEffect, useRef } from "react";
import { reviews } from "../../lib/convert-data";

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FFCC00" : "none"}
          stroke="#FFCC00"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

// Quote icon
function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="text-gray-200"
    >
      <path
        d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21"
        fill="currentColor"
      />
      <path
        d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v4"
        fill="currentColor"
      />
    </svg>
  );
}

// Verified badge
function VerifiedBadge() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#3B82F6"
      className="inline-block ml-1"
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      <circle cx="12" cy="12" r="10" fill="#3B82F6" />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll to active review
  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = activeIndex * 320; // card width + gap
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Our customers love it
        </h2>

        {/* Reviews carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[300px] snap-start bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <QuoteIcon />
              <p className="text-gray-700 mt-4 mb-6 line-clamp-4">
                {review.text}
              </p>
              <StarRating rating={review.rating} />
              <div className="mt-4 font-semibold text-black">
                {review.name}
                {review.verified && <VerifiedBadge />}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-black w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
