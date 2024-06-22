'use client'

import React, { useState } from 'react';
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { TbMapSearch } from "react-icons/tb";

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
        <div className="bg-cover sm:bg-contain bg-no-repeat min-h-screen flex justify-center items-center relative w-[450px] bg-center mx-auto z-10 overflow-x-hidden" 
            style={{ 
                backgroundImage: `url(https://terhubung.id/wp-content/uploads/04.-CUTE-PANDA-BG.jpeg)`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
        <div className="flex justify-center items-center min-h-screen text-white w-full p-6"
            
            style={{
                fontFamily: 'Londrina Solid'
            }}
            
        >
           <div className="bg-transparent bg-opacity-80 w-full mx-auto">
           <section id="section1" className="p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center w-full rounded-lg mb-10">
                <h2 className="text-lg font-semibold text-center uppercase text-[#000000]">You Are Invited to</h2>
                <p className="textstroke text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#FFDC5C] font-['Londrina_Solid'] stroke-2 stroke-white">
                    AZKA NAUFAL
                </p>
                <div className="text-center text-[#000000]">1<sup>ST</sup> BIRTHDAY PARTY</div>
                <img src="https://terhubung.id/wp-content/uploads/04.-CUTE-PANDA-01.png" alt="Astronaut" className="mx-auto"/>
                <div className="text-center px-6 py-2 border border-white font-extrabold text-white bg-[#33A792] bg-opacity-80 rounded-md mt-2">
                    <div className='mb-4 text-3xl'>
                        Halo,
                    </div>
                    <div className='mb-4 text-3xl'>
                        Nama Tamu
                    </div>
                    <div className="w/3-4 cursor-pointer text-center transition-transform duration-300 ease-in-out transform hover:scale-105 p-2 font-extrabold text-white bg-[#FFDC5C] text-3xl rounded-md mb-4 flex  items-center justify-center" onClick={()=> scrollToSection2()}>
                        <FaRegEnvelopeOpen size={25} className='mr-3'/> Buka Undangan
                    </div>
                </div>
                
            </section>
            {showSections && (
                <>
                    <div className="relative">
                    <section id="section2" className="px-4 min-h-[calc(70vh)] h-auto py-16 flex flex-col justify-start bg-[#33A792] bg-opacity-80 shadow-md w-full rounded-lg">
                       
                    <p className="text-center text-3xl">Halo Teman Teman,</p>
                    <p className="text-center text-3xl">Datang Yuk!</p>
                    <p className="text-center text-3xl">Ke Acara Ulang Tahunku</p>
                        <img src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Astronaut" className="rounded-md mt-10 mx-auto border-solid shadow-lg border-[10px] border-[#FFDC5C]"
                            style={{
                                width: '70%',
                                height: 'auto'
                            }}
                        />
                    <div className="text-[#FFDC5C] text-3xl text-center my-6">
                        AZKA NAUFAL PUTRA
                    </div>

                    <div className="text-[#fff] text-3xl text-center my-6">
                    Putra dari Bapak Awan
                    & Ibu Pelangi
                    </div>
                       
                    </section>

                    <div className="flex justify-center items-center"
                        style={{
                            marginTop: '-80px',
                            marginLeft: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/04.-CUTE-PANDA-02.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>
                    
                    <section id="section3" className="p-4 h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#33A792] bg-opacity-80 w-full rounded-lg mb-10">
                        
                        <div className="text-[#FFDC5C] text-3xl text-center my-6 uppercase">
                            Save The Date
                        </div>
                        <div className="text-[#FFDC5C] text-3xl text-center my-6 uppercase">
                           [09.09.09.09]
                        </div>
                        <div className="p-4 flex flex-col justify-center shadow-md bg-[#fff] w-full rounded-lg border-[#FFDC5C] border-4 text-center">
                                <div className='text-[#33A792] text-5xl font-extrabold uppercase'>
                                    Minggu
                                </div>
                                <div className='text-[#FFDC5C] text-9xl font-extrabold'>
                                    26
                                </div>
                                <div className='text-[#33A792] text-5xl font-extrabold'>
                                    DES 2024
                                </div>
                                <div className='text-[#33A792] text-lg font-extrabold'>
                                    13.00 WIB - 15.00 WIB
                                </div>
                                <div className='text-[#33A792] text-xl font-extrabold mt-3'>
                                    <div className='text-[#FFDC5C] text-5xl'>
                                        MARGO CITY
                                    </div>
                                    Jl. Margonda Raya No. 358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423
                                </div>
                                <div className="p-2 bg-[#FFDC5C] text-white text-lg  sm:text-3xl w-2/3 rounded-md my-4 mx-auto flex justify-center items-center font-extrabold mb-10">
                                    <TbMapSearch size={25} className='mr-3'/> Google Map
                                </div>
                        </div>
                    </section>

                    <div className="flex justify-center items-center mt-[-50px] sm:mt-[-150px]"
                        style={{
                            marginRight: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/04.-CUTE-PANDA-02.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>

                    <section id="section4" className="p-4 h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#33A792] bg-opacity-80 w-full rounded-lg mb-10">
                        
                        <div className="text-[#FFDC5C] text-3xl text-center my-6 uppercase">
                            Galeri
                        </div>
                    </section>

                    <div className="flex justify-center items-center"
                        style={{
                            marginTop: '-150px',
                            marginLeft: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/04.-CUTE-PANDA-02.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>



                    <section id="section4" className="p-4 min-h-[calc(100vh-80px)] h-auto flex flex-col justify-start shadow-md bg-[#33A792] bg-opacity-80 w-full rounded-lg mb-10">
                        
                        <div className="text-[#FFDC5C] text-3xl text-center my-6 uppercase">
                            Ucapan & Doa
                        </div>
                    </section>

                    <section id="section5" className="p-4 min-h-[calc(100vh-80px)] h-auto flex flex-col justify-start shadow-md bg-[#33A792] bg-opacity-80 w-full rounded-lg mb-10">
                        <img src="https://terhubung.id/wp-content/uploads/04.-CUTE-PANDA-01.png" alt="Astronaut" className="mx-auto"/>
                        <div className="text-[#FFDC5C] text-3xl text-center my-6 uppercase">
                            Terima Kasih
                        </div>
                        <div className="text-[#fff] text-3xl text-center my-6">
                            Aku Tunggu Kehadiran<br/>
                            Teman-Teman Yaa
                        </div>

                        <img src="https://plus.unsplash.com/premium_photo-1683376196802-503c5a2ba30a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1vbSUyMGRhZCUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D
                        " alt="Astronaut" className="rounded-md mt-2 mx-auto border-solid shadow-lg border-[10px] border-[#FFDC5C]"
                            style={{
                                width: '70%',
                                height: 'auto'
                            }}
                        />

                        
                        <div className="text-[#FFDC5C] text-lg text-center my-6">
                            Digital Invitation by
                        </div>
                        <img src="https://ik.imagekit.io/vtvggda66/menicaid/webapp/menica_greenlogo.png?updatedAt=1708333173911" alt="Astronaut" className="mx-auto mb-10"
                            style={{
                                width: '30%'
                            }}
                        />
                        
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
