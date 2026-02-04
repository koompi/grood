"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { getAllBikes } from "../lib/bikes-data";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "All e-bikes", href: "/all-bikes" },
  { label: "Conversion Kit", href: "/convert" },
  { label: "Tech Specs", href: "/specs" },
  { label: "Warranty", href: "/warranty" },
  { label: "Accessories", href: "/accessories" },
  { label: "Our Story", href: "/our-story" },
  { label: "Test Ride", href: "/test-ride" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-[#111111] text-white overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 left-6 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-50"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L13 13M1 13L13 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Products */}
        <div className="flex-1 p-8 pt-24 lg:p-16 lg:border-r border-white/10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">E-bikes</h2>
            <Link
              href="/all-bikes"
              onClick={onClose}
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              View all
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {getAllBikes().map((bike, index) => (
              <Link
                key={bike.id}
                href={`/bikes/${bike.id}`}
                onClick={onClose}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/3 bg-[#1a1a1a] rounded-xl overflow-hidden mb-4 border border-white/5 group-hover:border-white/20 transition-colors">
                  <Image
                    src={bike.images[0]}
                    alt={bike.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {index === 0 && (
                    <span className="absolute top-3 left-3 bg-secondary text-black text-xs font-bold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg">{bike.name}</h3>
                <p className="text-gray-400 text-sm mb-1">{bike.tagline}</p>
                <p className="text-sm font-medium">{bike.price}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/test-ride" className="btn-light" onClick={onClose}>
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
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Book a Test Ride
            </Link>
            <Link
              href="/accessories"
              className="btn-ghost text-sm"
              onClick={onClose}
            >
              Accessories
            </Link>
          </div>
        </div>

        {/* Right Column - Navigation */}
        <div className="w-full lg:w-[400px] p-8 pt-12 lg:pt-32 flex flex-col justify-between bg-[#161616]">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="text-xl text-gray-300 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 text-sm text-gray-500 space-y-3">
            <Link
              href="mailto:hello@grood.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@grood.com
            </Link>
            <div className="flex items-center gap-2">
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +855 12 345 678
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
