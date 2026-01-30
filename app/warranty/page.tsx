"use client";

import Header from "../components/Header";

export default function Warranty() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Warranty Policy
        </h1>
        <p className="text-xl text-gray-500 mb-16">
          We stand behind the quality of every Grood e-bike. Our warranty policy
          is designed to give you peace of mind on every ride.
        </p>

        <div className="space-y-8">
          {/* Frame & Fork */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:border-secondary-deep transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-black">Frame & Fork</h2>
              <span className="bg-secondary-deep text-white px-3 py-1 rounded-full text-sm font-bold">
                2 Years
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              2-year warranty on all Grood frames and forks, allowing you to
              focus solely on your enjoyment. This covers manufacturing defects
              and structural integrity under normal riding conditions.
            </p>
          </div>

          {/* Motor */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:border-secondary-deep transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-black">Motor</h2>
              <span className="bg-secondary-deep text-white px-3 py-1 rounded-full text-sm font-bold">
                2 Years
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Motors are designed for long-lasting performance; however, if a
              defect occurs, you are entitled to a complimentary replacement
              within two years from the date of purchase.
            </p>
          </div>

          {/* Battery */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:border-secondary-deep transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-black">Battery</h2>
              <span className="bg-secondary-deep text-white px-3 py-1 rounded-full text-sm font-bold">
                1 Year
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our batteries undergo rigorous testing and stress assessments.
              However, if any defects are found, you have a 1-year period to
              request a replacement. This covers capacity degradation beyond
              normal wear and manufacturing defects.
            </p>
          </div>

          {/* General Terms */}
          <div className="bg-gray-50 rounded-2xl p-8 mt-12">
            <h3 className="font-bold text-lg mb-4">Note</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Warranty applies to the original owner only.</li>
              <li>Proof of purchase is required for all warranty claims.</li>
              <li>
                Warranty does not cover normal wear and tear components (tires,
                brake pads, chains).
              </li>
              <li>
                Damage due to accidents, negligence, or unauthorized
                modification is not covered.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
