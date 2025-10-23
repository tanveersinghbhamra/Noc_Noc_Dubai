import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function BackgroundBeamHome() {
  return (
    <>
    {/* Desktop / Larger Devices */}
      <div className="hidden sm:block">
        <BackgroundBeamsWithCollision>
          <h2
            className="
              font-alice relative z-20 text-center font-sans font-bold tracking-tight
              text-white text-3xl sm:text-5xl md:text-6xl lg:text-6xl
              leading-tight sm:leading-snug md:leading-none
              px-4 sm:px-6 md:px-10
            "
          >
            Unwind. Indulge. Celebrate.
            <div
              className="
                relative mx-auto inline-block w-max
                [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]
                mt-2 sm:mt-3 md:mt-4
              "
            >
              <div
                className="
                  absolute left-0 top-[1px]
                  bg-clip-text bg-no-repeat text-transparent
                  bg-gradient-to-r from-[#b07cff] via-[#d07bff] to-[#ff6ec7]
                  [text-shadow:0_0_rgba(0,0,0,0.1)]
                "
              >
                <span>The night starts here.</span>
              </div>

              <div
                className="
                  relative
                  bg-clip-text text-transparent bg-no-repeat
                  bg-gradient-to-r from-[#b07cff] via-[#d07bff] to-[#ff6ec7]
                "
              >
                <span>The night starts here.</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Mobile Devices */}
      <div className="block sm:hidden bg-black py-16 px-4">
        <h2
          className="
            font-alice text-center text-white font-bold tracking-tight
            text-3xl sm:text-5xl md:text-6xl
            leading-snug
          "
        >
          Unwind. Indulge. Celebrate.
          <div
                className="
                  relative
                  bg-clip-text text-transparent bg-no-repeat
                  bg-gradient-to-r from-[#b07cff] via-[#d07bff] to-[#ff6ec7]
                "
              >
                <span>The night starts here.</span>
              </div>
        </h2>
      </div>
    </>
  );
}
