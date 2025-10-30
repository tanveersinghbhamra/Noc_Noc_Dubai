import MenuAbout from "@/components/MenuAbout";
import MenuStickyImage from "@/components/MenuStickyImage";
import MenuGallery from "@/components/MenuGallery";
import React from "react";
import ImageHero from "@/components/ImageHero";

export const metadata = {
  title: "Menu | Noc Noc Dubai - Restrobar & Lounge",
  description:
    "Explore Noc Noc Dubai’s food and drinks menu featuring global flavors, handcrafted cocktails, and signature dishes served in style.",
  keywords: [
    "noc noc dubai menu",
    "dubai food menu",
    "dubai cocktails",
    "nocnocdubai restaurant",
    "dubai restrobar drinks",
  ],
};


export default function Menu() {
    return (
        <main>
            <ImageHero 
                title="Food & Drinks"
                subtitle="Crafted Flavours. Signature Serves."
                imageUrl="/nocnocImages/orangeJuice.jpg"/>
            <MenuAbout/>
            <MenuStickyImage/>
            <MenuGallery/>
        </main>
    );
}