"use client";

import Image from "next/image";
import { installationSteps } from "../../lib/convert-data";

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 sm:gap-2 md:gap-4 mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            How does it work?
          </h2>
          <span className="text-gray-500 text-base sm:text-lg">
            Your e-bike in just 15 minutes
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
          {/* Left: Image - hidden on mobile, shown as header image instead */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FEF9E3] sticky top-24">
              <Image
                src="/images/bikes/siemreap/white/body.JPG"
                alt="Grood Convert Kit"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-3">
            <div className="space-y-0">
              {installationSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`py-5 sm:py-6 md:py-8 ${
                    index < installationSteps.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="flex gap-3 sm:gap-4 md:gap-6">
                    {/* Step number */}
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 shrink-0 w-10 sm:w-12 md:w-16">
                      {step.number}
                    </span>

                    {/* Step content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download button */}
            <div className="mt-6 sm:mt-8">
              <button className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors">
                Download installation guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
