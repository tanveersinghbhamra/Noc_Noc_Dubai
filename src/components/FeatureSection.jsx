"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FeatureSections() {
  const sections = [
    {
      image: "/nocnocImages/dubaiPulse.jpeg",
      title: "The Pulse of Dubai Nights",
      description:
        "At Noc Noc Dubai, every night is a story waiting to be told. Immerse yourself in an atmosphere where luxury meets energy where neon lights, signature cocktails, and the city’s hottest DJs create an unforgettable vibe.",
      buttonText: "Discover More",
      link: "/specials"
    },
    {
      image: "/nocnocImages/signature.jpeg",
      title: "Crafted Flavors. Signature Serves.",
      description:
        "Our curated menu blends world class mixology with exotic flavors. Every sip is designed to elevate your night.",
      buttonText: "View Menu",
      link: "/menu"
    },
    {
      image: "/nocnocImages/energyMeetsElegance.jpeg",
      title: "Where Energy Meets Elegance",
      description:
        "Whether it’s an intimate dinner or a high energy night out, Noc Noc’s ambiance adapts to every mood.",
      buttonText: "Book Your Table",
      link: "https://wa.me/+971547063640?text=Hello%20Noc%20Noc!%20I%20want%20to%20reserve%20a%20slot"
    },
    {
      image: "/nocnocImages/twoLadies.jpeg",
      title: "Ladies Night Like No Other",
      description:
        "Celebrate with your squad at Noc Noc’s exclusive Ladies Night where music, fashion, and fun collide.",
      buttonText: "Join the Party",
      link: "https://wa.me/+971547063640?text=Hello%20Noc%20Noc!%20I%20want%20to%20reserve%20a%20slot"
    },
  ];

  return (
    <section className="text-white bg-black container flex flex-col mx-auto gap-18 sm:gap-35 sm:mb-30 mb-25" id="FeatureSection">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } w-full min-h-[400px] 2xl:min-h-[450px]`} // 🔥 reduced height for mobile
        >
          {/* Image Side */}
          <div className="relative md:w-1/2 w-full h-[300px] sm:h-[350px] md:h-auto">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Text Side */}
          <div className="flex md:w-1/2 w-full items-center justify-center sm:px-10 py-6 md:py-0 bg-black">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-cinzel text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-snug">
                {section.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
                {section.description}
              </p>
              <Link
                href={section.link}
                className="font-cinzel inline-block px-8 sm:px-10 py-3 bg-transparent text-white border-2 border-[#C29C7D] font-semibold uppercase tracking-wide hover:bg-[#C29C7D] hover:text-black transition-all duration-300"
              >
                {section.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
