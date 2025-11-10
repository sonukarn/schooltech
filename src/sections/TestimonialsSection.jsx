import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Randal Grand",
    role: "Student",
    rating: 5,
    review:
      "There are many variations of words passages some all tend to repeat chunks some all form necessary injected for the going are humour words.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Edward Miles",
    role: "Student",
    rating: 5,
    review:
      "There are many variations of words passages some all tend to repeat chunks some all form necessary injected for the going are humour words.",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 3,
    name: "Ninal Gordon",
    role: "Student",
    rating: 5,
    review:
      "There are many variations of words passages some all tend to repeat chunks some all form necessary injected for the going are humour words.",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Anthony Nicoll",
    role: "Student",
    rating: 5,
    review:
      "There are many variations of words passages some all tend to repeat chunks some all form necessary injected for the going are humour words.",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];

const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8,28,58,0.8), rgba(8,28,58,0.8)), url('https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-400 font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="text-lg">💬</span> Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            What Our Students <span className="text-orange-400">Say's</span>
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
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
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
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
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative bg-white rounded-3xl shadow-md p-8 h-full">
                  {/* Bottom-right accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-100 rounded-tl-[100px]"></div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 relative z-10">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-orange-400" />
                    ))}
                    <span className="ml-auto text-orange-500 font-bold text-sm">
                      99
                    </span>
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 text-sm mb-6 relative z-10 leading-relaxed">
                    {item.review}
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-3 relative z-10">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                    />
                    <div>
                      <h4 className="text-gray-900 text-sm font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-orange-500 text-xs">{item.role}</p>
                    </div>
                  </div>
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
          background: rgba(255, 255, 255, 0.4);
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

export default TestimonialsSection;
