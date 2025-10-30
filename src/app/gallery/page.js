import Gallery from "@/components/Gallery";
import React from "react";
import ImageHero from "@/components/ImageHero";

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