import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CommaStart, CommaEnd} from "./icons"

const testimonials = [
  {
    name: "Romeena De Silva",
    title: "Janet Cosmetics",
    image: "src/assets/profilePics/profile1.png",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies...Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies...",
  },
  {
    name: "Romeena De Silva",
    title: "Janet Cosmetics",
    image: "src/assets/profilePics/profile2.png",
    text: "Alcaline helped our business grow digitally in a short span. Highly recommend their services!",
  },
  {
    name: "Fernando S",
    title: "TechHub Inc.",
    image: "src/assets/profilePics/profile3.png",
    text: "Great team to work with. Professional and efficient throughout the project cycle.",
  },
  {
    name: "Fernando S",
    title: "Janet Cosmetics",
    image: "src/assets/profilePics/profile4.png",
    text: "Great team to work with. Professional and efficient throughout the project cycle.",
  },
  {
    name: "Fernando S",
    title: "Janet Cosmetics",
    image: "src/assets/profilePics/profile5.png",
    text: "Great team to work with. Professional and efficient throughout the project cycle.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const setIndex = (index) => setCurrentIndex(index);

  const { name, title, text } = testimonials[currentIndex];

  return (
    <div className="w-auto mx-4 h-auto sm:mx-15 lg:mx-30 md:h-lvh py-20 flex flex-col justify-between">
      <div className="relative flex flex-col max-w-full items-center justify-between gap-10 md:gap-0 h-full px-auto text-center">
        <div className="flex flex-col min-h-[400px] relative gap-y-16">
          <div className="w-15 absolute top-0 h-1.5 mb-4 self-center bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal my-6">
            Why customer trust us <br />
            <span className="font-bold text-gray-900">working with us</span>
          </h2>
          <div className="flex relative items-center">
            <p className="text-gray-700 text-lg px-20 max-w-fit md:max-w-xl leading-relaxed">
              <span className="absolute top-0 left-0">
                <CommaStart/> 
                </span>
                {text}
                <span className="absolute bottom-0 right-0">
                  <CommaEnd />
                  </span>
            </p>
          </div>

        </div>

        {/* <div className="flex items-center justify-center gap-6 mb-12 max-w-5xl mx-auto"> */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 self-center border-2 border-[#57007B] text-[#57007B] p-3 rounded-full hover:bg-purple-100 transition"
        >
          <ArrowLeft size={22} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 border-2 border-[#57007B] text-[#57007B] p-3 rounded-full hover:bg-purple-100 transition"
        >
          <ArrowRight size={22} />
        </button>
        {/* </div> */}

        <div className="flex justify-center gap-8 flex-wrap">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform duration-300 text-center ${index === currentIndex
                ? "opacity-100 scale-110"
                : "opacity-50 hover:opacity-80"
                }`}
              onClick={() => setIndex(index)}
            >
              <img
                src={t.image}
                alt={t.name}
                className={`w-16 h-16 rounded-full mx-auto mb-2 object-cover shadow-md transition `}
              />
              <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
              <p
                className={`font-semibold transition-colors ${index === currentIndex
                  ? "text-[#57007B]"
                  : "text-gray-700 hover:text-[#57007B]"
                  }`}
              >
                {t.name}
              </p>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}