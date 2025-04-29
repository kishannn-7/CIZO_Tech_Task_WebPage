import React, { useRef, useState } from "react";

const AboutUs = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="about" className="bg-white py-14 px-4 sm:px-15 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <div className="w-15 h-1.5 mb-4 bg-gradient-to-r from-[#57007B] to-[#F76680]"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-6">
            Leading companies trust us <br />
            <span className="font-bold text-gray-900">to develop software</span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We <span className="text-[#F76680]">add development capacity</span> to tech teams.
            Our value isn’t limited to building teams but is equally distributed across the
            project lifecycle. We are a custom software development company that guarantees
            the successful delivery of your project.
          </p>
          <a
            href="#"
            className="text-[#57007B] font-medium hover:underline inline-flex items-center gap-1 text-sm sm:text-base"
          >
            See more Informations
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-64 sm:h-80 md:h-96">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="src/assets/poster.png"
          >
            <source src="src/assets/Stock_Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={handleTogglePlayback}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-opacity-70 p-3 sm:p-4">
              <div className="p-2 sm:p-3">
                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="39" cy="39" r="24" fill="white" />
                  <circle cx="39" cy="39" r="39" fill="white" fillOpacity="0.43" />
                  <g clipPath="url(#clip0_1_419)">
                    {isPlaying ? (
                      // Pause Icon
                      <path
                        d="M33 28h5v22h-5zM40 28h5v22h-5z"
                        fill="#57007B"
                        stroke="white"
                      />
                    ) : (
                      // Play Icon
                      <path
                        d="M39.0003 15.3335C52.0713 15.3337 62.6664 25.9295 62.6664 39.0005C62.6662 52.0713 52.0712 62.6663 39.0003 62.6665C25.9293 62.6665 15.3335 52.0714 15.3333 39.0005C15.3333 25.9294 25.9292 15.3335 39.0003 15.3335ZM35.0072 29.6792C34.8182 29.6955 34.634 29.7493 34.4642 29.8364H34.016L34.2357 29.9829C34.145 30.0533 34.0615 30.1326 33.9896 30.2222L33.8763 30.3853C33.7739 30.5557 33.707 30.7443 33.68 30.9399L33.6664 31.1382V46.8628C33.6668 47.0616 33.7076 47.2576 33.7855 47.439L33.8763 47.6157C33.9788 47.7862 34.1145 47.9337 34.2747 48.0493L34.4427 48.1538C34.6182 48.2475 34.8104 48.3038 35.0072 48.3208L35.2054 48.3247C35.4041 48.3149 35.5981 48.2648 35.7757 48.1782L35.9476 48.0796L47.7376 40.2212C47.8886 40.1207 48.0194 39.9935 48.1234 39.8462L48.2181 39.6929C48.3322 39.48 48.3919 39.242 48.3919 39.0005C48.3919 38.7588 48.3322 38.5201 48.2181 38.3071C48.104 38.0943 47.9387 37.9126 47.7376 37.7788H47.7367L37.3187 30.8364H37.3197L35.9476 29.9204C35.727 29.7732 35.4703 29.6883 35.2054 29.6753L35.0072 29.6792Z"
                        fill="#57007B"
                        stroke="white"
                      />
                    )}
                  </g>
                  <defs>
                    <clipPath id="clip0_1_419">
                      <rect width="58" height="58" fill="white" transform="translate(10 10)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
