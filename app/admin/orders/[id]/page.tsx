"use client";

import { use } from "react";
import { trpc } from "@/lib/trpc";
import Link from "next/link";
import Image from "next/image";

const statuses = [
  { value: "pending", label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  { value: "confirmed", label: "Confirmed", color: "bg-blue-100 text-blue-800" },
  { value: "shipped", label: "Shipped", color: "bg-purple-100 text-purple-800" },
  { value: "delivered", label: "Delivered", color: "bg-green-100 text-green-800" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-100 text-red-800" },
];

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: order, isLoading, refetch } = trpc.orders.getById.useQuery({ id });

  const updateStatusMutation = trpc.orders.updateStatus.useMutation({
    onSuccess: () => refetch(),
  });

  const handleStatusChange = (newStatus: string) => {
    updateStatusMutation.mutate({
      id,
      status: newStatus as "pending" | "confirmed" | "shipped" | "delivered" | "cancelled",
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

  if (!order) {
    return (
      <div className="p-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order not found</h2>
          <p className="text-gray-500 mb-4">The order you're looking for doesn't exist.</p>
          <Link href="/admin/orders" className="text-secondary hover:underline">
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  const statusInfo = statuses.find((s) => s.value === order.status) || statuses[0];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/orders"
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
            <h1 className="text-3xl font-bold text-gray-900">{order.orderNumber}</h1>
            <p className="text-gray-500">
              Placed on {new Date(order.createdAt).toLocaleDateString("en-US", {
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
            value={order.status}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Order Items ({order.items.length})
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {order.items.map((item) => (
                <div key={item.id} className="p-6 flex gap-4">
                  {item.image ? (
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <div className="text-sm text-gray-500 mt-1 space-y-0.5">
                      {item.color && <p>Color: {item.color}</p>}
                      {item.size && <p>Size: {item.size}</p>}
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toLocaleString()} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Order Summary */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-900">${order.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-900">
                    {order.shipping === 0 ? "Free" : `$${order.shipping.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${order.total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer & Payment Info */}
        <div className="space-y-6">
          {/* Customer Info */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Customer</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium text-gray-900">
                  {order.firstName} {order.lastName}
                </p>
              </div>
              {order.email && (
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${order.email}`}
                    className="font-medium text-secondary hover:underline"
                  >
                    {order.email}
                  </a>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a
                  href={`tel:${order.phone}`}
                  className="font-medium text-secondary hover:underline"
                >
                  {order.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Shipping Address</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-900 whitespace-pre-line">{order.address}</p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Payment</h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="font-medium text-gray-900 capitalize">{order.paymentMethod}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
