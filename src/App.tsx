import React from 'react';
import { Wine, Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/doevp9obh/image/upload/v1752642795/bgbg_pn4zvy.jpg')"
        }}
      />
      
      {/* Header Section */}
      <div className="relative z-10 w-full">
        {/* Header Images */}
        <div className="relative px-6 lg:px-12 py-6">
          {/* Top Left Image */}
          <div className="absolute top-6 left-6 lg:left-12">
            <img 
              src="https://res.cloudinary.com/doevp9obh/image/upload/v1752741437/Screenshot_2025-07-17_at_2.05.36_PM-removebg-preview_bd0iwm.png"
              alt="Top Left"
              className="h-auto max-w-full object-contain"
            />
          </div>
          
          {/* Top Right Image */}
          <div className="absolute top-6 right-6 lg:right-12">
            <img 
              src="https://res.cloudinary.com/doevp9obh/image/upload/v1752741437/Screenshot_2025-07-17_at_2.05.51_PM-removebg-preview_ofmsw6.png"
              alt="Top Right"
              className="h-auto max-w-full object-contain"
            />
          </div>
          
          {/* Center Image */}
          {/* Center Text */}
          <div className="flex justify-center mt-8">
            <div className="text-center max-w-4xl">
              <p className="text-gray-700 text-sm md:text-base font-medium tracking-wide mb-4">
                GRAND LEISURE IS <span className="underline">OFFERING NO. 009</span> ▼ FROM THE POOLSUITE INTERNET LEISURE CORPORATION. OUR <span className="underline">NET HOLDERS</span> RECEIVE EARLY ACCESS.
              </p>
              <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-light tracking-wider">
                POOLSUITE LEISURE CORP. PRESENTS
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6 lg:px-12">
        <div className="flex justify-center">
          <img 
            src="https://res.cloudinary.com/doevp9obh/image/upload/v1752642806/io_omvije.png"
            alt="Hero Image"
            className="h-auto max-w-full object-contain w-1/2"
          />
        </div>
      </div>
      
      {/* Bottom Accent Line */}
          <div className="text-center max-w-2xl">
            <p className="text-gray-700 text-xs md:text-sm font-medium tracking-wide mb-2">
  );
            className="h-auto max-w-full object-contain w-1/2"
            <h1 className="text-gray-800 text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
export default App;
