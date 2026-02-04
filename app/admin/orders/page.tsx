"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc";
import Link from "next/link";
import StatusBadge from "@/app/components/admin/StatusBadge";

const statuses = [
  { value: "", label: "All Statuses" },
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const { data, isLoading, refetch } = trpc.orders.list.useQuery({
    search: search || undefined,
    status: statusFilter
      ? (statusFilter as "pending" | "confirmed" | "shipped" | "delivered" | "cancelled")
      : undefined,
  });

  const updateStatusMutation = trpc.orders.updateStatus.useMutation({
    onSuccess: () => refetch(),
  });

  const deleteMutation = trpc.orders.delete.useMutation({
    onSuccess: () => refetch(),
  });

  const handleStatusChange = (orderId: string, newStatus: string) => {
    updateStatusMutation.mutate({
      id: orderId,
      status: newStatus as
        | "pending"
        | "confirmed"
        | "shipped"
        | "delivered"
        | "cancelled",
    });
  };

  const handleDelete = (orderId: string) => {
    if (confirm("Are you sure you want to delete this order?")) {
      deleteMutation.mutate({ id: orderId });
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500">{data?.total ?? 0} total orders</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
        >
          {statuses.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Order
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Customer
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Total
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            )}
            {data?.orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/orders/${order.id}`}
                    className="font-medium text-gray-900 hover:text-secondary-deep"
                  >
                    {order.orderNumber}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {order.items.length} item(s)
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-900">
                    {order.firstName} {order.lastName}
                  </p>
                  <p className="text-sm text-gray-500">{order.phone}</p>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  ${order.total.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  >
                    {statuses.slice(1).map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="p-2 text-gray-400 hover:text-gray-600 transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="p-2 text-red-400 hover:text-red-600 transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!isLoading && data?.orders.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
