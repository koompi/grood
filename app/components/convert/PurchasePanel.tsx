"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  convertKit,
  wheelSizes,
  technicalSpecs,
  packageContents,
} from "../../lib/convert-data";

// Checkmark icon component
function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-green-500 flex-shrink-0"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Accordion component
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left font-semibold text-black hover:text-gray-700 transition-colors"
      >
        {title}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function PurchasePanel() {
  const { addToCart } = useCart();
  const selectedSize = wheelSizes[2].id; // Default to 26"
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: `${convertKit.id}-${selectedSize}`,
        name: `${convertKit.name} (${selectedSize}")`,
        price: convertKit.price,
        image: convertKit.images[0],
        options: { size: `${selectedSize}"` },
      });
    }
  };

  return (
    <div className="w-full">
      {/* Product title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
        {convertKit.name}
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
        {convertKit.tagline}
      </p>

      {/* Feature bullets */}
      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        {convertKit.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className="text-sm sm:text-base text-gray-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Wheel size selector - hidden */}

      {/* Price */}
      <div className="mb-4 sm:mb-6">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          <span className="text-2xl">From</span> ${convertKit.price.toFixed(2)}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
        {/* Quantity selector and Add to cart */}

        {/* Contact us button - Primary */}
        <a
          href="https://t.me/Groodebicycle"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-primary-deep transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          CONTACT US
        </a>
      </div>

      {/* Accordions */}
      <div className="border-t border-gray-200">
        <Accordion title="Technical specifications">
          <div className="space-y-2">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-500">{spec.label}</span>
                <span className="font-medium text-black">{spec.value}</span>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Package contents">
          <ul className="space-y-2">
            {packageContents.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-secondary mt-1">•</span>
                <div>
                  <span className="font-medium text-black">{item.name}</span>
                  {item.description && (
                    <span className="text-gray-500"> - {item.description}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
}
