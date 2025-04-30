import React from 'react';
import { motion } from 'framer-motion';

const HeroWrapper = () => {
    return (
        <section className="relative w-auto h-screen mx-4 sm:mx-15 lg:mx-30">
            <div className="flex items-center justify-center w-full h-full text-gray-700">
                {/* HeroSection-Wrapper */}
                <div className="flex flex-col-reverse gap-1 lg:flex-row items-center justify-baseline max-w-[1145px] mx-auto">
                    
                    {/*Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start justify-center max-w-[651px] text-center lg:text-left mt-8 lg:mt-0 mb-10"
                    >
                        <div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl md:text-[32px] lg:text-[45px] mb-6 leading-tight font-[300] text-gray-900"
                            >
                                Great <motion.span 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F7666F] to-[#406AFF]"
                                >Product</motion.span> is 
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="font-bold"
                                >
                                    build by great <motion.span 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        className="text-transparent bg-clip-text bg-gradient-to-b from-[#F7666F] to-[#406AFF]"
                                    >teams</motion.span>
                                </motion.p>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="text-sm sm:text-[16px] lg:text-[18px] font-w-400 mb-8"
                            >
                                We help build and manage a team of world-class developers to bring your vision to life
                            </motion.p>
                        </div>            
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '#services'}
                            className="lg:items-start bg-[#3D63EA] hover:bg-[#3d63eadf] text-white py-3 px-6 rounded-[5px] text-[14px] font-semibold transition duration-300 ease-in-out"
                        >
                            Let's get started
                        </motion.button>
                    </motion.div>

                    {/*Image*/}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex w-full sm:w-max"
                    >
                        <motion.img 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            src="src/assets/hero_warapper_image.png" 
                            alt="photo" 
                            className="w-full max-w-[500px] lg:max-w-[651px]" 
                        />
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
};

export default HeroWrapper;
