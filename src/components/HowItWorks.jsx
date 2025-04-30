import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const HowItWorks = () => {
    const sections = [
        {
            image: "/src/assets/howItWorks/work1.png",
            title: "Build the right team to scale",
            description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
            quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
            author: {
                name: "Jeewa markram",
                position: "CEO",
                image: "/src/assets/profilePics/profile1.png"
            },
            link: {
                text: "delivery model",
                url: "#"
            }
        },
        {
            image: "/src/assets/howItWorks/work2.png",
            title: "Build the right team to scale",
            description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
            quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
            author: {
                name: "Jeewa markram",
                position: "CEO",
                image: "/src/assets/profilePics/profile2.png"
            },
            link: {
                text: "delivery model",
                url: "#"
            }
        },
        {
            image: "/src/assets/howItWorks/work3.png",
            title: "Build the right team to scale",
            description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
            quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
            author: {
                name: "Jeewa markram",
                position: "CEO",
                image: "/src/assets/profilePics/profile3.png"
            },
            link: {
                text: "delivery model",
                url: "#"
            }
        }
    ];

    return (
        <section id="how-it-works" className="w-auto py-16 bg-white mx-4 h-auto sm:mx-15 lg:mx-30 text-gray-800">
            <ScrollAnimation>
                <div className="flex flex-col items-center mb-16 relative">
                    <div className="w-15 absolute top-0 h-1.5 mb-4 bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-8 text-center">
                        Our recent <br />
                        <span className="font-bold text-gray-900">Case studies</span>
                    </h2>
                </div>
            </ScrollAnimation>
            {sections.map((section, index) => (
                <ScrollAnimation key={index} delay={index * 0.2}>
                    <div
                        className={`flex flex-col md:flex-row md: gap-15 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }  py-4 md:py-16 lg:py-20 mx-auto w-auto`}
                    >
                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/2 pr-0 md:pr-8 space-y-6"
                        >
                            <div className="space-y-2">
                                {/* <h3 className="text-lg text-gray-400">{section.subtitle}</h3> */}
                                <h2 className="text-[28px] text-gray-900 font-semibold">{section.title}</h2>
                            </div>

                            <p className="text-gray-400 leading-relaxed">
                                {section.description}
                            </p>

                            <div className="flex items-center space-x-1">
                                <p className="text-gray-400">Our <span
                                    href={section.link.url}
                                    className="bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent hover:underline"
                                >
                                {section.link.text}
                                </span> helps you cut costs and deliver within budget.</p>
                            </div>
                            {/* Quote */}
                            <div className="relative pl-4 mt-8 bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
                                <div className="absolute left-0 w-1 h-full bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-content text-transparent"></div>
                                <p className="italic mb-4">
                                    "{section.quote}"
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img
                                    src={section.author.image}
                                    alt={section.author.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-medium">{section.author.name}</p>
                                    <p className="text-sm text-gray-400">{section.author.position}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/2 mt-8 md:mt-0"
                        >
                            <div className="rounded-2xl overflow-hidden">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </ScrollAnimation>
            ))}
        </section>
    );
};

export default HowItWorks;
