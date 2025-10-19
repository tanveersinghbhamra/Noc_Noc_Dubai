"use client";

import Image from "next/image";

export default function FeatureSections() {
  const sections = [
    {
      image:"/image1.jpeg",
      title: "The Pulse of Dubai Nights",
      description:
        "At Noc Noc Dubai, every night is a story waiting to be told. Immerse yourself in an atmosphere where luxury meets energy — where neon lights, signature cocktails, and the city’s hottest DJs create an unforgettable vibe.",
      // description2:
      //   "From the bar to the dance floor, every corner of Noc Noc is built for connection, laughter, and pure nightlife magic.",
      buttonText: "Discover More",
    },
    {
      image:"/image2.jpeg",
      title: "Crafted Flavors. Signature Serves.",
      description:
        "Our curated menu blends world-class mixology with exotic flavors. Every sip is designed to elevate your night.",
      // description2:
      //   "Choose from premium spirits, fine wines, and handcrafted cocktails that redefine indulgence.",
      buttonText: "View Menu",
    },
    {
      image:"/image3.jpeg",
      title: "Where Energy Meets Elegance",
      description:
        "Whether it’s an intimate dinner or a high-energy night out, Noc Noc’s ambiance adapts to every mood.",
      // description2:
      //   "Let the rhythm of the night pull you in — because every moment here feels iconic.",
      buttonText: "Book Your Table",
    },
    {
      image:"/twoLadies.jpeg",
      title: "Ladies Night Like No Other",
      description:
        "Celebrate with your squad at Noc Noc’s exclusive Ladies Night — where music, fashion, and fun collide.",
      // description2:
      //   "Sip on handcrafted cocktails and dance the night away under the golden glow of Dubai’s nightlife.",
      buttonText: "Join the Party",
    },
  ];

  return (
    <section className="bg-[#e6e6dd] text-white bg-slate-950">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col py-15 md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } w-full h-[500px]`}
        >
          {/* Image side */}
          <div className="relative md:w-1/2 w-full h-1/2 md:h-full">
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
          <div className="flex md:w-1/2 w-full h-1/2 md:h-full items-center justify-center px-8 md:px-16">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-[#C29C7D] mb-6 leading-tight">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {section.description}
              </p>
              <button className="px-10 py-3 rounded-full bg-[#f2ca99] text-black font-semibold uppercase tracking-wide hover:bg-[#e5b932] transition-all duration-300">
                {section.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
