// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { motion } from "framer-motion";
// import { FaCalendarAlt, FaUserAlt, FaComments } from "react-icons/fa";

// const blogPosts = [
//   {
//     id: 1,
//     image: "/images/blog1.jpg",
//     date: "June 18, 2024",
//     author: "Alicia Davis",
//     comments: "03 Comments",
//     title: "There Are Many Variations Passage Have Suffered Available.",
//   },
//   {
//     id: 2,
//     image: "/images/blog2.jpg",
//     date: "June 18, 2024",
//     author: "Alicia Davis",
//     comments: "03 Comments",
//     title: "There Are Many Variations Passage Have Suffered Available.",
//   },
//   {
//     id: 3,
//     image: "/images/blog3.jpg",
//     date: "June 18, 2024",
//     author: "Alicia Davis",
//     comments: "03 Comments",
//     title: "There Are Many Variations Passage Have Suffered Available.",
//   },
//   {
//     id: 4,
//     image: "/images/blog4.jpg",
//     date: "June 18, 2024",
//     author: "Alicia Davis",
//     comments: "03 Comments",
//     title: "There Are Many Variations Passage Have Suffered Available.",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <section className="relative bg-white py-20 overflow-hidden">
//       <div className="text-center mb-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-[#f4a024] font-semibold uppercase tracking-widest flex justify-center items-center gap-2"
//         >
//           <FaUserAlt className="text-sm" /> Our Blog
//         </motion.div>
//         <h2 className="text-4xl font-bold mt-3">
//           Latest News & <span className="text-[#f4a024]">Blog</span>
//         </h2>
//         <p className="text-gray-500 max-w-xl mx-auto mt-3">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout.
//         </p>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           navigation={{
//             nextEl: ".swiper-next",
//             prevEl: ".swiper-prev",
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           loop
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="pb-16"
//         >
//           {blogPosts.map((post) => (
//             <SwiperSlide key={post.id}>
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-[30px] shadow-md overflow-hidden group transition-all duration-300"
//               >
//                 <div className="relative rounded-t-[30px] overflow-hidden">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-[#f4a024] text-white text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1">
//                     <FaCalendarAlt /> {post.date}
//                   </div>
//                 </div>

//                 <div className="p-5 space-y-3">
//                   <div className="flex items-center text-gray-500 text-sm gap-4">
//                     <span className="flex items-center gap-1">
//                       <FaUserAlt className="text-[#f4a024]" /> By {post.author}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <FaComments className="text-[#f4a024]" /> {post.comments}
//                     </span>
//                   </div>

//                   <h3 className="font-semibold text-base text-gray-800 leading-snug">
//                     {post.title}
//                   </h3>

//                   <button className="bg-[#f4a024] text-white text-sm font-semibold rounded-full py-2 px-5 flex items-center gap-2 hover:bg-[#d98c1f] transition-all">
//                     READ MORE <span>➜</span>
//                   </button>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Swiper Arrows */}
//         <div className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#f4a024] rounded-full p-3 shadow-md cursor-pointer hover:bg-[#f4a024] hover:text-white transition">
//           ❮
//         </div>
//         <div className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#f4a024] rounded-full p-3 shadow-md cursor-pointer hover:bg-[#f4a024] hover:text-white transition">
//           ❯
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaUserAlt, FaComments } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    image: "/images/blog1.jpg",
    date: "June 18, 2024",
    author: "Alicia Davis",
    comments: "03 Comments",
    title: "There Are Many Variations Passage Have Suffered Available.",
  },
  {
    id: 2,
    image: "/images/blog2.jpg",
    date: "June 18, 2024",
    author: "Alicia Davis",
    comments: "03 Comments",
    title: "There Are Many Variations Passage Have Suffered Available.",
  },
  {
    id: 3,
    image: "/images/blog3.jpg",
    date: "June 18, 2024",
    author: "Alicia Davis",
    comments: "03 Comments",
    title: "There Are Many Variations Passage Have Suffered Available.",
  },
  {
    id: 4,
    image: "/images/blog4.jpg",
    date: "June 18, 2024",
    author: "Alicia Davis",
    comments: "03 Comments",
    title: "There Are Many Variations Passage Have Suffered Available.",
  },
];

const BlogSection = () => {
  return (
    <section className="relative bg-[#f9fafc] py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#f4a024] font-semibold uppercase tracking-widest flex justify-center items-center gap-2"
        >
          <FaUserAlt className="text-sm" /> Our Blog
        </motion.div>
        <h2 className="text-4xl font-bold mt-3">
          Latest News & <span className="text-[#f4a024]">Blog</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-24"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-[30px] shadow-md overflow-hidden group transition-all duration-300"
              >
                {/* Image */}
                <div className="relative rounded-t-[30px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#f4a024] text-white text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1">
                    <FaCalendarAlt /> {post.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center text-gray-500 text-sm gap-4">
                    <span className="flex items-center gap-1">
                      <FaUserAlt className="text-[#f4a024]" /> By {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComments className="text-[#f4a024]" /> {post.comments}
                    </span>
                  </div>

                  <h3 className="font-semibold text-base text-gray-800 leading-snug">
                    {post.title}
                  </h3>

                  <button className="bg-[#f4a024] text-white text-sm font-semibold rounded-full py-2 px-5 flex items-center gap-2 hover:bg-[#d98c1f] transition-all">
                    READ MORE <span>➜</span>
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows (outside) */}
        <div className="swiper-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white text-[#f4a024] rounded-full p-3 shadow-md cursor-pointer hover:bg-[#f4a024] hover:text-white transition">
          ❮
        </div>
        <div className="swiper-next absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white text-[#f4a024] rounded-full p-3 shadow-md cursor-pointer hover:bg-[#f4a024] hover:text-white transition">
          ❯
        </div>

        {/* Pagination below cards with extra spacing */}
        <div className="custom-pagination flex justify-center mt-12 space-x-2" />
      </div>
    </section>
  );
};

export default BlogSection;
