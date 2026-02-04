"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { useInView } from "../../hooks/useInView";
import { ReactNode } from "react";
import { getBikeById } from "../../lib/bikes-data";

// Animated Section Wrapper
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

// Feature icon component
function FeatureIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BikeDetails() {
  const params = useParams();
  const id = params?.id as string;
  const { addToCart } = useCart();

  // Get bike data based on URL ID
  const bike = getBikeById(id);

  // Handle bike not found
  if (!bike) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <h1 className="text-4xl font-bold text-black mb-4">Bike Not Found</h1>
          <p className="text-gray-500 mb-8">
            The bike you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/all-bikes"
            className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors"
          >
            View All Bikes
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: bike.id,
      name: bike.name,
      price: bike.priceNumber,
      image: bike.images[0],
      options: { color: bike.color },
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex flex-col items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bike.images[0]}
            alt={bike.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-end min-h-screen pb-32 text-white">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-secondary text-sm font-bold tracking-widest uppercase">
                {bike.model}
              </span>
              {bike.soldOut && (
                <span className="text-white text-sm font-bold px-3 py-1 rounded-full bg-red-500">
                  Sold Out
                </span>
              )}
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">{bike.name}</h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {bike.description}
            </p>
            <div className="text-4xl font-bold mb-10">{bike.price}</div>

            <div className="flex flex-wrap gap-4">
              {bike.soldOut ? (
                <button
                  disabled
                  className="bg-gray-400 text-white px-8 py-4 rounded-full font-bold cursor-not-allowed"
                >
                  Sold Out
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex justify-center items-center gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 19C9 20.105 8.105 21 7 21C5.895 21 5 20.105 5 19C5 17.895 5.895 17 7 17C8.105 17 9 17.895 9 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Add to Cart
                </button>
              )}
              {bike.soldOut ? (
                <span className="bg-transparent border border-white/50 px-8 py-4 rounded-full font-bold text-white/50 cursor-not-allowed">
                  Test Ride Unavailable
                </span>
              ) : (
                <Link
                  href="/test-ride"
                  className="bg-transparent border border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                >
                  Book Test Ride
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-24 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Packed with city-smart features
          </h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
            Every detail refined for the ultimate urban riding experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {bike.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#FEF9E3] rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                  <FeatureIcon />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Component Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">
              Premium Components
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">
              Built to perform
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Every component is carefully selected and tested to deliver the
              best riding experience in its class.
            </p>
          </AnimatedSection>

          <div className="space-y-32">
            {bike.components.map((component, idx) => (
              <AnimatedSection
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center`}
                delay={100}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-100">
                    <Image
                      src={component.image}
                      alt={component.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <span className="text-secondary text-sm font-bold tracking-wider uppercase">
                    {component.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-black">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {component.description}
                  </p>

                  {/* Spec Tags */}
                  <div className="flex flex-wrap gap-3">
                    {component.specs.map((spec, specIdx) => (
                      <span
                        key={specIdx}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-black"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <AnimatedSection className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Technical specifications
          </h2>
          <p className="text-gray-500 mb-16">For the {bike.name}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* Battery Range */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
                  <line x1="22" y1="11" x2="22" y2="13"></line>
                </svg>
                <span className="text-sm font-medium text-gray-400">
                  Battery Range
                </span>
              </div>
              <div className="text-2xl font-bold text-black">
                {bike.specs.range}
              </div>
            </div>

            {/* Top Speed */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
                <span className="text-sm font-medium text-gray-400">
                  Top Speed
                </span>
              </div>
              <div className="text-2xl font-bold text-black">
                {bike.specs.speed}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                {bike.specs.speedSub}
              </div>
            </div>

            {/* Weight */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="text-sm font-medium text-gray-400">
                  Weight
                </span>
              </div>
              <div className="text-2xl font-bold text-black">
                {bike.specs.weight}
              </div>
            </div>

            {/* Battery Details */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
                <span className="text-sm font-medium text-gray-400">
                  Battery
                </span>
              </div>
              <div className="text-2xl font-bold text-black">
                {bike.specs.battery}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                {bike.specs.batterySub}
              </div>
            </div>

            {/* Motor Details */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="text-sm font-medium text-gray-400">Motor</span>
              </div>
              <div className="text-2xl font-bold text-black">
                {bike.specs.motor}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="py-24 px-6 bg-white">
        <div className="text-center mb-16">
          <span className="bg-gray-100 text-black px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm inline-block mb-4">
            F A L L / W I N T E R 2 0 2 6
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-black">
            Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {bike.images.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="aspect-square relative rounded-2xl overflow-hidden bg-gray-100 hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            >
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
