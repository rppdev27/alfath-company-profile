'use client'

import React from 'react';

function LandingPage() {
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
        />
        <h1 className="text-4xl tracking-tight font-extrabold my-6 text-white"
          style={{
            fontFamily: 'Damion'
          }}
        >Your Luxury Wedding Invitation</h1>
        <button className="p-5 font-semibold bg-green-700 hover:bg-green-800 text-white text-md py-2 px-4 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          Explore Design
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

