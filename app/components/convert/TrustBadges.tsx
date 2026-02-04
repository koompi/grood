"use client";

import { trustBadges } from "../../lib/convert-data";

// Icon components
function WarrantyIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function ReturnsIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  warranty: WarrantyIcon,
  returns: ReturnsIcon,
  delivery: DeliveryIcon,
  payment: PaymentIcon,
};

export default function TrustBadges() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {trustBadges.map((badge) => {
            const IconComponent = iconMap[badge.icon];
            return (
              <div key={badge.id} className="text-center p-3 sm:p-4">
                <div className="flex justify-center mb-2 sm:mb-4 text-gray-800 [&>svg]:w-10 [&>svg]:h-10 sm:[&>svg]:w-12 sm:[&>svg]:h-12">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base mb-0.5 sm:mb-1">{badge.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-snug">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
