import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import BackgroundBeamHome from "@/components/BackgroundBeamHome";
import FeatureSection from "@/components/FeatureSection";
import HomeCarousel from "@/components/HomeCarousel";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import BackgroundImageReserve from "@/components/BackgroundImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <VideoHero
          title="Welcome to NOC NOC"
          subtitle="Dubai's Ultimate Nightlife Destination"
          videoUrl="https://res.cloudinary.com/dson4wzib/video/upload/v1761149130/get_gqchta.mp4"
      />
      <BackgroundBeamHome/>
      <HomeCarousel/>
      <BackgroundBoxes />
      <FeatureSection/>
      <BackgroundImageReserve/>
    </main>
  );
}
