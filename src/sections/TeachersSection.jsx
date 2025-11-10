// import { motion } from "framer-motion";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import teacher1 from "../assets/teacher1.jpg";
// import teacher2 from "../assets/teacher2.jpg";
// import teacher3 from "../assets/teacher3.jpg";
// import teacher4 from "../assets/teacher4.jpg";

// const teachers = [
//   {
//     name: "Angela T. Vigil",
//     role: "Associate Professor",
//     img: teacher1,
//   },
//   {
//     name: "Frank A. Mitchell",
//     role: "Associate Professor",
//     img: teacher2,
//   },
//   {
//     name: "Susan D. Lunsford",
//     role: "CEO & Founder",
//     img: teacher3,
//   },
//   {
//     name: "Dennis A. Pruitt",
//     role: "Associate Professor",
//     img: teacher4,
//   },
// ];

// const TeachersSection = () => {
//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Header */}
//         <div className="space-y-3 mb-12">
//           <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold tracking-widest">
//             <span className="text-2xl">👨‍🏫</span>
//             <span className="border-b-2 border-orange-500 pb-1">
//               OUR TEACHERS
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Meet With Our <span className="text-orange-500">Teachers</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teachers.map((teacher, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               className="relative bg-white rounded-[30px] shadow-md overflow-hidden group transition-all duration-300"
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={teacher.img}
//                   alt={teacher.name}
//                   className="w-full h-72 object-cover rounded-t-[30px]"
//                 />

//                 {/* Social Icons on Hover */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 40 }}
//                   whileHover={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute top-6 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transform translate-x-6 group-hover:translate-x-0 transition-all duration-300"
//                 >
//                   <div className="bg-teal-600 p-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
//                     <FaFacebookF className="text-white" />
//                   </div>
//                   <div className="bg-teal-600 p-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
//                     <FaLinkedinIn className="text-white" />
//                   </div>
//                   <div className="bg-teal-600 p-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
//                     <FaTwitter className="text-white" />
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-lg font-bold text-gray-900">
//                   {teacher.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 uppercase tracking-wide">
//                   {teacher.role}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeachersSection;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter,
//   FaShareAlt,
// } from "react-icons/fa";
// import teacher1 from "../assets/teacher1.jpg";
// import teacher2 from "../assets/teacher2.jpg";
// import teacher3 from "../assets/teacher3.jpg";
// import teacher4 from "../assets/teacher4.jpg";

// /*
// Notes:
// - Replace teacher1..4 imports with your real images.
// - Images are placed inside a padded rounded frame so they don't get awkwardly cropped.
// */

// const teachers = [
//   { name: "Angela T. Vigil", role: "Associate Professor", img: teacher1 },
//   { name: "Frank A. Mitchell", role: "Associate Professor", img: teacher2 },
//   { name: "Susan D. Lunsford", role: "CEO & Founder", img: teacher3 },
//   { name: "Dennis A. Pruitt", role: "Associate Professor", img: teacher4 },
// ];

// const iconVariants = {
//   hidden: { opacity: 0, x: 16 },
//   show: (i = 0) => ({ opacity: 1, x: 0, transition: { delay: i * 0.06 } }),
// };

// export default function TeachersSection() {
//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Header */}
//         <div className="space-y-3 mb-12">
//           <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold tracking-widest">
//             <span className="text-2xl">👨‍🏫</span>
//             <span className="border-b-2 border-orange-500 pb-1">
//               OUR TEACHERS
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Meet With Our <span className="text-orange-500">Teachers</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teachers.map((t, idx) => (
//             <motion.article
//               key={idx}
//               whileHover={{ y: -10 }}
//               initial={{ y: 0 }}
//               transition={{ type: "spring", stiffness: 220, damping: 20 }}
//               className="relative group bg-white rounded-[28px] shadow-lg overflow-visible"
//             >
//               {/* card inner wrapper provides padding area under image so badge can sit partly over content */}
//               <div className="p-5">
//                 {/* IMAGE FRAME: padded container so image does not get cut */}
//                 <div className="relative rounded-[22px] overflow-hidden bg-gray-100 p-4">
//                   {/* inner image box centers image; use object-contain so entire image visible */}
//                   <div className="w-full h-64 rounded-[16px] overflow-hidden bg-white flex items-center justify-center">
//                     <img
//                       src={t.img}
//                       alt={t.name}
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   </div>

//                   {/* vertical social icons (hidden until hover) */}
//                   <div className="absolute right-3 top-4 flex flex-col gap-3">
//                     {/* each icon is animated (staggered) - uses framer variants */}
//                     <motion.div
//                       initial="hidden"
//                       variants={iconVariants}
//                       whileHover="show"
//                       className="pointer-events-none"
//                     >
//                       {/* placeholder wrapper - actual per-icon instances below */}
//                     </motion.div>

//                     {/* we will show icons on group-hover with staggered framer animation */}
//                     <motion.div
//                       initial={{ opacity: 0, x: 18 }}
//                       whileHover={{}}
//                       animate={{}}
//                       className="space-y-3"
//                     >
//                       {/* Using Framer to animate each icon on group hover: */}
//                       <motion.div
//                         className="opacity-0 translate-x-6 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
//                         transition={{ delay: 0.06 }}
//                       >
//                         <a
//                           className="bg-teal-700 hover:bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center text-white shadow"
//                           href="#"
//                           aria-label="facebook"
//                         >
//                           <FaFacebookF size={12} />
//                         </a>
//                       </motion.div>

//                       <motion.div
//                         className="opacity-0 translate-x-6 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-350"
//                         transition={{ delay: 0.12 }}
//                       >
//                         <a
//                           className="bg-teal-700 hover:bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center text-white shadow"
//                           href="#"
//                           aria-label="linkedin"
//                         >
//                           <FaLinkedinIn size={12} />
//                         </a>
//                       </motion.div>

//                       <motion.div
//                         className="opacity-0 translate-x-6 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400"
//                         transition={{ delay: 0.18 }}
//                       >
//                         <a
//                           className="bg-teal-700 hover:bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center text-white shadow"
//                           href="#"
//                           aria-label="twitter"
//                         >
//                           <FaTwitter size={12} />
//                         </a>
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Content area has top padding so image feels separated from text */}
//                 <div className="pt-6 pb-4">
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">
//                     {t.name}
//                   </h3>
//                   <p className="text-sm text-teal-700 uppercase tracking-widest">
//                     {t.role}
//                   </p>
//                 </div>
//               </div>

//               {/* small share icon circle at bottom-right of the card (visible always) */}
//               <div className="absolute -right-4 bottom-6">
//                 <button
//                   className="bg-teal-700 text-white w-10 h-10 rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 transition"
//                   aria-label="share"
//                 >
//                   <FaShareAlt />
//                 </button>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";
import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpg";
import teacher3 from "../assets/teacher3.jpg";
import teacher4 from "../assets/teacher4.jpg";

const teachers = [
  { name: "Angela T. Vigil", role: "Associate Professor", img: teacher1 },
  { name: "Frank A. Mitchell", role: "Associate Professor", img: teacher2 },
  { name: "Susan D. Lunsford", role: "CEO & Founder", img: teacher3 },
  { name: "Dennis A. Pruitt", role: "Associate Professor", img: teacher4 },
];

export default function TeachersSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold tracking-widest">
            <span className="text-2xl">👨‍🏫</span>
            <span className="border-b-2 border-orange-500 pb-1">
              OUR TEACHERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet With Our <span className="text-orange-500">Teachers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((t, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ y: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="relative group bg-white rounded-[28px] shadow-lg overflow-visible"
            >
              <div className="p-5">
                {/* IMAGE */}
                <div className="relative rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] overflow-hidden bg-gray-100">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-72 object-cover rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Social Icons on Hover */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="bg-teal-700 hover:bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center text-white shadow"
                      aria-label="facebook"
                    >
                      <FaFacebookF size={12} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="bg-teal-700 hover:bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center text-white shadow"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn size={12} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="bg-teal-700 hover:bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center text-white shadow"
                      aria-label="twitter"
                    >
                      <FaTwitter size={12} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6 pb-4 px-1 text-center space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-teal-700 uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Share Button */}
              <div className="absolute -right-4 bottom-6">
                <button
                  className="bg-teal-700 text-white w-10 h-10 rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 transition"
                  aria-label="share"
                >
                  <FaShareAlt />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
