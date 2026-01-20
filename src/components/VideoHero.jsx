"use client";

export default function VideoHero({ title, subtitle, videoUrl }) {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-4 text-[#C29C7D]">
        <h1 className="font-cinzel uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        <p className="font-alice text-white text-lg sm:text-2xl md:text-3xl font-semibold max-w-5xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
