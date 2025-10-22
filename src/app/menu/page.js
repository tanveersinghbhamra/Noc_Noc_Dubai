import VideoHero from "@/components/VideoHero";
import MenuAbout from "@/components/MenuAbout";
import MenuStickyImage from "@/components/MenuStickyImage";
import MenuGallery from "@/components/MenuGallery";
import React from "react";
import ImageHero from "@/components/ImageHero";

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