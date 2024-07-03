'use client'

import React, { useState } from 'react'
import Mandala1 from '../../components/template-design/mandala-01'
import Mandala2 from '../../components/template-design/mandala-02'
import Mandala3 from '../../components/template-design/mandala-01'
import Mandala4 from '../../components/template-design/mandala-02'
import { FaSquareCheck } from "react-icons/fa6";

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
        { name: 'Pastel Pink', hex: '#FADADD', status: false },
        { name: 'Pastel Blue', hex: '#A2C2E3', status: false },
        { name: 'Pastel Green', hex: '#B3E5C6', status: false },
        { name: 'Pastel Yellow', hex: '#FCE5A9', status: false },
        { name: 'Pastel Purple', hex: '#D9B6F0', status: false },
        { name: 'Pastel Orange', hex: '#F5B3A1', status: false },
        { name: 'Pastel Peach', hex: '#F7C6C7', status: false },
        { name: 'Pastel Mint', hex: '#A9D6E5', status: false },
        { name: 'Pastel Lavender', hex: '#E6C6E7', status: false },
        { name: 'Pastel Coral', hex: '#F5A9A2', status: false },
        { name: 'Pastel Gray', hex: '#D0D0D0', status: false },
        { name: 'Pastel Teal', hex: '#B3D9D9', status: false }
    ]
    },
    { id: 'template2', 
      name: 'Luxury 2', 
      description: 'This is the first template', 
      thumbnail: 'https://via.placeholder.com/150', 
      publicity: true, 
      color: [
        { name: 'Pastel Pink', hex: '#FADADD', status: false },
        { name: 'Pastel Blue', hex: '#A2C2E3', status: false },
        { name: 'Pastel Green', hex: '#B3E5C6', status: false },
        { name: 'Pastel Yellow', hex: '#FCE5A9', status: false },
        { name: 'Pastel Purple', hex: '#D9B6F0', status: false },
        { name: 'Pastel Orange', hex: '#F5B3A1', status: false },
        { name: 'Pastel Peach', hex: '#F7C6C7', status: false },
        { name: 'Pastel Mint', hex: '#A9D6E5', status: false },
        { name: 'Pastel Lavender', hex: '#E6C6E7', status: false },
        { name: 'Pastel Coral', hex: '#F5A9A2', status: false },
        { name: 'Pastel Gray', hex: '#D0D0D0', status: false },
        { name: 'Pastel Teal', hex: '#B3D9D9', status: false }
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

  const updateColorStatus = (templateId: any, index: any) => {
    console.log(templateId);
    console.log(index);
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

      <button
        onClick={togglePanel}
        className="fixed z-50 p-2 text-[0.4rem] text-white bg-green-700 rounded-md shadow-lg top-1 right-4 hover:bg-green-600 focus:outline-none"
      >
        {isOpen ? 'Close' : 'Template'}
      </button>
            {/* this is collapsible menu */}
            <div className={`fixed z-50 flex flex-col items-center text-[0.6rem] p-3 transition-all duration-500 bg-white rounded-sm top-8 right-0 h-screen-minus-80 overflow-scroll my-4
              transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300 ease-in-out`}
            >

                {/* <div className='w-full p-2 my-2 text-white rounded-md bg-slate-600'>
                  Close Menu
                </div> */}

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
                            className='max-w-[150px] 
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

                            {/* Scrollable section for the template list */}
                            <div className="flex flex-row w-auto p-2 overflow-x-auto">
                              {template_.color.map((item, idx) => (
                                <div
                                  // onClick={()=> changeColor(idx)}
                                  onClick={() => updateColorStatus(template_.id, idx)}
                                  key={idx}
                                  className='w-[60px] h-auto p-2 rounded-md shadow-md mb-1 mr-3 box-border transition-all duration-100 flex justify-center items-center'
                                  style={{
                                    backgroundColor: item.hex,
                                    border: item.status ? '2px solid #d8d8d8' : ''
                                  }}
                                >

                                  {
                                      item.status ?  <FaSquareCheck size={15} className='text-green-700'/> : <></>
                                  }
                                  
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
                    return <Mandala1/>;
                  case 'template2':
                    return <Mandala2/>;
                  case 'template3':
                    return <Mandala3/>;
                  default:
                    return <Mandala4/>;
                    
                }

            })()}

    </div>
  )
}

export default Desain