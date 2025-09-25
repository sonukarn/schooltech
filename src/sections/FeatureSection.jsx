// // FeatureSection.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaMoneyBillWave,
// } from "react-icons/fa";

// const features = [
//   {
//     id: 1,
//     title: "Scholarship Facility",
//     icon: <FaGraduationCap size={30} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
//   {
//     id: 2,
//     title: "Skilled Lecturers",
//     icon: <FaChalkboardTeacher size={30} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
//   {
//     id: 3,
//     title: "Book Library Facility",
//     icon: <FaBook size={30} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
//   {
//     id: 4,
//     title: "Affordable Price",
//     icon: <FaMoneyBillWave size={30} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <section className="relative z-30 -mt-20 px-4 md:px-10 lg:px-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((feature, index) => (
//           <motion.div
//             key={feature.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer border border-transparent hover:border-yellow-400"
//           >
//             <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full mb-4 transition-all group-hover:bg-yellow-400 group-hover:text-white">
//               {feature.icon}
//             </div>
//             <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-500 transition">
//               {feature.title}
//             </h3>
//             <p className="text-sm text-gray-600">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

// FeatureSection.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaMoneyBillWave,
// } from "react-icons/fa";

// const features = [
//   {
//     id: "01",
//     title: "Scholarship Facility",
//     icon: <FaGraduationCap size={28} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
//   {
//     id: "02",
//     title: "Skilled Lecturers",
//     icon: <FaChalkboardTeacher size={28} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
//   {
//     id: "03",
//     title: "Book Library Facility",
//     icon: <FaBook size={28} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
//   {
//     id: "04",
//     title: "Affordable Price",
//     icon: <FaMoneyBillWave size={28} />,
//     description:
//       "It is a long established fact that a reader will be distracted.",
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <section className="relative z-30 -mt-20 px-4 md:px-10 lg:px-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((feature, index) => (
//           <motion.div
//             key={feature.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col items-start"
//           >
//             {/* Icon + Number */}
//             <div className="flex items-center gap-4 mb-4">
//               {/* Circle Icon with flip effect */}
//               <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-y-180">
//                 <div className="transform group-hover:rotate-y-180 transition-transform duration-500">
//                   {feature.icon}
//                 </div>
//               </div>

//               {/* Number */}
//               <span className="text-2xl font-bold text-green-800 opacity-80">
//                 {feature.id}
//               </span>
//             </div>

//             {/* Title */}
//             <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

//             {/* Description */}
//             <p className="text-sm text-gray-600">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

// FeatureSection.jsx
// FeatureSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBook,
  FaMoneyBillWave,
} from "react-icons/fa";

const features = [
  {
    id: "01",
    title: "Scholarship Facility",
    icon: <FaGraduationCap size={28} />,
    description:
      "It is a long established fact that a reader will be distracted.",
  },
  {
    id: "02",
    title: "Skilled Lecturers",
    icon: <FaChalkboardTeacher size={28} />,
    description:
      "It is a long established fact that a reader will be distracted.",
  },
  {
    id: "03",
    title: "Book Library Facility",
    icon: <FaBook size={28} />,
    description:
      "It is a long established fact that a reader will be distracted.",
  },
  {
    id: "04",
    title: "Affordable Price",
    icon: <FaMoneyBillWave size={28} />,
    description:
      "It is a long established fact that a reader will be distracted.",
  },
];

const FeatureSection = () => {
  return (
    <section className="relative z-30 -mt-10 md:-mt-20 px-4 md:px-10 lg:px-20">
      {/* parent flex pushes grid to right side */}
      <div className="flex justify-center lg:justify-end">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-4xl p-6 w-56 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Top Row: Icon Left, Number Right */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-y-180">
                  <div className="transform group-hover:rotate-y-180 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-800 opacity-80">
                  {feature.id}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
