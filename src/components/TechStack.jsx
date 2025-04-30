import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const categories = [
  { id: 'backend', label: 'Backend', active: true },
  { id: 'frontend', label: 'Frontend' },
  { id: 'databases', label: 'Databases' },
  { id: 'cms', label: 'CMS' },
  { id: 'cloudTesting', label: 'CloudTesting' },
  { id: 'devOps', label: 'DevOps' },
];

const techStacks = {
  backend: [
    { name: 'Node.js', logo: '/src/assets/logos/nodejs.svg' },
    { name: 'PHP', logo: '/src/assets/logos/php.svg' },
    { name: 'Python', logo: '/src/assets/logos/python.svg' },
    { name: 'Ruby on Rails', logo: '/src/assets/logos/rails.svg' },
    { name: 'Java', logo: '/src/assets/logos/java.svg' },
    { name: '.NET Core', logo: '/src/assets/logos/dotnet.svg' }
  ],
  frontend: [
    // Add frontend technologies
  ],
  databases: [
    { name: 'MySQL', logo: '/src/assets/logos/mysql.svg' },
    { name: 'MongoDB', logo: '/src/assets/logos/mongodb.svg' }
    // Add more databases
  ],
  cms: [
    // Add CMS technologies
  ],
  cloudTesting: [
    // Add cloud testing technologies
  ],
  devOps: [
    // Add DevOps technologies
  ]
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  return (
    <section className="py-16 px-4 w-full bg-white shadow-inner">
      <div className="container mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="flex flex-col items-center mb-16 relative">
            <div className="w-15 absolute top-0 h-1.5 mb-4 bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-8 text-center">
              Our <br />
              <span className="font-bold text-gray-900">Tech Stack</span>
            </h2>
          </div>
        </ScrollAnimation>

        {/* Categories */}
        <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-lg font-medium relative ${
                  activeCategory === category.id
                    ? 'text-[#F76680] after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-[#57007B] after:to-[#F76680]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Tech Stack Grid */}
        <ScrollAnimation delay={0.4}>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 w-[90%] xl:w-[80%]"
            >
              {techStacks[activeCategory]?.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-16 w-auto object-contain transform hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TechStack; 