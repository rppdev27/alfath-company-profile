import React from 'react'

const page = () => {
  return (
    <>
        <div className='bg-[#00adef] min-h-screen w-full flex items-center justify-center flex-col'>
            <img 
              src="https://ik.imagekit.io/vtvggda66/logogram%20alfath.svg?updatedAt=1718804248063" 
              alt="alfath innovative"
              style={{
                width: '50px',
                height: 'auto'
              }}
            />
            <img 
              src="https://ik.imagekit.io/vtvggda66/logotype%20alfath.svg?updatedAt=1718804247754" 
              alt="alfath innovative"
              style={{
                width: '400px',
                height: 'auto'
              }}
            />
            
            <div className="font-bold text-base text-red-600 font-Montserrat">
                Coming Soon!
            </div>
        </div>
    </>
  )
}

export default page