"use client";

import Image from "next/image";
import { useState } from "react";
import { convertKit } from "../../lib/convert-data";

export default function ProductGallery() {
  const [activeImage, setActiveImage] = useState(0);
  const images = convertKit.images;

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Main image */}
      <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#FEF9E3] mb-3 sm:mb-4">
        <Image
          src={images[activeImage]}
          alt={`${convertKit.name} - Image ${activeImage + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail carousel */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === index
                ? "border-secondary"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
