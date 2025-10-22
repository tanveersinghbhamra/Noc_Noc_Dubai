import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import Gallery from "@/components/Gallery";
import React from "react";

export default function Menu() {
    return (
        <main>
            <Navbar/>
            <VideoHero 
            title="The Night Comes Alive"
            subtitle="Sip, savor, and groove with us — where every moment is a vibe."
            videoUrl="/Gallerycarousel.mp4"/>
            <Gallery/>
            <Footer/>
        </main>
    );
}