import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBalanceScale,
  FaLaptopCode,
  FaHeartbeat,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const departments = [
  {
    id: 1,
    icon: <FaBriefcase className="text-4xl text-orange-500" />,
    title: "Business And Finance",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have some injected humour.",
  },
  {
    id: 2,
    icon: <FaBalanceScale className="text-4xl text-orange-500" />,
    title: "Law And Criminology",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 3,
    icon: <FaLaptopCode className="text-4xl text-orange-500" />,
    title: "IT And Data Science",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 4,
    icon: <FaHeartbeat className="text-4xl text-orange-500" />,
    title: "Health And Medicine",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 5,
    icon: <FaBriefcase className="text-4xl text-orange-500" />,
    title: "Economics",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have some injected humour.",
  },
  {
    id: 6,
    icon: <FaLaptopCode className="text-4xl text-orange-500" />,
    title: "Software Engineering",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
];

const DepartmentSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section className="bg-gray-50 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="text-lg">🏛️</span> Department
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Browse Our <span className="text-orange-500">Department</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center pointer-events-none">
          <button
            ref={prevRef}
            className="pointer-events-auto -ml-12 bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 transition"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            ref={nextRef}
            className="pointer-events-auto -mr-12 bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 transition"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.init();
            swiper.pagination.update();
          }}
          pagination={{ clickable: true }}
        >
          {departments.map((dep, index) => (
            <SwiperSlide key={dep.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8 h-full">
                  {/* Top-right curved accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-bl-[100px]"></div>

                  {/* Icon */}
                  <div className="mb-6 relative z-10">{dep.icon}</div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-900 mb-2 relative z-10">
                    {dep.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed relative z-10">
                    {dep.description}
                  </p>

                  {/* Read More */}
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-orange-500 transition relative z-10">
                    READ MORE <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div
          ref={paginationRef}
          className="flex justify-center mt-10 space-x-2 custom-pagination"
        ></div>
      </div>

      {/* Pagination Style */}
      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #f97316;
          width: 18px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};

export default DepartmentSection;
