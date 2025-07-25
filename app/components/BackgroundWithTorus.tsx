"use client";
import dynamic from "next/dynamic";

const TorusCanvas = dynamic(() => import("./TorusCanvas"), { ssr: false, loading: () => null });

export default function BackgroundWithTorus() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-r from-[#fefefd] to-[#f8fafc]">
      <TorusCanvas />
    </div>
  );
} 