"use client";

import { use } from "react";
import { trpc } from "@/lib/trpc";
import Link from "next/link";

const statuses = [
  { value: "pending", label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  { value: "confirmed", label: "Confirmed", color: "bg-blue-100 text-blue-800" },
  { value: "completed", label: "Completed", color: "bg-green-100 text-green-800" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-100 text-red-800" },
  { value: "no-show", label: "No Show", color: "bg-gray-100 text-gray-800" },
];

export default function TestRideDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: booking, isLoading, refetch } = trpc.testRides.getById.useQuery({ id });

  const updateStatusMutation = trpc.testRides.updateStatus.useMutation({
    onSuccess: () => refetch(),
  });

  const handleStatusChange = (newStatus: string) => {
    updateStatusMutation.mutate({
      id,
      status: newStatus as "pending" | "confirmed" | "completed" | "cancelled" | "no-show",
    });
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="p-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking not found</h2>
          <p className="text-gray-500 mb-4">The booking you're looking for doesn't exist.</p>
          <Link href="/admin/test-rides" className="text-secondary hover:underline">
            Back to Test Rides
          </Link>
        </div>
      </div>
    );
  }

  const statusInfo = statuses.find((s) => s.value === booking.status) || statuses[0];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/test-rides"
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Test Ride Booking</h1>
            <p className="text-gray-500">
              Created on {new Date(booking.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={booking.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
          >
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
            {statusInfo.label}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking Details */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Booking Details</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Bike</p>
                <p className="font-medium text-gray-900 text-lg">{booking.bikeName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-medium text-gray-900 text-lg">{booking.storeName}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Date</p>
                <p className="font-medium text-gray-900 text-lg">{booking.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Time</p>
                <p className="font-medium text-gray-900 text-lg">{booking.time}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Booking ID</p>
              <p className="font-mono text-sm text-gray-600">{booking.id}</p>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Customer Information</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium text-gray-900 text-lg">
                {booking.firstName} {booking.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a
                href={`mailto:${booking.email}`}
                className="font-medium text-secondary hover:underline text-lg"
              >
                {booking.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a
                href={`tel:${booking.phone}`}
                className="font-medium text-secondary hover:underline text-lg"
              >
                {booking.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${booking.email}?subject=Your Test Ride Booking at GROOD`}
            className="px-4 py-2 bg-secondary text-black rounded-lg font-medium hover:bg-secondary/90 transition"
          >
            Send Email
          </a>
          <a
            href={`tel:${booking.phone}`}
            className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Call Customer
          </a>
          {booking.status === "pending" && (
            <button
              onClick={() => handleStatusChange("confirmed")}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium hover:bg-blue-200 transition"
            >
              Confirm Booking
            </button>
          )}
          {booking.status === "confirmed" && (
            <button
              onClick={() => handleStatusChange("completed")}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium hover:bg-green-200 transition"
            >
              Mark Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
