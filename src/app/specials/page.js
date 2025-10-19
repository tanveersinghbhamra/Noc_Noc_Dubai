import Footer from '@/components/Footer'
import VideoHero from '@/components/VideoHero'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function Specials() {
  return (
    <div>
        <Navbar/>
        <VideoHero
            title="About Our Company"
            subtitle="We create innovative solutions for your business."
            videoUrl="/get.mp4"
        />
        <Footer/>
    </div>
  )
}

