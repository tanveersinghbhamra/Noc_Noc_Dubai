"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MenuStickyImage() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent;
      setIsIOS(/iPad|iPhone|iPod/.test(ua));
    }
  }, []);

  if (isIOS) {
    // Simplified version for iPhone/iOS
    return (
      <section className="relative flex items-center justify-center h-[50vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <Image
          src="/nocnocImages/food&MenuHero.jpeg"
          alt="Menu Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="font-alice relative z-10 px-4 text-3xl font-light text-center text-white md:text-5xl lg:text-6xl">
          An Exploration of Flavor and Craft
        </h1>
      </section>
    );
  }

  // Desktop / other devices version (parallax / fixed background)
  return (
    <section className="relative flex items-center justify-center h-[50vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/nocnocImages/food&MenuHero.jpeg')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <h1 className="font-alice relative z-10 px-4 text-3xl font-light text-center text-white md:text-5xl lg:text-6xl">
        An Exploration of Flavor and Craft
      </h1>
    </section>
  );
}
