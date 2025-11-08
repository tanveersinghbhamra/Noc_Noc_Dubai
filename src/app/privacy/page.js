import React from 'react'
import PrivacyPage from '@/components/Privacy';

export const metadata = {
  title: "Privacy Policy | NOC NOC Dubai",
  description:
      "Learn how NOC NOC Cafe & Restaurant Dubai collects, uses, and protects your personal information. Read our full privacy policy for website visitors and guests.",
  keywords: [
      "noc noc dubai privacy policy",
      "nocnocdubai data protection",
      "noc noc cafe privacy",
      "dubai restaurant privacy policy",
      "noc noc dubai personal data",
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
        <PrivacyPage/>
    </div>
  )
}

