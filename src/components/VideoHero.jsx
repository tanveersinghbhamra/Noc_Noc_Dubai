"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Fallback if play is still blocked
        });
      }
    };

    // Attempt play immediately
    playVideo();

    // The "Secret Sauce": Listen for the first touch/scroll on the window
    // This bypasses the iOS "Nested Scroll" autoplay block.
    window.addEventListener("touchstart", playVideo, { passive: true });
    window.addEventListener("click", playVideo);

    return () => {
      window.removeEventListener("touchstart", playVideo);
      window.removeEventListener("click", playVideo);
    };
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-[100svh]">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      <motion.div
        className="relative z-10 text-[#C29C7D] px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold max-w-5xl">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}