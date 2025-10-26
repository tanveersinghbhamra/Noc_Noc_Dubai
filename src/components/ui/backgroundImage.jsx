"use client";
import React from "react";

export default function BackgroundImage({
  bgImage,
  heading,
  subheading,
}) {
  const whatsappNumber = "+971569610965";
  const whatsappMessage = "Hello Noc Noc! I want to host an event.";

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
      <div className="font-cinzel relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {heading && (
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {heading}
          </h1>
        )}
        {subheading && (
          <p className="font-alice text-lg md:text-2xl text-[#C29C7D] mb-6 max-w-3xl">
            {subheading}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* WhatsApp Button */}
          <button
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`,
                "_blank"
              )
            }
            className="flex items-center gap-2 px-8 py-3 bg-transparent text-white border-2 border-[#25D366] font-semibold uppercase tracking-wide rounded-2xl hover:bg-[#25D366] hover:text-black transition-all duration-300 cursor-pointer"
          >
            {/* WhatsApp SVG */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.478 2 2 6.478 2 12c0 1.79.469 3.465 1.345 4.948L2 22l5.245-1.366A9.934 9.934 0 0 0 12 22c5.522 0 10-4.478 10-10S17.522 2 12 2Zm-1.444 6.469c-.188-.42-.385-.43-.563-.438h-.48a.918.918 0 0 0-.66.308c-.228.244-.868.849-.868 2.072s.89 2.404 1.013 2.571c.125.166 1.735 2.773 4.277 3.778 2.114.822 2.541.66 3.002.621.46-.039 1.482-.604 1.69-1.188.208-.585.208-1.085.146-1.188-.062-.104-.228-.166-.48-.29s-1.482-.732-1.712-.815c-.23-.085-.398-.125-.563.125-.166.25-.646.815-.79.982-.146.167-.29.188-.541.062-.25-.125-1.05-.388-2-1.236-.739-.66-1.239-1.478-1.386-1.729-.146-.25-.015-.385.11-.51.114-.113.25-.292.374-.438.124-.146.166-.25.25-.416.083-.166.042-.312-.021-.438-.062-.125-.563-1.357-.772-1.86Z"
                clipRule="evenodd"
              />
            </svg>
            WhatsApp Us
          </button>

          {/* Call Button */}
          <button
            onClick={() => (window.location.href = `tel:${whatsappNumber}`)}
            className="flex items-center gap-2 px-8 py-3 bg-transparent text-white border-2 border-[#C29C7D] font-semibold uppercase tracking-wide rounded-2xl hover:bg-[#C29C7D] hover:text-black transition-all duration-300 cursor-pointer"
          >
            {/* Call SVG */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .987.836l.657 3.94a1 1 0 0 1-.544 1.06l-1.565.783a11.05 11.05 0 0 0 5.693 5.693l.783-1.565a1 1 0 0 1 1.06-.544l3.94.657a1 1 0 0 1 .836.987V20a1 1 0 0 1-1 1H17C9.82 21 3 14.18 3 7V4Z"
                clipRule="evenodd"
              />
            </svg>
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
}
