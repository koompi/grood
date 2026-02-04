"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse/touch move
  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  // Mouse handlers
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  // Touch handlers
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-10 md:mb-12">
          Your bike transformation
        </h2>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="relative aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* After image (full) */}
          <div className="absolute inset-0">
            <Image
              src="/images/bikes/siemreap/white/bg.JPG"
              alt="After - Electric bike"
              fill
              className="object-cover"
              draggable={false}
            />
            {/* AFTER label */}
            <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              AFTER
            </span>
          </div>

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
              <Image
                src="/images/bikes/siemreap/white/body.JPG"
                alt="Before - Regular bike"
                fill
                className="object-cover grayscale brightness-90"
                draggable={false}
              />
            </div>
            {/* BEFORE label */}
            <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              BEFORE
            </span>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-secondary cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Handle circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M18 8L22 12L18 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 8L2 12L6 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats below slider */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-16 mt-6 sm:mt-8 md:mt-10">
          <div className="text-center">
            <div className="text-base sm:text-xl md:text-3xl font-bold text-black whitespace-nowrap">
              0 → 40km
            </div>
            <div className="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">range gained</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-xl md:text-3xl font-bold text-black">
              <span className="hidden sm:inline">Regular → Electric</span>
              <span className="sm:hidden">Electric</span>
            </div>
            <div className="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">transformation</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-xl md:text-3xl font-bold text-black">
              15 min
            </div>
            <div className="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">install time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
