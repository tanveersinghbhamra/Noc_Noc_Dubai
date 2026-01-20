"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play on mount - this fixes the 'blur' by forcing high-res render
    const startVideo = () => {
      video.play().catch(() => {
        // Fallback: unlock on first touch
        const unlock = () => {
          video.play();
          window.removeEventListener("touchstart", unlock);
        };
        window.addEventListener("touchstart", unlock);
      });
    };

    startVideo();
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-[100svh]">
      
      <motion.video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        // Explicitly set width/height to help Safari render sharply
        width="100%"
        height="100%"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Text content */}
      <motion.div
        className="relative z-10 text-[#C29C7D] px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed max-w-5xl">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}