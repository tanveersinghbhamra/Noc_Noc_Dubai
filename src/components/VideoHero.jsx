"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VideoHero({ title, subtitle, videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-[600px] md:min-h-[100vh]">
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

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative z-10 text-[#C29C7D] px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
