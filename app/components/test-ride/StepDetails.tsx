"use client";

import { Bike, Store } from "@/app/lib/test-ride-data";
import { useState } from "react";

interface StepDetailsProps {
  bookingData: {
    store: Store | null;
    bike: Bike | null;
    date: string;
    time: string;
  };
  onBack: () => void;
  onSubmit: (details: UserDetails) => void;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function StepDetails({
  bookingData,
  onBack,
  onSubmit,
}: StepDetailsProps) {
  const [formData, setFormData] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const isFormValid =
    formData.firstName && formData.lastName && formData.email && formData.phone;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Your details</h2>
        <p className="text-gray-500">
          Fill in your information to complete your booking
        </p>
      </div>

      <div className="bg-[#FAF9F5] rounded-3xl p-8 mb-10 max-w-2xl mx-auto">
        <h3 className="font-bold mb-6 text-lg">Booking Summary</h3>
        <div className="grid grid-cols-2 gap-y-4 text-sm">
          <div className="text-gray-500">Location</div>
          <div className="text-right font-medium">
            {bookingData.store?.name}
          </div>

          <div className="text-gray-500">Bike</div>
          <div className="text-right font-medium">{bookingData.bike?.name}</div>

          <div className="text-gray-500">Date</div>
          <div className="text-right font-medium">{bookingData.date}</div>

          <div className="text-gray-500">Time</div>
          <div className="text-right font-medium">{bookingData.time}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
              className="w-full p-4 bg-[#F8F9FA] rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
              className="w-full p-4 bg-[#F8F9FA] rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full p-4 bg-[#F8F9FA] rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            className="w-full p-4 bg-[#F8F9FA] rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
          />
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-12 py-3 bg-white border border-gray-100 rounded-full font-medium hover:bg-gray-50 transition-colors w-1/3"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className="px-8 py-3 bg-secondary text-black rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/90 transition-all w-full flex-1"
          >
            Book Test Ride
          </button>
        </div>
      </form>
    </div>
  );
}
