'use client'

import React, { useState } from 'react'
import Mandala1 from '../../components/template-design/mandala-01'
import Mandala2 from '../../components/template-design/mandala-02'
import Mandala3 from '../../components/template-design/mandala-01'
import Mandala4 from '../../components/template-design/mandala-02'

const Desain = () => {

  const [template_id, setTemplate] = useState('template1');
  
  const template_list = [
    { id: 'template1', 
      name: 'Luxury 1', 
      description: 'This is the first template', 
      thumbnail: 'https://via.placeholder.com/150', 
      publicity: true 
    },
    { id: 'template2', 
      name: 'Luxury 2', 
      description: 'This is the second template', 
      thumbnail: 'https://via.placeholder.com/150',
      publicity: true 
    },
    { id: 'template3', 
      name: 'Luxury 3', 
      description: 'This is the third template', 
      thumbnail: 'https://via.placeholder.com/150', 
      publicity: true 
    },
    { id: 'template4', 
      name: 'Luxury 4', 
      description: 'This is a non-public template', 
      thumbnail: 'https://via.placeholder.com/150', 
      publicity: false 
    },
      { id: 'template1', 
        name: 'Luxury 1', 
        description: 'This is the first template', 
        thumbnail: 'https://via.placeholder.com/150', 
        publicity: true, 
      },
      { id: 'template2', 
        name: 'Luxury 2', 
        description: 'This is the second template', 
        thumbnail: 'https://via.placeholder.com/150',
        publicity: true },
      { id: 'template3', 
        name: 'Luxury 3', 
        description: 'This is the third template', 
        thumbnail: 'https://via.placeholder.com/150', 
        publicity: true },
      { id: 'template4', 
        name: 'Luxury 4', 
        description: 'This is a non-public template', 
        thumbnail: 'https://via.placeholder.com/150', 
        publicity: false },
        { id: 'template1', 
          name: 'Luxury 1', 
          description: 'This is the first template', 
          thumbnail: 'https://via.placeholder.com/150', 
          publicity: true },
        { id: 'template2', 
          name: 'Luxury 2', 
          description: 'This is the second template', 
          thumbnail: 'https://via.placeholder.com/150',
          publicity: true },
        { id: 'template3', 
          name: 'Luxury 3', 
          description: 'This is the third template', 
          thumbnail: 'https://via.placeholder.com/150', 
          publicity: true },
        { id: 'template4', 
          name: 'Luxury 4', 
          description: 'This is a non-public template', 
          thumbnail: 'https://via.placeholder.com/150', 
          publicity: false },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='relative'>

      <button
        onClick={togglePanel}
        className="fixed z-50 p-3 text-xs text-white bg-blue-500 rounded-full shadow-lg top-1 right-4 hover:bg-blue-600 focus:outline-none"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
            {/* this is collapsible menu */}
            <button
        onClick={togglePanel}
        className="fixed z-50 p-2 text-[0.4rem] bg-white rounded-sm shadow-lg text-slate-500 top-2 right-4 hover:bg-slate-300"
      >
        {isOpen ? 'Close' : 'Open'}
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
                            onClick={() => setTemplate(template_.id)} 
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
                              {pastelColors.map((item, idx) => (
                                <div
                                  key={idx}
                                  className='w-[100px] h-auto p-4 rounded-md shadow-md mb-1 mr-3'
                                  style={{
                                    backgroundColor: item.hex,
                                  }}
                                />
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