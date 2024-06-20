import React from 'react'

const page = () => {

  const currentYear = new Date().getFullYear();

  const tech_stack = [
    {
      name: 'JS',
      color: '#B6C7AA',
      logo: '',
    },
    {
      name: 'React',
      color: '#E1AFD1',
      logo: '',
    },
    {
      name: 'NextJS',
      color: '#f7c75b',
      logo: '',
    },
    {
      name: 'Vue',
      color: '#80C4E9',
      logo: '',
    },
    {
      name: 'NuxtJS',
      color: '#EE4E4E',
      logo: '',
    },
    {
      name: 'PHP',
      color: '#f7c75b',
      logo: '',
    },
    {
      name: 'HTML/CSS3',
      color: '#E7D4B5',
      logo: '',
    },

  ]

  const whatwedo = [
    {
      name: 'WebApp',
      color: '#B6C7AA',
      logo: '',
    },
    {
      name: 'MobileApp',
      color: '#E1AFD1',
      logo: '',
    },
    {
      name: 'UI Mockup',
      color: '#f7c75b',
      logo: '',
    },
    // {
    //   name: 'Vue',
    //   color: '#80C4E9',
    //   logo: '',
    // },

  ]

  return (
    
    <>
        <section className='bg-[#00adef] min-h-screen w-full flex items-center flex-col relative pt-32'>
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

          <div className="font-bold text-xs text-white font-Montserrat my-1 tracking-tight py-2 px-4 rounded-lg bg-[#FF5580] inline-block shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              BETA
          </div>
          
          {/* <div className="font-bold text-base text-slate-200 font-Jost my-3">
              Coming Soon!
          </div> */}

          <div className="absolute bottom-0 w-full h-32 md:h-48 lg:h-[20rem] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://ik.imagekit.io/vtvggda66/peopleillust.svg?updatedAt=1718805343633)' }}>
          </div>
      </section>

      <section className="bg-cover bg-center min-h-[400px] h-auto relative pb-60">
      <div
        className="absolute top-0 w-full h-auto md:h-auto lg:h-auto bg-no-repeat bg-center z-10"
      >
        <img
          src="https://ik.imagekit.io/vtvggda66/bg%20softgrey%20wave.svg?updatedAt=1718809149167"
          alt="alfath innovative"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover', // You can also try 'contain', 'fill', or other values based on your needs
          }}
        />
      </div>

          
          <div className="container mx-auto px-12 pt-16 font-Jost pb-12 relative z-20">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <h2 className="text-3xl font-bold text-[#00adef]">
                  A small but enthusiast team of software designers and developers.
                </h2>
                <div className='mt-2'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip.
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4 flex justify-center items-center">
                <img
                  src="https://ik.imagekit.io/vtvggda66/laptopillustration.svg?updatedAt=1718809603591"
                  alt="alfath innovative"
                  style={{
                    width: '300px',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </section>


      <section className='min-h-[300px] h-auto w-full flex items-center flex-col relative bg-slate-300 py-12'>

         {/* Heading */}
         <h1 className="text-2xl font-Jost text-gray-600 font-bold">
            Our History
         </h1>

         {/* Description */}
         <div className="text-sm font-Jost text-gray-600">
            Lorem Ipsum Dolot
         </div>

         {/* Content */}

      </section>

      <section className='bg-white min-h-screen w-full flex items-center flex-col relative p-12 sm:p-32'>

          {/* Heading */}
         <h1 className="text-2xl font-Jost text-gray-600 font-bold">
            Tech Stack
         </h1>

         {/* Description */}
         <div className="text-sm font-Jost text-gray-600 my-2">
            Lorem Ipsum Dolot
         </div>

          <div className="grid auto-rows-[192px] grid-cols-3 gap-4 w-full">
            {tech_stack.map((data, i) => (
              <div
                key={i}
                className={`text-lg row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center font-bold text-[#4a4a4a] font-Jost ${
                  i === 3 || i === 6 ? "col-span-2" : ""
                }`}
                style={{
                  backgroundColor: data.color
                }}
              >
                {data.name}
              </div>
            ))}
          </div>

      </section>

      <section className='bg-slate-400 min-h-screen w-full flex items-center flex-col relative p-12 sm:p-32'>

          {/* Heading */}
         <h1 className="text-2xl font-Jost text-gray-600 font-bold">
          What We Do
         </h1>

         {/* Description */}
         <div className="text-sm font-Jost text-gray-600 my-2">
            Lorem Ipsum Dolot
         </div>

          <div className="grid auto-rows-[192px] grid-cols-2 gap-4 w-full">
            {whatwedo.map((data, i) => (
              <div
                key={i}
                className={`text-2xl row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center font-bold text-white font-Jost ${
                  i === 2 || i === 3 ? "col-span-2" : ""
                }`}
                style={{
                  backgroundColor: data.color,
                  backgroundImage: `url("https://ik.imagekit.io/vtvggda66/shamin-haky-RIk-i9rXPao-unsplash-modified%202.jpg?updatedAt=1718856698441")`,
                  backgroundSize: 'cover'
                }}
              >
                {data.name}
              </div>
            ))}
          </div>

      </section>


      <section className='min-h-[300px] h-auto w-full flex items-center flex-col relative bg-slate-300 py-12'>

         {/* Heading */}
         <h1 className="text-2xl font-Jost text-gray-600 font-bold">
            Products
         </h1>

         {/* Description */}
         <div className="text-sm font-Jost text-gray-600">
            Lorem Ipsum Dolot
         </div>

         {/* Content */}

      </section>

      

      <section className='min-h-[300px] h-auto w-full flex items-center flex-col relative bg-[#234755] py-12'>

         {/* Heading */}
         <h1 className="text-2xl font-Jost text-white font-bold">
            Get Connected
         </h1>

         {/* Description */}
         <div className="text-sm font-Jost text-white">
            Wanna say hello to Alfath?
         </div>

         {/* Content */}

      </section>

      <section className='h-auto w-full flex items-center flex-col relative bg-gray-800'>
          <footer className=" text-white py-4">
            <div className="container mx-auto text-center font-Jost text-sm">
              <p>&copy; 2014 - {currentYear} PT Alfath Teknologi Grup. All rights reserved.</p>
            </div>
          </footer>
      </section>

      

    </>
  )
}

export default page