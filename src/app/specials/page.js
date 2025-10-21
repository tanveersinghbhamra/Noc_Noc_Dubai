import Footer from '@/components/Footer'
import VideoHero from '@/components/VideoHero'
import { Navbar } from '@/components/Navbar'
import React from 'react'
import VortexSection from '@/components/Vortex'
import MambaFeatureSection from '@/components/MambaFeatureSection'
import ContactUsSection from '@/components/ContactUs'

export default function Specials() {
  return (
    <div>
        <Navbar/>
        <VideoHero
            title=""
            subtitle="Step into a world where light, sound, and flavor blend seamlessly. At Noc Noc, every corner tells a story of sophistication, creating moments that linger long after the night ends."
            videoUrl="/nocnocVideos/video1.mp4"
        />
        <VortexSection/>
        <MambaFeatureSection/>
        <ContactUsSection/>
        <Footer/>
    </div>
  )
}

