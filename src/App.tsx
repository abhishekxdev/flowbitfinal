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
          <div className="flex justify-center">
            <img 
              src="https://res.cloudinary.com/doevp9obh/image/upload/v1752741438/Screenshot_2025-07-17_at_2.05.59_PM-removebg-preview_jrcvnz.png"
              alt="Center"
              className="h-auto max-w-full object-contain"
            />
          </div>
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
