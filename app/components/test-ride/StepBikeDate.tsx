"use client"; // Needs client for date input

import { Bike, bikes, timeSlots } from "@/app/lib/test-ride-data";
import { useState } from "react";

interface StepBikeDateProps {
  selectedBike: Bike | null;
  onSelectBike: (bike: Bike) => void;
  selectedDate: string;
  onSelectDate: (date: string) => void;
  selectedTime: string;
  onSelectTime: (time: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function StepBikeDate({
  selectedBike,
  onSelectBike,
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
  onBack,
  onContinue,
}: StepBikeDateProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Select your bike and date</h2>
        <p className="text-gray-500">
          Choose which Grood you'd like to test and your preferred time
        </p>
      </div>

      {/* Bike Selection */}
      <div className="mb-10">
        <h3 className="text-lg font-bold mb-4">Choose a bike</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bikes.map((bike) => (
            <button
              key={bike.id}
              onClick={() => onSelectBike(bike)}
              className={`p-6 rounded-xl border text-left transition-all ${
                selectedBike?.id === bike.id
                  ? "bg-secondary border-secondary shadow-lg"
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="font-bold text-lg mb-1">{bike.name}</div>
              <div
                className={`text-sm ${selectedBike?.id === bike.id ? "text-black/80" : "text-gray-400"}`}
              >
                {bike.series}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-10">
        <h3 className="text-lg font-bold mb-4">Select a date</h3>
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onSelectDate(e.target.value)}
            className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:border-secondary focus:ring-0 appearance-none"
          />
        </div>
      </div>

      {/* Time Selection */}
      <div className="mb-12">
        <h3 className="text-lg font-bold mb-4">Choose a time</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => onSelectTime(time)}
              className={`py-3 px-2 rounded-lg text-sm font-medium border transition-all ${
                selectedTime === time
                  ? "bg-secondary border-secondary text-black"
                  : "bg-white border-gray-100 text-gray-600 hover:border-gray-300"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-white border border-gray-100 rounded-full font-medium hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onContinue}
          disabled={!selectedBike || !selectedDate || !selectedTime}
          className="px-8 py-3 bg-black text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
