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
        <div className="bg-cover sm:bg-contain bg-no-repeat min-h-screen flex justify-center items-center relative w-[450px] bg-center mx-auto z-10 overflow-x-hidden overflow-y-hidden" 
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
           <section id="section2" className="p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center shadow-md w-full rounded-lg mb-10">
                <h2 className="text-lg font-semibold text-center">Section 1</h2>
                <p className="text-center">YOU ARE INVITED TO</p>
                <p className="text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                    AZKA NAUFAL
                </p>
                <p className="text-center">1ST BIRTHDAY PARTY</p>
                <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                <p className="text-center">This is the content of the second section.</p>
                <div className="p-2 font-extrabold text-white" onClick={()=> scrollToSection2()}>
                    Buka Undangan
                </div>
            </section>
            {showSections && (
                <>
                    <section id="section2" className="p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center bg-white shadow-md bg-opacity-70 w-full rounded-lg mb-10">
                        <h2 className="text-lg font-semibold text-center">Section 3</h2>
                        <p className="text-center">YOU ARE INVITED TO</p>
                        <p className="text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                            AZKA NAUFAL
                        </p>
                        <p className="text-center">1ST BIRTHDAY PARTY</p>
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                        <p className="text-center">This is the content of the second section.</p>
                    </section>

                    <section id="section2" className="p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center bg-white shadow-md bg-opacity-70 w-full rounded-lg mb-10">
                        <h2 className="text-lg font-semibold text-center">Section 3</h2>
                        <p className="text-center">YOU ARE INVITED TO</p>
                        <p className="text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                            AZKA NAUFAL
                        </p>
                        <p className="text-center">1ST BIRTHDAY PARTY</p>
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                        <p className="text-center">This is the content of the second section.</p>
                    </section>
                    <section id="section2" className="p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center bg-white shadow-md bg-opacity-70 w-full rounded-lg mb-10">
                        <h2 className="text-lg font-semibold text-center">Section 3</h2>
                        <p className="text-center">YOU ARE INVITED TO</p>
                        <p className="text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F6B772] font-['Londrina_Solid'] stroke-2 stroke-white">
                            AZKA NAUFAL
                        </p>
                        <p className="text-center">1ST BIRTHDAY PARTY</p>
                        <img src="https://terhubung.id/wp-content/uploads/01.-ASTRONOT-01.png" alt="Astronaut" className="mx-auto"/>
                        <p className="text-center">This is the content of the second section.</p>
                    </section>
                </>
            )}
            </div>
        </div>
        </div>


    </div>
  );
};

export default App;
