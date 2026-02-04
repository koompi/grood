"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Header from "@/app/components/Header";
import { trpc } from "@/lib/trpc";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const registerMutation = trpc.users.register.useMutation({
    onSuccess: async () => {
      // Auto sign in after registration
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/");
        router.refresh();
      }
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    registerMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      password: formData.password,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[25vh] flex items-center justify-center bg-primary-deep text-white">
        <div className="text-center px-6">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
            Join Grood
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Create Account</h1>
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
            <label className="text-sm font-medium text-gray-900">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
              placeholder="John Doe"
            />
          </div>

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
            <label className="text-sm font-medium text-gray-900">Phone (Optional)</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
              placeholder="+855 12 345 678"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              minLength={6}
              className="w-full p-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
              placeholder="At least 6 characters"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              className="w-full p-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary border-none"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full py-4 bg-secondary text-black rounded-full font-bold hover:bg-secondary/90 transition-all disabled:opacity-50"
          >
            {registerMutation.isPending ? "Creating Account..." : "Create Account"}
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-secondary font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
