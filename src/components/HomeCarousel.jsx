import Image from "next/image";

export default function HomeCarousel() {
  return (
    <div className="relative w-full text-black py-5 overflow-hidden">
      <div className="flex gap-6 lg:gap-8 px-4 -mx-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex-shrink-0 w-72 sm:w-80 h-90 relative snap-start">
            <Image
              className="object-cover object-center w-full h-full"
              src={`/nocnocImages/home${i}.jpeg`}
              alt={`Home Image ${i}`}
              loading="lazy"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
