import React from 'react';
import { motion } from 'framer-motion';

const UpperLogo = () => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34.467" height="6.60908" rx="3.30454" transform="matrix(-0.601033 -0.799224 0.914216 -0.405227 20.7158 39.9995)" fill="url(#paint0_linear_1_701)"/>
<rect x="55.3235" y="31.8086" width="31.8084" height="6.97684" rx="3.48842" transform="rotate(-90 55.3235 31.8086)" fill="url(#paint1_linear_1_701)"/>
<rect width="34.8564" height="6.5509" rx="3.27545" transform="matrix(0.638227 -0.769848 0.898472 0.43903 91.3235 36.814)" fill="url(#paint2_linear_1_701)"/>
<defs>
<linearGradient id="paint0_linear_1_701" x1="34.467" y1="0" x2="32.0223" y2="12.7494" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEF5E"/>
<stop offset="1" stop-color="#F7936F"/>
</linearGradient>
<linearGradient id="paint1_linear_1_701" x1="87.1318" y1="31.8086" x2="84.2117" y2="45.1218" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEF5E"/>
<stop offset="1" stop-color="#F7936F"/>
</linearGradient>
<linearGradient id="paint2_linear_1_701" x1="34.8564" y1="0" x2="32.4781" y2="12.6548" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEF5E"/>
<stop offset="1" stop-color="#F7936F"/>
</linearGradient>
</defs>
</svg>
);

const LowerLogo = () => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34.4666" height="6.60906" rx="3.30453" transform="matrix(-0.601039 0.79922 0.914219 0.405221 20.7158 -0.000488281)" fill="url(#paint0_linear_1_705)"/>
<rect width="31.8078" height="6.97684" rx="3.48842" transform="matrix(0 1 1 0 55.3235 8.19092)" fill="url(#paint1_linear_1_705)"/>
<rect width="34.8561" height="6.55088" rx="3.27544" transform="matrix(0.638233 0.769843 0.898475 -0.439024 91.3235 3.18555)" fill="url(#paint2_linear_1_705)"/>
<defs>
<linearGradient id="paint0_linear_1_705" x1="34.4666" y1="0" x2="32.0219" y2="12.7493" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEF5E"/>
<stop offset="1" stop-color="#F7936F"/>
</linearGradient>
<linearGradient id="paint1_linear_1_705" x1="31.8078" y1="0" x2="28.8877" y2="13.3132" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEF5E"/>
<stop offset="1" stop-color="#F7936F"/>
</linearGradient>
<linearGradient id="paint2_linear_1_705" x1="34.8561" y1="0" x2="32.4777" y2="12.6548" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEF5E"/>
<stop offset="1" stop-color="#F7936F"/>
</linearGradient>
</defs>
</svg>

);

const HireDevelopers = () => {
  return (
    <section id="hire" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#E4ECF7] to-[#F1F1F5] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-6 sm:p-10 md:p-20 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 my-6 sm:my-8 md:my-10 mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[35px] text-[#29272E] m-0 font-bold max-w-[600px] text-center sm:text-left">
            Hire the best developers and designers around!
          </h2>
          <div className="relative flex flex-col items-center sm:items-end">
            <div className="absolute -top-12 sm:-top-15 left-1/2 sm:left-15 -translate-x-1/2 sm:translate-x-0 text-xl sm:text-2xl">
              <UpperLogo/>
            </div>
            <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white border-none py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg font-medium cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 whitespace-nowrap">
              Hire Top Developers
            </button>
            <div className="absolute -bottom-12 sm:-bottom-15 left-1/2 sm:left-15 -translate-x-1/2 sm:translate-x-0 text-xl sm:text-2xl">
              <LowerLogo/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireDevelopers; 