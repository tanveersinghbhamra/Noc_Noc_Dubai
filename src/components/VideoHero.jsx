"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, subtitle, videoUrl, imageUrl }) {
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    // Check if device is iPhone/iOS
    const ua = navigator.userAgent;
    setIsIPhone(/iPhone|iPad|iPod/.test(ua));
  }, []);

  // Common section wrapper to ensure height is identical (No Jump)
  const SectionWrapper = ({ children }) => (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-[100svh] bg-[#111]">
      {children}
    </section>
  );

  const Content = () => (
    <div className="relative z-10 text-[#C29C7D] px-4">
      <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
        {title}
      </h1>
      <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed max-w-5xl">
        {subtitle}
      </p>
    </div>
  );

  // iPhone Version: High-quality Image
  if (isIPhone) {
    return (
      <SectionWrapper>
        <Content />
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          <Image 
            src={imageUrl} 
            alt="Hero Background" 
            fill 
            priority 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </SectionWrapper>
    );
  }

  // Desktop/Android Version: Autoplay Video
  return (
    <SectionWrapper>
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
      <Content />
    </SectionWrapper>
  );
}