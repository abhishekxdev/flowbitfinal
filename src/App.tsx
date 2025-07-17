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
        {/* Header Image */}
        <div className="flex justify-center px-6 lg:px-12 py-6">
          <img 
            src="https://res.cloudinary.com/doevp9obh/image/upload/v1752643836/Screenshot_2025-07-16_at_10.50.51_AM-removebg-preview_lpy8kn.png"
            alt="Header"
            className="h-auto max-w-full object-contain"
          />
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
