'use client'

// important, add flag for panel temple if the backgrround is light

import React, { useState, useEffect } from 'react'
import Mandala1 from '../../components/template-design/mandala-01'
import Mandala2 from '../../components/template-design/mandala-02'
import Spiderman from '../../components/template-design/Spiderman'
import Batman from '../../components/template-design/Batman'
import Astronot from '../../components/template-design/Astronot'
import { FaSquareCheck } from "react-icons/fa6";
import { CgTemplate } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { BsFilterLeft } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

const Desain = () => {

  const [template_id, setTemplate] = useState('template1');
  const [isActiveTemplate, setActiveTemplate] = useState(0);
  const [isActiveColor, setActiveColor] = useState(0);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLocked, setLocked] = useState(false);

  const colorSet_01 = [

        {
          name: "Navy",
          hex: "#152443",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        },
        {
          name: "Maroon",
          hex: "#5B1A27",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-red.png"
        },
        {
          name: "Green",
          hex: "#2A3F3F",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-green.png"
        },
        {
          name: "Brown",
          hex: "#4D4035",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-brown.png"
        },

  ]

  const colorSet_02 = [

        {
          name: "Navy",
          hex: "#152443",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        },
        {
          name: "Maroon",
          hex: "#5B1A27",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-red.png"
        },

  ]

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
    // setLocked(!isOpenModal);
  };
  
  const [template_list, setTemplateList] = useState([
    { id: 'template1', 
      name: 'Luxury 1', 
      description: 'This is the first template', 
      thumbnail: 'https://asset.menica.pro/menicav4/thumbnail-mandala-NAVY.png', 
      publicity: true, 
      colorMode: 'dark',
      colorSet: 1, 
      color: [
        {
          name: "Navy",
          hex: "#152443",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        },
        {
          name: "Maroon",
          hex: "#5B1A27",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-red.png"
        },
        {
          name: "Green",
          hex: "#2A3F3F",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-green.png"
        },
        {
          name: "Brown",
          hex: "#4D4035",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-brown.png"
        },
        // { name: 'Pastel Pink', hex: '#FADADD', status: false },
        // { name: 'Pastel Blue', hex: '#A2C2E3', status: false },
        // { name: 'Pastel Green', hex: '#B3E5C6', status: false },
        // { name: 'Pastel Yellow', hex: '#FCE5A9', status: false },
        // { name: 'Pastel Purple', hex: '#D9B6F0', status: false },
        // { name: 'Pastel Orange', hex: '#F5B3A1', status: false },
        // { name: 'Pastel Peach', hex: '#F7C6C7', status: false },
        // { name: 'Pastel Mint', hex: '#A9D6E5', status: false },
        // { name: 'Pastel Lavender', hex: '#E6C6E7', status: false },
        // { name: 'Pastel Coral', hex: '#F5A9A2', status: false },
        // { name: 'Pastel Gray', hex: '#D0D0D0', status: false },
        // { name: 'Pastel Teal', hex: '#B3D9D9', status: false }

    ]
    },
    { id: 'template2', 
      name: 'Luxury 2', 
      description: 'This is the first template', 
      thumbnail: 'https://asset.menica.pro/menicav4/thumbnail-mandala-GREEN.png', 
      publicity: true, 
      colorMode: 'dark',
      price: 'IDR 150.000',
      category: 'wedding',
      colorSet: 2,
      color: [
        {
          name: "Navy",
          hex: "#152443",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        },
        {
          name: "Maroon",
          hex: "#5B1A27",
          status: false,
          background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        },
        // { name: 'Pastel Pink', hex: '#FADADD', status: false },
        // { name: 'Pastel Blue', hex: '#A2C2E3', status: false },
        // { name: 'Pastel Green', hex: '#B3E5C6', status: false },
        // { name: 'Pastel Yellow', hex: '#FCE5A9', status: false },
        // { name: 'Pastel Purple', hex: '#D9B6F0', status: false },
        // { name: 'Pastel Orange', hex: '#F5B3A1', status: false },
        // { name: 'Pastel Peach', hex: '#F7C6C7', status: false },
        // { name: 'Pastel Mint', hex: '#A9D6E5', status: false },
        // { name: 'Pastel Lavender', hex: '#E6C6E7', status: false },
        // { name: 'Pastel Coral', hex: '#F5A9A2', status: false },
        // { name: 'Pastel Gray', hex: '#D0D0D0', status: false },
        // { name: 'Pastel Teal', hex: '#B3D9D9', status: false }
    ]
    },
    { id: 'template3', 
      name: 'Spiderman', 
      description: 'This is the first template', 
      thumbnail: 'https://asset.menica.pro/thumbnail-kidseries-02.webp', 
      publicity: true, 
      colorMode: 'dark',
      price: 'IDR 150.000',
      category: 'wedding',
      colorSet: 1,
      color: [
        // {
        //   name: "Navy",
        //   hex: "#152443",
        //   status: true,
        //   background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        // },
        // {
        //   name: "Maroon",
        //   hex: "#5B1A27",
        //   status: false,
        //   background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        // },
        // { name: 'Pastel Pink', hex: '#FADADD', status: false },
        // { name: 'Pastel Blue', hex: '#A2C2E3', status: false },
        // { name: 'Pastel Green', hex: '#B3E5C6', status: false },
        // { name: 'Pastel Yellow', hex: '#FCE5A9', status: false },
        // { name: 'Pastel Purple', hex: '#D9B6F0', status: false },
        // { name: 'Pastel Orange', hex: '#F5B3A1', status: false },
        // { name: 'Pastel Peach', hex: '#F7C6C7', status: false },
        // { name: 'Pastel Mint', hex: '#A9D6E5', status: false },
        // { name: 'Pastel Lavender', hex: '#E6C6E7', status: false },
        // { name: 'Pastel Coral', hex: '#F5A9A2', status: false },
        // { name: 'Pastel Gray', hex: '#D0D0D0', status: false },
        // { name: 'Pastel Teal', hex: '#B3D9D9', status: false }
    ]
    },
    { id: 'template4', 
      name: 'Batman', 
      description: 'This is the first template', 
      thumbnail: 'https://asset.menica.pro/thumbnail-kidseries-06.webp', 
      publicity: true, 
      colorMode: 'dark',
      price: 'IDR 150.000',
      category: 'wedding',
      colorSet: 1,
      color: [
        // {
        //   name: "Navy",
        //   hex: "#152443",
        //   status: true,
        //   background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        // },
        // {
        //   name: "Maroon",
        //   hex: "#5B1A27",
        //   status: false,
        //   background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        // },
        // { name: 'Pastel Pink', hex: '#FADADD', status: false },
        // { name: 'Pastel Blue', hex: '#A2C2E3', status: false },
        // { name: 'Pastel Green', hex: '#B3E5C6', status: false },
        // { name: 'Pastel Yellow', hex: '#FCE5A9', status: false },
        // { name: 'Pastel Purple', hex: '#D9B6F0', status: false },
        // { name: 'Pastel Orange', hex: '#F5B3A1', status: false },
        // { name: 'Pastel Peach', hex: '#F7C6C7', status: false },
        // { name: 'Pastel Mint', hex: '#A9D6E5', status: false },
        // { name: 'Pastel Lavender', hex: '#E6C6E7', status: false },
        // { name: 'Pastel Coral', hex: '#F5A9A2', status: false },
        // { name: 'Pastel Gray', hex: '#D0D0D0', status: false },
        // { name: 'Pastel Teal', hex: '#B3D9D9', status: false },
    ]
    },
    { id: 'template5', 
      name: 'Astronot', 
      description: 'This is the first template', 
      thumbnail: 'https://asset.menica.pro/WhatsApp+Image+2024-06-23+at+10.30.54+AM.jpeg', 
      publicity: true, 
      colorMode: 'dark',
      price: 'IDR 150.000',
      category: 'wedding',
      colorSet: 1,
      color: [
        // {
        //   name: "Navy",
        //   hex: "#152443",
        //   status: true,
        //   background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        // },
        // {
        //   name: "Maroon",
        //   hex: "#5B1A27",
        //   status: false,
        //   background_section: "https://asset.menica.pro/menicav4/bg-mandala-2.png"
        // },
        // { name: 'Pastel Pink', hex: '#FADADD', status: false },
        // { name: 'Pastel Blue', hex: '#A2C2E3', status: false },
        // { name: 'Pastel Green', hex: '#B3E5C6', status: false },
        // { name: 'Pastel Yellow', hex: '#FCE5A9', status: false },
        // { name: 'Pastel Purple', hex: '#D9B6F0', status: false },
        // { name: 'Pastel Orange', hex: '#F5B3A1', status: false },
        // { name: 'Pastel Peach', hex: '#F7C6C7', status: false },
        // { name: 'Pastel Mint', hex: '#A9D6E5', status: false },
        // { name: 'Pastel Lavender', hex: '#E6C6E7', status: false },
        // { name: 'Pastel Coral', hex: '#F5A9A2', status: false },
        // { name: 'Pastel Gray', hex: '#D0D0D0', status: false },
        // { name: 'Pastel Teal', hex: '#B3D9D9', status: false }
    ]
    },
    // { id: 'template2', 
    //   name: 'Luxury 2', 
    //   description: 'This is the second template', 
    //   thumbnail: 'https://via.placeholder.com/150',
    //   publicity: true 
    // },
    // { id: 'template3', 
    //   name: 'Luxury 3', 
    //   description: 'This is the third template', 
    //   thumbnail: 'https://via.placeholder.com/150', 
    //   publicity: true 
    // },
    // { id: 'template4', 
    //   name: 'Luxury 4', 
    //   description: 'This is a non-public template', 
    //   thumbnail: 'https://via.placeholder.com/150', 
    //   publicity: false 
    // },
    //   { id: 'template1', 
    //     name: 'Luxury 1', 
    //     description: 'This is the first template', 
    //     thumbnail: 'https://via.placeholder.com/150', 
    //     publicity: true, 
    //   },
    //   { id: 'template2', 
    //     name: 'Luxury 2', 
    //     description: 'This is the second template', 
    //     thumbnail: 'https://via.placeholder.com/150',
    //     publicity: true },
    //   { id: 'template3', 
    //     name: 'Luxury 3', 
    //     description: 'This is the third template', 
    //     thumbnail: 'https://via.placeholder.com/150', 
    //     publicity: true },
    //   { id: 'template4', 
    //     name: 'Luxury 4', 
    //     description: 'This is a non-public template', 
    //     thumbnail: 'https://via.placeholder.com/150', 
    //     publicity: false },
    //     { id: 'template1', 
    //       name: 'Luxury 1', 
    //       description: 'This is the first template', 
    //       thumbnail: 'https://via.placeholder.com/150', 
    //       publicity: true },
    //     { id: 'template2', 
    //       name: 'Luxury 2', 
    //       description: 'This is the second template', 
    //       thumbnail: 'https://via.placeholder.com/150',
    //       publicity: true },
    //     { id: 'template3', 
    //       name: 'Luxury 3', 
    //       description: 'This is the third template', 
    //       thumbnail: 'https://via.placeholder.com/150', 
    //       publicity: true },
    //     { id: 'template4', 
    //       name: 'Luxury 4', 
    //       description: 'This is a non-public template', 
    //       thumbnail: 'https://via.placeholder.com/150', 
    //       publicity: false },
  ]);

  const compButtonLightTheme = () => {
    return (
        <div>
          Light Theme
        </div>
    );
  };

  const [currentColorData, setColorCurrent] = useState('');
  const [imageBG, setBackgroundAsset] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  const [templateIndex, setIndexTemplate] = useState(0);
  

  const updateColorStatus = (templateId: any, index: any, color: any, imageBGs: any) => {
    alert(index);
    setIndexTemplate(index);
    setColorIndex(index);
    setColorCurrent(color);
    setBackgroundAsset(imageBGs);
    setTemplateList(prevTemplates => {
        return prevTemplates.map(template => {
            if (template.id === templateId) {
                const updatedColors = template.color.map((color, i) =>
                    i === index ? { ...color, status: true } : { ...color, status: false }
                );
                return { ...template, color: updatedColors };
            }
            return template;
        });
    });
};


  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

   const [activeTab, setActiveTab] = useState('order');

    const handleTabChange = (tab: any) => {
        setActiveTab(tab);
    };


  const categoryTemplates = [
    {
      id: 1, 
      name: 'Wedding',
      status: true,
      icon: <CgTemplate size={9}/> 
    },
    {
      id: 2, 
      name: 'Birtday',
      status: false,
      icon: <CgTemplate size={9}/> 
    },
    {
      id: 3, 
      name: 'Khitan',
      status: false,
      icon: <CgTemplate size={9}/>  
    },
    {
      id: 4, 
      name: 'Aqiqah',
      status: false,
      icon: <CgTemplate size={9}/>  
    },
    // {
    //   id: 5, 
    //   name: 'Event',
    //   status: true,
    //   icon: <CgTemplate size={11}/>  
    // },

  ]

  const changeColor = (index: any) => {
    setActiveColor(index);
  }

  const [thumbnalActive, setThumbnail] = useState('')
  const [themeActive, setTheme] = useState('')
  const [colorActive, setColor] = useState('')
  const [hexActive, setHex] = useState('')

  const changeTemplate = (id: any, index: any) => { 

    if(template_list[index].color.length > 0){

      setColor(template_list[colorIndex].color[colorIndex].name);
      setTheme(template_list[index].name)
      setThumbnail(template_list[index].thumbnail);
      setTemplate(id);
      setActiveTemplate(index);

    }else{

      setTheme(template_list[index].name)
      setThumbnail(template_list[index].thumbnail);
      setTemplate(id);
      setActiveTemplate(index);

    }
    
  }


  const sendWhatsAppMessageAsk = () => {
    const whatsappLink = `https://wa.me/628567637243?text=Hello%20Admin,%0A%0AI%20want%20to%ask%20${topic}%20with%20custimization%0A%0AThank%20you`;
    window.open(whatsappLink, '_blank');
  };

  const sendWhatsAppMessage = () => {
    const whatsappLink = `https://wa.me/628567637243?text=Hello%20Admin,%0A%0AI%20want%20to%20order%20${order}%20%0A%0AThank%20you`;
    window.open(whatsappLink, '_blank');
  };

 const [order, setOrder] = useState('');
 const [topic, setTopic] = useState(null);

  const handleOptionChange = (event: any) => {
      console.log(`Selected Option: ${event.target.value}`);
      // alert(event.target.value);
      setTopic(event.target.value);
  };

  const handleOptionChangeOrder = (event: any) => {
      // setOrder(event.target.value);
      // alert(event.target.value);
      if(event.target.value === 'ya'){
          setOrder('dengan Custom Template')
      }else{
         setOrder('Tanpa Custom')
      }
  };

  useEffect(()=>{
    console.log(templateIndex)
  },[templateIndex])

  useEffect(() => {
    console.log(themeActive); // This will log the updated colorIndex
  }, [themeActive]);



useEffect(() => {
    console.log(currentColorData); // This will log the updated colorIndex
  }, [currentColorData]);

useEffect(() => {
    console.log(colorActive); // This will log the updated colorIndex
  }, [colorActive]);



  return (
    <div className='relative'>

    {isOpenModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          style={{
            zIndex: '99999'
          }}
        >
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
            style={{
              fontFamily: 'Plus Jakarta Sans'
            }}
          >
            <div className="flex justify-between items-center pb-3">
                <h2 className="text-base text-black font-semibold">Tanya atau Order ?</h2>
                <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={toggleModal}
                >
                    ✖
                </button>
            </div>

             <div className="flex justify-between items-center mb-4 text-xs">
                <button
                    className="flex-1 bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={() => handleTabChange('tanya')}
                    style={{
                        color: activeTab === 'tanya' ? 'black' : '#868686',
                        fontWeight: activeTab === 'tanya' ? '700' : '500',
                        boxShadow: activeTab === 'tanya' ? 'rgba(17, 17, 26, 0.1) 0px 0px 16px' : ''
                    }}
                >
                    Tanya
                </button>
                <button
                    className="flex-1 bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={() => handleTabChange('order')}
                    style={{
                        color: activeTab === 'order' ? 'black' : '#868686',
                        fontWeight: activeTab === 'order' ? '700' : '500',
                        boxShadow: activeTab === 'order' ? 'rgba(17, 17, 26, 0.1) 0px 0px 16px' : ''
                    }}
                >
                    Order
                </button>
            </div>
            <div className="flex flex-col w-full h-full text-xs transition-all duration-500">
                {activeTab === 'tanya' ? (
                    <div className="bg-white p-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                        <h2 className="text-base font-bold">Topik Pertanyaan</h2>
                        <div className="flex flex-col w-full h-full my-2">
                          <div className="flex flex-row my-2">
                              <input type="radio" name="type" value="Desain" onChange={handleOptionChange} className="mr-1" />
                              <label htmlFor="Desain">Desain</label>
                          </div>
                          <div className="flex flex-row my-2">
                              <input type="radio" name="type" value="Mekanisme Daftar" onChange={handleOptionChange} className="mr-1"/>
                              <label htmlFor="Mekanisme Daftar">Mekanisme Daftar</label>
                          </div>
                          <div className="flex flex-row my-2">
                              <input type="radio" name="type" value="Kerjasama/Bisnis" onChange={handleOptionChange} className="mr-1"/>
                              <label htmlFor="Kerjasama/Bisnis">Kerjasama/Bisnis</label>
                          </div>
                          <div className="flex flex-row my-2">
                              <input type="radio" name="type" value="Lainnya" onChange={handleOptionChange} className="mr-1"/>
                              <label htmlFor="Lainnya">Lainnya</label>
                          </div>
                      </div>
                        <button
                                className="w-full bg-[#a71876] text-white px-4 py-2 rounded-md hover:bg-green-600 my-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                                onClick={()=>sendWhatsAppMessageAsk()}
                            >
                                Kontak Whatsapp
                        </button>
                    </div>
                ) : (
                    <div className="bg-white p-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                        <div className="mt-2 text-black font-semibold">
              
                        </div>
                        <div className="mt-4 text-black">
                            <h2 className="text-base font-bold">Detail Order</h2>
                            <div className="my-2 text-black font-semibold">
                                Kamu memilih tema <b>{themeActive}</b>
                            </div>
                            {
                              template_list[templateIndex].color.length > 0 ? <>
                                
                              <div className="my-2 text-black font-semibold">
                                Dengan warna <b><span style={{color: currentColorData, fontWeight: '700' }}>{template_list[templateIndex].color[colorIndex].name}</span></b>
                              </div>

                              </> : <>
                                
                              </> 
                            }
                            
                            <div className="my-2">
                                <img src={thumbnalActive} alt='undangan digital menica' className='rounded-md shadow-lg'/>
                            </div>
                            <div className="mt-5 my-2 text-black font-semibold">
                                <span className='text-green-700 font-bold'>CUSTOM</span> Template atau Tidak?
                            </div>
                            <select className="w-full p-2 text-black my-2" onChange={handleOptionChangeOrder}>
                                <option value="ya">Ya, sama mau custom</option>
                                <option value="tidak" selected>Tidak, saya sudah cocok</option>
                            </select>
                            <button
                                className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 my-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                                onClick={()=>sendWhatsAppMessage()}
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {
              false &&  <div className="mt-4 flex justify-end text-black font-semibold">
                <button
                    className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={toggleModal}
                >
                    Close
                </button>
            </div>
            }

            


        </div>
        </div>
      )}

<div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-auto py-1 px-3 flex text-[0.5rem] sm:text-[0.6rem] tracking-tight text-white rounded-full frosted-glass hover:bg-opacity-40 font-bold transition-all duration-500"
      style={{
        zIndex: '999',
        left: isOpen ? '80px' : '50%'
      }}
>

    {
        isOpen ? <></> : <div className="flex flex-row justify-center items-center p-1 text-white mx-2 cursor-pointer" onClick={togglePanel}>

          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md hover:bg-slate-400 bg-[#3f3f3f30]">
              <CgTemplate size={15}/>
          </div>
          <div className='font-semibold mt-1 ml-2'>
            Template
          </div>
        </div>
      }

    <div className="flex flex-row justify-center items-center p-1 text-white mx-2 cursor-pointer">
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md hover:bg-slate-400 bg-[#3f3f3f30]">
          <FaWhatsapp size={15}/>
      </div>
     <div className='font-semibold mt-1 ml-2' onClick={ () => toggleModal() }>
        Order/Tanya
      </div>
    </div>

    
</div>


      {

        isOpen ? <></> : <button
        onClick={togglePanel}
        className="flex flex-col justify-center items-center fixed z-50 p-2 text-[0.4rem] text-white rounded-md top-2 right-2 hover:bg-slate-300 focus:outline-none frosted-glass font-semibold"
      >
        <CgTemplate size={15} className='text-white'/>
        <div>
          Template
        </div>

      </button>

      }
            {/* this is collapsible menu */}
            <div className={`fixed z-50 flex flex-col items-center text-[0.6rem] p-3 transition-all duration-500 text-white rounded-full frosted-glass rounded-sm top-2 right-0 sm:h-screen h-screen-minus-80 transform ${
                isOpen? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300 ease-in-out`}>
            <div className="relative w-full">
              <div className='sticky top-0 cursor-pointer w-full p-1 text-white rounded-md bg-transparent flex flex-row justify-between items-center' onClick={togglePanel}>
                <IoCloseCircle size={20} className='mr-1 text-black'/>
                Daftar Template
              </div>
            </div>
                {/* <div className='my-1'>
                  Daftar Template
                </div> */}

                <div className='hover:text-slate-300 cursor-pointer w-full px-2 py-1 my-2 mb-4 text-white font-semibold rounded-md bg-[#3f3f3f30] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-row justify-between items-center'>
                  <BsFilterLeft size={20} className='mr-1'/>
                  Filter Kategori
                </div>

               {/* <div className="grid grid-cols-2 gap-4">
                  {categoryTemplates.map((category, index) => (
                    <div key={index} className='frosted-glass-sm cursor-pointer w-full p-1 text-slate-700 rounded-md flex flex-col justify-between items-center font-[0.4rem]'>
                      
                      <div>
                          {category.icon}
                      </div>
                      <div className="font-semibold">
                          {category.name}
                      </div>
                    </div>
                  ))}
                </div>*/}

                <div className="flex flex-col w-full mb-3">
                  {categoryTemplates.map((category, index) => (
                    <div key={index} className='cursor-pointer w-full py-1 text-slate-700 rounded-m flex flex-row text-white justify-end items-center font-[0.4rem]'>
                      
                      <div className="mr-1">
                         {category.icon}
                      </div>
                      <div className="font-semibold hover:underline">
                          {category.name}
                      </div>
                      <div>
                              { category.status ? <IoCheckbox size={12} className="ml-1"/> : <MdOutlineCheckBoxOutlineBlank size={12} className="ml-1"/> }
                      </div>
                    </div>
                  ))}
                </div>
                <div className='overflow-auto h-full w-full'>
                
                {
                  template_list.map((template_, index) => (
                    <>
                          <div 
                                key={index}
                                
                                className={`max-w-[130px] 
                                            h-auto 
                                            z-50 
                                            hover:bg-slate-200 
                                            transition-all 
                                            duration-500 
                                            p-2 
                                            shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] 
                                            cursor-pointer 
                                            mb-4 
                                            rounded-md
                                            text-black
                                            relative
                                            `}

                              style={{
                                backgroundColor: index === isActiveTemplate ? 'white' : 'grey'
                              }}
                            >
                            {
                              index === isActiveTemplate ? <div className='top-0 left-0 h-auto w-auto bg-transparent mb-2'>

                              <div className='flex flex-row items-center justify-center'>

                                  <IoCheckbox size={20} className="text-green-700 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"/>
                             
                                  <div className='ml-1 text-xs'> 
                                    
                                    Selected

                                  </div>
                              </div>
                              
                            </div> : <></>
                            }
                            <div onClick={() => changeTemplate(template_.id, index)}>
                                <img src={template_.thumbnail} className="rounded-md shadow-lg" alt='undangan digital'

                                />
                                
                                <div className="pt-1 pb-1 mt-1 font-semibold">
                                  {template_.name}
                                </div>
                            </div>

                            <div className="flex flex-row w-auto mt-1 overflow-x-auto">
                            {
                              (template_.color.length > 0) ? template_.color.map((item, idx) => (
                                  <div
                                    onClick={() => updateColorStatus(template_.id, idx, item.hex, item.background_section)}
                                    key={idx}
                                    className="w-[30px] h-[30px] p-2 rounded-full shadow-md mb-1 mr-3 box-border transition-all duration-100 flex justify-center items-center"
                                    style={{
                                      backgroundColor: item.hex,
                                      border: item.status ? '2px solid #d8d8d8' : '',
                                      minWidth: '30px',
                                      minHeight: '30px',
                                      maxWidth: '30px',
                                      maxHeight: '30px'
                                    }}
                                  >
                                  </div>
                                )) : <>
                                  No Color
                                </>
                            }




                              </div>
                          </div>
                        </>
                  ))
                }
                </div>
          </div>
            {(() => {
              
                switch (template_id) {

                  case 'template1':
                    return <Mandala1 currentColor={currentColorData} backgroundSection={imageBG}/>;
                  case 'template2':
                    return <Mandala2 currentColor={currentColorData} backgroundSection={imageBG}/>;
                  case 'template3':
                    return <Spiderman currentColor={currentColorData} backgroundSection={imageBG}/>;
                  case 'template4':
                    return <Batman currentColor={currentColorData} backgroundSection={imageBG}/>;
                  case 'template5':
                    return <Astronot currentColor={currentColorData} backgroundSection={imageBG}/>;
                  default:
                    return <></>

                    
                }

            })()}

    </div>
  )
}

export default Desain