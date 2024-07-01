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
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="relative flex justify-start max-w-[451px] h-screen whitespace-pre-line mx-auto flex-col">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef1}
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
            style={{ opacity: 1 }}
          >
            <source
              src="https://asset.menica.pro/menicav4/botanic-COOL-motion.mp4"
              type="video/mp4"
            />
          </video>
          
        </div>

        <div className="w-[70%] z-50 flex flex-col mx-auto text-center sm:mt-[42%] mt-[52%]">

            <div className="text-sm text-black uppercase tracking-widest" style={{
                fontFamily: 'Prata'
            }}>
                The Wedding Of
            </div>
            <div className="text-5xl font-semibold text-[#2B6F51] mt-8 tracking-tight" style={{
                fontFamily: 'Prata'
                // fontFamily: 'Metrophobic'
            }}>
                Nemi <br/>
                Meyta
            </div>
            <div className="text-sm text-black uppercase mt-8 tracking-widest" style={{
                fontFamily: 'Prata'
            }}>
                17.08.2024
            </div>
            <div className="mt-32 font-light" style={{
                fontFamily: 'Prata'
            }}>
                <div className='text-xs text-[#2B6F51]'>
                    Kepada Yth :
                </div>
                <div className='text-[#000] font-semibold tracking-light text-xl mt-5'>
                    Nama Tamu
                </div>
            </div>

        </div>
        
        
      </div>
      <div className="relative flex items-center justify-center max-w-[451px] h-screen whitespace-pre-line mx-auto">
        <div className="absolute inset-0 w-full h-full" ref={section2Ref}>
          <video
            ref={videoRef2}
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
            style={{ opacity: 1 }}
          >
            <source
              src="https://asset.menica.pro/menicav4/botanic-COOL-bg1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        
        <div className="w-[70%] z-50 text-center">
            <div className="text-4xl text-[#2B6F51]" style={{ fontFamily: 'Prata' }}>
                Mempelai
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">    
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Nemi Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Meyta Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>

      </div>
      <div className="relative flex items-center justify-center max-w-[451px] h-screen whitespace-pre-line mx-auto">
        <div className="absolute inset-0 w-full h-full" ref={section3Ref}>
          <video
            ref={videoRef3}
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
            style={{ opacity: 1 }}
          >
            <source
              src="https://asset.menica.pro/menicav4/botanic-COOL-bg3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="w-[70%] z-50 text-center">
            <div className="text-4xl text-[#2B6F51]" style={{ fontFamily: 'Prata' }}>
                Acara
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Nemi Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Meyta Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="relative flex items-center justify-center max-w-[451px] h-screen whitespace-pre-line mx-auto">
        <div className="absolute inset-0 w-full h-full" ref={section4Ref}>
          <video
            ref={videoRef4}
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
            style={{ opacity: 1 }}
          >
            <source
              src="https://asset.menica.pro/menicav4/botanic-COOL-bg2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="w-[70%] z-50 text-center">
            <div className="text-4xl text-[#2B6F51]" style={{ fontFamily: 'Prata' }}>
                Galeri
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Nemi Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Meyta Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="relative flex items-center justify-center max-w-[451px] h-screen whitespace-pre-line mx-auto">
        <div className="absolute inset-0 w-full h-full" ref={section5Ref}>
          <video
            ref={videoRef5}
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
            style={{ opacity: 1 }}
          >
            <source
              src="https://asset.menica.pro/menicav4/botanic-COOL-bg3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="w-[70%] z-50 text-center">
            <div className="text-4xl text-[#2B6F51]" style={{ fontFamily: 'Prata' }}>
                Mempelai
            </div>

            <div className="flex justify-around items-center mt-7 flex-col">
                <div className="text-left flex flex-row">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" alt="Nemi Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        Mahanaim Purba, S.Sn
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                    </div>
                    </div>
                    
                </div>

                <div className="text-left flex flex-row mt-5">
                    <img src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" alt="Meyta Photo" className="w-32 h-auto rounded-lg shadow-md mx-auto"/>
                    <div className="flex flex-col">

                    <div className="text-xl text-[#2B6F51] mt-3 ml-4" style={{ fontFamily: 'Prata' }}>
                        dr. Agnes Meyta Arpinda Tampubolon
                    </div>
                    <div className="text-sm text-[#2B6F51] mt-2 ml-4" style={{ fontFamily: 'Metrophobic' }}>
                        Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      {
        isPlaying ? <></> : <button
        onClick={handlePlayPause}
        className="bg-transparent border border-white text-[#2B6F51] px-6 py-3 rounded-full backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 font-bold"
        style={{
          fontFamily: 'Metrophobic'
        }}
      >
        {isPlaying ? 'Pause' : 'Open Invitation'}
      </button>
      }
        
      </div>
    </>
  );
};

export default Cover;
