"use client";
import React from "react";

export default function GalleryVideoCarousel() {
  const videos = [
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761475525/Hidden_away_near_Jabal_Ali_Clubhouse_this_secret_spot_is_worth_the_search_Noc_Noc_is_the_d_1_u8ptyw.mp4",
      poster: "/nocnocImages/video1Cover.jpeg",
      alt: "video1",
    },
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761475741/Make_your_weekends_special_at_NOC_NOCDubai_Join_us_for_a_special_blend_of_music_good_vibes_and_vpwsai.mp4",
      poster: "/nocnocImages/video2Cover.jpeg",
      alt: "video2",
    },
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761475945/get_1_ppq9pi.mp4",
      poster: "/nocnocImages/video4Cover.jpeg",
      alt: "video4",
    },
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761472577/WhatsApp_Video_2025-10-24_at_6.43.50_PM_no4rbw.mp4",
      poster: "/nocnocImages/perfectCover.jpeg",
      alt: "video5",
    },
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761477529/Join_us_for_celebration_of_good_vibesand_fantastic_moments_at_NOC_NOC_thisweekend._Elevate_your_zws0gx.mp4",
      poster: "/nocnocImages/video6Cover.jpeg",
      alt: "video6",
    },
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761477665/barbiegirl_barbiegirl_girlsnightout_nocnocdubai_girlsgirlsgirls_princess_szoxe6.mp4",
      poster: "/nocnocImages/video7Cover.jpeg",
      alt: "video7",
    },
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761478607/We_Are_Back_To_Rock_The_Summer_Book_Your_Tables_-_971_54_706_3640_nocnocdubai_nocnoc_happyh_lcjos2.mp4",
      poster: "/nocnocImages/video8Cover.jpeg",
      alt: "video8",
    },
    {
      src: "https://res.cloudinary.com/dson4wzib/video/upload/v1761478718/A_good_option_for_outdoor_iftar_%EF%B8%8F_instagram_r%C3%A9el_nocnoc_duba%C3%AF_iftar_i5gdl5.mp4",
      poster: "/nocnocImages/video9Cover.jpeg",
      alt: "video9",
    },
  ];

  return (
    <section className="relative w-full text-white py-10 bg-black overflow-hidden container mx-auto">
      <div className="flex gap-6 lg:gap-10 px-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth">
        {videos.map((video, index) => (
          <div
            key={index}
            className="
              flex-shrink-0 
              w-[80vw] sm:w-[70vw] md:w-[480px] lg:w-[560px] 
              h-[280px] sm:h-[350px] md:h-[380px] lg:h-[420px]
              relative snap-start overflow-hidden 
              shadow-[0_0_25px_rgba(0,0,0,0.6)] 
              group will-change-transform
            "
          >
            <video
              className="
                absolute top-0 left-0 w-full h-full object-cover 
                transition-transform duration-500 group-hover:scale-105 px-5
              "
              src={video.src}
              poster={video.poster}
              playsInline
              preload="metadata"
              controls
              muted={false}
              loading="lazy"
              style={{ backgroundColor: "#000" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
