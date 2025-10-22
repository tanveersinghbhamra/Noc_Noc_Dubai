"use client";
import { useState } from "react";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-6 text-white bg-black">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <video
                src="/video1 jj.mp4"
                poster="/video1 jj.png"   
                controls
                className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-video"
                style={{ aspectRatio: "16 / 9" }}
                />

                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage1.jpeg"
                onClick={() => setSelectedImage("/Galleryimage1.jpeg")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage2.jpeg"
                onClick={() => setSelectedImage("/Galleryimage2.jpeg")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/food&fries.jpeg"
                onClick={() => setSelectedImage("/food&fries.jpeg")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage7.jpeg"
                onClick={() => setSelectedImage("/Galleryimage7.jpeg")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage5.jpeg"
                onClick={() => setSelectedImage("/Galleryimage5.jpeg")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage4.jpeg"
                onClick={() => setSelectedImage("/Galleryimage4.jpeg")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage3.jpeg"
                onClick={() => setSelectedImage("/Galleryimage3.jpeg")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage16.png"
                onClick={() => setSelectedImage("/Galleryimage16.png")}
                />

                <video
                src="Devilsplayground.mp4"
                alt=""
                controls
                className="object-cover h-full col-span-2 row-span-2 rounded shadow-sm cursor-pointer object-w-full min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-video"
                style={{ aspectRatio: "16 / 9" }}
                />
            </div>

            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <video
                src="/Seasonfever.mp4"
                poster="/Seasonfever.png"   
                controls
                className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-video"
                style={{ aspectRatio: "16 / 9" }}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage10.png"
                onClick={() => setSelectedImage("/Galleryimage10.png")}
                />
                
                <img
                alt=""
                className="w-full object-cover h-auto bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage9.jpeg"
                onClick={() => setSelectedImage("/Galleryimage9.jpeg")}
                />
                
                <img
                alt=""
                className="w-full object-cover h-auto bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage11.jpeg"
                onClick={() => setSelectedImage("/Galleryimage11.jpeg")}
                />
                
                <img
                alt=""
                className="w-full object-cover h-auto bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/food&sushi.jpeg"
                onClick={() => setSelectedImage("/food&sushi.jpeg")}
                />
                
                <img
                alt=""
                className="w-full object-cover h-auto bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage8.jpeg"
                onClick={() => setSelectedImage("/Galleryimage8.jpeg")}
                />
                
                <img
                alt=""
                className="w-full object-cover h-auto bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage17.png"
                onClick={() => setSelectedImage("/Galleryimage17.png")}
                />
                
                <img
                alt=""
                className="w-full object-cover h-auto bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage14.png"
                onClick={() => setSelectedImage("/Galleryimage14.png")}
                />
                
                <img
                alt=""
                className="w-full h-auto object-cover bg-gray-500 rounded shadow-sm min-h-50 aspect-[5/3] cursor-pointer"
                src="/Galleryimage15.png"
                onClick={() => setSelectedImage("/Galleryimage15.png")}
                />

                <video
                src="Galleryevents.mp4"
                alt=""
                controls
                className="object-cover h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm cursor-pointer object-w-full min-h-96 md:col-start-1 md:row-start-3 aspect-video"
                style={{ aspectRatio: "16 / 9" }}
                />
            </div>            

            {selectedImage && (
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                onClick={() => setSelectedImage(null)}
                >
                <img
                    src={selectedImage}
                    alt="Enlarged"
                    className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
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
