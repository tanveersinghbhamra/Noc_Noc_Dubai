"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function HeroSection() {
  const images = [
    "/image10.jpeg",
    "/image11.jpeg",
    "/image12.jpeg",
    "/image13.jpeg",
    "/image14.jpeg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.h1 className="text-xl md:text-3xl text-center bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 ">
          
            Welcome to Noc Noc
            
        </motion.h1>
        <motion.h3 className="text-6xl">
          Dubai’s Ultimate Nightlife Destination
        </motion.h3>
        <button
          className="px-8 py-3 m-5 font-semibold border rounded  hover:text-black hover:bg-white">
          <span>Reserve</span>
          <div
            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
