"use client";

interface ControlMode {
  name: string;
  optional?: boolean;
}

const controlModes: ControlMode[] = [
  { name: "Battery Cap" },
  { name: "APP" },
  { name: "Handlebar Display", optional: true },
  { name: "Thumb Throttle", optional: true },
];

export default function ControlModes() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-12 sm:mb-16">
          Multiple Control Modes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {controlModes.map((mode) => (
            <div key={mode.name} className="text-center">
              {/* Mode Name */}
              <h3 className="text-sm sm:text-base font-bold text-black mb-1 border-b-2 border-gray-300 inline-block pb-1">
                {mode.name}
                {mode.optional && (
                  <span className="text-gray-400 font-normal">(Opt)</span>
                )}
              </h3>

              {/* Placeholder Image */}
              <div className="mt-6 flex justify-center">
                <div className="w-32 h-40 sm:w-40 sm:h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {mode.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
