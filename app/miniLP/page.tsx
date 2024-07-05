'use client'

import React from 'react';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Luxury Wedding Invitation</h1>
        <img src="https://www.menica.id/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fvtvggda66%2Fmenicaid%2Fwebapp%2Fmenicaappleft1_green.webp%3FupdatedAt%3D1708323269193&w=640&q=75" alt="Logo" className="mx-auto mb-4" />
        <p className="text-2xl font-semibold mb-8">Menica</p>
        <button className="bg-blue-500 text-white text-xl py-2 px-4 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          Explore Design
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
