'use client'

import React, { useRef, useState, useEffect } from 'react';
import { GiOppositeHearts } from "react-icons/gi";
import Countdown from 'react-countdown';
import { IoIosArrowForward } from "react-icons/io";

import AOS from 'aos'
import 'aos/dist/aos.css';

const Cover: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const videoRef5 = useRef<HTMLVideoElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Ensure to unlock scroll if component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef1.current?.pause();
      videoRef2.current?.pause();
      videoRef3.current?.pause();
      videoRef4.current?.pause();
      videoRef5.current?.pause();
    } else {
      videoRef1.current?.play();
      videoRef2.current?.play();
      videoRef3.current?.play();
      videoRef4.current?.play();
      videoRef5.current?.play();
      // Unlock scroll
      document.body.style.overflow = 'unset';
      
      // Scroll to the second section after 2 seconds
      setTimeout(() => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
    setTimeout(() => {
      // section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      setIsPlaying(!isPlaying);
    }, 2000);
    
  };

  const getRandomRotation = () => {
    const rotations = ['-rotate-2', 'rotate-3', 'rotate-2', '-rotate-3'];
    return rotations[Math.floor(Math.random() * rotations.length)];
  };
  
  const comments = [
    { text: "This is comment one.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment two.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment three.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment four.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment five.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment six.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment seven.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment eight.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment nine.", avatar: "https://via.placeholder.com/50" },
    { text: "This is comment ten.", avatar: "https://via.placeholder.com/50" },
  ];

  const scrollContainerRef: any = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const targetDate = new Date('2024-08-17T00:00:00');  

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // If countdown is completed, render this
      return <span>Event has started!</span>;
    } else {
      // If countdown is still ongoing, render the time remaining
      return (
        <div className="flex justify-center p-4 text-center" style={{
          fontFamily: 'Playwrite AU SA'
        }}>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-gradient-to-r from-[#F6B859] to-[#DB9238] rounded-sm bg-opacity-30 font-DM rotate-2">
            <div className="text-xs font-extrabold" 
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
              {days}
            </div>
            <div className="text-[0.5rem] font-semibold mt-1" 
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
              Hari
            </div>
          </div>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-black rounded-sm bg-opacity-30 font-DM -rotate-2 bg-gradient-to-r from-[#F6B859] to-[#DB9238]">
            <div className={`text-xs font-bold`}
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                {hours} 
            </div>
            <div className='text-[0.5rem] font-semibold mt-1'
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                Jam
            </div>
        </div>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-black rounded-sm bg-opacity-30 font-DM rotate-2 bg-gradient-to-r from-[#F6B859] to-[#DB9238]">
            <div className={`text-xs font-bold`}
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                {minutes} 
            </div>
            <div className='text-[0.5rem] font-semibold mt-1'
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                Menit
            </div>
        </div>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-black rounded-sm bg-opacity-30 font-DM -rotate-2 bg-gradient-to-r from-[#F6B859] to-[#DB9238]">
            <div className={`text-xs font-bold`}
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
            {seconds} 
            </div>
            <div className='text-[0.5rem] font-semibold mt-1'
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                Detik
            </div>
          </div>
        </div>
      );
    }
};

  return (
    <>
      <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2" data-aos="fade-in">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="flex flex-col flex-grow justify-between w-[70%] mx-auto text-center">
          {/* Invitation Title and Names */}
          <div>
            <div className="text-md text-white uppercase tracking-widest mt-[30%] font-light" style={{ fontFamily: 'Prata' }} data-aos="fade-in">
              The Wedding Of
            </div>
            <div className="text-8xl font-normal sm:font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-in">
              Nemi <br />
              Meyta
            </div>
            <div className="text-md text-white uppercase mt-4 tracking-widest font-light" style={{ fontFamily: 'Prata' }}  data-aos="fade-in">
              17 . 08 . 2024
            </div>
            {/* Guest Name Section at the Bottom */}
            <div className="font-normal mt-8" >
              <div className="text-xs text-[#AE843C] tracking-widest" style={{ fontFamily: 'Montserrat' }}  data-aos="fade-in">
                Kepada Yth :
              </div>
              <div className="text-white font-light tracking-tighter text-xl mt-5" style={{ fontFamily: 'Prata' }}  data-aos="fade-in">
                Nama Tamu
              </div>
              <div className="mt-4 mx-auto">
                {
                  isPlaying ? <></> : (
                    <button
                      onClick={handlePlayPause}
                      className="bg-transparent text-black px-6 py-3 rounded-full backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 transition-all duration-500 font-bold"
                      style={{
                        fontFamily: 'Prata',
                        backgroundImage: 'linear-gradient(180deg, #F9BD5D 0%, #D2852D 100%)',
                        backgroundClip: 'padding-box', // Ensures the gradient covers the padding area
                      }}
                    >
                      {isPlaying ? 'Pause' : 'Open Invitation'}
                    </button>
                  )
                }
            </div>
            </div>
          </div>
          
          
        </div>
        
        {/* Bottom Decoration Image */}
        <div className="mx-auto mb-[-112px] w-1/2" data-aos="fade-in">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Bottom Decoration" className="rotate-180 animate-spin-slow" />
        </div>
      </div>
      
      <div className="h-auto sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[75%] z-50 text-center mx-auto my-10" ref={section2Ref}>
            <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
            <div className="text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                Mempelai
            </div>
            <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>
            <div className="flex items-center mt-7 flex-row justify-between">
            <img 
              src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" 
              alt="Nemi Photo" 
              className="w-32 h-32 border-4 border-white shadow-lg" 
              style={{
                objectFit: 'cover',
                transform: 'rotate(6deg)'
              }} 
              data-aos="fade-left"
            />
            
            <div className='mx-3' data-aos="fade-in">
              <GiOppositeHearts className='text-red-700' size={25} />
            </div>

            <img 
              src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" 
              alt="Meyta Photo" 
              className="w-32 h-32 border-4 border-white shadow-lg"  
              style={{
                objectFit: 'cover',
                transform: 'rotate(-6deg)'
              }} 
              data-aos="fade-right"
            />
          </div>


            <div className="flex justify-around items-center mt-8 mb-32 flex-col">    
                <div className="text-center flex flex-row">
                    <div className="flex flex-col">

                    <div className="text-3xl sm:text-4xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }} data-aos="fade-in">
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4 tracking-normal" style={{ fontFamily: 'Prata' }}  data-aos="fade-down">
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className='text-gradient mt-5 font-semibold text-xl'  style={{ fontFamily: 'Alex Brush' }}>
                  &
                </div>

                <div className="text-center flex flex-row">
                    <div className="flex flex-col">

                    <div className="text-3xl sm:text-4xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }} data-aos="fade-in">
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Prata' }} data-aos="fade-down">
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="h-screen-minus-40 sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto mt-10 mb-16" ref={section3Ref}>
            <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
            <div className="text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                Galeri
            </div>
            <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 mt-8">
              <div className="transform scale-150 -rotate-6">
                <img 
                  src="https://ik.imagekit.io/vtvggda66/menicaid6_kKPg4qjo8.png?updatedAt=1719819011595" 
                  alt="" 
                  loading="lazy" 
                  className="border-4 border-white shadow-lg"
                />
              </div>
              <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                <img 
                  src="https://ik.imagekit.io/vtvggda66/menicaid6_fCBOfyS-Y.png?updatedAt=1719819007743" 
                  alt="" 
                  loading="lazy" 
                  className="border-4 border-white shadow-lg"
                />
              </div>
              <div className="transform scale-150 translate-y-11">
                <img 
                  src="https://ik.imagekit.io/vtvggda66/menicaid6_KDeRGtWBR.png?updatedAt=1719819004269" 
                  alt="" 
                  loading="lazy" 
                  className="border-4 border-white shadow-lg"
                />
              </div>
              <div className="transform translate-y-24">
                <img 
                  src="https://ik.imagekit.io/vtvggda66/menicaid6_6k7fNNyhm.png?updatedAt=1719819000408" 
                  alt="" 
                  loading="lazy" 
                  className="border-4 border-white shadow-lg"
                />
              </div>
              <div className="row-start-1 col-start-2 col-span-2 transform translate-x-10 translate-y-4">
                <img 
                  src="https://ik.imagekit.io/vtvggda66/menicaid6_ogOCt64bZ.png?updatedAt=1719818997426" 
                  alt="" 
                  loading="lazy" 
                  className="border-4 border-white shadow-lg"
                />
              </div>
            </div>




        </div>
      </div>
      <div className="sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10">
            <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
            <div className="text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                Acara
            </div>
            <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

            <div className="flex justify-around items-center mt-8 mb-32 flex-col">    
            <div className="relative text-center flex flex-row w-full">
                    <div className="absolute top-1 left-1 z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                    </div>
                    <div className="absolute top-1 right-1 z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                    </div>
                    <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                    </div>
                    <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                    </div>
                <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                    

                    <div className="text-3xl sm:text-4xl text-gradient mt-3" style={{ fontFamily: 'Alex Brush' }}>
                        Wedding Ceremony
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                        Agustus
                      </div>
                      <div className="flex-grow text-6xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                        17
                      </div>
                      <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                        2024
                      </div>
                    </div>

                    <div className="flex-grow text-sm text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                        Pukul 13.00 - Selesai
                    </div>
                    <div className="flex-grow text-xs text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                        *Hanya Keluarga
                    </div>

                    
                    
                    <div className="text-base text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                        Hotel IBIS, Jakarta Pusat
                    </div>
                    <div className="bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                        Google Maps
                    </div>

                </div>
                
            </div>


                <div className='text-gradient my-5 font-semibold text-xl'  style={{ fontFamily: 'Alex Brush' }}>
                  &
                </div>

                <div className="relative text-center flex flex-row w-full">
                    <div className="absolute top-1 left-1 z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                    </div>
                    <div className="absolute top-1 right-1 z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                    </div>
                    <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                    </div>
                    <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                    </div>
                <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                    

                    <div className="text-3xl sm:text-4xl text-gradient mt-3" style={{ fontFamily: 'Alex Brush' }}>
                        Wedding Reception
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                        Agustus
                      </div>
                      <div className="flex-grow text-6xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                        17
                      </div>
                      <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                        2024
                      </div>
                    </div>



                    <div className="flex-grow text-sm text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                        Pukul 19.00 - Selesai
                    </div>
                    
                    <div className="text-base text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                        Hotel IBIS, Jakarta Pusat
                    </div>

                    


                    <div className="bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-white cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                        Google Maps
                    </div>

                </div>
                
            </div>
            </div>

           

        </div>
      </div>
      <div className="h-screen-minus-40 sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10">
        <img src={'https://asset.menica.pro/weddinggift-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
            <div className="text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                Hadiah
            </div>
            <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

            <div className="flex justify-around items-center mt-8 flex-col font-semibold gap-y-4" style={{ fontFamily: 'Prata' }}>  

            {/* <div className="gradient-border rounded-lg shadow-lg" data-aos="fade-left">
              <div className="bg-white p-6 rotate-6 rounded-lg shadow-lg text-center">
                  Bank Mandiri
                  <br/>
                  Lorem Ipsum
                  <br/>
                  4411xxxxx
              </div>
            </div>

            <div className="gradient-border rounded-lg shadow-lg mt-5"  data-aos="fade-right">
              <div className="bg-white p-6 rotate-6 rounded-lg shadow-lg text-sm">
                  Bank BCA
                  <br/>
                  Lorem Ipsum
                  <br/>
                  4411xxxxx
              </div>
            </div> */}

                <div className="relative text-center flex flex-row w-full">
                        <div className="absolute top-1 left-1 z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                        </div>
                        <div className="absolute top-1 right-1 z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                        </div>
                        <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                        </div>
                        <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                        </div>
                    <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                        

                        <div className="flex-grow text-xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                          Agnes Meyta
                        </div>

                        <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                          Bank BCA
                        </div>
                        
                        <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                          6871435631
                        </div>
                        <div className="bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                            Copy
                        </div>

                    </div>
                    
                </div>

                <div className="relative text-center flex flex-row w-full">
                        <div className="absolute top-1 left-1 z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                        </div>
                        <div className="absolute top-1 right-1 z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                        </div>
                        <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                        </div>
                        <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                            <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                        </div>
                    <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                        

                        <div className="flex-grow text-xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                          Mahanaim Purba
                        </div>

                        <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                          Bank BRI
                        </div>
                        
                        <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                        0948033235
                        </div>
                        <div className="bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                            Copy
                        </div>

                    </div>
                    
                </div>
                
            </div>

        </div>
      </div>
      <div className="h-screen-minus-40 sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
            <div className="w-[90%] z-50 text-center mx-auto my-10">
            <img src={'https://asset.menica.pro/menicav4/guestbook-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
            <div className="text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                Buku Tamu
            </div>
            <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

          <div className="flex justify-center items-center mt-7">
        
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 p-4 bg-transparent w-full">
              {comments.map((comment, index) => (
                <div 
                  key={index} 
                  className={`relative min-w-[200px] p-4 bg-white rounded-lg shadow-lg font-bold ${getRandomRotation()}`}
                >
                  <img 
                    src={comment.avatar} 
                    alt={`Avatar ${index + 1}`} 
                    className="w-8 h-8 rounded-full absolute top-2 left-2"
                  />
                  <p className="mt-12 tracking-wider text-xs"
                    style={{
                      fontFamily: 'Playwrite AU SA'
                    }}
                  >
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center w-full items-center mx-auto mt-4">
            <button onClick={scrollLeft} className="p-2 bg-gray-300 rounded-md shadow-lg mx-2">
              <IoIosArrowForward className='rotate-180'/>
            </button>
            <button onClick={scrollRight} className="p-2 bg-gray-300 rounded-md shadow-lg mx-2">
                <IoIosArrowForward/>
            </button>
          </div>
          <div className="bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
              Kirim Ucapan 
          </div>
        </div>
      </div>
      <div className="h-screen-minus-40 sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10">
          <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
            <div className="text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                Save The Date
            </div>
            <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

            <Countdown date={targetDate} renderer={renderer} />

            <div className="flex justify-around items-center mt-8 flex-col">    

                {/* <img 
                  src="https://ik.imagekit.io/vtvggda66/Elegant%20Photo%20Collage%20White%20Save%20The%20Date%20Wedding%20Invitation.png?updatedAt=1719858590321" 
                  alt="Rounded Shadow Image" 
                  className="rounded-lg shadow-lg rotate-6"
                /> */}

            <div className="gradient-border rounded-lg shadow-lg" >
              <img 
                src="https://ik.imagekit.io/vtvggda66/Elegant%20Photo%20Collage%20White%20Save%20The%20Date%20Wedding%20Invitation.png?updatedAt=1719858590321" 
                alt="Rounded Shadow Image" 
                className="rounded-lg shadow-lg"
                data-aos="fade-down"
                style={{
                  transform: 'rotate(6deg)'
                }}
              />
            </div>
                
                
            </div>

            



        </div>
      </div>
      <div className="h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10">
            <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
            <div className="text-base font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Prata' }}  data-aos="fade-down">
                Luxury Wedding Invitation
            </div>
            <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

            <div className="flex justify-around items-center mt-8 flex-col">    

                {/* <img 
                  src="https://ik.imagekit.io/vtvggda66/Elegant%20Photo%20Collage%20White%20Save%20The%20Date%20Wedding%20Invitation.png?updatedAt=1719858590321" 
                  alt="Rounded Shadow Image" 
                  className="rounded-lg shadow-lg rotate-6"
                /> */}

            <div>
              <img 
                src="https://ik.imagekit.io/vtvggda66/test-upload_FweOOgNyL.png" 
                alt="Rounded Shadow Image"
                className='mx-auto'
                style={{
                  transform: 'rotate(6deg)',
                  width: '60%'
                }}
              />
            </div>
            <div className="text-base font-semibold mt-4 tracking-tight text-gradient cursor-pointer" onClick={()=>{ alert('...') }} style={{ fontFamily: 'Prata' }}>
                https://menica.id
            </div>
                
                
            </div>

            



        </div>
      </div>
      {/* <div className="fixed bottom-36 left-1/2 transform -translate-x-1/2">
        {
          isPlaying ? <></> : (
            <button
              onClick={handlePlayPause}
              className="bg-transparent text-black px-6 py-3 rounded-full backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 transition-all duration-500 font-bold"
              style={{
                fontFamily: 'Prata',
                backgroundImage: 'linear-gradient(180deg, #F9BD5D 0%, #D2852D 100%)',
                backgroundClip: 'padding-box', // Ensures the gradient covers the padding area
              }}
            >
              {isPlaying ? 'Pause' : 'Open Invitation'}
            </button>
          )
        }
      </div> */}
    </>
  );
};

export default Cover;
