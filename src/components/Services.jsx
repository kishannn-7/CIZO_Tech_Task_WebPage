import React, { useRef, useState, useEffect } from 'react';


const services = [
  {
    id: 1,
    title: 'Mobile App Development',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: `/src/assets/cardLogo1.png`,
  },
  {
    id: 2,
    title: 'Web Design & Development',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: `src/assets/cardLogo1.png`,
  },
  {
    id: 3,
    title: 'Software Testing Service',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: `src/assets/cardLogo1.png`,
  },
  {
    id: 4,
    title: 'Software Testing Service',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: `src/assets/cardLogo1.png`,
  },
  {
    id: 5,
    title: 'Web Design & Development',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: `src/assets/cardLogo1.png`,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const children = Array.from(scrollContainer.children);
      const scrollCenter = scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(scrollCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-12 shadow-inner bg-[#F9F9FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20">Services we offer</h2>

        {/*Scrollable-Wrapper*/}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex scrollbar-hide overflow-x-auto space-x-6 pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`aspect-square min-w-[300px] sm:min-w-[320px] bg-white rounded-lg shadow-md p-6 snap-center transition-all duration-300 ${
                  activeIndex === index ? 'border-2 bg-gradient-to-r from-[#57007B] to-[#F76680] bg-amber-50 bg-clip-text text-transparent ' : 'border border-transparent'
                }`}
              >
                <div className="flex flex-col items-center text-left justify-center h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center self-start justify-center rounded-full ml-1 mb-4 text-2xl">
                  <img src={service.icon} alt="Service Icon" class="object-cover" />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  {/* Description */}
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            {services.map((_, idx) => (
              <span
                key={idx}
                className={`aspect-square rounded-full border border-gray-400 ${
                  idx === activeIndex ? 'bg-gradient-to-r from-[#57007B] to-[#F76680] h-4' :'bg-transparent h-3'
                }`}
              ></span>
            ))}
          </div>

          {/* Counter */}
          <div className="flex justify-center md:justify-end mt-4 text-gray-600 font-medium">
            <span className="text-pink-500 mr-1">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="mx-1">—</span>
            <span>{String(services.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

