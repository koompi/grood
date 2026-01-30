interface TestRideStepperProps {
  currentStep: number;
}

export default function TestRideStepper({ currentStep }: TestRideStepperProps) {
  const steps = [
    { number: 1, label: "Location" },
    { number: 2, label: "Bike & Date" },
    { number: 3, label: "Your Details" },
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="flex items-center gap-4 md:gap-12">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;

          return (
            <div key={step.number} className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                  isActive || isCompleted
                    ? "bg-secondary border-secondary text-black"
                    : "bg-gray-100 border-gray-200 text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 7L5.5 10L11.5 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`font-medium text-sm hidden md:block ${
                  isActive || isCompleted ? "text-black" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>

              {/* Line connector */}
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-0.5 hidden md:block ${
                    isCompleted ? "bg-secondary" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
