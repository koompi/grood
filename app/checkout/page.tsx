"use client";

import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("khqr");
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  });

  const createOrderMutation = trpc.orders.create.useMutation({
    onSuccess: (data) => {
      // We don't clear cart here immediately if we are redirecting to payment
      // setOrderNumber(data.orderNumber);
      // clearCart();
    },
  });

  // Flat rate for demo
  const shipping = 0;
  const total = cartTotal + shipping;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // 1. Create Order in DB
      // COD orders are confirmed/pending immediately. Pay Now orders start as draft until paid.
      const initialStatus = paymentMethod === "cod" ? "pending" : "draft";

      const order = await createOrderMutation.mutateAsync({
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        phone: formData.phone,
        email: formData.email || undefined,
        paymentMethod,
        status: initialStatus,
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          color: item.options?.color,
          size: item.options?.size,
        })),
      });

      // If COD, just show success directly
      if (paymentMethod === "cod") {
        setOrderNumber(order.orderNumber);
        clearCart();
        setIsProcessing(false);
        return;
      }

      // 2. Initiate Baray Payment (only for non-COD)
      const response = await fetch("/api/baray/create-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          currency: "USD",
          orderId: order.orderNumber,
          customer: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to initiate payment");
      }

      const data = await response.json();

      // 3. Redirect to Baray Payment Page
      // NOTE: Don't clear cart here - it will be cleared on the success page after payment is confirmed
      // Clearing here causes empty cart to flash before redirect

      // Redirect to Baray Payment Page
      // The API response should return the intent_id, we construct the URL
      // Docs: https://pay.baray.io/{intent_id}
      // The response from create-intent API (which calls Baray) returns the Baray response directly
      // Verify response structure from docs: { _id: "itn-..." } is the intent ID.
      // Wait, let's check my API route implementation.
      // It returns `const data = await response.json(); return NextResponse.json(data);`
      // So `data._id` should be the intent ID.

      if (data._id) {
        window.location.href = `https://pay.baray.io/${data._id}`;
      } else {
        console.error("No intent ID returned", data);
        alert(
          data.error || "Something went wrong with payment initialization.",
        );
        setIsProcessing(false);
      }
    } catch (error: any) {
      console.error("Order processing error:", error);
      alert(error.message || "Failed to process order. Please try again.");
      setIsProcessing(false);
    }
  };

  // Success state
  if (orderNumber) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header theme="light" />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-24">
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
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-500 mb-2">Thank you for your purchase.</p>
          <p className="text-lg font-medium text-gray-900 mb-8">
            Order Number:{" "}
            <span className="text-secondary-deep">{orderNumber}</span>
          </p>
          <Link
            href="/"
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Show payment in progress state (payment opened in new tab)
  if (isProcessing) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header theme="light" />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-24">
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[#059669] rounded-full animate-spin"></div>
          </div>
          <h1 className="text-xl font-medium mb-2">Complete Your Payment</h1>
          <p className="text-sm text-gray-500 mb-6">
            Payment page opened in a new tab. Please complete your payment
            there.
          </p>
          <button
            onClick={() => setIsProcessing(false)}
            className="text-sm text-primary underline hover:no-underline"
          >
            Go back to checkout
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header theme="light" />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-24">
          <Link href="/" className="mb-8">
            <Image
              src="/images/logo/logo-yellow.png"
              alt="Grood"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </Link>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h1 className="text-xl font-medium mb-2">Your cart is empty</h1>
          <p className="text-sm text-gray-500 mb-8">
            Add some premium e-bikes or accessories to get started.
          </p>
          <Link
            href="/all-bikes"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <Header theme="light" />

      {/* Left Column - Main Content */}
      <div className="flex-1 lg:border-r border-gray-200 pt-24">
        <div className="max-w-xl ml-auto mr-auto lg:mr-0 p-6 lg:p-12 xl:pr-16">
          {/* Logo Mobile */}
          <div className="lg:hidden mb-6 flex justify-center">
            <Link href="/">
              <span className="font-bold text-2xl tracking-widest text-[#F5A623]">
                GROOD
              </span>
            </Link>
          </div>

          {/* Breadcrumbs */}
          <nav className="flex items-center text-xs text-gray-500 mb-8">
            <Link href="/cart" className="text-primary hover:underline">
              Cart
            </Link>
            <span className="mx-2">›</span>
            <span className="text-black font-medium">Information</span>
            <span className="mx-2">›</span>
            <span>Shipping</span>
            <span className="mx-2">›</span>
            <span>Payment</span>
          </nav>

          {createOrderMutation.error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
              {createOrderMutation.error.message}
            </div>
          )}

          <form onSubmit={handlePlaceOrder} className="space-y-8">
            {/* Delivery */}
            <div>
              <h2 className="text-lg font-bold mb-4">Delivery</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-1/2 p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-1/2 p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div>
              <h2 className="text-lg font-bold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 border-gray-300 has-[:checked]:border-primary has-[:checked]:bg-green-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pay_now"
                      checked={
                        paymentMethod === "pay_now" || paymentMethod === "khqr"
                      }
                      onChange={() => setPaymentMethod("pay_now")}
                      className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">Pay Now</span>
                      <span className="text-sm text-gray-500">
                        Secure online payment via KHQR / Cards
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {/* Icons could go here if needed */}
                  </div>
                </label>

                <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 border-gray-300 has-[:checked]:border-primary has-[:checked]:bg-green-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        Cash on Delivery
                      </span>
                      <span className="text-sm text-gray-500">
                        Pay when you receive your order
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#059669] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#047857] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {isProcessing
                  ? "Processing..."
                  : paymentMethod === "cod"
                    ? "Place Order"
                    : "Pay Now"}
              </button>
              <div className="mt-4 flex justify-center space-x-4 text-xs text-primary underline">
                <Link href="#">Refund policy</Link>
                <Link href="#">Shipping</Link>
                <Link href="#">Privacy policy</Link>
                <Link href="#">Terms of service</Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="hidden lg:block w-[45%] bg-[#fafafa] border-l border-gray-200 pt-24">
        <div className="max-w-md p-12 sticky top-24">
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="relative w-16 h-16 bg-white border border-gray-200 rounded-lg overflow-hidden shrink-0">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-500 text-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center z-10 shadow-sm">
                    {item.quantity}
                  </div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.options?.color}</p>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">
                ${cartTotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-500 text-xs">Free</span>
            </div>

            <div className="flex justify-between items-baseline pt-4 border-t border-gray-200">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <div className="text-right">
                <span className="text-xs text-gray-500 mr-2">USD</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
