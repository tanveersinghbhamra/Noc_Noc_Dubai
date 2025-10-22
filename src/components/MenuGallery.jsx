"use client";
import Link from "next/link";
import { useRef } from "react";

export default function MenuGallery() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.offsetWidth / 1.5;
        scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
        });
    };

    // Replace with your actual food & drink image paths
    const menuImages = [
        "/CheeseNachos.jpeg",
        "/DineWine.jpeg",
        "/Drinks.jpeg",
        "/GrilledSalmon.jpeg",
        "/DecadentDesserts.jpeg",
        "/Burgers&Fries.jpeg",
    ];

    return (
        <div className="w-full py-16 text-white bg-black">
        {/* SECTION TITLE */}
        <h2 className="font-cinzel mb-10 text-4xl font-semibold tracking-wide text-center text-[#C29C7D]">
            FOOD & BAR MENU
        </h2>

        {/* IMAGE GALLERY */}
            <div className="relative flex items-center justify-center w-full">
                {/* Left Arrow */}
                <button
                aria-label="Slide left"
                onClick={() => scroll("left")}
                className="absolute left-0 z-30 p-2 ml-4 rounded-full bg-white/10 hover:bg-white/20"
                >
                <svg
                    width="10"
                    height="16"
                    fill="none"
                    viewBox="0 0 8 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                >
                    <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                </button>

                {/* Scrollable Images */}
                <div
                ref={scrollRef}
                className="flex gap-8 px-12 overflow-x-auto scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                <style jsx>{`
                    div::-webkit-scrollbar {
                    display: none;
                    }
                `}</style>

                {menuImages.map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-80">
                    <img
                        src={img}
                        alt={`Menu item ${i + 1}`}
                        className="object-cover w-full shadow-lg h-80"
                    />
                    </div>
                ))}
                </div>

                {/* Right Arrow */}
                <button
                aria-label="Slide right"
                onClick={() => scroll("right")}
                className="absolute right-0 z-30 p-2 mr-4 rounded-full bg-white/10 hover:bg-white/20"
                >
                <svg
                    width="10"
                    height="16"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                >
                <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                </svg>
                </button>
            </div>
            {/* TWO BUTTONS BELOW */}
            <div className="flex justify-center gap-6 mt-12">
                <Link
                href="/Food Menu - Noc Noc.pdf" // replace with actual food PDF
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel px-8 sm:px-10 py-3 bg-transparent text-white border-2 border-[#C29C7D] font-semibold uppercase tracking-wide hover:bg-[#C29C7D] hover:text-black transition-all duration-300 hover:cursor-pointe"
                >
                View Food Menu
                </Link>

                <Link
                href="/Bar Menu - Noc Noc.pdf" // replace with actual bar PDF
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel px-8 sm:px-10 py-3 bg-transparent text-white border-2 border-[#C29C7D] font-semibold uppercase tracking-wide hover:bg-[#C29C7D] hover:text-black transition-all duration-300 hover:cursor-pointer"
                >
                View Bar Menu
                </Link>
            </div>
        </div>
    );
}
