"use client";

import Image from "next/image";
import Link from "next/link";

const appFeatures = [
  {
    title: "Touch Unlock",
    description: "Start your ride with just your phone nearby",
  },
  {
    title: "Track Rides",
    description: "See your speed, distance, and battery in real-time",
  },
  {
    title: "Customize",
    description: "Adjust motor power, alarm settings, and more",
  },
  {
    title: "Share",
    description: "Let friends ride with their own app profile",
  },
];

export default function GroodApp() {
  return (
    <section id="app" className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <span className="section-label">GROOD APP</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Your all-in-one riding companion
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-lg">
            Unlock, track, and customize your ride. The Grood app puts complete
            control in your hands.
          </p>

          {/* Feature List */}
          <div className="space-y-6 mb-10">
            {appFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="feature-bullet"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Store Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link href="#" className="store-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              App Store
            </Link>
            <Link href="#" className="store-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
              </svg>
              Play Store
            </Link>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] md:w-[400px] aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
              alt="Grood App on iPhone"
              fill
              className="object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
