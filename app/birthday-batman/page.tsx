
'use client'

import React, { useState, useEffect } from 'react';
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { TbMapSearch } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";

import AOS from 'aos'
import 'aos/dist/aos.css';


const App: React.FC = () => {

    const [showSections, setShowSections] = useState(false);
    const [currentSection, setCurrentSection] = useState('section1');
    const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];

    useEffect(() => {
        AOS.init();
    }, [])


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

    useEffect(() => {
        // let currentSectionIndex = 0;

        // const autoplay = () => {
        //     currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        //     scrollToSection(sections[currentSectionIndex]);
        // };

        // const intervalId = setInterval(autoplay, 3000);

        // return () => clearInterval(intervalId); 
    }, []);
  return (

    <div className="flex justify-center items-center bg-slate-200 relative">
        <div className="bg-cover sm:bg-contain bg-no-repeat min-h-screen flex justify-center items-center relative w-[450px] bg-center mx-auto z-10 overflow-x-hidden" 
            style={{ 
                backgroundImage: `url(https://asset.menica.pro/poster-batman-dark-knight-returnsss.jpg)`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
        {
            showSections && <div className="bg-black fixed right-1 rounded-lg shadow-lg bg-opacity-50 top-1/2 transform -translate-y-1/2 flex justify-center px-1 text-white flex-col z-30 p-0 items-center py-1 h-auto"
            style={{
                fontFamily: 'Londrina Solid',
                fontSize: '0.8rem'
            }}
        >
            <button className={`text-[0.5rem] w-full uppercase items-center py-2 mb-4 px-2 flex flex-col ${currentSection === 'section1' ? 'text-[black]' : ''}`} onClick={() => scrollToSection('section1')}>
                <FaRegCircleDot size={15}/>
                {/* Beranda */}
            </button>
            <button className={`text-[0.5rem] w-full uppercase items-center flex flex-col transition-all duration-300 py-2 mb-4 ${currentSection === 'section2' ? 'text-[black]' : ''}`} onClick={() => scrollToSection('section2')}>
                <FaRegCircleDot size={15}/>
                {/* Beranda */}
            </button>
            <button className={`text-[0.5rem] w-full uppercase flex items-center flex-col transition-all duration-300 py-2 mb-4 ${currentSection === 'section3' ? 'text-[black]' : ''}`} onClick={() => scrollToSection('section3')}>
                <FaRegCircleDot size={15}/>
                {/* Beranda */}
            </button>
            <button className={`text-[0.5rem] w-full uppercase flex items-center flex-col transition-all duration-300 py-2 mb-4 ${currentSection === 'section4' ? 'text-[black]' : ''}`} onClick={() => scrollToSection('section4')}>
                <FaRegCircleDot size={15}/>
                {/* Beranda */}
            </button>
            <button className={`text-[0.5rem] w-full uppercase flex items-center flex-col transition-all duration-300 py-2 ${currentSection === 'section5' ? 'text-[#03418a]' : ''}`} onClick={() => scrollToSection('section5')}>
            <FaRegCircleDot size={15}/>
                {/* Beranda */}
            </button>
        </div>
        }
        
        <div className="flex justify-center items-center min-h-screen text-white w-full p-6"
            
            style={{
                fontFamily: 'Londrina Solid'
            }}
            
        >
           <div className="bg-transparent bg-opacity-80 w-full mx-auto">
           <section id="section1" className="z-50 p-4 bg-transparent h-[calc(100vh-80px)] flex flex-col justify-center w-full rounded-lg mb-10">
                <h2 className="text-lg font-semibold text-center uppercase text-[#fff]" data-aos="fade-up">You Are Invited to</h2>
                <p data-aos="fade-up" className="textstroke text-center text-[48px] font-bold leading-tight tracking-[1.5px] text-[#484927] font-['Londrina_Solid'] stroke-2 stroke-white">
                    AZKA NAUFAL
                </p>
                <div className="text-center text-[#fff]" data-aos="fade-up">1<sup>ST</sup> BIRTHDAY PARTY</div>
                {/* <img data-aos="fade-up" src="https://asset.menica.pro/cc08f237-6bb2-44c3-97d7-41cadc638add-removebg-preview.png" alt="Astronaut" className="mx-auto"/> */}
                <img data-aos="fade-up" src="https://asset.menica.pro/b05e4862-8d12-4f7b-a026-d42fb1db401f.png" alt="Astronaut" className="mx-auto"/>
                

                <div className="text-center px-6 py-2 border border-white font-extrabold text-white bg-[#0c1e1b] bg-opacity-80 rounded-md mt-2">
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
                        data-aos="fade-up"
                    className="w/3-4 cursor-pointer text-center transition-transform duration-300 ease-in-out transform hover:scale-105 p-2 font-extrabold text-white bg-[#484927] text-3xl rounded-md mb-4 flex  items-center justify-center" onClick={() => scrollToSection('section2')}>
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
                    <section id="section2" className="px-4 min-h-[calc(70vh)] h-auto py-16 flex flex-col justify-start bg-[#0c1e1b] bg-opacity-80  shadow-md w-full rounded-lg">
                       
                    <p className="text-center text-3xl" data-aos="fade-up">Halo Teman Teman,</p>
                    <p className="text-center text-3xl" data-aos="fade-up">Datang Yuk!</p>
                    <p className="text-center text-3xl" data-aos="fade-up">Ke Acara Ulang Tahunku</p>
                        <img src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Astronaut" className="rounded-md mt-10 mx-auto border-solid shadow-lg border-[10px] border-[#F0A038]"
                            style={{
                                width: '70%',
                                height: 'auto'
                            }}
                            data-aos="fade-up"
                        />
                    <div className="text-[#F0A038] text-3xl text-center my-6" data-aos="fade-up">
                        AZKA NAUFAL PUTRA
                    </div>

                    <div className="text-[#fff] text-3xl text-center my-6" data-aos="fade-up">
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
                        data-aos="fade-up"
                    >
                        <img src="https://asset.menica.pro/innovative-3d-cartoon-design-batman-infant-character(1).png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>
                    
                    <section id="section3" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#0c1e1b] bg-opacity-80  w-full rounded-lg mb-10">
                        
                        <div className="text-[#fff] text-3xl text-center my-6 uppercase">
                            Save The Date
                        </div>
                        <div className="text-[#fff] text-3xl text-center my-6 uppercase">
                           [09.09.09.09]
                        </div>
                        <div className="p-4 flex flex-col justify-center shadow-md bg-[#fff] w-full rounded-lg border-[#F0A038] border-4 text-center">
                                <div className='text-[#4a4a3e] text-5xl font-extrabold uppercase'>
                                    Minggu
                                </div>
                                <div className='text-[#d59530] text-9xl font-extrabold'>
                                    26
                                </div>
                                <div className='text-[#4a4a3e] text-5xl font-extrabold'>
                                    DES 2024
                                </div>
                                <div className='text-[#4a4a3e] text-lg font-extrabold'>
                                    13.00 WIB - 15.00 WIB
                                </div>
                                <div className='text-[#4a4a3e] text-xl font-extrabold mt-3'>
                                    <div className='text-[#d59530] text-5xl'>
                                        MARGO CITY
                                    </div>
                                    Jl. Margonda Raya No. 358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423
                                </div>
                                <div className="p-2 bg-[#4a4a3e] text-white text-lg  sm:text-3xl w-2/3 rounded-md my-4 mx-auto flex justify-center items-center font-extrabold mb-10">
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
                        data-aos="fade-up"
                    >
                        
                        <img src="https://asset.menica.pro/innovative-3d-cartoon-design-batman-infant-character(1).png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>

                    <section id="section4" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#0c1e1b] bg-opacity-80  w-full rounded-lg mb-10">
                        
                        <div className="text-[#fff] text-3xl text-center my-6 uppercase">
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
                        data-aos="fade-up"
                    >
                        <img src="https://asset.menica.pro/innovative-3d-cartoon-design-batman-infant-character(1).png" style={{
                            width: '50%',
                            height: 'auto'
                        }}/>
                    </div>



                    <section id="section4" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#0c1e1b] bg-opacity-80  w-full rounded-lg mb-10">
                        
                        <div className="text-[#fff] text-3xl text-center my-6 uppercase">
                            Ucapan & Doa
                        </div>
                        <div className="mx-auto flex items-center justify-center border-white border-solid border-2 h-12 w-12 bg-cyan-500 rounded-full shadow-lg cursor-pointer hover:bg-cyan-700 animate-bounce mt-4"
                            onClick={()=> scrollToSection('section6f')}
                        >
                            <MdOutlineKeyboardDoubleArrowDown size={25} className="h-6 w-6 text-white" />
                        </div>

                    </section>

                    <section id="section5" className="p-4 h-auto sm:min-h-[calc(100vh-80px)] flex flex-col justify-start shadow-md bg-[#0c1e1b] bg-opacity-80  w-full rounded-lg mb-10">
                        <img src="https://asset.menica.pro/f9417f75-32e8-4b72-b68b-c721e6a566e3-removebg-preview.png" alt="Astronaut" className="mx-auto"/>
                        <div className="text-[#F0A038] text-3xl text-center my-6 uppercase">
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

                        
                        <div className="text-[#fff] text-lg text-center my-6">
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
