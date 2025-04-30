import React, { useRef, useState, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';


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

    // Initial center alignment to middle card
    const centerMiddleCard = () => {
      const middleCard = scrollContainer.children[2]; // Index 2 for middle card
      if (middleCard) {
        const containerWidth = scrollContainer.offsetWidth;
        const cardWidth = middleCard.offsetWidth;
        const cardLeft = middleCard.offsetLeft;
        const scrollLeft = cardLeft - (containerWidth - cardWidth) / 2;
        scrollContainer.scrollLeft = scrollLeft;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    // Center the middle card after a brief delay to ensure proper layout
    setTimeout(centerMiddleCard, 100);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-12 shadow-inner bg-[#F9F9FF]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20">Services we offer</h2>
        </ScrollAnimation>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex scrollbar-hide overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scroll-smooth"
            style={{
              paddingLeft: 'calc(50% - 150px)',
              paddingRight: 'calc(50% - 150px)',
              scrollPaddingLeft: '50%',
              scrollPaddingRight: '50%',
              scrollSnapType: 'x mandatory',
            }}
          >
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div
                  className={`aspect-square min-w-[300px] sm:min-w-[320px] bg-white rounded-lg shadow-md p-6 snap-center transition-all duration-300 ${
                    activeIndex === index 
                      ? 'border-2 border-[#F76680] bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent translate-y-4' 
                      : 'border border-transparent'
                  }`}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="flex flex-col items-center text-left justify-center h-full">
                    <div className="w-12 h-12 flex items-center self-start justify-center rounded-full ml-1 mb-4 text-2xl">
                      <img src={service.icon} alt="Service Icon" className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-500 text-sm">{service.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.4}>
            <div className="flex items-center justify-center mt-6 space-x-2">
              {services.map((_, idx) => (
                <span
                  key={idx}
                  className={`aspect-square rounded-full border border-gray-400 ${
                    idx === activeIndex ? 'bg-gradient-to-r from-[#57007B] to-[#F76680] h-4' : 'bg-transparent h-3'
                  }`}
                ></span>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <div className="flex items-center justify-center md:justify-end mt-8 space-x-3">
              <span className="text-[#57007B] font-medium text-lg">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <div className="relative w-32 h-0.5">
                <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                <div 
                  className="absolute h-full bg-[#57007B] rounded-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${((activeIndex + 1) / services.length) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-gray-400 font-medium text-lg">
                {String(services.length).padStart(2, '0')}
              </span>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;

