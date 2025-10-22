"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSections() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sections = [
    {
      image: "/nocnocImages/dubaiPulse.jpeg",
      title: "The Pulse of Dubai Nights",
      description:
        "At Noc Noc Dubai, every night is a story waiting to be told. Immerse yourself in an atmosphere where luxury meets energy — where neon lights, signature cocktails, and the city’s hottest DJs create an unforgettable vibe.",
      buttonText: "Discover More",
      link: "/specials"
    },
    {
      image: "/nocnocImages/signature.jpeg",
      title: "Crafted Flavors. Signature Serves.",
      description:
        "Our curated menu blends world-class mixology with exotic flavors. Every sip is designed to elevate your night.",
      buttonText: "View Menu",
      link: "/menu"
    },
    {
      image: "/nocnocImages/energyMeetsElegance.jpeg",
      title: "Where Energy Meets Elegance",
      description:
        "Whether it’s an intimate dinner or a high-energy night out, Noc Noc’s ambiance adapts to every mood.",
      buttonText: "Book Your Table",
      link: "https://wa.me/+971569610965?text=Hello%20Noc%20Noc!%20I%20want%20to%20reserve%20a%20slot"
    },
    {
      image: "/nocnocImages/twoLadies.jpeg",
      title: "Ladies Night Like No Other",
      description:
        "Celebrate with your squad at Noc Noc’s exclusive Ladies Night — where music, fashion, and fun collide.",
      buttonText: "Join the Party",
      link: "https://wa.me/+971569610965?text=Hello%20Noc%20Noc!%20I%20want%20to%20reserve%20a%20slot"
    },
  ];

  return (
    <section className="text-white bg-black" id="FeatureSection">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } w-full min-h-[600px] md:min-h-[700px]`}
        >
          {/* Image side */}
          <div className="relative md:w-1/2 w-full h-[350px] md:h-auto">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
          </div>

          {/* Text side */}
          <div className="flex md:w-1/2 w-full items-center justify-center px-6 sm:px-10 md:px-16 py-10 md:py-0 bg-black">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-snug">
                {section.title}
              </h2>
              <p className=" text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                {section.description}
              </p>
              <Link href={section.link} className="font-cinzel px-8 sm:px-10 py-3 bg-transparent text-white border-2 border-[#C29C7D] font-semibold uppercase tracking-wide hover:bg-[#C29C7D] hover:text-black transition-all duration-300 hover:cursor-pointer">
                {section.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
