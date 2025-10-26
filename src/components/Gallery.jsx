"use client";

import { useState } from "react";
import GalleryVideoCarousel from "./GalleryVideo";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-6 text-white bg-black">
      {/* First gallery container */}
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <video
          src="https://res.cloudinary.com/dson4wzib/video/upload/v1761149150/video1_eewgfo.mp4"
          poster="/nocnocImages/mainVideoCover.jpeg"
          alt="mainVideo"   
          controls
          className="object-cover w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-video"
          style={{ aspectRatio: "16 / 9" }}
          preload="none"  // lazy-load video
        />

        <img
          alt="GalleryImage2"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/Galleryimage2.jpeg"
          onClick={() => setSelectedImage("/nocnocImages/Galleryimage2.jpeg")}
          loading="lazy"
        />
        
        <img
          alt="GalleryImage5"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/Galleryimage5.jpeg"
          onClick={() => setSelectedImage("/nocnocImages/Galleryimage5.jpeg")}
          loading="lazy"
        />
        
        <img
          alt="food&friesImage"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/food&fries.jpeg"
          onClick={() => setSelectedImage("/nocnocImages/food&fries.jpeg")}
          loading="lazy"
        />
        
        <img
          alt="GalleryImage8"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/Galleryimage8.jpeg"
          onClick={() => setSelectedImage("/nocnocImages/Galleryimage8.jpeg")}
          loading="lazy"
        />
        
        <img
          alt="GalleryImage9"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/Galleryimage9.jpeg"
          onClick={() => setSelectedImage("/nocnocImages/Galleryimage9.jpeg")}
          loading="lazy"
        />
        
        <img
          alt="GalleryImage10"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/Galleryimage10.png"
          onClick={() => setSelectedImage("/nocnocImages/Galleryimage10.png")}
          loading="lazy"
        />
        
        <img
          alt="GalleryImage14"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/Galleryimage14.png"
          onClick={() => setSelectedImage("/nocnocImages/Galleryimage14.png")}
          loading="lazy"
        />
        
        <img
          alt="GalleryImage17"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/Galleryimage17.png"
          onClick={() => setSelectedImage("/nocnocImages/Galleryimage17.png")}
          loading="lazy"
        />

        <video
          src="https://res.cloudinary.com/dson4wzib/video/upload/v1761156173/Devilsplayground_xgm1zn.mp4"
          alt="DevilsVideo"
          poster="/nocnocImages/devilsCover.jpeg"
          controls
          className="object-cover h-full col-span-2 row-span-2 shadow-sm cursor-pointer object-w-full min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-video"
          style={{ aspectRatio: "16 / 9" }}
          preload="none"  // lazy-load video
        />
      </div>

      {/* Second gallery container */}
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <video
          src="https://res.cloudinary.com/dson4wzib/video/upload/v1761156382/Seasonfever_e0dvvo.mp4"
          poster="/nocnocImages/seasonFeverCoverImage.png"  
          alt="seasonForeverVideo" 
          controls
          className="object-cover w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-video"
          style={{ aspectRatio: "16 / 9" }}
          preload="none"  // lazy-load video
        />
        
        <img
          alt="groupMazzeImage"
          className="w-full h-auto object-cover bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/groupMazze.jpg"
          onClick={() => setSelectedImage("/nocnocImages/groupMazze.jpg")}
          loading="lazy"
        />
        
        <img
          alt="pajisImage"
          className="w-full object-cover h-auto bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/pajisPhoto.jpg"
          onClick={() => setSelectedImage("/nocnocImages/pajisPhoto.jpg")}
          loading="lazy"
        />
        
        <img
          alt="threeLadiesCelebrating"
          className="w-full object-cover h-auto bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/threeLadiesCelebrating.jpg"
          onClick={() => setSelectedImage("/nocnocImages/threeLadiesCelebrating.jpg")}
          loading="lazy"
        />
        
        <img
          alt="foodAndShushi"
          className="w-full object-cover h-auto bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/food&sushi.jpeg"
          onClick={() => setSelectedImage("/nocnocImages/food&sushi.jpeg")}
          loading="lazy"
        />
        
        <img
          alt="d4Image"
          className="w-full object-cover h-auto bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/d4.jpg"
          onClick={() => setSelectedImage("/nocnocImages/d4.jpg")}
          loading="lazy"
        />
        
        <img
          alt="d1Image"
          className="w-full object-cover h-auto bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/d1.jpg"
          onClick={() => setSelectedImage("/nocnocImages/d1.jpg")}
          loading="lazy"
        />
        
        <img
          alt="d2Image"
          className="w-full object-cover h-auto bg-gray-500 shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/d2.jpg"
          onClick={() => setSelectedImage("/nocnocImages/d2.jpg")}
          loading="lazy"
        />
        
        <img
          alt="d3Image"
          className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
          src="/nocnocImages/d3.jpg"
          onClick={() => setSelectedImage("/nocnocImages/d3.jpg")}
          loading="lazy"
        />

        <video
          src="https://res.cloudinary.com/dson4wzib/video/upload/v1761156217/Galleryevents_krqnp2.mp4"
          alt="LadiesNightVideo"
          poster="/nocnocImages/ladiesNightCover.jpeg"
          controls
          className="object-cover h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm cursor-pointer object-w-full min-h-96 md:col-start-1 md:row-start-3 aspect-video"
          style={{ aspectRatio: "16 / 9" }}
          preload="none"  // lazy-load video
        />
      </div>


      <GalleryVideoCarousel/>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[90%] max-h-[90%] shadow-lg"
          />
          <button
            className="absolute text-3xl font-bold text-white top-4 right-6"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
