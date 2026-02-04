"use client";

import { features } from "../../lib/convert-data";

// Icon components
function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  shield: ShieldIcon,
  mountain: MountainIcon,
  chart: ChartIcon,
};

export default function FeaturesGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-10 md:mb-12">
          Features
        </h2>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FEF9E3] rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-secondary [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
