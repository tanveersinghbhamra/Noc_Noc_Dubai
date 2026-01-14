"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const imagePaths = Array.from(
  { length: 7 },
  (_, i) => `/nocnocWeek/day${i + 1}.jpg`
);

export default function WeeklySchedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);

  const delay = 5000;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // 🔥 Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔥 Autoplay ONLY when visible AND not mobile
  useEffect(() => {
    if (!isVisible || isMobile) return;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === imagePaths.length - 1 ? 0 : prev + 1
      );
    }, delay);

    return resetTimeout;
  }, [currentIndex, isVisible, isMobile]);

  const goToNext = () => {
    resetTimeout();
    setCurrentIndex((prev) =>
      prev === imagePaths.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    resetTimeout();
    setCurrentIndex((prev) =>
      prev === 0 ? imagePaths.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full min-h-[70svh] md:h-[calc(100vh-128px)]
        md:pt-[128px]
        overflow-hidden flex items-center justify-center
        mt-12 mb-20
        will-change-transform
        md:bg-[url('/nocnocImages/weeklyCoverBG2.jpg')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Desktop overlay only */}
      <div className="absolute inset-0 bg-black/60 z-0 hidden md:block" />

      {/* Slides */}
      {imagePaths.map((img, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            className={`
              absolute inset-0 flex items-center justify-center
              transition-transform duration-700 ease-in-out
              ${isActive ? "translate-x-0 z-20" : "translate-x-full z-10"}
            `}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="
                object-contain
                max-h-[65svh] md:max-h-[90vh]
                w-auto
                drop-shadow-none md:drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]
              "
              priority={index === 0}
            />
          </div>
        );
      })}

      {/* Controls (desktop only recommended) */}
      <button
        onClick={goToPrev}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-30
                   bg-black/40 hover:bg-black/60 text-white text-3xl p-2 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-30
                   bg-black/40 hover:bg-black/60 text-white text-3xl p-2 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-30">
        {imagePaths.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
