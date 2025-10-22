import VideoHero from "@/components/VideoHero";
import Gallery from "@/components/Gallery";
import React from "react";

export default function Menu() {
    return (
        <main>
            <VideoHero 
                title="The Night Comes Alive"
                subtitle="Sip, savor, and groove with us, where every moment is a vibe."
                videoUrl="/Gallerycarousel.mp4"/>
            <Gallery/>
        </main>
    );
}