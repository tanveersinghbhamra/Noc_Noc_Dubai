"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const unlock = () => {
      if (!videoRef.current || unlocked) return;

      videoRef.current
        .play()
        .then(() => setUnlocked(true))
        .catch(() => {});

      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };

    // iOS triggers one of these immediately when user interacts
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });

    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };
  }, [unlocked]);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[100vh] flex items-center justify-center overflow-hidden text-center">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-[#C29C7D] px-4">
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl font-semibold max-w-5xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
