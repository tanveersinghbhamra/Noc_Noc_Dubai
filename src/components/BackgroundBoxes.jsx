"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxes() {
  return (
    <>
      {/* Desktop / Larger Devices */}
      <div className="hidden sm:flex font-cinzel h-2/3 relative pt-40 pb-30 w-full overflow-hidden bg-black flex-col items-center justify-center rounded-lg">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        />
        <Boxes /> {/* Animated boxes */}
        <h1 className={cn("md:text-5xl text-2xl text-[#C29C7D] relative z-20 pb-4 font-bold")}>
          NOC NOC is Awesome
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-center max-w-5xl">
          Step into a world where music, mixology, and moments come alive. Nestled within the iconic Jebel Ali Recreation Club, Noc Noc is not just another bar, it’s where Dubai’s energy meets elegance. Whether you’re here for after-work drinks, weekend parties, or live performances, every night at Noc Noc is designed to keep you coming back for more.
        </p>
      </div>

      {/* Mobile Devices */}
      <div className="sm:hidden font-cinzel h-auto relative pt-20 pb-20 w-full bg-black flex flex-col items-center justify-center px-4">
        <h1 className={cn("text-2xl text-[#C29C7D] font-bold pb-4 text-center relative z-10")}>
          NOC NOC is Awesome
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-gradient-to-r from-[#b07cff] via-[#d07bff] to-[#ff6ec7] opacity-20 blur-xl rounded"></span>
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-center max-w-5xl z-10">
          Step into a world where music, mixology, and moments come alive. Nestled within the iconic Jebel Ali Recreation Club, Noc Noc is not just another bar, it’s where Dubai’s energy meets elegance. Whether you’re here for after-work drinks, weekend parties, or live performances, every night at Noc Noc is designed to keep you coming back for more.
        </p>
      </div>
    </>
  );
}
