import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection }from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <FeatureSection/>
      <AppleCardsCarousel/>
    </main>
  );
}
