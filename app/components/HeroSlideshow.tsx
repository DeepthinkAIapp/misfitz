"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = [
  "/images/Screenshot 2025-07-25 000508-topaz-enhance-4x.jpeg",
  "/images/Screenshot 2025-07-25 000527-topaz-enhance-3.9x.jpeg",
  "/images/Screenshot 2025-07-25 000602-topaz-enhance-3.9x.jpeg",
];

const SLIDE_DURATION = 7000; // 7 seconds
const ZOOM_DURATION = 3000; // 3 seconds

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to go to a specific image and restart zoom
  const goTo = (newIndex: number) => {
    setIndex((prev) => {
      if (prev === newIndex) return prev;
      return newIndex;
    });
    setZoom(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setZoom(false), ZOOM_DURATION);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    // On every image change, start zoomed in
    setZoom(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setZoom(false), ZOOM_DURATION);

    // Change image every SLIDE_DURATION
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index]);

  // On mount, start the first zoom
  useEffect(() => {
    setZoom(true);
    timeoutRef.current = setTimeout(() => setZoom(false), ZOOM_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Handlers for arrows
  const handlePrev = () => {
    goTo((index - 1 + images.length) % images.length);
  };
  const handleNext = () => {
    goTo((index + 1) % images.length);
  };

  return (
    <section className="relative w-full min-h-screen h-[100vh] flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 will-change-transform transition-transform ${zoom ? 'duration-[3000ms]' : 'duration-300'}`}
        style={{ transform: zoom ? 'scale(1.3)' : 'scale(1.0)' }}
      >
        <Image
          src={images[index]}
          alt="Hero pottery"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="absolute bottom-12 left-12 z-10 text-left max-w-lg flex flex-col gap-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">Made with Love</h1>
        <p className="text-2xl sm:text-3xl text-white drop-shadow mb-2">From our studio to your table</p>
        <a
          href="/products"
          className="inline-block bg-white text-black font-semibold px-5 py-3 rounded shadow hover:bg-gray-100 transition text-lg mt-2 whitespace-nowrap"
        >
          Shop Now
        </a>
      </div>
      {/* Arrow Controls */}
      <div className="absolute bottom-6 right-8 flex space-x-3 z-20">
        <button
          aria-label="Previous image"
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-2xl font-bold text-gray-700 hover:bg-gray-200 transition"
        >
          &#8592;
        </button>
        <button
          aria-label="Next image"
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-2xl font-bold text-gray-700 hover:bg-gray-200 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
} 