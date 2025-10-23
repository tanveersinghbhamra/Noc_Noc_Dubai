import VideoHero from "@/components/VideoHero";
import BackgroundBeamHome from "@/components/BackgroundBeamHome";
import FeatureSection from "@/components/FeatureSection";
import HomeCarousel from "@/components/HomeCarousel";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import BackgroundImageReserve from "@/components/BackgroundImage";
import ImageHero from "@/components/ImageHero";
import WeeklySchedule from "@/components/WeeklySchedule";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <ImageHero
          title="Welcome to NOC NOC"
          subtitle="Dubai's Ultimate Nightlife Destination"
          imageUrl="/nocnocImages/energyMeetsElegance.jpeg"
      />
      <BackgroundBeamHome/>
      <HomeCarousel/>
      <BackgroundBoxes />
      <FeatureSection/>
      <WeeklySchedule/>
      <BackgroundImageReserve/>
    </main>
  );
}
