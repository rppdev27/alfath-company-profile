'use client'

import React from 'react';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100"
      style={{
        fontFamily: 'Plus Jakarta Sans'
      }}
    >
      <div className="text-center">
        <img src="https://ik.imagekit.io/vtvggda66/menicaid/webapp/menica_greenlogo.png?updatedAt=1708333173911" alt="Logo" className="mx-auto mb-4" 
          style={{
            width: '300px',
            height: 'auto'
          }}
        />
        <h1 className="text-4xl font-bold mb-4">Luxury Wedding Invitation</h1>
        {/*<p className="text-2xl font-semibold mb-8">Menica</p>*/}
        <button className="font-semibold bg-green-700 hover:bg-green-800 text-white text-xl py-2 px-4 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          Explore Design
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
