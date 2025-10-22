"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxes() {
  return (
    <div
      className="font-cinzel h-2/3 relative  pt-40 pb-30 w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-5xl text-2xl text-[#C29C7D] relative z-20 pb-4 font-bold")}>
        NOC NOC is Awesome
      </h1>
      <p className="font-alice text-white text-lg sm:text-2xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-center max-w-5xl">
        Step into a world where music, mixology, and moments come alive.Nestled within the iconic Jebel Ali Recreation Club, Noc Noc is not just another bar , it’s where Dubai’s energy meets elegance. Whether you’re here for after-work drinks, weekend parties, or live performances, every night at Noc Noc is designed to keep you coming back for more.
      </p>
    </div>
  );
}
