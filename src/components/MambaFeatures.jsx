"use client";

import Image from "next/image";

export default function MambaFeatures({
  videoUrl,
  image,
  title,
  subtitle,
  description,
  description2,
  description3,
  highlightsHeading,
  highlightsPoints1,
  highlightsPoints2,
  highlightsPoints3,
  highlightsPoints4,
  highlightsPoints5,
  buttonText,
  bgColor = "bg-white",
  textColor = "text-black",
  reverse = false,
}) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto">
        <div
          className={`flex flex-col overflow-hidden  shadow-sm ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
       <div className="flex-1 relative h-[450px] w-full">
            {videoUrl ? (
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="w-full h-full object-cover aspect-video"
              />
            ) : (
              image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              )
            )}
          </div>

          <div className={`flex flex-col justify-center flex-1 py-25 px-12 bg-white ${textColor}`}>
            {/* {subtitle && (
              <span className="text-xs uppercase opacity-80">{subtitle}</span>
            )} */}
            <h3 className="text-5xl font-bold mt-2 mb-4 text-[#C29C7D] ">{title}</h3>
            <p className="text-black leading-relaxed text-lg mb-6 font-bold">
                {description}
            </p>

            <p className="text-black leading-relaxed text-lg mb-6 font-bold">
                {description2}
            </p>

            <p className="text-black leading-relaxed text-lg mb-6 font-bold">
                {description3}
            </p>

          <div className="highlights text-lg text-black">
                <div className="flex items-center gap-4 mb-2">
                    <p className="text-[#C29C7D] text-2xl font-bold">{highlightsHeading}</p>
                </div>
                <div className="flex items-center gap-4 font-bold ">
                    <p>{highlightsPoints1}</p>
                </div>
                <div className="flex items-center gap-4 font-bold">
                    <p>{highlightsPoints2}</p>
                </div>
                <div className="flex items-center gap-4 font-bold">
                    <p>{highlightsPoints3}</p>
                </div>
                <div className="flex items-center gap-4 font-bold">
                    <p>{highlightsPoints4}</p>
                </div>
                <div className="flex items-center gap-4 font-bold">
                    <p>{highlightsPoints5}</p>
                </div>
            </div>
            {/* {buttonText && (
              <button
                type="button"
                className="self-start bg-[#f2ca99] hover:bg-[#e6b879] text-black font-semibold px-6 py-2 rounded-full transition"
              >
                {buttonText}
              </button>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}
