
'use client'

import React, { useState, useEffect } from 'react';
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { TbMapSearch } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const App: React.FC = () => {

    const [showSections, setShowSections] = useState(false);
    const [currentSection, setCurrentSection] = useState('section1');

    const scrollToSection = (sectionId: string) => {
        setShowSections(true);
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adding a slight delay to ensure the sections are rendered
    };

    const scrollToSection2 = () => {
        setShowSections(true);
        setTimeout(() => {
            const section2 = document.getElementById('section2');
            if (section2) {
                section2.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adding a slight delay to ensure the sections are rendered
    };

    const handleScroll = () => {
        const sectionIds = ['section1', 'section2', 'section3', 'section4', 'section5'];
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setCurrentSection(id);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (

    <div className="flex justify-center items-center bg-slate-200 relative">
        <div className="bg-cover sm:bg-contain bg-no-repeat min-h-screen flex justify-center items-center relative w-[450px] bg-center mx-auto z-10 overflow-x-hidden" 
            style={{ 
                backgroundImage: `url(https://terhubung.id/wp-content/uploads/07.-HAPPY-TURTLE-BG.jpeg)`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
        {/* <div className="fixed top-5 left-5 h-auto rounded-md w-auto p-5 bg-black bg-opacity-20 text-black flex flex-col items-center py-8 z-50"> */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-start justify-center h-auto w-16 bg-transparent text-white flex-col z-30"
            style={{
                fontFamily: 'Londrina Solid',
                fontSize: '0.8rem'
            }}
        >
            <button className={`rounded-l-lg text-[0.5rem] uppercase items-center py-2 px-4 mb-4 flex flex-col ${currentSection === 'section1' ? 'bg-[#F4AC36]' : ''}`} onClick={() => scrollToSection('section1')}>
                <MdOutlineKeyboardDoubleArrowDown size={15}/>
                Beranda
            </button>
            <button className={`rounded-l-lg text-[0.5rem] uppercase items-center flex flex-col transition-all duration-300 py-2 px-4 mb-4 ${currentSection === 'section2' ? 'bg-[#F4AC36]' : ''}`} onClick={() => scrollToSection('section2')}>
                <MdOutlineKeyboardDoubleArrowDown size={15}/>
                Beranda
            </button>
            <button className={`rounded-l-lg text-[0.5rem] uppercase flex items-center flex-col transition-all duration-300 py-2 px-4 mb-4 ${currentSection === 'section3' ? 'bg-[#F4AC36]' : ''}`} onClick={() => scrollToSection('section3')}>
                <MdOutlineKeyboardDoubleArrowDown size={15}/>
                Beranda
            </button>
            <button className={`rounded-l-lg text-[0.5rem] uppercase flex items-center flex-col transition-all duration-300 py-2 px-4 mb-4 ${currentSection === 'section4' ? 'bg-[#F4AC36]' : ''}`} onClick={() => scrollToSection('section4')}>
                <MdOutlineKeyboardDoubleArrowDown size={15}/>
                Beranda
            </button>
            <button className={`rounded-l-lg text-[0.5rem] uppercase flex items-center flex-col transition-all duration-300 py-2 px-4 mb-4 ${currentSection === 'section5' ? 'bg-[#F4AC36]' : ''}`} onClick={() => scrollToSection('section5')}>
            <MdOutlineKeyboardDoubleArrowDown size={15}/>
                Beranda
            </button>
        </div>
        <div className="flex justify-center items-center min-h-screen text-white w-full p-6"
            
            style={{
                fontFamily: 'Londrina Solid'
            }}
            
        >
           <div className="bg-transparent bg-opacity-80 w-full mx-auto">
           <section id="section1" className="z-50 p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center w-full rounded-lg mb-10">
                <h2 className="text-lg font-semibold text-center uppercase text-[#fff]">You Are Invited to</h2>
                <p className="textstroke text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#F4AC36] font-['Londrina_Solid'] stroke-2 stroke-white">
                    AZKA NAUFAL
                </p>
                <div className="text-center text-[#fff]">1<sup>ST</sup> BIRTHDAY PARTY</div>
                <img src="https://terhubung.id/wp-content/uploads/07.-HAPPY-TURTLE-01.png" alt="Astronaut" className="mx-auto"/>
                <div className="text-center px-6 py-2 border border-white font-extrabold text-white bg-[#416A3E] bg-opacity-80 rounded-md mt-2">
                    <div className='mb-4 text-3xl'>
                        Halo,
                    </div>
                    <div className='mb-4 text-3xl'>
                        Nama Tamu
                    </div>
                    <div 
                        style={{
                            zIndex: 9999
                        }}
                    className="w/3-4 cursor-pointer text-center transition-transform duration-300 ease-in-out transform hover:scale-105 p-2 font-extrabold text-white bg-[#F4AC36] text-3xl rounded-md mb-4 flex  items-center justify-center" onClick={() => scrollToSection('section2')}>
                        <FaRegEnvelopeOpen size={25} className='mr-3'/> Buka Undangan
                    </div>
                    {/* <button
                    className="bg-white/20 backdrop-filter backdrop-blur-md rounded-lg p-2 text-gray-600 hover:bg-white/30 hover:shadow-lg transition duration-300 ease-in-out"
                    >
                    Click Me!
                    </button> */}
                </div>
                
            </section>
            {showSections && (
                <>
                    <div className="relative">
                    <section id="section2" className="px-4 min-h-[calc(70vh)] h-auto py-16 flex flex-col justify-start bg-[#416A3E] bg-opacity-80 shadow-md w-full rounded-lg">
                       
                    <p className="text-center text-3xl">Halo Teman Teman,</p>
                    <p className="text-center text-3xl">Datang Yuk!</p>
                    <p className="text-center text-3xl">Ke Acara Ulang Tahunku</p>
                        <img src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Astronaut" className="rounded-md mt-10 mx-auto border-solid shadow-lg border-[10px] border-[#F0A038]"
                            style={{
                                width: '70%',
                                height: 'auto'
                            }}
                        />
                    <div className="text-[#F4AC36] text-3xl text-center my-6">
                        AZKA NAUFAL PUTRA
                    </div>

                    <div className="text-[#fff] text-3xl text-center my-6">
                    Putra dari Bapak Awan
                    & Ibu Pelangi
                    </div>

                    {/* floating circle button goto next section */}
                    <div className="mx-auto flex items-center justify-center border-white border-solid border-2 h-12 w-12 bg-cyan-500 rounded-full shadow-lg cursor-pointer hover:bg-cyan-700 animate-bounce mt-4"
                        onClick={()=> scrollToSection('section3')}
                    >
                        <MdOutlineKeyboardDoubleArrowDown size={25} className="h-6 w-6 text-white" />
                    </div>
                       
                    </section>

                    <div className="flex justify-center items-center"
                        style={{
                            marginTop: '-80px',
                            marginLeft: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/07.-HAPPY-TURTLE-02.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>
                    
                    <section id="section3" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#416A3E] bg-opacity-80 w-full rounded-lg mb-10">
                        
                        <div className="text-[#F4AC36] text-3xl text-center my-6 uppercase">
                            Save The Date
                        </div>
                        <div className="text-[#F4AC36] text-3xl text-center my-6 uppercase">
                           [09.09.09.09]
                        </div>
                        <div className="p-4 flex flex-col justify-center shadow-md bg-[#fff] w-full rounded-lg border-[#F0A038] border-4 text-center">
                                <div className='text-[#416A3E] text-5xl font-extrabold uppercase'>
                                    Minggu
                                </div>
                                <div className='text-[#F4AC36] text-9xl font-extrabold'>
                                    26
                                </div>
                                <div className='text-[#416A3E] text-5xl font-extrabold'>
                                    DES 2024
                                </div>
                                <div className='text-[#416A3E] text-lg font-extrabold'>
                                    13.00 WIB - 15.00 WIB
                                </div>
                                <div className='text-[#416A3E] text-xl font-extrabold mt-3'>
                                    <div className='text-[#F4AC36] text-5xl'>
                                        MARGO CITY
                                    </div>
                                    Jl. Margonda Raya No. 358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423
                                </div>
                                <div className="p-2 bg-[#416A3E] text-white text-lg  sm:text-3xl w-2/3 rounded-md my-4 mx-auto flex justify-center items-center font-extrabold mb-10">
                                    <TbMapSearch size={25} className='mr-3'/> Google Map
                                </div>
                        </div>
                        <div className="mx-auto flex items-center justify-center border-white border-solid border-2 h-12 w-12 bg-cyan-500 rounded-full shadow-lg cursor-pointer hover:bg-cyan-700 animate-bounce mt-4"
                            onClick={()=> scrollToSection('section4')}
                        >
                            <MdOutlineKeyboardDoubleArrowDown size={25} className="h-6 w-6 text-white" />
                        </div>
                    </section>

                    <div className="flex justify-center items-center mt-[-50px] sm:mt-[-150px]"
                        style={{
                            marginRight: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/07.-HAPPY-TURTLE-02.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>

                    <section id="section4" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#416A3E] bg-opacity-80 w-full rounded-lg mb-10">
                        
                        <div className="text-[#F4AC36] text-3xl text-center my-6 uppercase">
                            Galeri
                        </div>
                        <div className="mx-auto flex items-center justify-center border-white border-solid border-2 h-12 w-12 bg-cyan-500 rounded-full shadow-lg cursor-pointer hover:bg-cyan-700 animate-bounce mt-4"
                        onClick={()=> scrollToSection('section5')}
                    >
                        <MdOutlineKeyboardDoubleArrowDown size={25} className="h-6 w-6 text-white" />
                    </div>
                    </section>

                    <div className="flex justify-center items-center"
                        style={{
                            marginTop: '-150px',
                            marginLeft: '-200px',
                            marginBottom: '-50px'
                        }}
                    >
                        <img src="https://terhubung.id/wp-content/uploads/07.-HAPPY-TURTLE-02.png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>



                    <section id="section4" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#416A3E] bg-opacity-80 w-full rounded-lg mb-10">
                        
                        <div className="text-[#F4AC36] text-3xl text-center my-6 uppercase">
                            Ucapan & Doa
                        </div>
                        <div className="mx-auto flex items-center justify-center border-white border-solid border-2 h-12 w-12 bg-cyan-500 rounded-full shadow-lg cursor-pointer hover:bg-cyan-700 animate-bounce mt-4"
                            onClick={()=> scrollToSection('section6f')}
                        >
                            <MdOutlineKeyboardDoubleArrowDown size={25} className="h-6 w-6 text-white" />
                        </div>

                    </section>

                    <section id="section5" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#416A3E] bg-opacity-80 w-full rounded-lg mb-10">
                        <img src="https://terhubung.id/wp-content/uploads/07.-HAPPY-TURTLE-01.png" alt="Astronaut" className="mx-auto"/>
                        <div className="text-[#F4AC36] text-3xl text-center my-6 uppercase">
                            Terima Kasih
                        </div>
                        <div className="text-[#fff] text-3xl text-center my-6">
                            Aku Tunggu Kehadiran<br/>
                            Teman-Teman Yaa
                        </div>

                        <img src="https://plus.unsplash.com/premium_photo-1683376196802-503c5a2ba30a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1vbSUyMGRhZCUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D
                        " alt="Astronaut" className="rounded-md mt-2 mx-auto border-solid shadow-lg border-[10px] border-[#F0A038]"
                            style={{
                                width: '70%',
                                height: 'auto'
                            }}
                        />

                        
                        <div className="text-[#F4AC36] text-lg text-center my-6">
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
