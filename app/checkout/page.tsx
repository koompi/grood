"use client";

import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("khqr");

  // Flat rate for demo
  const shipping = 0;
  const total = cartTotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      // In a real app, redirect to success page or show success state
      alert("Order placed successfully! Thank you for choosing Grood.");
      router.push("/");
    }, 2000);
  };

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

          <form onSubmit={handlePlaceOrder} className="space-y-8">
            {/* Contact */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Contact</h2>
                <Link
                  href="/login"
                  className="text-sm text-primary hover:underline"
                >
                  Log in
                </Link>
              </div>
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
              />
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="news"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="news" className="text-sm text-gray-600">
                  Email me with news and offers
                </label>
              </div>
            </div>

            {/* Delivery */}
            <div>
              <h2 className="text-lg font-bold mb-4">Delivery</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-1/2 p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Postal code"
                    className="w-1/2 p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-1/2 p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group relative">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <span className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded hidden group-hover:block">
                      Used for shipping updates
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="save-info" className="text-sm text-gray-600">
                    Save this information for next time
                  </label>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div>
              <h2 className="text-lg font-bold mb-4">Shipping method</h2>
              <div className="p-4 bg-gray-50 rounded-md text-sm text-gray-500 text-center">
                Enter your shipping address to view available shipping methods.
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-lg font-bold mb-2">Payment</h2>
              <p className="text-sm text-gray-500 mb-4">
                All transactions are secure and encrypted.
              </p>

              <div className="border border-gray-300 rounded-md overflow-hidden">
                {/* KHQR */}
                <div
                  className={`p-4 flex items-center gap-3 border-b border-gray-200 cursor-pointer ${paymentMethod === "khqr" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() => setPaymentMethod("khqr")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "khqr"}
                    onChange={() => setPaymentMethod("khqr")}
                    className="text-primary focus:ring-primary border-gray-300"
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-medium text-sm">KHQR</span>
                    <div className="flex gap-2">
                      {/* Placeholder icons */}
                      <div className="h-6 w-10 bg-red-600 rounded flex items-center justify-center text-[8px] text-white font-bold">
                        KHQR
                      </div>
                    </div>
                  </div>
                </div>
                {paymentMethod === "khqr" && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
                    <div className="w-40 h-40 bg-white border border-gray-200 mx-auto mb-3 flex items-center justify-center">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-300"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <rect x="7" y="7" width="3" height="3"></rect>
                        <rect x="14" y="7" width="3" height="3"></rect>
                        <rect x="7" y="14" width="3" height="3"></rect>
                        <rect x="14" y="14" width="3" height="3"></rect>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      Scan to pay with any supported banking app.
                    </p>
                  </div>
                )}

                {/* ABA Pay */}
                <div
                  className={`p-4 flex items-center gap-3 border-b border-gray-200 cursor-pointer ${paymentMethod === "aba" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() => setPaymentMethod("aba")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "aba"}
                    onChange={() => setPaymentMethod("aba")}
                    className="text-primary focus:ring-primary border-gray-300"
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-medium text-sm">ABA Pay</span>
                    <div className="h-6 w-10 bg-[#005F88] rounded flex items-center justify-center text-[8px] text-white font-bold">
                      ABA
                    </div>
                  </div>
                </div>
                {paymentMethod === "aba" && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-500">
                    You will be redirected to ABA Pay to complete your purchase
                    securely.
                  </div>
                )}

                {/* Acleda */}
                <div
                  className={`p-4 flex items-center gap-3 border-b border-gray-200 cursor-pointer ${paymentMethod === "acleda" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() => setPaymentMethod("acleda")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "acleda"}
                    onChange={() => setPaymentMethod("acleda")}
                    className="text-primary focus:ring-primary border-gray-300"
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-medium text-sm">Acleda Bank</span>
                    <div className="h-6 w-10 bg-[#143E8C] rounded flex items-center justify-center text-[8px] text-white font-bold">
                      ACLEDA
                    </div>
                  </div>
                </div>

                {/* Credit Card */}
                <div
                  className={`p-4 flex items-center gap-3 cursor-pointer ${paymentMethod === "card" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="text-primary focus:ring-primary border-gray-300"
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-medium text-sm">Credit card</span>
                    <div className="flex gap-1">
                      <div className="h-5 w-8 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[6px]">
                        VISA
                      </div>
                      <div className="h-5 w-8 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[6px]">
                        MC
                      </div>
                    </div>
                  </div>
                </div>
                {paymentMethod === "card" && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full p-3 rounded bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Expiration date (MM / YY)"
                        className="w-1/2 p-3 rounded bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Security code"
                        className="w-1/2 p-3 rounded bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Name on card"
                      className="w-full p-3 rounded bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#059669] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#047857] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {isProcessing ? "Processing..." : "Pay now"}
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
                <div className="relative w-16 h-16 bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
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
              <span className="text-gray-600 flex items-center gap-1">
                Shipping
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </span>
              <span className="text-gray-500 text-xs">
                Enter shipping address
              </span>
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
            {/* Promo Code */}
            <div className="flex gap-2 pt-6">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="flex-1 p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none shadow-sm text-sm"
              />
              <button className="px-4 py-3 bg-gray-200 text-gray-500 font-medium rounded-md hover:bg-gray-300 transition-colors text-sm disabled:opacity-50">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
