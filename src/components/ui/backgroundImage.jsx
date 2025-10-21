"use client";
import React from "react";

export default function BackgroundImage({
  bgImage,
  heading,
  subheading,
  buttonText,
  onButtonClick,
}) {
  return (
    <section className="relative w-full h-96">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex my-40 flex-col items-center justify-center h-full text-center px-4">
        {heading && (
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {heading}
          </h1>
        )}
        {subheading && (
          <p className="text-lg md:text-2xl  text-[#C29C7D] mb-6 max-w-3xl">
            {subheading}
          </p>
        )}
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="px-10 py-3  bg-[#f2ca99] bg-transparent text-white border-2 border-[#C29C7D] font-semibold uppercase tracking-wide hover:cursor-pointer hover:bg-[#C29C7D] hover:text-black  transition-all duration-300"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}
