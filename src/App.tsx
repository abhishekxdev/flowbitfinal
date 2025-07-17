import React from 'react';
import { Wine, Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/doevp9obh/image/upload/v1752642795/bgbg_pn4zvy.jpg')"
        }}
      />
      
      {/* All Content Container */}
      <div className="relative z-10 w-full min-h-screen">
        {/* Header Section */}
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
      
        {/* Hero Section */}
        <div className="flex items-center justify-center min-h-[70vh] px-6 lg:px-12 mt-16">
          <div className="flex justify-center">
            <img 
              src="https://res.cloudinary.com/doevp9obh/image/upload/v1752642806/io_omvije.png"
              alt="Hero Image"
              className="h-auto max-w-full object-contain w-1/2"
            />
          </div>
        </div>
      
        {/* Ralph Lauren Collection Section */}
        <div className="w-full bg-[#f3efe6] bg-opacity-95 py-16 px-6 lg:px-12">
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
                  For years the Poolsuite Internet Leisure Corporation has enriched the lives of leisure connoisseurs across the World Wide Web by way of meticulously crafted "Virtual Leisure Ecosystems™". We're thrilled to launch this grand experiment which allows anyone, anywhere to become one of the countless iconic characters which inhabit these worlds.<br/><br/>

                  Grand Leisure — An evolving NFT avatar and the exploration of what's possible when thousands of the internet's finest leisure-
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
      
      {/* Large Image Section - Right Aligned */}
      <div className="relative z-10 w-full py-16 px-6 lg:px-12">
        <div className="flex justify-end">
          <div className="w-full max-w-2xl">
            <img 
              src="https://res.cloudinary.com/doevp9obh/image/upload/v1752742387/report-for-leisure-animated.0a166b26_js47l6.png"
              alt="Report for Leisure"
              className="relative z-10 w-full h-auto object-contain ml-auto"
            />
          </div>
        </div>
      </div>
      
      {/* A Collection of Ever-Evolving Leisurists Section */}
      <div className="relative z-10 w-full py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-[#1a2b49] text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Great Vibes, cursive' }}>
              A collection of ever-evolving Leisurists
            </h2>
            <div className="w-32 h-px bg-[#1a2b49] mx-auto opacity-60"></div>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-end">
            {/* Left Column - Design Your Own */}
            <div className="text-center flex flex-col h-full">
              {/* Card Image */}
              <div className="mb-8 h-80">
                <img 
                  src="https://res.cloudinary.com/doevp9obh/image/upload/v1752742382/design-your-own.2cc62222_yvnopj.png"
                  alt="Design Your Own Bespoke Leisurist"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Card Title */}
              <h3 className="text-[#1a2b49] text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Design Your Own<br />
                Bespoke Leisurist
              </h3>
              
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1 border-2 border-red-500 text-red-500 text-xs font-bold uppercase rounded-full" style={{ fontFamily: 'Georgia, serif' }}>
                  MINTING COMPLETE
                </span>
              </div>
              
              {/* Description */}
              <div className="max-w-sm mx-auto mb-8 flex-grow">
                <p className="text-[#1a2b49] text-base leading-relaxed text-justify" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6em' }}>
                  Whatever your style of leisure, we've gone to great lengths to provide you with the assets you'll need to build the perfect Leisurist for such pursuits. With billions of possible combinations, you can enjoy browsing from our hundreds of items as you discover the ideal attire, eyewear, haircut, and accoutrement for your bespoke leisurist.
                </p>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <button className="w-full border-2 border-[#1a2b49] text-[#1a2b49] px-7 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                  <span>◊</span>
                  Buy on Opensea
                  <span>◊</span>
                </button>
              </div>
            </div>
            
            {/* Right Column - Expansion Pack Technology */}
            <div className="text-center flex flex-col h-full">
              {/* Card Image with Background and GIF */}
              <div className="mb-8 relative h-80">
                <div 
                  className="w-full h-80 bg-cover bg-center rounded-2xl shadow-lg flex items-center justify-center"
                  style={{
                    backgroundImage: "url('https://res.cloudinary.com/doevp9obh/image/upload/v1752743366/background.73da5471_anm4qn.png')"
                  }}
                >
                  <img 
                    src="https://res.cloudinary.com/doevp9obh/image/upload/v1752742383/characters.501bb2b5_xxjv6u.gif"
                    alt="Expansion Pack Technology Character"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Card Title */}
              <h3 className="text-[#1a2b49] text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Expansion Pack<br />
                Technology™
              </h3>
              
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1 border-2 border-green-600 text-green-600 text-xs font-bold uppercase rounded-full" style={{ fontFamily: 'Georgia, serif' }}>
                  NOW AVAILABLE
                </span>
              </div>
              
              {/* Description */}
              <div className="max-w-sm mx-auto mb-8 flex-grow">
                <p className="text-[#1a2b49] text-base leading-relaxed text-justify" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6em' }}>
                  Expansion Packs allow you to customize and update your Leisurist over time. In collaboration with an exciting roster of leisure-aligned brands and artists, your ever-evolving Leisurist will be eligible to access a stream of vibrant character customizations and bespoke fashion upgrades, enabled by Poolsuite's Expansion Pack Technology™. The inaugural collection has been crafted in collaboration with Ralph Lauren and can be accessed in the RL-3000.
                </p>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <button className="w-full bg-[#1a2b49] text-[#f3efe6] px-7 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                <span>◊</span>
                Style Your Leisurist
                <span>◊</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;