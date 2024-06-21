import React from 'react';

const App = () => {
  return (

    <div className="flex justify-center items-center bg-slate-200">
        {/* <div className="relative min-h-screen bg-fixed bg-contain bg-center w-[450px] bg-no-repeat" style={{ backgroundImage: 'url("https://terhubung.id/wp-content/uploads/01.-BG-FIXED.jpeg")' }}>
         */}
        <div className="min-h-screen flex justify-center items-center relative w-[450px] bg-cover bg-center mx-auto z-10 overflow-x-hidden overflow-y-hidden" 
            style={{ 
            backgroundImage: `url(https://terhubung.id/wp-content/uploads/01.-BG-FIXED.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white bg-opacity-80 max-w-xs w-full mx-auto rounded shadow-md">
            {/* <section className="mb-4 p-4 bg-white rounded shadow min-h-[400px]">
                <h2 className="text-lg font-semibold">Section 1</h2>
                <p>This is the content of the first section.</p>
            </section>
            <section className="mb-4 p-4 bg-white rounded shadow min-h-[400px]">
                <h2 className="text-lg font-semibold">Section 2</h2>
                <p>This is the content of the second section.</p>
            </section>
            <section className="mb-4 p-4 bg-white rounded shadow min-h-[400px]">
                <h2 className="text-lg font-semibold">Section 3</h2>
                <p>This is the content of the third section.</p>
            </section> */}
            </div>
        </div>
        </div>


    </div>
  );
};

export default App;
