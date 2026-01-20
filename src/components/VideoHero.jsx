"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play on mount (iOS Safari requirement for nested elements)
    const playVideo = () => {
      video.play().catch((error) => {
        console.warn("Autoplay blocked. User interaction may be needed.", error);
      });
    };

    // Attempt immediately
    playVideo();

    // Secondary attempt: some iOS versions wait for the first touch anywhere
    window.addEventListener("touchstart", playVideo, { once: true });
    return () => window.removeEventListener("touchstart", playVideo);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-[100svh]">
      
      <motion.video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline // Required: iOS will block video without this
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-[#C29C7D] px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold max-w-5xl">{subtitle}</p>
      </motion.div>
    </section>
  );
}