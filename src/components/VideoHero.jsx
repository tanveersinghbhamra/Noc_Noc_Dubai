"use client";

export default function VideoHero({ title, subtitle, videoUrl }) {
  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-[50vh] md:min-h-[80vh]">
      
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
      />

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Text content */}
      <div className="relative z-10 text-[#C29C7D] px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-center max-w-5xl">{subtitle}</p>
      </div>
    </section>
  );
}
