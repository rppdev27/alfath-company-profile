import React from 'react'

const page = () => {
  return (
    <>
        <div className='bg-[#00adef] min-h-screen w-full flex items-center justify-center flex-col relative'>
          <img 
              src="https://ik.imagekit.io/vtvggda66/logogram%20alfath.svg?updatedAt=1718804248063" 
              alt="alfath innovative"
              style={{
                  width: '50px',
                  height: 'auto'
              }}
              className='mb-[50px]'
          />
          <img 
              src="https://ik.imagekit.io/vtvggda66/logotype%20alfath.svg?updatedAt=1718804247754" 
              alt="alfath innovative"
              style={{
                  width: '45%',
                  height: 'auto'
              }}
              className='my-2'
          />
          <div className="font-bold text-base text-slate-200 font-Montserrat my-5 tracking-tight py-2 px-3 rounded-md bg-[#0f7ba5] inline-block">
              Software Company
          </div>
          
          {/* <div className="font-bold text-base text-slate-200 font-Jost my-3">
              Coming Soon!
          </div> */}

          <div className="absolute bottom-0 w-full h-32 md:h-48 lg:h-[20rem] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://ik.imagekit.io/vtvggda66/peopleillust.svg?updatedAt=1718805343633)' }}>
          </div>
      </div>

    </>
  )
}

export default page