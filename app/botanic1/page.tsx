import React from 'react'

const Cover = () => {
  return (
    <>
      <div className="relative flex items-center justify-center max-w-[451px] h-screen whitespace-pre-line mx-auto">
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop playsInline preload="metadata" className="object-cover w-full h-full" style={{ opacity: 1 }}>
            <source src="https://be.satu.love/pictures/picture_1687865408157gbs1187.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute z-10 text-white text-center">
          <h1 className="text-4xl font-bold">Wedding Of</h1>
          <h2 className="text-3xl mt-2">Dini & Dono</h2>
          <h3 className="text-xl mt-2">12.02.2004</h3>
        </div>
      </div>
    </>
  )
}

export default Cover
