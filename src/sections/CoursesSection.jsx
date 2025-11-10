// import React from "react";
// import { motion } from "framer-motion";
// import { FaLink } from "react-icons/fa";

// const courses = [
//   {
//     id: 1,
//     title: "Acting And Drama",
//     category: "Drama",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Acting+And+Drama",
//   },
//   {
//     id: 2,
//     title: "Art And Design",
//     category: "Design",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Art+And+Design",
//   },
//   {
//     id: 3,
//     title: "Biology And Conservation",
//     category: "Science",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Biology+And+Conservation",
//   },
//   {
//     id: 4,
//     title: "Finance And Investment",
//     category: "Finance",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Finance+And+Investment",
//   },
//   {
//     id: 5,
//     title: "Health And Nutrition",
//     category: "Health",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Health+And+Nutrition",
//   },
//   {
//     id: 6,
//     title: "Language And Communication",
//     category: "Language",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image:
//       "https://via.placeholder.com/600x400?text=Language+And+Communication",
//   },
// ];

// const CoursesSection = () => {
//   return (
//     <section className="py-20 bg-white text-center">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="mb-12">
//           <p className="text-orange-500 font-semibold uppercase tracking-widest mb-2 flex justify-center items-center gap-2">
//             <span className="text-sm">📚</span> Our Courses
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900">
//             Let’s Check Our <span className="text-orange-500">Courses</span>
//           </h2>
//           <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, i) => (
//             <motion.div
//               key={course.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
//             >
//               {/* Image with Hover Overlay */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Dark Overlay with Orange Circle */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileHover={{ scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl"
//                   >
//                     <FaLink />
//                   </motion.div>
//                 </div>

//                 {/* Category Badge */}
//                 <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
//                   {course.category}
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6 text-left">
//                 <p className="text-xs text-gray-500 mb-1">
//                   {course.lessons} Lessons
//                 </p>
//                 <h3 className="font-bold text-lg mb-2">{course.title}</h3>
//                 <p className="text-sm text-gray-500 mb-4">
//                   There are many variations of passages of Lorem Ipsum
//                   available, but the majority have suffered alteration.
//                 </p>

//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>👥 {course.seats} Seats</span>
//                   <span>⏳ {course.years} Years</span>
//                   <span className="font-semibold text-orange-500">
//                     {course.price}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaLink, FaStar, FaRegStar } from "react-icons/fa";

// const courses = [
//   {
//     id: 1,
//     title: "Acting And Drama",
//     category: "Drama",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Acting+And+Drama",
//   },
//   {
//     id: 2,
//     title: "Art And Design",
//     category: "Design",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Art+And+Design",
//   },
//   {
//     id: 3,
//     title: "Biology And Conservation",
//     category: "Science",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Biology+And+Conservation",
//   },
//   {
//     id: 4,
//     title: "Finance And Investment",
//     category: "Finance",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Finance+And+Investment",
//   },
//   {
//     id: 5,
//     title: "Health And Nutrition",
//     category: "Health",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image: "https://via.placeholder.com/600x400?text=Health+And+Nutrition",
//   },
//   {
//     id: 6,
//     title: "Language And Communication",
//     category: "Language",
//     lessons: 10,
//     rating: 4.0,
//     seats: 75,
//     years: 4,
//     price: "$750",
//     image:
//       "https://via.placeholder.com/600x400?text=Language+And+Communication",
//   },
// ];

// const CoursesSection = () => {
//   return (
//     <section className="py-20 bg-white text-center">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="mb-12">
//           <p className="text-orange-500 font-semibold uppercase tracking-widest mb-2 flex justify-center items-center gap-2">
//             <span className="text-sm">📚</span> Our Courses
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900">
//             Let’s Check Our <span className="text-orange-500">Courses</span>
//           </h2>
//           <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, i) => (
//             <motion.div
//               key={course.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
//             >
//               {/* Image with Hover Overlay */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
//                 />

//                 {/* Dark Overlay with Orange Circle */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileHover={{ scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl"
//                   >
//                     <FaLink />
//                   </motion.div>
//                 </div>

//                 {/* Category Badge */}
//                 <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
//                   {course.category}
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6 text-left">
//                 <p className="text-xs text-gray-500 mb-1">
//                   {course.lessons} Lessons
//                 </p>
//                 <h3 className="font-bold text-lg mb-2">{course.title}</h3>
//                 <p className="text-sm text-gray-500 mb-4">
//                   There are many variations of passages of Lorem Ipsum
//                   available, but the majority have suffered alteration.
//                 </p>

//                 {/* Rating */}
//                 <div className="flex items-center text-orange-400 mb-3">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   {/* <FaStarHalf /> */}
//                   <FaRegStar />
//                   <span className="ml-2 text-gray-500 text-sm">
//                     ({course.rating.toFixed(1)})
//                   </span>
//                 </div>

//                 {/* Details */}
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>👥 {course.seats} Seats</span>
//                   <span>⏳ {course.years} Years</span>
//                   <span className="font-semibold text-orange-500">
//                     {course.price}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesSection;

import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Acting And Drama",
    category: "Drama",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    years: 4,
    price: "$750",
    image:
      "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Art And Design",
    category: "Design",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    years: 4,
    price: "$750",
    image:
      "https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Biology And Conservation",
    category: "Science",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    years: 4,
    price: "$750",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Finance And Investment",
    category: "Finance",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    years: 4,
    price: "$750",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Health And Nutrition",
    category: "Health",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    years: 4,
    price: "$750",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Language And Communication",
    category: "Language",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    years: 4,
    price: "$750",
    image:
      "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?auto=format&fit=crop&w=1200&q=80",
  },
];

function Stars({ rating }) {
  // returns array of star icons (full / half / empty)
  const stars = [];
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} />);
  if (hasHalf) stars.push(<FaStarHalfAlt key="half" />);
  while (stars.length < 5) stars.push(<FaRegStar key={`e${stars.length}`} />);
  return <div className="flex items-center text-orange-400 gap-1">{stars}</div>;
}

const CoursesSection = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-2 flex justify-center items-center gap-2">
            <span className="text-sm">📚</span> Our Courses
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Let’s Check Our <span className="text-orange-500">Courses</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group bg-white rounded-3xl shadow-xl overflow-visible"
            >
              {/* Card inner with padding to create 'space under image' where badge sits */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                {/* IMAGE WRAPPER */}
                <div className="relative overflow-visible">
                  {/* top image with selective rounded corners */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105
                      rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
                  />

                  {/* category badge: positioned so it sits partly outside image and part over card padding */}
                  <div
                    className="absolute right-6 -bottom-6 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md
                      transform translate-y-0 transition-transform duration-300
                      group-hover:translate-y-[-4px] z-30"
                    /* note: negative bottom pulls the badge below image, so it appears under card area */
                  >
                    {course.category}
                  </div>

                  {/* dark overlay only on image */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none" />

                  {/* centered orange circle with link icon (only on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{}}
                      whileInView={{}}
                      // show on group hover using CSS: we animate with framer inside but visibility toggle via class
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
                    >
                      <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg pointer-events-auto">
                        <FaLink />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* CONTENT: we keep padding under image so badge appears to sit partly over this area */}
                <div className="p-6 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-500">
                      <span className="inline-block mr-2">📘</span>
                      {course.lessons} Lessons
                    </p>
                    <div className="flex items-center gap-2 text-orange-400">
                      <Stars rating={course.rating} />
                      <span className="text-gray-500 text-sm">
                        ({course.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>

                  <p className="text-sm text-gray-500 mb-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      👥 {course.seats} Seats
                    </span>
                    <span className="flex items-center gap-2">
                      ⏳ {course.years} Years
                    </span>
                    <span className="font-semibold text-orange-500">
                      {course.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
