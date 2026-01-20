"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, subtitle, videoUrl, imageUrl }) {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/.test(ua);
    // Add a tiny delay to make the background fade feel "intentional"
    const timer = setTimeout(() => {
      setDeviceType(isIOS ? "ios" : "other");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-[100svh] bg-[#0a0a0a]">
      
      {/* --- BACKGROUND LAYER: Decides and Fades in Smoothly --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {deviceType === "ios" && (
            <motion.div
              key="ios-bg"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image src={imageUrl} alt="Noc Noc Dubai" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          )}

          {deviceType === "other" && (
            <motion.div
              key="video-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
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
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- TEXT LAYER: Available immediately with smooth entrance --- */}
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C29C7D] mb-4"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-alice text-white text-lg sm:text-2xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}