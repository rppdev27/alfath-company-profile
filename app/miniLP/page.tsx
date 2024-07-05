'use client'

import React,{ useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { MdOutlineImageSearch } from "react-icons/md";


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
      <div className="text-center flex flex-col justify-center items-center">
      
        <img
          src="https://asset.menica.pro/menicawhite_big%403x.webp"
          alt="Logo"
          className="mx-auto my-5"
          style={{
            width: '70px',
            height: 'auto',
          }}
          data-aos='fade-down'
        />
        <img
          src="https://menicapro.s3.ap-southeast-1.amazonaws.com/amplop%403x.webp"
          alt="Logo"
          className="mx-auto my-5"
          style={{
            width: '175px',
            height: 'auto',
          }}
          data-aos='fade-down'
        />
        <h1 className="text-4xl tracking-tight font-extrabold mt-3 mb-6 text-[#f4706d]"
          style={{
            fontFamily: 'Alex Brush',
          }}
          data-aos='fade-up'
        >Luxury Wedding Invitation</h1>
        <button 
          data-aos='fade-left'
          className="flex items-center justify-center mx-autoo flex-row p-8 font-semibold bg-green-700 hover:bg-green-800 text-white text-md py-2 px-4 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <MdOutlineImageSearch className='mr-1 text-white'/>
          <div>
              Explore Design
          </div>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

