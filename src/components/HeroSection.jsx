import React from 'react';

const HeroWrapper = () => {
    return (
        <section className="relative w-fit h-screen mx-4 sm:mx-15 lg:mx-30">
            <div className="flex items-center justify-center w-full h-full text-gray-700 px-4">
                {/* HeroSection-Wrapper */}
                <div className="flex flex-col-reverse gap-1 lg:flex-row items-center justify-baseline max-w-[1145px] mx-auto">
                    
                    {/*Content */}
                    <div className="flex flex-col items-center lg:items-start justify-center max-w-[651px] text-center lg:text-left mt-8 lg:mt-0 mb-10">
                        <div>
                            <h1 className="text-3xl md:text-[32px] lg:text-[45px] mb-6 leading-tight font-[300] text-gray-900">
                                Great <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F7666F] to-[#406AFF]">Product</span> is 
                                <p className="font-bold">build by great <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F7666F] to-[#406AFF]">teams</span></p>
                            </h1>
                            <p className="text-sm sm:text-[16px] lg:text-[18px] font-w-400 mb-8">
                                We help build and manage a team of world-class developers to bring your vision to life
                            </p>
                        </div>            
                        <button
                            onClick={() => window.location.href = '#services'}
                            className="lg:items-start bg-[#3D63EA] hover:bg-[#3d63eadf] text-white py-3 px-6 rounded-[5px] text-[14px] font-semibold transition duration-300 ease-in-out"
                        >
                            Let's get started
                        </button>
                    </div>

                    {/*Image*/}
                    <div className="flex w-full sm:w-max">
                        <img src="src/assets/hero_warapper_image.png" alt="photo" className="w-full max-w-[500px] lg:max-w-[651px]" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default HeroWrapper;
