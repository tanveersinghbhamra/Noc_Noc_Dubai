import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import MenuAbout from "@/components/MenuAbout";
import MenuStickyImage from "@/components/MenuStickyImage";
import MenuGallery from "@/components/MenuGallery";
import React from "react";

export default function Menu() {
    return (
        <main>
            <Navbar/>
            <VideoHero 
            title="Food & Drinks"
            subtitle="Crafted Flavours. Signature Serves."
            videoUrl="/Menucarousel.mp4"/>
            <MenuAbout/>
            <MenuStickyImage/>
            <MenuGallery/>
            <Footer/>
        </main>
    );
}