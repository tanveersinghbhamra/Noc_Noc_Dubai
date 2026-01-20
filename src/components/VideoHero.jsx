"use client";

import { motion } from "framer-motion";

export default function VideoHero({ title, subtitle, videoUrl }) {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-screen md:min-h-[100vh]">
      
      {/* Video Background with delayed fade-in */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        initial="hidden"
        animate="visible"
        playsInline
        preload="metadata"
        // variants={videoVariants}
      />

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Text content with fade-up animation */}
      <motion.div
        className="relative z-10 text-[#C29C7D] px-4"
        initial="hidden"
        animate="visible"
        // variants={textVariants}
      >
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-center max-w-5xl">{subtitle}</p>
      </motion.div>
    </section>
  );
}