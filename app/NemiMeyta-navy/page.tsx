'use client'

import React, { useRef, useState, useEffect } from 'react';

const Cover: React.FC = () => {
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

  return (
    <>
      <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="flex flex-col flex-grow justify-between w-[70%] mx-auto text-center">
          {/* Invitation Title and Names */}
          <div>
            <div className="text-md text-white uppercase tracking-widest mt-[30%] font-light" style={{ fontFamily: 'Prata' }}>
              The Wedding Of
            </div>
            <div className="text-8xl font-normal sm:font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}>
              Nemi <br />
              Meyta
            </div>
            <div className="text-md text-white uppercase mt-4 tracking-widest font-light" style={{ fontFamily: 'Prata' }}>
              17 . 08 . 2024
            </div>
            {/* Guest Name Section at the Bottom */}
            <div className="font-normal mt-8" >
              <div className="text-xs text-[#AE843C] tracking-widest" style={{ fontFamily: 'Montserrat' }}>
                Kepada Yth :
              </div>
              <div className="text-white font-light tracking-tighter text-xl mt-5" style={{ fontFamily: 'Prata' }}>
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
        <div className="mx-auto mb-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Bottom Decoration" className="rotate-180 animate-spin-slow" />
        </div>
      </div>
      
      <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10" ref={section2Ref}>
            <div className="text-3xl font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Prata' }}>
                Mempelai
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">    
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Nemi Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Meyta Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10" ref={section3Ref}>
            <div className="text-3xl font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Prata' }}>
                Galeri
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">    
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Nemi Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Meyta Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10">
            <div className="text-3xl font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Prata' }}>
                Acara
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">    
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Nemi Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Meyta Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10">
            <div className="text-3xl font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Prata' }}>
                Hadiah
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">    
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Nemi Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Meyta Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        
      >
        {/* Top Decoration Image */}
        <div className="mx-auto mt-[-112px] w-1/2">
          <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
        </div>
        
        {/* Invitation Content */}
        <div className="w-[70%] z-50 text-center mx-auto my-10">
            <div className="text-3xl font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Prata' }}>
                Buku Tamu
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">    
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Nemi Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Meyta Photo" className="w-32 h-auto shadow-md mx-auto"
                        style={{
                            height: 'fit-content'
                        }}
                    />
                    <div className="flex flex-col">

                    <div className="text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Montserrat' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
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