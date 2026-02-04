type StatusType =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "completed"
  | "no-show";

const statusConfig: Record<
  StatusType,
  { bg: string; text: string; label: string }
> = {
  pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Pending" },
  confirmed: { bg: "bg-blue-100", text: "text-blue-800", label: "Confirmed" },
  shipped: { bg: "bg-purple-100", text: "text-purple-800", label: "Shipped" },
  delivered: { bg: "bg-green-100", text: "text-green-800", label: "Delivered" },
  cancelled: { bg: "bg-red-100", text: "text-red-800", label: "Cancelled" },
  completed: { bg: "bg-green-100", text: "text-green-800", label: "Completed" },
  "no-show": { bg: "bg-gray-100", text: "text-gray-800", label: "No Show" },
};

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status as StatusType] || {
    bg: "bg-gray-100",
    text: "text-gray-800",
    label: status,
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
}
