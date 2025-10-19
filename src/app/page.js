import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import VideoHero from "@/components/VideoHero";
import { Navbar } from "@/components/Navbar";
import { AboutSection }from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar/>
      <VideoHero
          title="About Our Company"
          subtitle="We create innovative solutions for your business."
          videoUrl="/get.mp4"
      />
      <AboutSection/>
      <AppleCardsCarousel/>
      <BackgroundBoxes />
      <FeatureSection/>
      <Footer/>
    </main>
  );
}
