import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import VideoHero from "@/components/VideoHero";
import { Navbar } from "@/components/Navbar";
import BackgroundBeamHome from "@/components/BackgroundBeamHome";
import FeatureSection from "@/components/FeatureSection";
import HomeCarousel from "@/components/HomeCarousel";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import Footer from "@/components/Footer";
import BackgroundImageSection from "@/components/BackgroundImage";
import ContactUsSection from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar/>
      <VideoHero
          title="Welcome to NOC NOC"
          subtitle="Dubai's Ultimate Nightlife Destination"
          videoUrl="/nocnocVideos/get.mp4"
      />
      <BackgroundBeamHome/>
      <HomeCarousel/>
      <BackgroundBoxes />
      <FeatureSection/>
      <VideoHero
          title=""
          subtitle=""
          videoUrl="/nocnocVideos/champagne.mp4"
      />
     
      <BackgroundImageSection/>
      <ContactUsSection/>
      <Footer/>
    </main>
  );
}
