'use client'

import React, { useRef, useState } from 'react';

const Cover: React.FC = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef1.current?.pause();
      videoRef2.current?.pause();
    } else {
      videoRef1.current?.play();
      videoRef2.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="relative flex items-center justify-center max-w-[451px] h-screen whitespace-pre-line mx-auto">
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
      </div>
      <div className="relative flex items-center justify-center max-w-[451px] h-screen whitespace-pre-line mx-auto">
        <div className="absolute inset-0 w-full h-full">
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
        <button
          onClick={handlePlayPause}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </>
  );
};

export default Cover;
