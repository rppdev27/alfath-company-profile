'use client'

import React,{ useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { MdOutlineImageSearch } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";


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
        <div className="transform -translate-x-1/2 w-auto py-1 px-3 flex text-[0.5rem] sm:text-[0.6rem] tracking-tight text-white rounded-full frosted-glass hover:bg-opacity-40 font-bold transition-all duration-500">

            <div className="flex flex-row justify-center items-center p-1 text-white mx-2 cursor-pointer">
              <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md hover:bg-slate-400 bg-[#3f3f3f30]">
                  <FaWhatsapp size={15}/>
              </div>
             <div className='font-semibold ml-2'>
                Templae
              </div>
            </div>

            
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

