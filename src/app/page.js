import BackgroundBeamHome from "@/components/BackgroundBeamHome";
import FeatureSection from "@/components/FeatureSection";
import HomeCarousel from "@/components/HomeCarousel";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import WeeklySchedule from "@/components/WeeklySchedule";
import VideoHero from "@/components/VideoHero";

export const metadata = {
  title: "Noc Noc Dubai | Lounge, Restrobar & Nightlife Destination",
  description:
    "Discover Noc Noc Dubai — a premium restrobar and lounge offering world-class food, drinks, and nightlife experiences in the heart of Dubai.",
  keywords: [
    "noc noc dubai",
    "dubai restrobar",
    "dubai nightlife",
    "nocnocdubai",
    "dubai lounge",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <VideoHero
          title="Welcome to NOC NOC"
          subtitle="Dubai's Ultimate Nightlife Destination"
          videoUrl="https://res.cloudinary.com/dson4wzib/video/upload/v1761465981/It_s_NOC_NOC_Let_s_ring_in_2025_with_unstoppable_energy_endless_vibes_and_unforgettable_m_qhdy4h.mp4"
      />
      <BackgroundBeamHome/>
      <HomeCarousel/>
      <BackgroundBoxes />
      <FeatureSection/>
      <WeeklySchedule/>
    </main>
  );
}
