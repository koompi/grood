"use client";

import Header from "../components/Header";

const specs = [
  {
    category: "Performance",
    items: [
      {
        label: "Motor",
        siemReap: "Grood Electric Bicycles",
        phnomPenh: "Grood Electric Bicycles",
      },
      { label: "Max Speed", siemReap: "-", phnomPenh: "-" },
      {
        label: "Range",
        siemReap: "40-80 Km",
        phnomPenh: "40-80 Km",
      },
      {
        label: "Battery",
        siemReap: "36V 7.0Ah / 36V 15Ah",
        phnomPenh: "36V 7.0Ah / 36V 15Ah",
      },
      {
        label: "Assist Levels",
        siemReap: "-",
        phnomPenh: "-",
      },
    ],
  },
  {
    category: "Components",
    items: [
      {
        label: "Gears",
        siemReap: "Standard",
        phnomPenh: "Standard",
      },
      {
        label: "Lighting",
        siemReap: "Integrated",
        phnomPenh: "Integrated",
      },
      {
        label: "Tires",
        siemReap: "All Terrain",
        phnomPenh: "City Slick",
      },
      {
        label: "Weight",
        siemReap: "20 kg",
        phnomPenh: "19 kg",
      },
    ],
  },
  {
    category: "Smart Features",
    items: [
      {
        label: "App Connectivity",
        siemReap: "Yes",
        phnomPenh: "Yes",
      },
      {
        label: "GPS Tracking",
        siemReap: "Yes",
        phnomPenh: "Yes",
      },
      {
        label: "Anti-Theft",
        siemReap: "Smart Lock",
        phnomPenh: "Smart Lock",
      },
    ],
  },
];

export default function TechSpecs() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Header />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          Technical Specifications
        </h1>

        <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-gray-100">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-deep text-white text-left">
                <th className="p-6 text-sm font-semibold uppercase tracking-wider w-1/3 border-b border-primary-deep/50">
                  Feature
                </th>
                <th className="p-6 text-sm font-semibold uppercase tracking-wider w-1/3 border-b border-primary-deep/50 border-l border-primary-deep/20">
                  Siem Reap
                </th>
                <th className="p-6 text-sm font-semibold uppercase tracking-wider w-1/3 border-b border-primary-deep/50 border-l border-primary-deep/20">
                  Phnom Penh
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((section, sIndex) => (
                <>
                  <tr
                    key={`header-${sIndex}`}
                    className="bg-gray-50 border-b border-gray-100"
                  >
                    <td
                      colSpan={3}
                      className="p-4 px-6 font-bold text-secondary-deep uppercase tracking-widest text-xs"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.items.map((item, iIndex) => (
                    <tr
                      key={`item-${sIndex}-${iIndex}`}
                      className="border-b border-gray-100 hover:bg-[#F2F4F3] transition-colors group"
                    >
                      <td className="p-6 text-gray-900 font-semibold border-r border-gray-50 bg-white group-hover:bg-[#F2F4F3] transition-colors">
                        {item.label}
                      </td>
                      <td className="p-6 text-gray-600 border-r border-gray-50">
                        {item.siemReap}
                      </td>
                      <td className="p-6 text-gray-600 font-medium text-black">
                        {item.phnomPenh}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-8 bg-primary-deep text-white rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-secondary-deep">
            About Pedal Assistance
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our pedal assistance system is incredibly user-friendly: as you
            pedal, the motor provides support based on the selected speed level
            (ranging from 1 to 5). Setting 0 means no assistance, functioning
            like a traditional bike.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This system requires continuous pedaling, but a gentle and relaxed
            pace is sufficient to receive assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
