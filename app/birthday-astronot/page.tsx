'use client'

import React, { useState } from 'react';

const App: React.FC = () => {

    const [showSections, setShowSections] = useState(false);

    const scrollToSection2 = () => {
        setShowSections(true);
        setTimeout(() => {
            const section2 = document.getElementById('section2');
            if (section2) {
                section2.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adding a slight delay to ensure the sections are rendered
    };
  return (

    <div className="flex justify-center items-center bg-slate-200 relative">
        <div className="bg-cover sm:bg-contain bg-no-repeat min-h-screen flex justify-center items-center relative w-[450px] bg-center mx-auto z-10" 
            style={{ 
                backgroundImage: `url(https://terhubung.id/wp-content/uploads/01.-BG-FIXED.jpeg)`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
        <div className="flex justify-center items-center min-h-screen text-white w-full p-6"
            style={{
                fontFamily: 'Londrina Solid'
            }}
        >
           <div className="bg-transparent bg-opacity-80 w-full mx-auto shadow-md">
           <section id="section1" className="p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center w-full rounded-lg mb-10">
                <h2 className="text-lg font-semibold text-center uppercase">You Are Invited to</h2>
                <p className="textstroke text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                    AZKA NAUFAL
                </p>
                <p className="text-center">1<sup>ST</sup> BIRTHDAY PARTY</p>
                <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                <div className="text-2xl text-center px-6 py-2 border border-white font-extrabold text-white bg-[#182E4B] bg-opacity-80 rounded-md mt-2">
                    <div className='mb-4'>
                        Halo,
                    </div>
                    <div className="w/3-4 cursor-pointer text-center transition-transform duration-300 ease-in-out transform hover:scale-105 p-2 font-extrabold text-white bg-[#F6B772] text-2xl rounded-md mb-4" onClick={()=> scrollToSection2()}>
                        Buka Undangan
                    </div>
                </div>
                
            </section>
            {showSections && (
                <>
                    <div className="relative">
                    <section id="section2" className="p-4 h-[calc(100vh-80px)] flex flex-col justify-center bg-[#182E4B] bg-opacity-80 shadow-md w-full rounded-lg">
                        <h2 className="text-lg font-semibold text-center">Section 3</h2>
                        <p className="text-center">YOU ARE INVITED TO</p>
                        <p className="text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                            AZKA NAUFAL
                        </p>
                        <p className="text-center">1ST BIRTHDAY PARTY</p>
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                        <p className="text-center">This is the content of the second section.</p>
                    </section>

                    <div className="flex justify-center items-center"
                        style={{
                            marginTop: '-150px',
                            marginLeft: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-02-e1718723313157.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>
                    
                    <section id="section3" className="p-4 h-[calc(100vh-80px)] flex flex-col justify-center shadow-md bg-[#182E4B] bg-opacity-80 w-full rounded-lg mb-10">
                        <h2 className="text-lg font-semibold text-center">Section 3</h2>
                        <p className="text-center">YOU ARE INVITED TO</p>
                        <p className="text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                            AZKA NAUFAL
                        </p>
                        <p className="text-center">1ST BIRTHDAY PARTY</p>
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                        <p className="text-center">This is the content of the second section.</p>
                    </section>

                    <div className="flex justify-center items-center"
                        style={{
                            marginTop: '-150px',
                            marginRight: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-02-e1718723313157.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>

                    <section id="section2" className="p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center bg-[#182E4B] shadow-md bg-opacity-80 w-full rounded-lg mb-10">
                        <h2 className="text-lg font-semibold text-center">Section 3</h2>
                        <p className="text-center">YOU ARE INVITED TO</p>
                        <p className="text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                            AZKA NAUFAL
                        </p>
                        <p className="text-center">1ST BIRTHDAY PARTY</p>
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                        <p className="text-center">This is the content of the second section.</p>
                    </section>
                    </div>
                </>
            )}
            </div>
        </div>
        </div>


    </div>
  );
};

export default App;
