import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const TimeLine = () => (
  <svg
    width="1230"
    height="60"
    viewBox="0 0 1230 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <line
      x1="-2.05333e-05"
      y1="29"
      x2="1182"
      y2="28.9757"
      stroke="url(#paint0_linear_0_1)"
      stroke-width="2"
    />
    <line
      x1="181.082"
      x2="181.082"
      y2="30"
      stroke="url(#paint1_linear_0_1)"
      stroke-width="2"
    />
    <line
      x1="551.082"
      x2="551.082"
      y2="30"
      stroke="url(#paint2_linear_0_1)"
      stroke-width="2"
    />
    <line
      x1="941.082"
      x2="941.082"
      y2="30"
      stroke="url(#paint3_linear_0_1)"
      stroke-width="2"
    />
    <line
      x1="244"
      y1="30"
      x2="244"
      y2="60"
      stroke="url(#paint4_linear_0_1)"
      stroke-width="2"
    />
    <line
      x1="624"
      y1="30"
      x2="624"
      y2="60"
      stroke="url(#paint5_linear_0_1)"
      stroke-width="2"
    />
    <line
      x1="1014"
      y1="30"
      x2="1014"
      y2="60"
      stroke="url(#paint6_linear_0_1)"
      stroke-width="2"
    />
    <rect x="1188" y="9" width="42" height="42" fill="url(#pattern0_0_1)" />
    <defs>
      <pattern
        id="pattern0_0_1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_0_1" transform="scale(0.000666667)" />
      </pattern>
      <linearGradient
        id="paint0_linear_0_1"
        x1="1182"
        y1="29.9757"
        x2="1182"
        y2="31.9757"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1="180.082"
        y1="30"
        x2="178.084"
        y2="29.9334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_1"
        x1="550.082"
        y1="30"
        x2="548.084"
        y2="29.9334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_1"
        x1="940.082"
        y1="30"
        x2="938.084"
        y2="29.9334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_0_1"
        x1="243"
        y1="60"
        x2="241.002"
        y2="59.9334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_0_1"
        x1="623"
        y1="60"
        x2="621.002"
        y2="59.9334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_0_1"
        x1="1013"
        y1="60"
        x2="1011"
        y2="59.9334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
    </defs>
  </svg>
);

const steps = [
  {
    number: "1",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    number: "2",
    title: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    number: "3",
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
  },
  {
    number: "4",
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    number: "5",
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
  },
  {
    number: "6",
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="relative container mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16 relative"
          >
            <div className="absolute top-0 w-15 h-1.5 mb-4 bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-8 text-center">
              How development
              <br />
              <span className="font-bold text-gray-900">
                through Alcaline works
              </span>
            </h2>
          </motion.div>
        </ScrollAnimation>

        {/* Timeline */}
        <ScrollAnimation delay={0.2}>
          <div className="relative mt-20">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
              <TimeLine/>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                <span className="text-2xl">
                  <img
                    src="/src/assets/logos/trophy.png"
                    alt="icon1"
                    className="w-15"
                  />
                </span>
              </div>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <ScrollAnimation key={step.number} delay={0.3 + index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white p-6 rounded-lg border border-gray-100 shadow-sm relative ${
                      index >= 3 ? "lg:mt-16" : ""
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      <span className="bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-bold mb-2">
                        #{step.number}
                      </span>  {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>

                    {/* Vertical line for mobile/tablet */}
                    {index < steps.length - 1 && (
                      <div
                        className="lg:hidden absolute left-1/2 transform -translate-x-1/2 h-8 w-0.5 bg-pink-500"
                        style={{ bottom: "-2rem" }}
                      ></div>
                    )}
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
