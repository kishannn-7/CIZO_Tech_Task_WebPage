import React from 'react';
import { motion } from 'framer-motion';

const SmallGradientArrow = () => (
  <svg 
    width="6" 
    height="10" 
    viewBox="0 0 9 15" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 transform group-hover:translate-x-1 transition-transform"
  >
    <path 
      d="M5.81851 7.50001L0.249756 1.93127L1.84051 0.340515L9.00001 7.50001L1.84051 14.6595L0.249756 13.0688L5.81851 7.50001Z" 
      fill="url(#paint0_linear_457_136)"
    />
    <defs>
      <linearGradient 
        id="paint0_linear_457_136" 
        x1="9.00001" 
        y1="0.340515" 
        x2="-3.74213" 
        y2="8.12715" 
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F76680"/>
        <stop offset="1" stopColor="#57007B"/>
      </linearGradient>
    </defs>
  </svg>
);

const LargeGradientArrow = () => (
  <svg 
    width="8" 
    height="14" 
    viewBox="0 0 9 15" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 transform group-hover:translate-x-1 transition-transform"
  >
    <path 
      d="M5.81851 7.50001L0.249756 1.93127L1.84051 0.340515L9.00001 7.50001L1.84051 14.6595L0.249756 13.0688L5.81851 7.50001Z" 
      fill="url(#paint1_linear_457_136)"
    />
    <defs>
      <linearGradient 
        id="paint1_linear_457_136" 
        x1="9.00001" 
        y1="0.340515" 
        x2="-3.74213" 
        y2="8.12715" 
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F76680"/>
        <stop offset="1" stopColor="#57007B"/>
      </linearGradient>
    </defs>
  </svg>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: "/src/assets/cardsImages/card1.png",
      bgColor: "bg-[#F1F2FF]"
    },
    {
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: "/src/assets/cardsImages/card2.png",
      bgColor: "bg-[#F0FFF7]"
    },
    {
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: "/src/assets/cardsImages/card3.png",
      bgColor: "bg-[#FFF4F4]"
    }
  ];

  return (
    <section className="py-16 px-4 w-full bg-[#F7F7FA] shadow-">
      <div className="mx-4 h-auto sm:mx-15 lg:mx-30 w-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="w-15 absolute top-0 h-1.5 mb-4 bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-8 text-center">
            Our recent <br />
            <span className="font-bold text-gray-900">Case studies</span>
          </h2>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-[2rem] ${study.bgColor} overflow-hidden shadow-lg`}
            >
              <div className="grid md:grid-cols-2 items-center">
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <div className="aspect-[4/3] w-full h-full relative rounded-[2rem] overflow-hidden shadow-lg">
                    <img
                      src={study.image}
                      alt={`Case study ${index + 1}`}
                      className="w-full h-full object-fit"
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-12 pr-16 space-y-6"
                >
                  <h3 className="text-[28px] font-bold text-[#1E293B] leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {study.description}
                  </p>
                  <div className="pt-4 flex justify-end">
                    <a 
                      href="#" 
                      className="bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-medium text-sm flex items-center group hover:opacity-90 transition-opacity"
                    >
                      Read more
                      <SmallGradientArrow />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Case Studies Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 flex justify-end"
        >
          <a 
            href="#" 
            className="bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-medium text-xl flex items-center justify-center group hover:opacity-90 transition-opacity"
          >
            Read more case studies
            <LargeGradientArrow />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 