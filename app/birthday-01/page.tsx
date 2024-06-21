'use client'

import React, { useState } from 'react';

const App: React.FC = () => {

    const [showSections, setShowSections] = useState(false);

    const scrollToSection2 = () => {
        setShowSections(true);
        setTimeout(() => {
            const section2 = document.getElementById('section2');
            if (section2) {
                section2.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adding a slight delay to ensure the sections are rendered
    };
  return (

    <div className="flex justify-center items-center bg-slate-200 relative">
        <div className="bg-cover sm:bg-contain bg-no-repeat min-h-screen flex justify-center items-center relative w-[450px] bg-center mx-auto z-10 overflow-x-hidden overflow-y-hidden" 
            style={{ 
                backgroundImage: `url(https://terhubung.id/wp-content/uploads/01.-BG-FIXED.jpeg)`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
        <div className="flex justify-center items-center min-h-screen text-white w-full p-6"
            style={{
                fontFamily: 'Londrina Solid'
            }}
        >
           <div className="bg-transparent bg-opacity-80 w-full mx-auto shadow-md">
            <section className="p-4 bg-transparent h-screen flex flex-col justify-center bg-blue-950 shadow-md bg-opacity-70 w-full rounded-lg mb-10">
                <h2 className="text-lg font-semibold">Section 1</h2>
                <p>This is the content of the first section.</p>
                <button
                    onClick={scrollToSection2}
                    className="mt-4 px-4 py-2 bg-slate-300 text-blue-800 rounded hover:bg-slate-400"
                >
                    Go to Section 2
                </button>
            </section>
            {showSections && (
                <>
                    <section id="section2" className="p-4 bg-transparent h-screen flex flex-col justify-center bg-blue-950 shadow-md bg-opacity-70 w-full rounded-lg  mb-10">
                        <h2 className="text-lg font-semibold">Section 2</h2>
                        <p>This is the content of the second section.</p>
                    </section>
                    <section className="mb-4 p-4 bg-transparent rounded shadow h-screen flex flex-col justify-center bg-blue-950 shadow-md bg-opacity-70 w-full rounded-lg  mb-10">
                        <h2 className="text-lg font-semibold">Section 3</h2>
                        <p>This is the content of the third section.</p>
                    </section>
                </>
            )}
            </div>
        </div>
        </div>


    </div>
  );
};

export default App;
