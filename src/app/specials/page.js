import React from 'react'
import VortexSection from '@/components/Vortex'
import MambaFeatureSection from '@/components/MambaFeatureSection'
import ImageHero from '@/components/ImageHero'

export const metadata = {
  title: "Specials | Noc Noc Dubai - Weekly Events & Offers",
  description:
    "Check out Noc Noc Dubai’s latest specials — weekly events, theme nights, and exclusive offers designed to elevate your nightlife experience.",
  keywords: [
    "noc noc specials",
    "dubai events",
    "dubai nightlife deals",
    "nocnocdubai offers",
    "dubai lounge events",
  ],
};


export default function Specials() {
  return (
    <div className='bg-black'>
        <ImageHero
            title="Noc Noc Specials"
            subtitle="Specials that knock your taste buds"
            imageUrl="/nocnocImages/specialsCoverImage.avif"
        />
        <VortexSection/>
        <MambaFeatureSection/>
    </div>
  )
}

