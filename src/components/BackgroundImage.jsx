"use client"; // add this at the top

import BackgroundImage from "@/components/ui/backgroundImage";

export default function BackgroundImageReserve() {
  return (
    <div>
      <BackgroundImage
        bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80"
        heading="Host your event"
        subheading="Bring your vision to life at Noc Noc Restrobar where great ambience, exceptional service, and tailored experiences come together."
        buttonText="Reserve"
        onButtonClick={() => alert("Booking Clicked")} // now allowed
      />
      
    </div>
  );
}
