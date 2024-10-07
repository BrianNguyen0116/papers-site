"use client"

import Navbar from "@/components/navbar-root";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen max-w-screen overflow-hidden bg-black/40">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 min-w-full min-h-full object-cover z-[-1] pointer-events-none">
          <source src="/media/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex items-center justify-center h-screen">
          <h1 className="text-white text-3xl md:text-2xl lg:text-5xl font-bold">
            FROM PAPERS TO REALITY – BUILDING YOUR VISION
          </h1>
        </div>
      </div>
    </>
  );
}