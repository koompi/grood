"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import {
  convertKit,
  wheelSizes,
  accessories,
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
  const [selectedSize, setSelectedSize] = useState(wheelSizes[2].id); // Default to 26"
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  // Calculate total price
  const accessoryTotal = selectedAccessories.reduce((total, accId) => {
    const acc = accessories.find((a) => a.id === accId);
    return total + (acc?.price || 0);
  }, 0);
  const totalPrice = (convertKit.price + accessoryTotal) * quantity;

  // Toggle accessory selection
  const toggleAccessory = (accId: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(accId)
        ? prev.filter((id) => id !== accId)
        : [...prev, accId],
    );
  };

  // Handle add to cart
  const handleAddToCart = () => {
    // Add main kit
    addToCart({
      id: `${convertKit.id}-${selectedSize}`,
      name: `${convertKit.name} (${selectedSize}")`,
      price: convertKit.price,
      image: convertKit.images[0],
      options: { size: `${selectedSize}"` },
    });

    // Add selected accessories
    selectedAccessories.forEach((accId) => {
      const acc = accessories.find((a) => a.id === accId);
      if (acc) {
        addToCart({
          id: acc.id,
          name: acc.name,
          price: acc.price,
          image: acc.image,
        });
      }
    });
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

      {/* Wheel size selector */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-sm font-semibold text-black mb-2 sm:mb-3">
          Select Wheel size:
        </label>
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2">
          {wheelSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 font-medium text-sm sm:text-base transition-all ${
                selectedSize === size.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-gray-300 hover:border-primary"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-4 sm:mb-6">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          ${totalPrice.toFixed(2)}
        </div>
        {accessoryTotal > 0 && (
          <span className="text-xs sm:text-sm md:text-base font-normal text-gray-500 block mt-1">
            Kit ${convertKit.price} + Accessories ${accessoryTotal}
          </span>
        )}
      </div>

      {/* Accessory upsells */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-sm font-semibold text-black mb-2 sm:mb-3">
          Add accessories (optional)
        </label>
        <div className="space-y-2 sm:space-y-3">
          {accessories.map((acc) => (
            <label
              key={acc.id}
              className={`flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 cursor-pointer transition-all ${
                selectedAccessories.includes(acc.id)
                  ? "border-secondary bg-[#FEF9E3]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedAccessories.includes(acc.id)}
                onChange={() => toggleAccessory(acc.id)}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-secondary focus:ring-secondary flex-shrink-0"
              />
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={acc.image}
                  alt={acc.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-black text-sm sm:text-base truncate">
                  {acc.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 line-clamp-1 sm:line-clamp-none">
                  {acc.description}
                </div>
              </div>
              <div className="font-semibold text-secondary-deep text-sm sm:text-base flex-shrink-0">
                +{acc.priceFormatted}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex gap-2 sm:gap-4 mb-3 sm:mb-4">
        {/* Quantity selector */}
        <div className="flex items-center border-2 border-gray-200 rounded-lg sm:rounded-xl">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 sm:px-4 py-2.5 sm:py-3 text-lg sm:text-xl font-medium hover:bg-gray-50 transition-colors"
          >
            −
          </button>
          <span className="px-2 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg font-semibold min-w-[2.5rem] sm:min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 sm:px-4 py-2.5 sm:py-3 text-lg sm:text-xl font-medium hover:bg-gray-50 transition-colors"
          >
            +
          </button>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-primary text-white py-3 sm:py-4 px-4 sm:px-8 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-primary-deep transition-colors"
        >
          ADD TO CART
        </button>
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
