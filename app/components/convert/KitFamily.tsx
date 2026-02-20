"use client";

import Image from "next/image";

interface KitType {
  name: string;
  label: string;
  image: string;
}

const kitTypes: KitType[] = [
  {
    name: "Brompton",
    label: "Brompton",
    image: "/images/convert/family/brompton-kit.png.webp",
  },
  {
    name: "Front",
    label: "Front",
    image: "/images/convert/family/front-kit-1-600x400.png.webp",
  },
  {
    name: "Rear",
    label: "Rear",
    image: "/images/convert/family/rear-kit-2-600x400.png.webp",
  },
  {
    name: "Rear Thru Axle",
    label: "Rear Thru Axle",
    image: "/images/convert/family/rear-kit-2-600x400.png (1).webp",
  },
  {
    name: "Dual",
    label: "Dual",
    image: "/images/convert/family/dual-kit-1-600x400.png.webp",
  },
];

export default function KitFamily() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-12 sm:mb-16">
          Kit Family
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {kitTypes.map((kit) => (
            <div key={kit.name} className="text-center">
              {/* Bike Image */}
              <div className="bg-gray-50 rounded-lg p-2 mb-3 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <Image
                  src={kit.image}
                  alt={kit.name}
                  width={340}
                  height={260}
                  className="object-contain"
                />
              </div>

              {/* Label Button */}
              <button className="bg-primary text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-primary-deep transition-colors">
                {kit.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
