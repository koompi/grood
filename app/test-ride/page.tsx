"use client";

import Header from "@/app/components/Header";
import Image from "next/image";

const availableModels = [
  {
    id: "siemreap",
    name: "Grood Siem Reap",
    description: "Urban commuter e-bike with sleek design",
    image: "/images/bikes/siemreap/white/body.JPG",
  },
  {
    id: "cargodoekdoek",
    name: "Grood Cargo Doek Doek",
    description: "Heavy-duty cargo e-bike for deliveries",
    image: "/images/bikes/cargo/background2.JPG",
  },
];

export default function TestRidePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center bg-primary-deep text-white">
        <div className="text-center px-6">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
            Experience Grood
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">Book a Test Ride</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Available Models */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-4">
          Available Models
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Experience our e-bikes in person before you buy
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {availableModels.map((model) => (
            <div
              key={model.id}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <div className="relative aspect-4/3 mb-4">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {model.name}
              </h3>
              <p className="text-sm text-gray-500">{model.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Contact us to schedule your test ride
          </p>
          <a
            href="https://t.me/Groodebicycle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-primary-deep transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Contact Us on Telegram
          </a>
        </div>
      </div>
    </main>
  );
}
