// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaClock,
//   FaArrowRight,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const events = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1200&auto=format&fit=crop",
//     title: "High School Program 2024",
//     date: "16 June, 2024",
//     time: "10.00AM - 04.00PM",
//     location: "25/B Milford Road, New York",
//     description:
//       "There are many variations of passages the majority have some injected humour.",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1584697964194-5a41f4e36b9c?q=80&w=1200&auto=format&fit=crop",
//     title: "University Workshop 2024",
//     date: "20 July, 2024",
//     time: "09.30AM - 03.00PM",
//     location: "25/B Milford Road, New York",
//     description:
//       "There are many variations of passages the majority have some injected humour.",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
//     title: "Coding Bootcamp 2024",
//     date: "22 August, 2024",
//     time: "11.00AM - 05.00PM",
//     location: "25/B Milford Road, New York",
//     description:
//       "There are many variations of passages the majority have some injected humour.",
//   },
// ];

// const UpcomingEvents = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const paginationRef = useRef(null);

//   return (
//     <section className="bg-gray-50 py-20 px-4 relative">
//       <div className="max-w-6xl mx-auto relative">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-orange-500 font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
//             <span className="text-lg">📅</span> Events
//           </p>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
//             Our Upcoming <span className="text-orange-500">Events</span>
//           </h2>
//           <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         {/* Arrows (Outside the Cards) */}
//         <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center pointer-events-none">
//           <button
//             ref={prevRef}
//             className="pointer-events-auto -ml-12 bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 transition"
//           >
//             <FaChevronLeft className="text-gray-700" />
//           </button>
//           <button
//             ref={nextRef}
//             className="pointer-events-auto -mr-12 bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 transition"
//           >
//             <FaChevronRight className="text-gray-700" />
//           </button>
//         </div>

//         {/* Swiper */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.params.pagination.el = paginationRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//             swiper.pagination.init();
//             swiper.pagination.update();
//           }}
//           pagination={{ clickable: true }}
//         >
//           {events.map((evt, index) => (
//             <SwiperSlide key={evt.id}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full p-4">
//                   {/* Location Tag */}
//                   <div className="flex items-center text-gray-500 text-sm gap-2 px-2 mb-3">
//                     <FaMapMarkerAlt className="text-orange-500" />
//                     <span>{evt.location}</span>
//                   </div>

//                   {/* Image */}
//                   <div className="overflow-hidden">
//                     <img
//                       src={evt.image}
//                       alt={evt.title}
//                       className="w-full object-cover"
//                       style={{
//                         borderRadius: "24px 24px 24px 0px", // TL, TR, BR rounded
//                         height: 180,
//                       }}
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-4 text-left flex flex-col flex-1">
//                     <div className="flex items-center text-gray-500 text-sm gap-5 mb-3">
//                       <div className="flex items-center gap-2">
//                         <FaCalendarAlt className="text-orange-500" />
//                         <span>{evt.date}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FaClock className="text-orange-500" />
//                         <span>{evt.time}</span>
//                       </div>
//                     </div>

//                     <h3 className="text-base font-semibold text-gray-900 mb-2">
//                       {evt.title}
//                     </h3>
//                     <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">
//                       {evt.description}
//                     </p>

//                     <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full self-start">
//                       JOIN EVENT <FaArrowRight className="text-xs" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination Dots */}
//         <div
//           ref={paginationRef}
//           className="flex justify-center mt-10 space-x-2 custom-pagination"
//         ></div>
//       </div>

//       {/* Pagination Style */}
//       <style jsx>{`
//         .custom-pagination .swiper-pagination-bullet {
//           background: #d1d5db;
//           opacity: 1;
//           transition: all 0.3s ease;
//           width: 8px;
//           height: 8px;
//           border-radius: 9999px;
//         }
//         .custom-pagination .swiper-pagination-bullet-active {
//           background: #f97316;
//           width: 18px;
//           border-radius: 9999px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default UpcomingEvents;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1200&auto=format&fit=crop",
    title: "High School Program 2024",
    date: "16 June, 2024",
    time: "10.00AM - 04.00PM",
    location: "25/B Milford Road, New York",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1584697964194-5a41f4e36b9c?q=80&w=1200&auto=format&fit=crop",
    title: "University Workshop 2024",
    date: "20 July, 2024",
    time: "09.30AM - 03.00PM",
    location: "25/B Milford Road, New York",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    title: "Coding Bootcamp 2024",
    date: "22 August, 2024",
    time: "11.00AM - 05.00PM",
    location: "25/B Milford Road, New York",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    title: "Summer Tech Fest 2024",
    date: "02 Sept, 2024",
    time: "09.00AM - 06.00PM",
    location: "25/B Milford Road, New York",
    description: "A vibrant event full of innovation and networking.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
    title: "AI Seminar 2024",
    date: "10 Sept, 2024",
    time: "01.00PM - 05.00PM",
    location: "Tech Park Center, NY",
    description:
      "Discussing the latest breakthroughs in artificial intelligence.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    title: "Digital Marketing Meetup 2024",
    date: "20 Oct, 2024",
    time: "09.00AM - 03.00PM",
    location: "City Hub Hall, NY",
    description: "Learn modern digital strategies from top marketing leaders.",
  },
];

const UpcomingEvents = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section className="bg-gray-50 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="text-lg">📅</span> Events
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Our Upcoming <span className="text-orange-500">Events</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            readable content.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 -left-12 -right-12 flex justify-between items-center pointer-events-none">
          <button
            ref={prevRef}
            className="pointer-events-auto bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 transition"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            ref={nextRef}
            className="pointer-events-auto bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 transition"
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
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
        >
          {events.map((evt, index) => (
            <SwiperSlide key={evt.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full p-5">
                  {/* Location Tag */}
                  <div className="flex items-center text-gray-500 text-sm gap-2 mb-3">
                    <FaMapMarkerAlt className="text-orange-500" />
                    <span>{evt.location}</span>
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden mb-4">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-48 object-cover"
                      style={{
                        borderRadius: "24px 24px 24px 0px",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-left flex flex-col flex-1">
                    <div className="flex items-center text-gray-500 text-sm gap-5 mb-3">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-orange-500" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-orange-500" />
                        <span>{evt.time}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {evt.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">
                      {evt.description}
                    </p>

                    <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full self-start">
                      JOIN EVENT <FaArrowRight className="text-xs" />
                    </button>
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

export default UpcomingEvents;
