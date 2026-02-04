"use client";

import { trpc } from "@/lib/trpc";
import Link from "next/link";
import StatusBadge from "@/app/components/admin/StatusBadge";

export default function AdminDashboard() {
  const { data: orderStats, isLoading: ordersLoading } =
    trpc.orders.stats.useQuery();
  const { data: testRideStats, isLoading: testRidesLoading } =
    trpc.testRides.stats.useQuery();
  const { data: recentOrders } = trpc.orders.list.useQuery({ limit: 5 });
  const { data: recentBookings } = trpc.testRides.list.useQuery({ limit: 5 });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Orders Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {ordersLoading ? "..." : orderStats?.total ?? 0}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-yellow-600 font-medium">
              {orderStats?.pending ?? 0} pending
            </span>
          </div>
        </div>

        {/* Test Rides Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Test Rides</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {testRidesLoading ? "..." : testRideStats?.total ?? 0}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-yellow-600 font-medium">
              {testRideStats?.pending ?? 0} pending
            </span>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Orders
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {ordersLoading ? "..." : orderStats?.pending ?? 0}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Confirmed Bookings */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Confirmed Rides
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {testRidesLoading ? "..." : testRideStats?.confirmed ?? 0}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Orders
              </h2>
              <Link
                href="/admin/orders"
                className="text-sm text-secondary-deep hover:underline"
              >
                View all
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentOrders?.orders.map((order) => (
              <Link
                key={order.id}
                href={`/admin/orders/${order.id}`}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {order.orderNumber}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.firstName} {order.lastName}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    ${order.total.toLocaleString()}
                  </p>
                  <StatusBadge status={order.status} />
                </div>
              </Link>
            ))}
            {(!recentOrders || recentOrders.orders.length === 0) && (
              <p className="p-4 text-gray-500 text-center">No orders yet</p>
            )}
          </div>
        </div>

        {/* Recent Test Rides */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Test Rides
              </h2>
              <Link
                href="/admin/test-rides"
                className="text-sm text-secondary-deep hover:underline"
              >
                View all
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentBookings?.bookings.map((booking) => (
              <Link
                key={booking.id}
                href={`/admin/test-rides/${booking.id}`}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {booking.firstName} {booking.lastName}
                  </p>
                  <p className="text-sm text-gray-500">{booking.bikeName}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {booking.date} at {booking.time}
                  </p>
                  <StatusBadge status={booking.status} />
                </div>
              </Link>
            ))}
            {(!recentBookings || recentBookings.bookings.length === 0) && (
              <p className="p-4 text-gray-500 text-center">No bookings yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
