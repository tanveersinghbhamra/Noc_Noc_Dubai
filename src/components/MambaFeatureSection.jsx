import MambaFeatures from "@/components/MambaFeatures";

export default function MambaFeatureSection() {
  return (
    <>
      <MambaFeatures
        videoUrl="/nocnocVideos/champagne.mp4"
        
        title="Premium Bottle Service"
        // subtitle="Join, it's free"
        description="Elevate your night with Noc Noc’s exclusive Premium Bottle Service where sophistication meets celebration."
        description2="Enjoy personalized service, prime table seating, and an ambiance designed for the city’s elite. From world class champagnes to top shelf spirits, every pour is a statement of luxury.
                      Let our hosts curate your perfect night because at Noc Noc"
        buttonText="Action"
        bgColor="bg-gradient-to-b from-black to-slate-950"
        textColor="text-black"
      />

      <MambaFeatures
        videoUrl="/nocnocVideos/shisha.mp4"
        title="Shisha Lounge"
        subtitle="Sit back, exhale, and let the night take over."
        description="At Noc Noc, shisha isn’t just an add-on it’s a full experience.Settle into our sleek lounge area, surrounded by ambient lighting, rhythmic beats, and the city’s most relaxed crowd. Whether you’re catching up with friends or unwinding after a long day, our premium shisha selection sets the perfect mood."
        description2="  Choose from an exclusive variety of flavors, ranging from timeless classics to exotic fusions each crafted using the finest tobacco and served with precision by our expert shisha masters."
        description3="Sit back, exhale, and let the night take over."
        highlightsHeading="Signature Experience"
        highlightsPoints1= "Premium tobacco blends & fruit-head options"
        highlightsPoints2= "Smooth, long-lasting sessions with top-grade equipment"
        highlightsPoints3= "Personalized service & comfortable seating and many more"
        buttonText="Book Now"
        bgColor="bg-gradient-to-b from-slate-950 to-slate-950"
        textColor="text-black"
        reverse
      />

      <MambaFeatures
        videoUrl="/nocnocVideos/video2.mp4"
        title="Social & Community Events"
        subtitle="Private Events"
        description="Club nights, community gatherings, or social mixers in style.Our flexible layouts and cozy yet energetic atmosphere make every social gathering a hit."
        highlightsHeading="What You Get"
        highlightsPoints1="Live music & DJ setup available"
        highlightsPoints2="Shisha zones & bar seating areas"
        highlightsPoints3="Group packages with drinks and appetizers"
        highlightsPoints4="Fully customizable space and theme"
        highlightsPoints5="Product Launches & Brand Showcases"
        buttonText="Learn More"
        bgColor="bg-gradient-to-b from-slate-950 to-black"
        textColor="text-black"
      />


      <MambaFeatures
        videoUrl="/nocnocVideos/video1.mp4"
        title="Corporate Events"
        subtitle="Private Events"
        description="Impress your team, clients, and business partners with a seamless corporate experience."
        description2="Whether it’s a staff party, team-building session, client networking evening, or a product launch, our team ensures every detail is handled with precision."
        highlightsHeading="Highlights"
        highlightsPoints1="Tailor made corporate menus & beverage packages"
        highlightsPoints2="Private areas and full venue booking options"
        highlightsPoints3="AV support for presentations and award ceremonies"
        highlightsPoints4="Professional event planning assistance"
        highlightsPoints5="Corporate clients enjoy up to 30% off on all food and drinks."
        buttonText="Learn More"
        bgColor="bg-gradient-to-b from-slate-950 to-slate-950"
        textColor="text-black"
      />

      <MambaFeatures
        image="/nocnocImages/privateParties.jpeg"
        title="Private Parties & Celebrations"
        subtitle="Sit back, exhale, and let the night take over."
        description="Turn your special moments into lifelong memories at Noc Noc."
        description2="Perfect for birthdays, anniversaries, farewells, or family get togethers, our venue is designed to bring your celebrations to life."
        highlightsHeading="Highlights"
        highlightsPoints1="Custom decor & entertainment options"
        highlightsPoints2="Indoor and outdoor setups"
        highlightsPoints3="Dedicated service team for your event"
        highlightsPoints4="Personalized food & beverage selections"
        buttonText="Book Now"
        bgColor="bg-gradient-to-b from-slate-950 to-slate-950"
        textColor="text-black"
        reverse
      />

    </>
  );
}
