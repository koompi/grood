"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Header from "@/app/components/Header";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else if (result?.ok) {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[25vh] flex items-center justify-center bg-primary-deep text-white">
        <div className="text-center px-6">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
            Welcome Back
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Sign In</h1>
        </div>
      </section>

      <div className="max-w-md mx-auto px-6 py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full p-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-secondary text-black rounded-full font-bold hover:bg-secondary/90 transition-all disabled:opacity-50"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-secondary font-medium hover:underline">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
