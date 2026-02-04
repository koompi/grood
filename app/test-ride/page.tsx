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
import { trpc } from "@/lib/trpc";

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
  const [bookingId, setBookingId] = useState<string | null>(null);

  const createBookingMutation = trpc.testRides.create.useMutation({
    onSuccess: (data) => {
      setBookingId(data.id);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });

  // Step 1: Location
  const handleSelectStore = (store: Store) => {
    setBookingData((prev) => ({ ...prev, store }));
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContinueToDetails = () => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 3: Details & Submit
  const handleSubmit = (userDetails: UserDetails) => {
    if (!bookingData.store || !bookingData.bike) return;

    createBookingMutation.mutate({
      storeId: bookingData.store.id,
      storeName: bookingData.store.name,
      bikeId: bookingData.bike.id,
      bikeName: bookingData.bike.name,
      date: bookingData.date,
      time: bookingData.time,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      phone: userDetails.phone,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {isSubmitted ? (
        <>
          {/* Hero Section */}
          <section className="relative h-[30vh] flex items-center justify-center bg-primary-deep text-white">
            <div className="text-center px-6">
              <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
                Booking confirmed
              </span>
              <h1 className="text-4xl md:text-6xl font-bold">You're all set!</h1>
            </div>
          </section>

          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
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
            {bookingId && (
              <p className="text-sm text-gray-500 mb-2">
                Booking ID: <span className="font-mono font-medium">{bookingId}</span>
              </p>
            )}
            <p className="text-gray-600 max-w-md mb-4">
              Your test ride has been booked successfully. We've sent a
              confirmation email to your inbox.
            </p>
            {bookingData.store && bookingData.bike && (
              <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left max-w-md w-full">
                <h3 className="font-semibold text-gray-900 mb-2">Booking Details</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Bike:</span> {bookingData.bike.name}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Location:</span> {bookingData.store.name}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Date:</span> {bookingData.date}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Time:</span> {bookingData.time}
                </p>
              </div>
            )}
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative h-[30vh] flex items-center justify-center bg-primary-deep text-white">
            <div className="text-center px-6">
              <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
                Experience Grood
              </span>
              <h1 className="text-4xl md:text-6xl font-bold">Book a Test Ride</h1>
            </div>
          </section>

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
                isLoading={createBookingMutation.isPending}
                error={createBookingMutation.error?.message}
              />
            )}
          </div>
        </>
      )}
    </main>
  );
}
