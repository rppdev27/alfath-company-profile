'use client'

import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { CgTemplate } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";


function LandingPage() {

  useEffect(() => {
    AOS.init();
  }, [])

  const currentYear = new Date().getFullYear();

  const handleOpenInvitationClick = () => {
    document.getElementById('invitationSection').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
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
            className="mx-auto"
            style={{
              width: '70px',
              height: 'auto',
            }}
            data-aos='fade-down'
          />
          <img
            src="https://menicapro.s3.ap-southeast-1.amazonaws.com/amplop%403x.webp"
            alt="Logo"
            className="mx-auto"
            style={{
              width: '175px',
              height: 'auto',
            }}
            data-aos='fade-down'
          />
          <h1 className="sm:text-2xl text-lg tracking-normal font-bold mb-4 text-white"
            style={{
              fontFamily: 'Ubuntu',
            }}
            data-aos='fade-up'
          >Luxury Wedding Invitation</h1>
          <div className="transform w-auto py-1 px-3 flex text-[0.5rem] sm:text-[0.6rem] tracking-tight text-white rounded-full frosted-glass hover:bg-opacity-40 font-bold transition-all duration-500 mx-auto mt-2">
            <div className="flex flex-row justify-center items-center p-1 text-white mx-2 cursor-pointer">
              <CgTemplate size={17} className="mr-1" />
              <div className='font-semibold ml-2 text-base'
                style={{
                  fontFamily: 'Ubuntu',
                }}
              >
                Demo Template
              </div>
            </div>
          </div>
          <div className="text-xs tracking-normal mt-2 text-white"
            style={{
              fontFamily: 'Ubuntu',
            }}
            data-aos='fade-up'
          >
            &copy; 2014 - {currentYear}
          </div>
        </div>
      </div>

      <div
        id="invitationSection"
        className="flex flex-col items-center justify-center h-screen w-screen bg-gray-200"
      >
        <button
          onClick={handleOpenInvitationClick}
          className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
