"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({ title, subtitle, videoUrl, imageUrl }) {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    // Detect device instantly
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    setDevice(isIOS ? "ios" : "other");
  }, []);

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center text-center overflow-hidden bg-[#010101]">
      
      {/* BACKGROUND: Fades in without moving or resizing */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-[2500ms] ease-out will-change-opacity ${
          device ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: '400ms' }} 
      >
        {device === "ios" ? (
          <Image src={imageUrl} alt="Noc Noc" fill priority fetchPriority="high" className="object-cover" />
        ) : device === "other" ? (
          <video className="w-full h-full object-cover" src={videoUrl} autoPlay loop muted playsInline preload="auto" />
        ) : null}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* TEXT: Starts at 0ms, settles over 5s with GPU power */}
      <div className="relative z-10 px-4 pointer-events-none">
        <h1 className="hero-final-title font-cinzel uppercase text-4xl sm:text-5xl md:text-7xl font-bold text-[#C29C7D] mb-4 tracking-tight">
          {title}
        </h1>
        <p className="hero-final-subtitle font-alice text-white text-lg sm:text-2xl md:text-3xl font-light max-w-4xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}