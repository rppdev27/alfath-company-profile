'use client'

import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';


function LandingPage() {

  useEffect(() => {
        AOS.init();
  }, [])


  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100"
      style={{
        backgroundImage: 'url(https://asset.menica.pro/BGgreenwithornament%403x.webp)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        fontFamily: 'Plus Jakarta Sans',
      }}
    >
      <div className="text-center">
        <img
          src="https://asset.menica.pro/menicawhite_big%403x.webp"
          alt="Logo"
          className="mx-auto my-5"
          style={{
            width: '175px',
            height: 'auto',
          }}
          data-aos='fade-down'
        />
        <h1 className="text-4xl tracking-tight font-extrabold my-6 text-white"
          style={{
            fontFamily: 'Damion',
            background: 'linear-gradient(45deg, #FFD700, #FFAA00, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          data-aos='fade-down'
        >Your Luxury Wedding Invitation</h1>
        <button 
          data-aos='fade-down'
          className="p-5 font-semibold bg-green-700 hover:bg-green-800 text-white text-md py-2 px-4 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          Explore Design
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

