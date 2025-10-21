"use client"

import React from "react";
import { Vortex } from "./ui/vortex";

export default function VortexSection() {
  return (
    <div
      className="w-[calc(100%-4rem)] w-screen mx-auto rounded-md  h-[30rem] overflow-hidden bg-slate-950">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        {/* <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Celebrate in Style at NOC NOC Dubai
        </h2> */}
        <p className="text-white text-sm md:text-2xl max-w-2xl mt-6 text-center">
            Whether you’re planning a private party, a birthday celebration, or an unforgettable night out with friends, NOC NOC Dubai is the ultimate destination for those who crave luxury, energy, and exclusivity.
            Step into a world where DJ nights ignite the dance floor, the shisha lounge sets the perfect vibe, and our premium bottle service ensures your night flows just the way you like it.
        </p>
        
      </Vortex>
    </div>
  );
}
