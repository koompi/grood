"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import TestRideStepper from "@/app/components/test-ride/TestRideStepper";
import StepLocation from "@/app/components/test-ride/StepLocation";
import StepBikeDate from "@/app/components/test-ride/StepBikeDate";
import StepDetails, {
  UserDetails,
} from "@/app/components/test-ride/StepDetails";
import { Bike, Store, stores } from "@/app/lib/test-ride-data";
import Link from "next/link";

export default function TestRidePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<{
    store: Store | null;
    bike: Bike | null;
    date: string;
    time: string;
  }>({
    store: null,
    bike: null,
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 1: Location
  const handleSelectStore = (store: Store) => {
    setBookingData((prev) => ({ ...prev, store }));
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 2: Bike and Date
  const handleBikeDateSelection = (bike: Bike, date: string, time: string) => {
    // Handled by individual setters passed down, but this function is just a placeholder logic-wise
  };

  const handleContinueToDetails = () => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 3: Details & Submit
  const handleSubmit = (userDetails: UserDetails) => {
    console.log("Booking Confirmed:", { ...bookingData, userDetails });
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-24"></div>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">You're all set!</h1>
          <p className="text-gray-600 max-w-md mb-8">
            Your test ride has been booked successfully. We've sent a
            confirmation email to your inbox.
          </p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      ) : (
        <>
          <TestRideStepper currentStep={currentStep} />

          <div className="max-w-7xl mx-auto px-6 py-8">
            {currentStep === 1 && (
              <StepLocation stores={stores} onSelectStore={handleSelectStore} />
            )}

            {currentStep === 2 && (
              <StepBikeDate
                selectedBike={bookingData.bike}
                onSelectBike={(bike) =>
                  setBookingData((prev) => ({ ...prev, bike }))
                }
                selectedDate={bookingData.date}
                onSelectDate={(date) =>
                  setBookingData((prev) => ({ ...prev, date }))
                }
                selectedTime={bookingData.time}
                onSelectTime={(time) =>
                  setBookingData((prev) => ({ ...prev, time }))
                }
                onBack={() => setCurrentStep(1)}
                onContinue={handleContinueToDetails}
              />
            )}

            {currentStep === 3 && (
              <StepDetails
                bookingData={bookingData}
                onBack={() => setCurrentStep(2)}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </>
      )}
    </main>
  );
}
