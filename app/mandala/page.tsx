import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-screen bg-slate-800 w-full">
      <div className="relative w-[70%] bg-gray-800 p-4  text-white shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] z-30">
        {/* {children && children[0]} */}
        {/* xxxx */}
        <img 
          src="https://menicapro.s3.ap-southeast-1.amazonaws.com/384505-PCIWYG-545-ai-1.webp" 
          alt="123" 
          className="max-h-screen animate-spin-slow mr-[-100px]"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
      
      <div className="w-[30%] bg-gray-700 p-4 text-white z-50 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        {/* {children && children[1]} */}
        xxx
      </div>
    </div>
  )
}

export default page