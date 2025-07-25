"use client";

import Link from "next/link";

const facebookPosts = [
  "/images/SnapInsta.to_502403181_17933027205045147_1719035383281541897_n-topaz-enhance-3.2x-faceai.jpeg",
  "/images/Products/planters/SnapInsta.to_364034879_279670431336325_6361632569066065562_n.jpg",
  "/images/Products/mugs/SnapInsta.to_491451854_17930523654045147_1678070324711418194_n.jpg",
  "/images/Products/holders/Screenshot 2025-07-25 000527.png",
  "/images/Products/trays/SnapInsta.to_520981405_17939004033045147_2041908558560135455_n.jpg",
];

export default function Footer() {
  return (
    <>
      {/* Facebook Section */}
      <section className="w-full flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Follow us on Instagram!</h2>
        <a href="https://www.instagram.com/misfitzpottery/" target="_blank" rel="noopener noreferrer" className="w-full flex flex-row items-center justify-center gap-4 max-w-5xl mx-auto">
          {facebookPosts.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Facebook post ${idx + 1}`}
              className="rounded-lg object-cover w-32 h-32 sm:w-40 sm:h-40 shadow hover:scale-105 transition"
            />
          ))}
        </a>
      </section>
      <footer className="w-full py-6 flex flex-col items-center justify-center bg-gray-100 border-t mt-10">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-gray-700 hover:underline font-semibold">Home</Link>
          <span className="text-gray-400">|</span>
          <Link href="/products" className="text-gray-700 hover:underline font-semibold">Products</Link>
          <span className="text-gray-400">|</span>
          <Link href="/contact" className="text-gray-700 hover:underline font-semibold">Contact</Link>
          <span className="text-gray-400">|</span>
          <Link href="/our-story" className="text-gray-700 hover:underline font-semibold">Our Story</Link>
        </div>
        <div className="text-xs text-gray-500 mt-2">&copy; {new Date().getFullYear()} Misfitz Pottery. All rights reserved.</div>
      </footer>
    </>
  );
} 