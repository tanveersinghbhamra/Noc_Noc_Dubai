"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, subtitle, videoUrl, imageUrl }) {
  const [isIPhone, setIsIPhone] = useState(true); // Default to true to show image immediately
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPhone|iPad|iPod/.test(ua);
    setIsIPhone(ios);
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-[100svh] bg-[#050505]">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          {/* Show image immediately for everyone on mount */}
          {(!mounted || isIPhone) ? (
            <motion.div
              key="image-bg"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image src={imageUrl} alt="Noc Noc" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          ) : (
            /* Switch to video for Android/Desktop only after mounting */
            <motion.div
              key="video-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
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

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 px-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            textShadow: ["0 0 0px rgba(194, 156, 125, 0)", "0 0 20px rgba(194, 156, 125, 0.4)", "0 0 0px rgba(194, 156, 125, 0)"] 
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } // The subtle shimmer
          }}
          className="font-cinzel uppercase text-4xl sm:text-5xl md:text-7xl font-bold text-[#C29C7D] mb-4 tracking-wider"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="font-alice text-white text-lg sm:text-2xl md:text-3xl font-light max-w-4xl mx-auto tracking-wide"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}