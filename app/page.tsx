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
              className='my-2'
            />
            <img 
              src="https://ik.imagekit.io/vtvggda66/logotype%20alfath.svg?updatedAt=1718804247754" 
              alt="alfath innovative"
              style={{
                width: '400px',
                height: 'auto'
              }}
              className='my-2'
            />
            <div className="font-bold text-base text-slate-200 font-Montserrat my-2 tracking-tight p-2 rounded-md bg-[#0f7ba5] inline-block">
                Software Company
            </div>
            
            <div className="font-bold text-base text-slate-200 font-Jost">
                Coming Soon!
            </div>
        </div>
    </>
  )
}

export default page