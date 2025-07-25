import Image from "next/image";
import Link from "next/link";

export default function Header({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-gray-900";
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-center p-6 z-20 bg-transparent">
      <div className="flex items-center absolute left-8 top-1/2 -translate-y-1/2">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/images/misfitzlogo.png" alt="Misfitz Pottery Logo" width={40} height={40} className="rounded-full" />
          <span className={`text-xl font-bold ${textColor} tracking-wide drop-shadow`}>Misfitz Pottery</span>
        </Link>
      </div>
      <div className={`flex space-x-10 text-base font-semibold ${textColor} bg-transparent`}>
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/our-story" className="hover:underline">Our Story</Link>
      </div>
    </nav>
  );
} 