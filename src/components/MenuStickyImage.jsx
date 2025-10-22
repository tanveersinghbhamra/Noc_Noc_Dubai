"use client";

export default function MenuStickyImage() {
    return (
        <section className="relative flex items-center justify-center h-[50vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
            backgroundImage: "url('/food&MenuHero.jpeg')",
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
