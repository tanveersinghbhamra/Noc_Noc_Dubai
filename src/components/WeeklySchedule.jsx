"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const imagePaths = Array.from(
  { length: 7 },
  (_, i) => `/nocnocWeek/day${i + 1}.jpg`
);

export default function WeeklySchedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === imagePaths.length - 1 ? 0 : prev + 1
      );
    }, delay);

    return resetTimeout;
  }, [currentIndex]);

  return (
    <section
      className="
        relative w-full
        h-100
        overflow-hidden
        flex items-center justify-center
        mt-12 mb-20
        md:bg-[url('/nocnocImages/weeklyCoverBG2.jpg')]
        bg-cover bg-center bg-no-repeat
        sm:mt-25
      "
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 hidden md:block" />

      {/* IMAGE FRAME */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          {imagePaths.map((img, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 flex items-center justify-center
                transition-transform duration-700 ease-in-out
                ${index === currentIndex ? "translate-x-0 z-20" : "translate-x-full z-10"}
              `}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? imagePaths.length - 1 : prev - 1
          )
        }
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30
                   bg-black/40 hover:bg-black/60 text-white text-3xl
                   w-10 h-10 items-center justify-center rounded-full"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === imagePaths.length - 1 ? 0 : prev + 1
          )
        }
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30
                   bg-black/40 hover:bg-black/60 text-white text-3xl
                   w-10 h-10 items-center justify-center rounded-full"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
        {imagePaths.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
