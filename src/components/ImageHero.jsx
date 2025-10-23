"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageHero({ title, subtitle, imageUrl }) {
  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-screen md:min-h-[80vh] bg-[#111]">
      
      {/* --- Text renders immediately for fast LCP --- */}
      <div className="relative z-10 text-[#C29C7D] px-4">
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-center max-w-5xl">
          {subtitle}
        </p>
      </div>

      {/* --- Background image fades in slowly --- */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
      >
        <Image
          src={imageUrl}
          alt="Hero Background"
          fill
          priority={false}   // lazy load image
          loading="lazy"
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* --- Overlay fades in slowly too --- */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
      />
    </section>
  );
}
