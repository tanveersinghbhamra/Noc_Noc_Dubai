import React from 'react'
import TermsPage from '@/components/Terms';

export const metadata = {
  title: "Terms & Conditions | NOC NOC Dubai",
  description:
      "Read the Terms and Conditions for NOC NOC Cafe & Restaurant Dubai. Understand our policies regarding reservations, events, privacy, and website usage.",
  keywords: [
      "noc noc dubai terms",
      "noc noc cafe policies",
      "nocnocdubai terms and conditions",
      "dubai restaurant policies",
      "noc noc rules and regulations",
  ],
};

export default function Specials() {
  return (
    <div className='bg-black'>
        {/* <ImageHero
            title="Terms and Conditions"
            subtitle="Specials that knock your taste buds"
            imageUrl="/nocnocImages/specialsCoverImage.avif"
        /> */}
        <TermsPage/>
    </div>
  )
}

