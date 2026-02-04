"use client";

import Header from "../components/Header";

const specs = [
  {
    category: "Performance",
    items: [
      { label: "Motor", value: "Grood Electric Bicycles" },
      { label: "Max Speed", value: "25 km/h" },
      { label: "Range", value: "40-80 km" },
      { label: "Battery", value: "36V 7.0Ah / 36V 15Ah" },
      { label: "Assist Levels", value: "5 levels" },
    ],
  },
  {
    category: "Components",
    items: [
      { label: "Gears", value: "Standard" },
      { label: "Lighting", value: "Integrated LED" },
      { label: "Tires", value: "All Terrain" },
      { label: "Weight", value: "19-20 kg" },
    ],
  },
  {
    category: "Smart Features",
    items: [
      { label: "App Connectivity", value: "Yes" },
      { label: "GPS Tracking", value: "Yes" },
      { label: "Anti-Theft", value: "Smart Lock" },
    ],
  },
];

export default function TechSpecs() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center bg-primary-deep text-white">
        <div className="text-center px-6">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
            Grood E-Bikes
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">Technical Specs</h1>
        </div>
      </section>

      {/* Specs Content */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          {specs.map((section, sIndex) => (
            <div key={sIndex} className="group">
              <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 pl-1">
                {section.category}
              </h2>
              <div className="bg-[#fafafa] rounded-2xl overflow-hidden border border-gray-100">
                {section.items.map((item, iIndex) => (
                  <div
                    key={iIndex}
                    className={`flex items-center justify-between px-6 py-5 hover:bg-gray-100/50 transition-colors ${
                      iIndex !== section.items.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <span className="text-gray-600 font-medium">
                      {item.label}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary-deep rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                About Pedal Assistance
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Our pedal assistance system provides support as you pedal based
                on your selected speed level (1-5). Setting 0 means no
                assistance, functioning like a traditional bike. A gentle,
                relaxed pace is all you need to receive assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
