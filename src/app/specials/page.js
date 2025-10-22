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
            imageUrl="https://images.unsplash.com/photo-1588991244776-777454edf937?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        />
        <VortexSection/>
        <MambaFeatureSection/>
    </div>
  )
}

