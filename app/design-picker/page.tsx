'use client'

import React, { useState } from 'react'
import Mandala1 from '../../components/template-design/mandala-01'
import Mandala2 from '../../components/template-design/mandala-02'
import Mandala3 from '../../components/template-design/mandala-01'
import Mandala4 from '../../components/template-design/mandala-02'
import { FaSquareCheck } from "react-icons/fa6";
import { CgTemplate } from "react-icons/cg";

const Desain = () => {

  const [template_id, setTemplate] = useState('template1');
  const [isActiveTemplate, setActiveTemplate] = useState(0);
  const [isActiveColor, setActiveColor] = useState(0);
  
  const [template_list, setTemplateList] = useState([
    { id: 'template1', 
      name: 'Luxury 1', 
      description: 'This is the first template', 
      thumbnail: 'https://via.placeholder.com/150', 
      publicity: true, 
      color: [
        {
          name: "Navy",
          hex: "#152443",
          status: true,
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
      thumbnail: 'https://via.placeholder.com/150', 
      publicity: true, 
      color: [
        {
          name: "Navy",
          hex: "#152443",
          status: true,
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

  const [currentColorData, setColorCurrent] = useState('');
  const [imageBG, setBackgroundAsset] = useState('');

  const updateColorStatus = (templateId: any, index: any, color: any, imageBGs: any) => {
    console.log(imageBGs);
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
    console.log(template_list)
};

  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  const pastelColors = [
    { name: 'Pastel Pink', hex: '#FADADD' },
    { name: 'Pastel Blue', hex: '#A2C2E3' },
    { name: 'Pastel Green', hex: '#B3E5C6' },
    { name: 'Pastel Yellow', hex: '#FCE5A9' },
    { name: 'Pastel Purple', hex: '#D9B6F0' },
    { name: 'Pastel Orange', hex: '#F5B3A1' },
    { name: 'Pastel Peach', hex: '#F7C6C7' },
    { name: 'Pastel Mint', hex: '#A9D6E5' },
    { name: 'Pastel Lavender', hex: '#E6C6E7' },
    { name: 'Pastel Coral', hex: '#F5A9A2' },
    { name: 'Pastel Gray', hex: '#D0D0D0' },
    { name: 'Pastel Teal', hex: '#B3D9D9' },
  ];

  const changeColor = (index: any) => {
    setActiveColor(index);
  }

  const changeTemplate = (id: any, index: any) => {
    setTemplate(id);
    setActiveTemplate(index)
  }

  return (
    <div className='relative'>

<div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-auto bg-white py-2 px-3 flex rounded-md justify-around items-center shadow-[rgba(0,0,0,0.4)_0px_30px_90px] text-[0.5rem] sm:text-[0.6rem] tracking-tight"
      style={{
        zIndex: '999'
      }}
    >

    <div className="flex flex-row justify-center items-center p-1 text-slate-700 mx-2">
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md">
          <CgTemplate size={15}/>
      </div>
      <div className='font-semibold mt-1 ml-2'>
        Template
      </div>
    </div>
    <div className="flex flex-row justify-center items-center p-1 text-slate-700 mx-2">
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md">
          <CgTemplate size={15}/>
      </div>
     <div className='font-semibold mt-1 ml-2'>
        Warna
      </div>
    </div>

    
</div>


      {

        isOpen ? <></> : <button
        onClick={togglePanel}
        className="fixed z-50 p-2 text-[0.4rem] text-white bg-white rounded-md top-2 right-2 hover:bg-slate-300 focus:outline-none shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
      >
        <CgTemplate size={15} className='text-slate-500'/>
      </button>

      }

      

            {/* this is collapsible menu */}
            <div className={`fixed z-50 flex flex-col items-center text-[0.6rem] p-3 transition-all duration-500 bg-white rounded-sm top-2 right-0 h-screen-minus-80 overflow-scroll
              transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300 ease-in-out`}
            >

                <div className='cursor-pointer w-full p-2 my-2 text-white rounded-md bg-slate-600 shadow-lg' onClick={togglePanel}>
                  Close
                </div>

                <div className='my-2'>
                  Template List
                </div>
                
                {
                  template_list.map((template_, index) => (
                    <>
                          {/* Container div for the template item */}
                          <div 
                            key={index}
                            // onClick={() => setTemplate(template_.id)} 
                            onClick={()=> changeTemplate(template_.id, index)}
                            className='max-w-[130px] 
                            h-auto 
                            z-50 
                            hover:bg-slate-200 
                            transition-all 
                            duration-500 
                            p-2 
                            shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] 
                            cursor-pointer
                            mb-4
                            '
                            style={{
                              backgroundColor: index === isActiveTemplate ? 'grey' : 'white'
                            }}
                          >
                            <img src={template_.thumbnail} alt='undangan digital'/>
                            
                            <div className="p-1">
                              {template_.name}
                            </div>


                            <div className="mb-1">
                              Warna
                            </div>

                            <div className="flex flex-row w-auto p-2 overflow-x-auto">
                                {template_.color.map((item, idx) => (
                                  <div
                                    onClick={() => updateColorStatus(template_.id, idx, item.hex, item.background_section)}
                                    key={idx}
                                    className="w-[30px] h-[30px] p-2 rounded-md shadow-md mb-1 mr-3 box-border transition-all duration-100 flex justify-center items-center"
                                    style={{
                                      backgroundColor: item.hex,
                                      border: item.status ? '2px solid #d8d8d8' : '',
                                      minWidth: '30px',
                                      minHeight: '30px',
                                      maxWidth: '30px',
                                      maxHeight: '30px'
                                    }}
                                  >
                                    {item.status ? <FaSquareCheck size={10} className="text-green-700" /> : null}
                                  </div>
                                ))}
                              </div>


                          </div>
                        </>

                    
                  ))
                }

          </div>

            {(() => {
              
                switch (template_id) {

                  case 'template1':
                    return <Mandala1 currentColor={currentColorData} backgroundSection={imageBG}/>;
                  case 'template2':
                    return <Mandala2 currentColor={currentColorData} backgroundSection={imageBG}/>;
                  case 'template3':
                    return <Mandala3 currentColor={currentColorData} backgroundSection={imageBG}/>;
                  default:
                    return <Mandala4 currentColor={currentColorData} backgroundSection={imageBG}/>;
                    
                }

            })()}

    </div>
  )
}

export default Desain