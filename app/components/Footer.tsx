"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col items-center justify-center bg-gray-100 border-t mt-10">
      <div className="flex items-center space-x-2">
        <Link href="/" className="text-gray-700 hover:underline font-semibold">Home</Link>
        <span className="text-gray-400">|</span>
        <Link href="/products" className="text-gray-700 hover:underline font-semibold">Products</Link>
        <span className="text-gray-400">|</span>
        <Link href="/contact" className="text-gray-700 hover:underline font-semibold">Contact</Link>
      </div>
      <div className="text-xs text-gray-500 mt-2">&copy; {new Date().getFullYear()} Misfitz Pottery. All rights reserved.</div>
    </footer>
  );
} 