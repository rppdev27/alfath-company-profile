'use client'

import React, { useState, useEffect, useRef } from 'react';

const WeddingInvitation = () => {

   // State to track the visibility of the additional box
  const [showBox, setShowBox] = useState(false);
  const [isOpenMessage, setOpenedMessage] = useState(true);
  const [notifOpen, setNotifOpen] = useState(false);

  // Function to toggle the visibility of the box
  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const timerRef: any = useRef(null);

  useEffect(() => {
    // Set a timer to call your function after 4 seconds
    timerRef.current = setTimeout(() => {
      setNotifOpen(true);
    }, 4000);

    // Clean up the timer on component unmount to avoid memory leaks
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    // this is end of function.

  }, []);

  const arr = [1,1,1,1,1,1,1,1];


  return (
    <>
    {/* this button mnot showing in the side for large viewport */}
    <div className="fixed p-4 bg-transparent text-white  bottom-0 right-0 z-40">
        {/* Button to toggle the box */}
        {
          true ? <>

            <button
            className={`flex items-center justify-center w-12 h-12 transition-all duration-500`} style={{

              right: notifOpen ? '-10px' : '-150px' ,
              opacity: notifOpen ? 1 : 0,
              bottom: notifOpen ? '-30px' : '15px',

            }}
            onClick={toggleBox}
          >
            <img
              src="https://www.menica.online/img/icons/envelope_notifred.svg"
              alt="Envelope Icon"
              className="w-8 h-8"
            />
          </button>
          </> : <></>
        }
        
        <div
          className="inbox-button cssanimation sequence fadeInBottom"
        >
          <div className={`inbox__items ${showBox ? 'inbox__items--active' : ''}`}>
            <div className="inbox__item drop-shadow-lg">

              {
                isOpenMessage ? <>

                  <div className="flex flex-col" onClick={() => setOpenedMessage(false)}>
                    <div className="flex">
                      <img src="https://www.menica.online/img/message_gold3.svg" alt="" />
                      <p className="ml-2 font-500 text-[9px] md:text-xs text-gray-600">
                        Message Invitation for
                      </p>
                      <p
                      className="font-500 text-[9px] md:text-xs text-gray-600 brown-style"
                      >Open</p>
                    </div>
                    <h3 className="text-gray-900 text-[14px] md:text-xl mt-2">
                      Tamu Undangan
                    </h3>
                    
                  </div>

                </> : <>
                <div style={{ position: 'relative' }}>
                    <div
                      onClick={() => setOpenedMessage(true)}
                      className="font-500 text-[10px] md:text-xs text-gray-600 brown-style"
                    >
                      Close Panel
                    </div>
                    <p className="font-500 text-[9px] md:text-xs text-gray-600">Dear,</p>
                    <h3
                      className="text-gray-900 text-[14px] md:text-xl mt-3 cssanimation sequence fadeInBottom"
                      style={{color: '#ceaa4a'}}
                    >
                      <span> Tamu Undangan </span>
                    </h3>
                    <p
                      className="font-500 text-[9px] md:text-xs text-gray-600 mt-3 cssanimation sequence fadeInBottom"
                    >
                      You're invited to our wedding ceremony.
                    </p>
                
                  </div>
                </>
              }
            </div>
          </div>
          </div>
      </div>
    
    {
      arr.map(()=> <>

      <div className="min-h-screen flex justify-center items-center relative bg-cover bg-center max-w-[400px] mx-auto z-10 py-[80px] sm:py-[0px]" 
              style={{ 
                backgroundImage: `url('https://ik.imagekit.io/vtvggda66/menicaid6_PVsRdC4p1.png?updatedAt=1713521184234')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
            <div className="absolute inset-0 flex justify-center items-center z-40 py-5 px-3">
              <img
                  src="https://invitato.net/template-rainajanssen/static/cover-c7f6fb8641f5be40e090c147f4bcc1fd.png"
                  alt="Background Image"
                  className="max-w-95% h-[97%] m-5"
              />
              </div>
            {/* Black overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black opacity-50 z-30"></div>

            {/* Content container */}
            <div className="z-40 p-6 rounded-lg text-center text-white"
                style={{ 
                  maxWidth: '400px',
                  width: '90%', // Adjust width to your preference
                }}>
              <h1 className="text-xl font-bold mb-4">THE WEDDING OF</h1>
              <h2 className="text-2xl font-bold mb-4">Alda & Tegar</h2>
              <p className="text-lg mb-6">SABTU, 24 FEBRUARI 2024</p>
            </div>
            {/* Sticky button at bottom right */}
          </div>

      </>)
    }
    </>
  );
};

export default WeddingInvitation;
