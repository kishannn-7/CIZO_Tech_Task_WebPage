import React from "react";
import { motion } from "framer-motion";

const resources = [
  {
    id: 1,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/src/assets/resources/card1.png",
    link: "#",
  },
  {
    id: 2,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/src/assets/resources/card2.png",
    link: "#",
  },
  {
    id: 3,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/src/assets/resources/card3.png",
    link: "#",
  },
  {
    id: 4,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/src/assets/resources/card1.png",
    link: "#",
  },
  {
    id: 5,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/src/assets/resources/card2.png",
    link: "#",
  },
];

const Resources = () => {
  return (
    <section id="blogs" className="py-16 px-4 w-full bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16 relative"
        >
          <div className="w-15 absolute top-0 h-1.5 mb-4 bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-8 text-center">
            Featured <br />
            <span className="font-bold text-gray-900">Resources</span>
          </h2>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-15 min-w-max px-4 pb-4">
              {resources.map((resource) => (
                <div key={resource.id} className="w-[300px] flex flex-col">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <h3 className="text-base font-medium text-gray-800 mb-4 line-clamp-2">
                    {resource.title}
                  </h3>
                  <a
                    href={resource.link}
                    className="mt-auto flex items-center self-end text-base text-[#57007B] font-medium"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }
        `}</style>
      </div>
    </section>
  );
};

export default Resources;
