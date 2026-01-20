"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Detect iOS ONCE after mount
  useEffect(() => {
    const ua = navigator.userAgent || "";
    setIsIOS(/iPad|iPhone|iPod/.test(ua));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Desktop / Android → autoplay immediately
    if (!isIOS) {
      video.play().catch(() => {});
      return;
    }

    // iOS → wait for first user interaction
    const unlock = () => {
      if (unlocked) return;

      video
        .play()
        .then(() => setUnlocked(true))
        .catch(() => {});

      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };

    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });

    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };
  }, [isIOS, unlocked]);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[100vh] flex items-center justify-center overflow-hidden text-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
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
