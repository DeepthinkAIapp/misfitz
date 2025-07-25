"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Header({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-gray-900";
  const [menuOpen, setMenuOpen] = useState(false);

  // Only render portal on client
  const isClient = typeof window !== "undefined" && typeof document !== "undefined";

  const menuOverlay = (
    <div className="fixed inset-0 bg-black/40 z-[9999] flex flex-col items-center justify-center sm:hidden">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col space-y-6 w-4/5 max-w-xs">
        <Link href="/" className="text-gray-900 text-lg font-semibold text-center" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/products" className="text-gray-900 text-lg font-semibold text-center" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link href="/contact" className="text-gray-900 text-lg font-semibold text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link href="/our-story" className="text-gray-900 text-lg font-semibold text-center" onClick={() => setMenuOpen(false)}>Our Story</Link>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/images/misfitzlogo.png" alt="Misfitz Pottery Logo" width={40} height={40} className="rounded-full" />
          <span className={`text-xl font-bold ${textColor} tracking-wide drop-shadow`}>Misfitz Pottery</span>
        </Link>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Desktop Nav links */}
      <div
        className={`hidden sm:flex flex-row space-x-10 text-base font-semibold ${textColor} bg-transparent`}
        style={{ zIndex: 30 }}
      >
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/our-story" className="hover:underline">Our Story</Link>
      </div>
      {/* Mobile Menu Overlay via Portal */}
      {isClient && menuOpen && createPortal(menuOverlay, document.body)}
    </nav>
  );
} 