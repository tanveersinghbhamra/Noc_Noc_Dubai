"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, subtitle, videoUrl, imageUrl }) {
  const [deviceType, setDeviceType] = useState(null); // null, 'ios', or 'other'

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/.test(ua);
    setDeviceType(isIOS ? "ios" : "other");
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-[100svh] bg-black">
      <AnimatePresence mode="wait">
        {/* 1. iPhone/iOS: Show Sharp Image */}
        {deviceType === "ios" && (
          <motion.div
            key="ios-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <Image src={imageUrl} alt="Hero" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}

        {/* 2. Android/Desktop: Show Autoplay Video */}
        {deviceType === "other" && (
          <motion.div
            key="other-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Text Content (Always visible once device is detected) --- */}
      {deviceType && (
        <div className="relative z-10 text-[#C29C7D] px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-alice text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold max-w-5xl"
          >
            {subtitle}
          </motion.p>
        </div>
      )}
    </section>
  );
}