'use client'

import { useEffect } from "react";
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Montserrat, Nunito, Palanquin } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], display: 'swap', style: ['normal', 'italic'], })
const montserrat = Montserrat({ subsets: ["latin"] })
import { FcMms, FcCursor, FcParallelTasks, FcNightLandscape, FcVoicePresentation, FcApproval, FcCollaboration } from "react-icons/fc";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

function Testi(){

    const phoneNumber = '+6281381593461'; // Phone number with country code
    const message = 'Hello Admin, Can We Help You?';

    const OrderNow = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    useEffect(() => {
        AOS.init();
    }, [])

    const testilist = [
        {
            photo: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.54+AM.jpeg',
            comment: 'Astronot',
            detail: 'Kepercayaan berawal dari pengalaman. Sejak 2014, kami telah menjadi mitra terpercaya ribuan pasangan dalam menciptakan undangan pernikahan online.',
            detail_id: 'Kepercayaan berawal dari pengalaman. Sejak 2014, kami telah menjadi mitra terpercaya ribuan pasangan dalam menciptakan undangan pernikahan online.',
            color: '#0f223e',
            icon: <FcCursor size={35}/>,
            demo: 'https://menica.id',
        },
        {
            photo: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.53+AM(1).jpeg',
            comment: 'Dragon',
            detail: 'Menciptakan momen spesial tak harus mahal. Ciptkan undangan pernikahan yang terjangkau dengan fitur maksimal',
            detail_id: 'Menciptakan momen spesial tak harus mahal. Ciptkan undangan pernikahan yang terjangkau dengan fitur maksimal',
            color: '#522e65',
            icon: <FcCollaboration size={35}/>,
            demo: 'https://menica.id',

        },
        {
            photo: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.53+AM.jpeg',
            comment: ' Dino ',
            detail: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap, template bervariasi!',
            detail_id: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap dan tersedia banyak template!',
            color: '#4a8b8c',
            icon: <FcMms size={35}/>

        },
        {
            photo: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.52+AM(1).jpeg',
            comment: 'Panda ',
            detail: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap, template bervariasi!',
            detail_id: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap dan tersedia banyak template!',
            color: '#663',
            icon: <FcMms size={35}/>,
            demo: 'https://menica.id',

        },
        {
            photo: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.52+AM.jpeg',
            comment: 'Lebah ',
            detail: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap, template bervariasi!',
            detail_id: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap dan tersedia banyak template!',
            color: '#ef6c00',
            icon: <FcMms size={35}/>,
            demo: 'https://menica.id',

        },
        {
            photo: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.51+AM.jpeg',
            comment: 'Penyu ',
            detail: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap, template bervariasi!',
            detail_id: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap dan tersedia banyak template!',
            color: '#03a9f4',
            icon: <FcMms size={35}/>,
            demo: 'https://menica.id',

        },
        {
            photo: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.51+AM(1).jpeg',
            comment: 'Elephant',
            detail: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap, template bervariasi!',
            detail_id: 'Ciptakan undangan pernikahan digital dengan mudah di Menica: fitur lengkap dan tersedia banyak template!',
            color: '#fc7b89',
            icon: <FcMms size={35}/>,
            demo: 'https://menica.id',

        },
        
    ]

    const gotodemo = (link: any) => {

        console.log(link);

        window.open(link, '_blank');
        
    }
    

    return (
        <>
            <div className="flex flex-row justify-center items-center px-6 bg-[white] mt-[100px] sm:mt-[100px]">
                        <div className="flex flex-col justify-center">
                            <div className="font-Nunito uppercase font-[600] text-slate-400 text-sm sm:text-base text-center mb-2 tracking-wide" style={nunito.style}>
                                <p style={{
                                    fontFamily: 'Londrina Solid'
                                }}>
                                    New Theme
                                </p>
                            </div>
                            <div className="font-[700] text-[#403F40] text-[2rem] sm:text-[3.5rem] text-center leading-normal" style={nunito.style}>
                                <p style={{
                                    fontFamily: 'Londrina Solid'
                                }}>
                                    <span className="text-[#3EA80C] uppercase">Kids Toon</span> Series
                                </p>
                                <p className={`text-[1rem] sm:text-[1.2rem] text-slate-600 font-bold my-5 tracking-tigher font-DM`}
                                    style={{
                                        fontFamily: 'Londrina Solid'
                                    }}
                                >
                                       Cocok untuk Undangan <span className="text-[#522e65]">Ultah</span>, <span className="text-[#4a8b8c]">Khitan</span>, 
                                       <span className="text-[#ef6c00]"> Aqiqah</span>
                                </p>
                            </div>
                        </div>
                </div>
                <div className="relative flex flex-col justify-center items-center bg-[white] mt-6 mb-10">
                        <div className="bg-[#fff] w-[60%] mx-auto rounded-md py-6 grid grid-cols-1 sm:grid-cols-3 place-content-center gap-10" data-aos="fade-in">
                                {
                                    testilist.map((item, index) =>(
                                        <div className="shadow-lg rounded-md flex flex-col bg-[#fff] py-6 px-6 border-[#3EA80C] border-b-8 hover:bg-slate-100 transition-all">
                                            <div className="flex flex-col text-left" style={nunito.style}>
                                                <div className="flex flex-row items-center justify-between">
                                                        <div className="font-bold text-sm text-[#fff] my-2 mt-0" style={nunito.style}>
                                                            <img src={item.photo} alt='' className="rounded-md shadow-xl"/>
                                                        </div>
                                                </div>
                                                
                                                <p className={`text-3xl text-slate-600 font-bold mt-10 mb-5`} style={{ 
                                                    lineHeight: 0, 
                                                    color: item.color,
                                                    fontFamily: 'Londrina Solid',
                                                    // letterSpacing: 'initial'
                                                }}>
                                                    {item.comment}
                                                </p>

                                                <p className={`font-medium text-xs text-[#403F40] mb-2 italic ${nunito.className}`} style={ {marginTop : '20px' }}>
                                                    {item.detail}
                                                </p>

                                                <div 
                                                    onClick={()=> gotodemo(item.demo)}
                                                    className="hover:bg-slate-200 sm:p-2 p-4 rounded-md text-center text-green-700 border border-green-700 font-extrabold underline my-2 cursor-pointer">
                                                    Live Demo
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                                
                        </div>

                        {/* Order Now Button */}
                        <div className="w-[60%] flex flex-row p-3 bg-green-700 text-white text-lg cursor-pointer hover:bg-green-900 text-center shadow-xl rounded-md my-10 items-center justify-center" 
                            style={{
                                fontFamily: 'Londrina Solid',
                            }}
                            onClick={()=> OrderNow()}
                        >
                            <PiWhatsappLogoDuotone size={25} className="mr-2"/>
                            Order Sekarang
                        </div>
                </div>
        </>
    )
}

export default Testi;