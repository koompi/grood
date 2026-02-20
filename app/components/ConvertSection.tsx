"use client";

import Link from "next/link";
import Image from "next/image";

export default function ConvertSection() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase block mb-4">
            Conversion Kit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Turn any bike into an e-bike
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="/images/convert/kit.jpg"
              alt="Grood Convert Kit"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Grood Convert
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Love your current bike? Our conversion kit transforms any bicycle
              into a powerful electric ride in under 30 minutes. Keep the bike
              you love, add the power you need.
            </p>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <span className="text-gray-500 text-sm block">Starting at</span>
                <span className="text-4xl font-bold text-black">$420</span>
              </div>
              <Link
                href="/convert"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-deep hover:text-white transition-colors duration-300 group"
              >
                Learn More
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
