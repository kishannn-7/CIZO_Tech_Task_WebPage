import React from 'react';
import { motion } from 'framer-motion';

const HireDevelopers = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto shadow-lg">
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8F9FF] rounded-[24px] p-12 flex justify-between items-center my-10 max-w-7xl mx-auto"
        >
          <h2 className="text-[48px] text-[#2D2D2D] m-0 font-semibold max-w-[600px]">
            Hire the best developers and designers around!
          </h2>
          <div className="relative">
            <div className="absolute -top-5 -right-5 text-2xl">✨</div>
            <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white border-none py-4 px-8 rounded-xl text-lg font-medium cursor-pointer transition-transform duration-200 hover:-translate-y-0.5">
              Hire Top Developers
            </button>
            <div className="absolute -bottom-5 -left-5 text-2xl">✨</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireDevelopers; 