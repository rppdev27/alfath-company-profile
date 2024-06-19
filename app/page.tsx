import React from 'react'

const page = () => {

  const currentYear = new Date().getFullYear();

  return (
    
    <>
        <div className='bg-[#00adef] min-h-screen w-full flex items-center flex-col relative pt-32'>
          <img 
              src="https://ik.imagekit.io/vtvggda66/logogram%20alfath.svg?updatedAt=1718804248063" 
              alt="alfath innovative"
              style={{
                  width: '50px',
                  height: 'auto'
              }}
              className='mb-5'
          />
          <img 
              src="https://ik.imagekit.io/vtvggda66/logotype%20alfath.svg?updatedAt=1718804247754" 
              alt="alfath innovative"
              style={{
                  width: '40%',
                  height: 'auto'
              }}
              className='my-2'
          />
          <div className="font-bold text-base text-slate-200 font-Montserrat my-5 tracking-tight py-2 px-4 rounded-lg bg-[#0f7ba5] inline-block">
              Software Company
          </div>
          
          {/* <div className="font-bold text-base text-slate-200 font-Jost my-3">
              Coming Soon!
          </div> */}

          <div className="absolute bottom-0 w-full h-32 md:h-48 lg:h-[20rem] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://ik.imagekit.io/vtvggda66/peopleillust.svg?updatedAt=1718805343633)' }}>
          </div>
      </div>

      <div className='bg-[#00adef] min-h-screen w-full flex items-center flex-col relative pt-32'>

        <div className="columns-1 gap-4">
          {[24, 32, 36, 32, 32, 32, 16, 16, 64].map((height, index) => (
            <div
              key={index}
              className={`mb-4 h-${height} break-inside-avoid rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900`}
            />
          ))}
        </div>

      </div>

      <div className='bg-[#00adef] h-auto w-full flex items-center flex-col relative pt-32'>
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2014 - {currentYear} Your Company. All rights reserved.</p>
            </div>
          </footer>
      </div>

      

    </>
  )
}

export default page