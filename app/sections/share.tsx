"use client";

import Image from "next/image";

export default function ProfileOverlay() {
  return (
    <div className="min-h-screen relative flex items-center justify-center w-full py-20">
      <div className="relative w-full max-w-7xl mx-auto p-4">
        {/* Background Image */}
        <div className="relative h-[850px]">
          <Image
            src="/images/girl.jpg"
            alt="Product preview"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
            className="rounded-lg object-cover"
            quality={100}
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-lg" />
        </div>

        {/* Phone Mockup Image */}
        <div className="absolute top-1/2 left-[5%] transform -translate-y-[60%]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=800"
            alt="Profile Interface"
            className="w-[280px] h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="absolute inset-x-0 bottom-[15%] pb-12">
          <div className="ml-[5%]">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
              Share it anywhere easily on your Mainstack,
              <br />
              in your rate card, your link in bio, by email, by
              <br />
              text, easy peasy.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
