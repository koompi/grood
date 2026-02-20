"use client";

import Header from "../components/Header";
import ProductGallery from "../components/convert/ProductGallery";
import PurchasePanel from "../components/convert/PurchasePanel";
import StickyBottomBar from "../components/convert/StickyBottomBar";
import MinimalisticDesign from "../components/convert/MinimalisticDesign";
import BottleModels from "../components/convert/BottleModels";
import KitFamily from "../components/convert/KitFamily";
import FitsAllBikes from "../components/convert/FitsAllBikes";

export default function ConvertPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:h-[40vh] flex items-center justify-center bg-primary-deep text-white overflow-hidden py-12 md:py-0">
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">
            Transform your ride
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Turn your bike into an e-bike
          </h1>
        </div>
      </section>

      {/* Product Gallery & Purchase Panel */}
      <section className="py-8 sm:py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left: Product Gallery */}
            <div className="w-full overflow-hidden">
              <ProductGallery />
            </div>

            {/* Right: Purchase Panel */}
            <div className="w-full lg:sticky lg:top-24 lg:self-start">
              <PurchasePanel />
            </div>
          </div>
        </div>
      </section>

      {/* Minimalistic Design */}
      <MinimalisticDesign />

      {/* Bottle Models */}
      <BottleModels />

      {/* Kit Family */}
      <KitFamily />

      {/* Fits All Bikes */}
      <FitsAllBikes />

      {/* Sticky Bottom Bar (mobile) */}
      <StickyBottomBar />
    </div>
  );
}
