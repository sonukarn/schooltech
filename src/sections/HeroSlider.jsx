// // HeroSlider.jsx
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const slides = [
//   {
//     id: 1,
//     title: "Start Your Beautiful And",
//     highlight: "Bright",
//     subtitle: "Future",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
//   },
//   {
//     id: 2,
//     title: "Start Your Beautiful And",
//     highlight: "Bright",
//     subtitle: "Future",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
//   },
//   {
//     id: 3,
//     title: "Start Your Beautiful And",
//     highlight: "Bright",
//     subtitle: "Future",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
//   },
//   {
//     id: 4,
//     title: "Start Your Beautiful And",
//     highlight: "Bright",
//     subtitle: "Future",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
//   },
//   // Add more slides if needed
// ];

// const HeroSlider = () => {
//   return (
//     <section className="relative w-full h-[100vh] overflow-hidden">
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         loop
//         className="w-full h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-full bg-cover bg-center bg-[url('/your-image.jpg')]">
//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black/50 z-10" />

//               {/* Content */}
//               <div className="relative z-20 w-full h-full flex items-center justify-center text-white px-4">
//                 <div className="max-w-3xl text-center space-y-6">
//                   <motion.p
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="uppercase text-sm tracking-widest text-yellow-400"
//                   >
//                     Welcome to Eduka!
//                   </motion.p>

//                   <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="text-4xl md:text-5xl font-bold"
//                   >
//                     {slide.title}{" "}
//                     <span className="text-yellow-400">{slide.highlight}</span>{" "}
//                     {slide.subtitle}
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                     className="text-sm md:text-base text-gray-200"
//                   >
//                     {slide.description}
//                   </motion.p>

//                   <motion.div
//                     className="flex gap-4 justify-center"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.8 }}
//                   >
//                     <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold transition">
//                       About More
//                     </button>
//                     <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded font-semibold transition">
//                       Learn More
//                     </button>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Custom Navigation Buttons */}
//         <div className="swiper-button-prev text-white absolute left-4 top-1/2 transform -translate-y-1/2 z-30">
//           <FaArrowLeft size={24} />
//         </div>
//         <div className="swiper-button-next text-white absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
//           <FaArrowRight size={24} />
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default HeroSlider;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import slider1 from "../assets/slider-1.jpg";
// import slider2 from "../assets/slider-2.jpg";
// import slider3 from "../assets/slider-3.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "Start Your Beautiful And",
//     highlight: "Bright",
//     subtitle: "Future",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
//     image: slider1,
//   },
//   {
//     id: 2,
//     title: "Build A Powerful Career With",
//     highlight: "Education",
//     subtitle: "That Matters",
//     description:
//       "Join thousands of students who have found success through our dedicated learning platform.",
//     image: slider2,
//   },
//   {
//     id: 3,
//     title: "Achieve Your Dreams With",
//     highlight: "Expert",
//     subtitle: "Guidance",
//     description:
//       "Our expert mentors and curated resources will help you take the next big leap in your academic life.",
//     image: slider3,
//   },
// ];

// const HeroSlider = () => {
//   return (
//     <section className="relative w-full h-[100vh] overflow-hidden">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         className="w-full h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="relative w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-[#0b1c39b3] z-10" />

//               {/* Slide Content */}
//               <div className="relative z-20 w-full h-full flex items-center justify-items-start px-4 text-white">
//                 <div className="max-w-3xl text-center space-y-6">
//                   <motion.p
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="uppercase text-sm tracking-widest text-yellow-400"
//                   >
//                     Welcome to Eduka!
//                   </motion.p>

//                   <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="text-4xl md:text-5xl font-bold leading-tight"
//                   >
//                     {slide.title}{" "}
//                     <span className="text-yellow-400">{slide.highlight}</span>{" "}
//                     {slide.subtitle}
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                     className="text-sm md:text-base text-gray-200"
//                   >
//                     {slide.description}
//                   </motion.p>

//                   <motion.div
//                     className="flex gap-4 justify-center"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.8 }}
//                   >
//                     <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold transition">
//                       About More
//                     </button>
//                     <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded font-semibold transition">
//                       Learn More
//                     </button>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Navigation Arrows */}
//         <div className="swiper-button-prev !text-white absolute left-5 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
//           <FaArrowLeft size={28} />
//         </div>
//         <div className="swiper-button-next !text-white absolute right-5 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
//           <FaArrowRight size={28} />
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default HeroSlider;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";

const slides = [
  {
    id: 1,
    title: "Start Your Beautiful And",
    highlight: "Bright",
    subtitle: "Future",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    image: slider1,
  },
  {
    id: 2,
    title: "Build A Powerful Career With",
    highlight: "Education",
    subtitle: "That Matters",
    description:
      "Join thousands of students who have found success through our dedicated learning platform.",
    image: slider2,
  },
  {
    id: 3,
    title: "Achieve Your Dreams With",
    highlight: "Expert",
    subtitle: "Guidance",
    description:
      "Our expert mentors and curated resources will help you take the next big leap in your academic life.",
    image: slider3,
  },
];

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-[130vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: isMobile
            ? ".swiper-button-next-mobile"
            : ".swiper-button-next",
          prevEl: isMobile
            ? ".swiper-button-prev-mobile"
            : ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Full-cover background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0b1c39b3] z-10" />

              {/* Content */}
              <div className="relative z-20 w-full h-full flex items-center px-4 text-white pb-16 sm:pb-24">
                <div className="max-w-3xl text-center space-y-6 mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <p className="uppercase text-md font-medium tracking-widest text-yellow-400">
                      Welcome to Eduka!
                    </p>
                    <span className="w-full h-[3px] bg-yellow-400 mt-2"></span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl font-bold leading-tight text-left"
                  >
                    {slide.title}{" "}
                    <span className="text-yellow-400">{slide.highlight}</span>{" "}
                    {slide.subtitle}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl text-gray-200"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4 justify-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                      About More
                    </button>
                    <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Mobile Arrows at bottom */}
        {isMobile ? (
          <div className="absolute bottom-16 right-5 z-30 flex gap-4">
            <div className="swiper-button-prev-mobile !text-white cursor-pointer">
              <FaArrowLeft size={24} />
            </div>
            <div className="swiper-button-next-mobile !text-white cursor-pointer">
              <FaArrowRight size={24} />
            </div>
          </div>
        ) : (
          <>
            {/* Desktop arrows with extra safe spacing */}
            <div className="swiper-button-prev !text-white cursor-pointer absolute left-6 top-1/2 -translate-y-1/2 z-30">
              <FaArrowLeft size={30} />
            </div>
            <div className="swiper-button-next !text-white cursor-pointer absolute right-6 top-1/2 -translate-y-1/2 z-30">
              <FaArrowRight size={30} />
            </div>
          </>
        )}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
