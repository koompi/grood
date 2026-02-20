"use client";

import Image from "next/image";

export default function MinimalisticDesign() {
  const bottleFeatures = [
    "Bottle-shaped 3-in-1, battery/controller/display",
    "Bottle cap display, 3 buttons, built-in Bluetooth 5.0",
    "Controller in aluminum case with cooling fins: IPX7 waterproof, temperature-protected, reliable.",
  ];

  const motorFeatures = [
    "Patented motor-integrated cassette sensor",
    "Bionic torque assist technology",
    "Fit 99% bike frame, quick-release axles (front 75/80/100mm, rear 133/138mm) & thru-axles (rear 142/148mm).",
  ];

  return (
    <section className="py-16 sm:py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-12 sm:mb-16">
          Minimalistic Design
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Geeko Bottle */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-2 border-b-2 border-primary inline-block pb-1">
              Bottle
            </h3>

            {/* Bottle Image */}
            <div className="my-8 flex justify-center">
              <Image
                src="/images/convert/Bottle.png"
                alt="Geeko Bottle"
                width={356}
                height={420}
                className="object-contain"
              />
            </div>

            <ul className="text-left space-y-2 text-sm text-gray-600">
              {bottleFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* <button className="mt-6 bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-deep transition-colors inline-flex items-center gap-2">
              Learn More
              <span>→</span>
            </button> */}
          </div>

          {/* Geeko Motor */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-2 border-b-2 border-primary inline-block pb-1">
              Motor
            </h3>

            {/* Motor Image */}
            <div className="my-8 flex justify-center">
              <Image
                src="/images/convert/Motor.png"
                alt="Geeko Motor"
                width={356}
                height={420}
                className="object-contain"
              />
            </div>

            <ul className="text-left space-y-2 text-sm text-gray-600">
              {motorFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* <button className="mt-6 bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-deep transition-colors inline-flex items-center gap-2">
              Learn More
              <span>→</span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
