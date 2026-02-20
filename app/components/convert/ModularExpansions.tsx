"use client";

const expansions = [
  { name: "Front/Rear Light" },
  { name: "Handlebar Display" },
  { name: "USB Charger" },
  { name: "Throttle for 250W Geeko Kit" },
];

export default function ModularExpansions() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-12 sm:mb-16">
          Modular Expansions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {expansions.map((item) => (
            <div key={item.name} className="text-center">
              {/* Item Name */}
              <h3 className="text-sm sm:text-base font-bold text-black mb-1 border-b-2 border-gray-300 inline-block pb-1">
                {item.name}
              </h3>

              {/* Placeholder Image */}
              <div className="mt-6 flex justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400 text-xs sm:text-sm text-center px-2">
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-deep transition-colors inline-flex items-center gap-2">
            See More
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
