"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef(null);
  const [isIOS, setIsIOS] = useState(false);

  // detect iOS once
  useEffect(() => {
    const ua = navigator.userAgent || "";
    setIsIOS(/iPad|iPhone|iPod/.test(ua));
  }, []);

  // iOS-only: play on first interaction
  useEffect(() => {
    if (!isIOS) return;

    const video = videoRef.current;
    if (!video) return;

    const unlock = () => {
      video.play().catch(() => {});
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };

    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });

    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };
  }, [isIOS]);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[100vh] flex items-center justify-center overflow-hidden text-center">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        poster="/nocnocImages/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="auto"
        autoPlay={!isIOS}   // 🔥 KEY LINE
      />

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
