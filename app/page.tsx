import React from 'react'

const page = () => {

  const currentYear = new Date().getFullYear();

  const tech_stack = [
    {
      name: 'JS',
      color: '#ee426f',
      logo: '',
    },
    {
      name: 'React',
      color: '#00adef',
      logo: '',
    },
    {
      name: 'NextJS',
      color: '#f7c75b',
      logo: '',
    },
    {
      name: 'Vue',
      color: '#00adef',
      logo: '',
    },
    {
      name: 'NuxtJS',
      color: '#ee426f',
      logo: '',
    },
    {
      name: 'HTML/CSS3',
      color: '#f7c75b',
      logo: '',
    },
    {
      name: 'PHP',
      color: '#ee426f',
      logo: '',
    },

  ]

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
              className='mb-10'
          />
          <img 
              src="https://ik.imagekit.io/vtvggda66/logotype%20alfath.svg?updatedAt=1718804247754" 
              alt="alfath innovative"
              style={{
                  width: '40%',
                  height: 'auto'
              }}
              className='mb-5'
          />
          <div className="font-bold text-base text-slate-200 font-Montserrat my-5 tracking-tight py-2 px-4 rounded-lg bg-[#0f7ba5] inline-block shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              Software Company
          </div>
          
          {/* <div className="font-bold text-base text-slate-200 font-Jost my-3">
              Coming Soon!
          </div> */}

          <div className="absolute bottom-0 w-full h-32 md:h-48 lg:h-[20rem] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://ik.imagekit.io/vtvggda66/peopleillust.svg?updatedAt=1718805343633)' }}>
          </div>
      </div>

      <div className='bg-white min-h-screen w-full flex items-center flex-col relative p-12 sm:p-32'>

          <div className="grid auto-rows-[192px] grid-cols-3 gap-4 w-full">
            {tech_stack.map((data, i) => (
              <div
                key={i}
                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center font-bold text-slate-600 font-Jost${
                  i === 3 || i === 6 ? "col-span-2" : ""
                }`}
              >
                {data.name}
              </div>
            ))}
          </div>

      </div>

      <div className='h-auto w-full flex items-center flex-col relative bg-gray-800'>
          <footer className=" text-white py-4">
            <div className="container mx-auto text-center font-Jost text-xs">
              <p>&copy; 2014 - {currentYear} Your Company. All rights reserved.</p>
            </div>
          </footer>
      </div>

      

    </>
  )
}

export default page