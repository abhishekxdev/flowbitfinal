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
              className="h-auto max-w-full object-contain w-1/2"
            />
          </div>
          
          {/* Top Right Image */}
          <div className="absolute top-6 right-0">
            <img 
              src="https://res.cloudinary.com/doevp9obh/image/upload/v1752741437/Screenshot_2025-07-17_at_2.05.51_PM-removebg-preview_ofmsw6.png"
              alt="Top Right"
              className="h-auto max-w-full object-contain w-1/2"
            />
          </div>
          
          {/* Center Text */}
          <div className="flex justify-center mt-8">
            <div className="text-center max-w-2xl">
              <p className="text-gray-700 text-xs md:text-sm font-medium tracking-wide mb-2">
                GRAND LEISURE IS <span className="underline">OFFERING NO. 009</span> ▼ FROM THE POOLSUITE INTERNET LEISURE CORPORATION. OUR <span className="underline">NET HOLDERS</span> RECEIVE EARLY ACCESS.
              </p>
              <h1 className="text-gray-800 text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
                POOLSUITE LEISURE CORP. PRESENTS
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6 lg:px-12 mt-16">
        <div className="flex justify-center">
          <img 
            src="https://res.cloudinary.com/doevp9obh/image/upload/v1752642806/io_omvije.png"
            alt="Hero Image"
            className="h-auto max-w-full object-contain w-1/2"
          />
        </div>
      </div>
      
      {/* Ralph Lauren Collection Section */}
      <div className="w-full bg-[#f3efe6] py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Title Block */}
          <div className="text-center mb-12">
            <h2 className="text-[#1a2b49] text-lg md:text-xl font-bold uppercase tracking-wider mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              THE RALPH LAUREN COLLECTION
            </h2>
            <div className="max-w-[700px] mx-auto">
              <p className="text-[#1a2b49] text-base leading-relaxed" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6em' }}>
                A perfect blend of Ralph Lauren's timeless elegance and Poolsuite's sunny irreverence, <span className="font-semibold">THE RALPH LAUREN COLLECTION</span> will take your Leisurist to new heights. Featuring Ralph Lauren's fresh takes on Spring 2023 pieces, embrace your Leisurist's creativity in constructing new looks that are paving the way in cutting-edge leisure and style.
              </p>
            </div>
          </div>
          
          {/* CTA Button Block */}
          <div className="text-center mb-16">
            <button className="bg-[#1a2b49] text-[#f3efe6] px-7 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Style Your Leisurist ↓
            </button>
            <p className="text-[#1a2b49] text-sm opacity-70" style={{ fontFamily: 'Georgia, serif' }}>
              Don't have a Leisurist? <a href="#" className="underline">Try the demo</a> or <a href="#" className="underline">Buy on OpenSea</a>
            </p>
          </div>
          
          {/* Main Hero Quote */}
          <div className="text-center mb-12">
            <h3 className="text-[#1a2b49] text-5xl md:text-6xl leading-tight mb-12" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Because Living a Life of Leisure<br />
              Requires You Look the Part.
            </h3>
          </div>
          
          {/* Supporting Paragraphs */}
          <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8">
            <div className="text-[#1a2b49] text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6em' }}>
              <p>
                For years the Poolsuite Internet Leisure Corporation has enriched the lives of leisure connoisseurs across the World Wide Web by way of meticulously crafted "Virtual Leisure Ecosystems™". We're thrilled to launch this grand experiment which allows anyone, anywhere to become one of the countless iconic characters which inhabit these worlds.
              </p>
            </div>
            <div className="text-[#1a2b49] text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6em' }}>
              <p>
                Grand Leisure — An evolving NFT avatar and the exploration of what's possible when thousands of the internet's finest leisure-inclined minds come together to reimagine media, fashion, and olive-forward martini topping technologies.
              </p>
              <p className="mt-4">
                Once you have acquired your Leisurist, a world of unbridled creativity awaits. Through an ongoing stream of exciting character customizations and bespoke fashion upgrades enabled by Expansion Pack Technology, your digital presence in the Leisureverse is ever-evolving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;