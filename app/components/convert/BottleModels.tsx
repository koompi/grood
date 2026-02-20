"use client";

import Image from "next/image";

interface BottleModel {
  name: string;
  width: string;
  height: string;
  specs: string;
  image: string;
}

const bottleModels: BottleModel[] = [
  {
    name: "Mini",
    width: "7.6",
    height: "22",
    specs: "36V5.2AH / 36V7AH",
    image: "/images/convert/models/mini.png",
  },
  {
    name: "Solid",
    width: "8.7",
    height: "22",
    specs: "36V10AH",
    image: "/images/convert/models/solid.webp",
  },
  {
    name: "Pro",
    width: "10.4",
    height: "22",
    specs: "36V15AH / 48V10AH",
    image: "/images/convert/models/pro.webp",
  },
  {
    name: "Prime",
    width: "7.6",
    height: "29",
    specs: "36V7.8AH / 36V10AH",
    image: "/images/convert/models/prime.webp",
  },
  {
    name: "Max",
    width: "8.7",
    height: "29",
    specs: "36V15AH / 48V10AH",
    image: "/images/convert/models/max.webp",
  },
  {
    name: "Ultra",
    width: "10.4",
    height: "29",
    specs: "36V20AH / 48V15AH",
    image: "/images/convert/models/ultra.webp",
  },
];

export default function BottleModels() {
  return (
    <section className="py-16 sm:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-12 sm:mb-16">
          Grood Bottle: 6 Models x 4 Colors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
          {bottleModels.map((model) => (
            <div key={model.name} className="text-center">
              {/* Model Name */}
              <h3 className="text-lg font-bold text-black mb-1 border-b-2 border-gray-300 inline-block pb-1">
                {model.name}
              </h3>

              {/* Dimensions & Image */}
              <div className="my-4 flex flex-col items-center">
                {/* Bottle image */}
                <div className="relative">
                  <Image
                    src={model.image}
                    alt={`${model.name} bottle`}
                    width={280}
                    height={450}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Specs */}
              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                {model.specs}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
