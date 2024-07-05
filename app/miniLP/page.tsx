'use client'

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CgTemplate } from "react-icons/cg";
import DesignPicker from '../../components/DesignPicker'

function LandingPage() {
  const [visible, setVisible] = useState(true);
  const [totallyGone, setTotallyGone] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleDemoClick = () => {
    setVisible(false);
    setTimeout(() => {
      setTotallyGone(true);
    }, 1000); // 1 second delay
  };

  const currentYear = new Date().getFullYear();

  

  return (
    <>
    {
      totallyGone ? <div
      className={`flex flex-col items-center justify-center h-screen w-screen bg-gray-100 transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
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
        <h1
          className="sm:text-2xl text-lg tracking-normal font-bold mb-4 text-white"
          style={{
            fontFamily: 'Ubuntu',
          }}
          data-aos='fade-up'
        >
          Luxury Wedding Invitation
        </h1>
        <div
          className="transform w-auto py-1 px-3 flex text-[0.5rem] sm:text-[0.6rem] tracking-tight text-white rounded-full frosted-glass hover:bg-opacity-40 font-bold transition-all duration-500 mx-auto mt-2 cursor-pointer"
          onClick={handleDemoClick}
        >
          <div className="flex flex-row justify-center items-center p-1 text-white mx-2">
            <CgTemplate size={17} className="mr-1" />
            <div
              className="font-semibold ml-2 text-base"
              style={{
                fontFamily: 'Ubuntu',
              }}
            >
              Demo Template
            </div>
          </div>
        </div>
        <div
          className="text-xs tracking-normal mt-6 text-white"
          style={{
            fontFamily: 'Ubuntu',
          }}
          data-aos='fade-up'
        >
          &copy; 2014 - {currentYear}
        </div>
      </div>
    </div> : <></>
    }
    

    {
      visible ?  <></> : <DesignPicker/>
    }

    </>
  );
}

export default LandingPage;
