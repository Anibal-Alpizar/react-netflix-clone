import React from 'react';

function HeroSection() {
  const randomImage = "https://picsum.photos/1280/720"; // Imagen aleatoria de internet
  
  return (
    <div className="relative bg-black h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center" style={{ backgroundImage: `url(${randomImage})` }}>
        <div className="container mx-auto h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Bienvenido a Netflix</h1>
            <p className="text-xl text-white">Disfruta de tus películas y series favoritas sin límites</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;