"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const video = videoRef.current;
    if (!video) return;

    // 1. Attempt immediate play (works on most modern iOS)
    const attemptPlay = () => {
      video.play().catch(() => {
        // 2. If blocked, wait for first interaction
        const unlock = () => {
          video.play();
          window.removeEventListener("touchstart", unlock);
        };
        window.addEventListener("touchstart", unlock, { passive: true });
      });
    };

    attemptPlay();
  }, []);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline // Absolutely required for iOS
        autoPlay    // Still keep this as a hint to the browser
        preload="auto"
        controls={false}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Overlay and Text */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-[#C29C7D]">
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl font-semibold max-w-5xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}