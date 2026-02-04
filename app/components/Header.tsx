"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import SearchOverlay from "./SearchOverlay";
import CartOverlay from "./CartOverlay";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  theme?: "dark" | "light";
}

export default function Header({ theme = "dark" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  const isLight = theme === "light";

  const textColor = isLight ? "text-black" : "text-white";
  const borderColor = isLight ? "border-black/10" : "border-white/10";
  const bgColor = isLight ? "bg-black/5" : "bg-black/10";
  const buttonHover = isLight ? "hover:bg-black/10" : "hover:bg-black/30";
  const strokeColor = isLight ? "black" : "white";

  return (
    <>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <CartOverlay />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg backdrop-blur-sm border transition-colors ${bgColor} ${borderColor} ${buttonHover}`}
          aria-label="Menu"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H19M1 7H19M1 13H19"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 px-5 py-2 backdrop-blur-sm rounded-xl border ${bgColor} ${borderColor}`}
        >
          <Image
            src={
              isLight
                ? "/images/logo/logo-yellow.png"
                : "/images/logo/logo-yellow.png"
            }
            alt="Grood Logo"
            width={20}
            height={20}
            className="w-6 h-6 object-contain"
          />
          <span
            className={`${textColor} font-semibold tracking-widest text-md`}
          >
            GROOD
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg backdrop-blur-sm border transition-colors ${bgColor} ${borderColor} ${buttonHover}`}
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke={strokeColor}
                strokeWidth="2"
              />
              <path
                d="M16 16L21 21"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg backdrop-blur-sm border transition-colors relative ${bgColor} ${borderColor} ${buttonHover}`}
            aria-label="Cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white/20">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
