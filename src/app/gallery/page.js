import Gallery from "@/components/Gallery";
import React from "react";
import ImageHero from "@/components/ImageHero";

export const metadata = {
  title: "Gallery | Noc Noc Dubai - Lounge & Restrobar Moments",
  description:
    "Step inside Noc Noc Dubai’s gallery — vibrant nightlife, delicious food, and unforgettable experiences captured through our lens.",
  keywords: [
    "noc noc dubai photos",
    "dubai nightlife gallery",
    "nocnocdubai lounge",
    "dubai bar pictures",
    "noc noc events",
  ],
};

export default function Menu() {
    return (
        <main>
             <ImageHero
                 title="The Night Comes Alive"
                subtitle="Sip, savor, and groove with us, where every moment is a vibe."
                imageUrl="/nocnocImages/galleryCover.jpg"/>
            <Gallery/>
        </main>
    );
}