"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, subtitle, videoUrl, imageUrl }) {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    // Immediate detection
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    setDeviceType(isIOS ? "ios" : "other");
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-[100svh] bg-[#050505]">
      
      {/* --- BACKGROUND: The "Reveal" Layer --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {deviceType && (
            <motion.div
              key={deviceType}
              initial={{ opacity: 0, scale: 1.1 }} // Slightly zoomed in
              animate={{ opacity: 1, scale: 1 }}    // Settle into place
              transition={{ 
                duration: 2.5, 
                ease: [0.22, 1, 0.36, 1] // Cinematic "Out-Quart" easing
              }}
              className="absolute inset-0"
            >
              {deviceType === "ios" ? (
                <Image 
                  src={imageUrl} 
                  alt="Noc Noc" 
                  fill 
                  priority 
                  className="object-cover"
                />
              ) : (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              )}
              {/* Overlay is inside the motion div to fade in WITH the background */}
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- CONTENT: The "Instant" Layer --- */}
      <div className="relative z-10 px-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }} // Blur hides the "snap"
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut" 
          }}
          className="font-cinzel uppercase text-4xl sm:text-5xl md:text-7xl font-bold text-[#C29C7D] mb-4 tracking-wider"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.1, 
            ease: "easeOut" 
          }}
          className="font-alice text-white text-lg sm:text-2xl md:text-3xl font-light max-w-4xl mx-auto tracking-wide"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}