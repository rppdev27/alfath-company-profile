'use client'

import React, { useRef, useState, useEffect } from 'react';

const Cover: React.FC = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
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
    } else {
      videoRef1.current?.play();
      videoRef2.current?.play();
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
              src="https://asset.menica.pro/menicav4/summer-NIGHT-motion.mp4"
              type="video/mp4"
            />
          </video>
          
        </div>

        <div className="w-[70%] z-50 flex flex-col mx-auto text-center mt-[42%]">

            <div className="text-lg text-white" style={{
                fontFamily: 'Metrophobic'
            }}>
                The Wedding Of
            </div>
            <div className="text-6xl font-extrabold text-white mt-5" style={{
                fontFamily: 'Lily Script One'
                // fontFamily: 'Metrophobic'
            }}>
                Nemi <br/>
                Meyta
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
              src="https://asset.menica.pro/menicav4/summer-NIGHT-bg1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      {
        isPlaying ? <></> : <button
        onClick={handlePlayPause}
        className="bg-transparent border border-white text-white px-6 py-3 rounded-full backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 font-bold"
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

