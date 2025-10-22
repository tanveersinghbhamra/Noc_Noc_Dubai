"use client";

import React from "react";
import { Vortex } from "./ui/vortex";

export default function VortexSection() {
  return (
    <div className="w-screen my-20 mx-auto h-auto min-h-[26rem] md:min-h-[30rem] overflow-hidden bg-black text-center">
      <Vortex
        backgroundColor="black"
        className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-10 md:py-16 w-full h-full"
      >
        <p className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold leading-relaxed md:leading-snug text-center max-w-6xl">
          Whether you’re planning a private party, a birthday celebration, or an unforgettable night out with friends,{" "}
          <span className="text-[#C29C7D] font-bold">NOC NOC Dubai</span>{" "}
          is the ultimate destination for those who crave luxury, energy, and exclusivity. Step into a world where DJ nights ignite the dance floor, the shisha lounge sets the perfect vibe, and our premium bottle service ensures your night flows just the way you like it.
        </p>
      </Vortex>
    </div>
  );
}
