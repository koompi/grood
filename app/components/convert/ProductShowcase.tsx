"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { hotspots } from "../../lib/convert-data";

export default function ProductShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close hotspot when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".hotspot-area")) {
        setActiveHotspot(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 sm:gap-2 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            The Grood Convert kit
          </h2>
          <span className="text-gray-500 text-base sm:text-lg">
            {isMobile ? "Swipe to explore" : "Click on the items to learn more"}
          </span>
        </div>

        {/* Desktop: Image with hotspots */}
        {!isMobile && (
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#FEF9E3] hotspot-area">
            <Image
              src="/images/bikes/siemreap/white/bg.JPG"
              alt="Grood Convert Kit Components"
              fill
              className="object-cover"
            />

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute"
                style={{
                  left: hotspot.position.left,
                  top: hotspot.position.top,
                }}
              >
                {/* Pulsing dot */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(
                      activeHotspot === hotspot.id ? null : hotspot.id
                    );
                  }}
                  className={`relative w-6 h-6 rounded-full bg-secondary flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${
                    activeHotspot === hotspot.id ? "scale-110" : ""
                  }`}
                >
                  {/* Pulse animation */}
                  <span className="absolute w-full h-full rounded-full bg-secondary animate-ping opacity-50" />
                  <span className="relative w-3 h-3 rounded-full bg-white" />
                </button>

                {/* Info card */}
                {activeHotspot === hotspot.id && (
                  <div className="absolute z-10 left-8 top-0 w-72 bg-white rounded-xl shadow-xl p-5 animate-in fade-in slide-in-from-left-2 duration-200">
                    <h4 className="text-lg font-bold text-black mb-1">
                      {hotspot.title}
                    </h4>
                    <p className="text-gray-500 text-sm mb-4">
                      {hotspot.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {hotspot.specs.map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Mobile: Horizontal scroll cards */}
        {isMobile && (
          <div className="space-y-4 sm:space-y-6">
            {/* Image */}
            <div className="relative aspect-4/3 sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#FEF9E3]">
              <Image
                src="/images/bikes/siemreap/white/bg.JPG"
                alt="Grood Convert Kit Components"
                fill
                className="object-cover"
              />
            </div>

            {/* Component cards */}
            <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="shrink-0 w-56 sm:w-64 snap-start bg-white rounded-lg sm:rounded-xl border border-gray-100 p-4 sm:p-5 shadow-sm"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center mb-3 sm:mb-4">
                    <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-black mb-1">
                    {hotspot.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                    {hotspot.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {hotspot.specs.map((spec, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-100 rounded-full text-[10px] sm:text-xs font-medium text-gray-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
