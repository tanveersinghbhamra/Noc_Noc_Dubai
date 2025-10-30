"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const imagePaths = Array.from({ length: 7 }, (_, i) => `/nocnocWeek/day${i + 1}.jpg`);

export default function WeeklySchedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000; // 5 seconds per slide

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => resetTimeout();
  }, [currentIndex]);

  const goToNext = () => {
    resetTimeout();
    setCurrentIndex(currentIndex === imagePaths.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    resetTimeout();
    setCurrentIndex(currentIndex === 0 ? imagePaths.length - 1 : currentIndex - 1);
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden mt-15 mb-20 md:mt-1 sm:mb-25 lg:mt-30 flex items-center justify-center"
      style={{
        // backgroundImage: "url('/nocnocImages/weeksBackground.jpg')", // 🔥 your bg image here
        backgroundImage: "url('/nocnocImages/weekScheduleBGCover.webp')", // 🔥 your bg image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional subtle dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Image Slides */}
      {imagePaths.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 flex items-center justify-center ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain max-h-screen w-auto max-w-none drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]"
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl p-2 rounded-full z-30"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl p-2 rounded-full z-30"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-30">
        {imagePaths.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
