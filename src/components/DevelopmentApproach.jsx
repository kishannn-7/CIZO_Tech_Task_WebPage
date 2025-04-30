import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, highlight }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[#1E293B]">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          Unlike other companies, we are a{' '}
          <span className="text-[#F76680]">{highlight}</span>
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const DevelopmentApproach = () => {
  const features = [
    {
      icon: "/src/assets/logos/icon1.png",
      title: "UX Driven Engineering",
      highlight: "UX first",
      description: " development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
      icon: "/src/assets/logos/icon2.png",
      title: "Developing Shared Understanding",
      highlight: "UX first",
      description: " development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
      icon: "/src/assets/logos/icon3.png",
      title: "Proven Experience and Expertise",
      highlight: "UX first",
      description: " development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
      icon: "/src/assets/logos/icon4.png",
      title: "Security & Intellectual Property (IP)",
      highlight: "UX first",
      description: " development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
      icon: "/src/assets/logos/icon5.png",
      title: "Code Reviews",
      highlight: "UX first",
      description: " development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
      icon: "/src/assets/logos/icon6.png",
      title: "Quality Assurance & Testing",
      highlight: "UX first",
      description: " development company. Projects are driven by designers and they make sure design and experiences translate to code."
    }
  ];

  return (
    <section className="py-16 px-4 w-full bg-[#F7F7FA] shadow-inner">
      <div className="mx-4 h-auto sm:mx-15 lg:mx-30 w-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="w-15 absolute top-0 h-1.5 mb-4 bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-8 text-center">
            Our design and <br />
            <span className="font-bold text-gray-900">development approach</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentApproach; 