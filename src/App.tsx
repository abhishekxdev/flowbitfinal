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
        <div className="flex justify-center">
          <img 
            src="https://res.cloudinary.com/doevp9obh/image/upload/v1752642806/io_omvije.png"
            alt="Hero Image"
            className="h-auto max-w-full object-contain"
          />
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </div>
  );
}

export default App;
