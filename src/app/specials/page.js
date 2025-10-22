import React from 'react'
import VortexSection from '@/components/Vortex'
import MambaFeatureSection from '@/components/MambaFeatureSection'
import ImageHero from '@/components/ImageHero'

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

