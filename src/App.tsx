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
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-6 lg:px-12 py-6">
          {/* Top Left - Logo */}
          <div className="flex flex-col items-start space-y-2">
            <h1 className="text-lg lg:text-xl font-bold text-slate-100 tracking-wider font-serif">
              POOLSUITE LEISURE CORP.
            </h1>
            <div className="border border-slate-300 rounded-full px-3 py-1">
              <span className="text-xs text-slate-200 tracking-widest font-light">
                OFFICIAL PERK
              </span>
            </div>
          </div>
          
          {/* Top Right - Company Name with Icon */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm lg:text-base text-slate-200 tracking-wider font-light">
                POOLSUITE INTERNET LEISURE CORPORATION
              </p>
            </div>
            <div className="flex items-center space-x-1 text-slate-300">
              <Wine className="w-5 h-5" />
              <Music className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        {/* Main Announcement Line */}
        <div className="text-center px-6 lg:px-12 py-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm lg:text-base text-slate-100 tracking-[0.2em] font-light uppercase leading-relaxed">
              GRAND LEISURE IS OFFERING NO. 009 
              <span className="inline-block mx-3 text-slate-400">▾</span>
              FROM THE POOLSUITE INTERNET LEISURE CORPORATION. OUR NFT HOLDERS RECEIVE EARLY ACCESS.
            </p>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-100 tracking-tight leading-tight">
                LUXURY
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                  LEISURE
                </span>
                <br />
                REDEFINED
              </h2>
              
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-lg">
                Experience the future of luxury leisure with our exclusive collection. 
                Where retro aesthetics meet cutting-edge innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold tracking-wide uppercase rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Early Access
              </button>
              <button className="px-8 py-4 border border-slate-300 text-slate-200 font-semibold tracking-wide uppercase rounded-full hover:bg-slate-800 hover:border-slate-200 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-slate-100">009</div>
                <div className="text-sm text-slate-400 tracking-wide">LIMITED EDITION</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-slate-100">2025</div>
                <div className="text-sm text-slate-400 tracking-wide">EXCLUSIVE YEAR</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-slate-100">NFT</div>
                <div className="text-sm text-slate-400 tracking-wide">HOLDERS ONLY</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform scale-110" />
              <img 
                src="https://res.cloudinary.com/doevp9obh/image/upload/v1752642806/io_omvije.png"
                alt="Luxury Leisure Product"
                className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </div>
  );
}

export default App;
