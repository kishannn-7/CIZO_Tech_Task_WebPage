import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";

const logos = [
    'src/assets/companyLogos/image1.png', 
    'src/assets/companyLogos/image2.png', 
    'src/assets/companyLogos/image3.png', 
    'src/assets/companyLogos/image4.png', 
    'src/assets/companyLogos/image5.png',
    'src/assets/companyLogos/image6.png', 
    'src/assets/companyLogos/image7.png', 
    'src/assets/companyLogos/image8.png', 
    'src/assets/companyLogos/image1.png',
]

const TrustedBySection = () => {
    const scrollRef = useRef(null)

    useEffect(() => {
        const container = scrollRef.current
        let scrollPos = 0

        const scroll = () => {
            if (container) {
                container.scrollLeft += 0.5
                scrollPos += 0.5

                if (scrollPos >= container.scrollWidth / 2) {
                    container.scrollLeft = 0
                    scrollPos = 0
                }
            }
        }

        const interval = setInterval(scroll, 30)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full min-h- mt-15 text-center">
            <div className="flex flex-col relative text-left items-start mx-4 sm:mx-15 lg:mx-30">
                <div className="w-15 h-1.5 mb-4 self-start bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal">
                    Why customer trust us <br />
                    <span className="font-bold text-gray-900">working with us</span>
                </h2>
            </div>
            <div className="w-auto flex item-center justify-end gap-6 py-5 mx-10">
                <button
                    // onClick={prev}
                    className="border-2 border-[#57007B] text-[#57007B] p-3 rounded-full hover:bg-purple-100 transition"
                >
                    <ArrowLeft size={22} />
                </button>
                <button
                    // onClick={next}
                    className="border-2 border-[#57007B] text-[#57007B] p-3 rounded-full hover:bg-purple-100 transition"
                >
                    <ArrowRight size={22} />
                </button>
            </div>

            {/* Scrollable wrapper */}
            <div className="flex items-center w-full h-[200px] bg-[#F7F7FA] overflow-x-auto">
                {/* Inner scroll container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 py-2 px-4"
                    style={{
                        minWidth: '100%',
                        scrollBehavior: 'smooth',
                        overflowX: 'scroll',
                        scrollbarWidth: 'none', // hide scrollbar in Firefox
                        msOverflowStyle: 'none' // hide scrollbar in IE/Edge
                    }}
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="min-w-fit w-32 md:w-36 lg:w-40 h-[80px] flex items-center justify-center bg-transparent rounded text-sm shrink-0"
                        >
                            <img src={logo} alt="" className='object-fill h-full'/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrustedBySection
