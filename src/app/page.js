import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection }from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import MambaFeatures from "@/components/MambaFeatures";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <AppleCardsCarousel/>
      <BackgroundBoxes />
      <FeatureSection/>
      {/* <MambaFeatures/> */}
      <Footer/>
    </main>
  );
}
