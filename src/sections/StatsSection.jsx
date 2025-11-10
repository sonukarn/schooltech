// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaBookOpen,
//   FaUserGraduate,
//   FaChalkboardTeacher,
//   FaTrophy,
// } from "react-icons/fa";

// const stats = [
//   {
//     id: 1,
//     icon: <FaBookOpen size={35} />,
//     value: "500",
//     label: "+ Total Courses",
//   },
//   {
//     id: 2,
//     icon: <FaUserGraduate size={35} />,
//     value: "1900",
//     label: "+ Our Students",
//   },
//   {
//     id: 3,
//     icon: <FaChalkboardTeacher size={35} />,
//     value: "750",
//     label: "+ Skilled Lecturers",
//   },
//   {
//     id: 4,
//     icon: <FaTrophy size={35} />,
//     value: "30",
//     label: "+ Win Awards",
//   },
// ];

// const StatsSection = () => {
//   return (
//     <section
//       className="relative bg-fixed bg-center bg-cover py-20 text-white"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#063c46]/80"></div>

//       {/* Content */}
//       <div className="relative container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center text-center gap-10 sm:gap-16 lg:gap-24 flex-wrap">
//         {stats.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center justify-center"
//           >
//             {/* Icon with hover animation */}
//             <motion.div
//               whileHover={{
//                 scale: 0.95,
//                 y: 4,
//                 transition: { duration: 0.3 },
//               }}
//               className="relative mb-4"
//             >
//               {/* Orange badge */}
//               <div className="relative z-10 bg-orange-500 w-20 h-20 rounded-[25px] flex items-center justify-center text-white transition-all duration-300 group-hover:bg-orange-600">
//                 {item.icon}
//               </div>

//               {/* White swoosh curve */}
//               <div className="absolute top-1 left-1 w-[90%] h-[90%] border-[3px] border-white rounded-[25px] rotate-[12deg] group-hover:opacity-0 transition-all duration-300"></div>
//             </motion.div>

//             <motion.h3
//               whileHover={{ scale: 1.05 }}
//               className="text-4xl font-bold leading-none mb-2"
//             >
//               {item.value}
//             </motion.h3>
//             <p className="text-base font-medium">{item.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTrophy,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaBookOpen size={32} />,
    value: 500,
    label: "+ Total Courses",
  },
  {
    id: 2,
    icon: <FaUserGraduate size={32} />,
    value: 1900,
    label: "+ Our Students",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher size={32} />,
    value: 750,
    label: "+ Skilled Lecturers",
  },
  {
    id: 4,
    icon: <FaTrophy size={32} />,
    value: 30,
    label: "+ Win Awards",
  },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5s
    const increment = target / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
};

const StatsSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#063c46]/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((item, index) => {
          const controls = useAnimation();

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center group"
            >
              {/* Orange shape with white curved border */}
              <motion.div
                whileHover={{
                  scale: 0.95,
                  y: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative w-20 h-20 mb-4"
              >
                {/* Orange background */}
                <div className="absolute inset-0 bg-orange-500 rounded-[35%] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:translate-y-1 group-hover:shadow-none">
                  {item.icon}
                </div>

                {/* White border swoosh */}
                <div className="absolute -top-1.5 -right-1.5 w-full h-full border-[3px] border-white rounded-[35%] rotate-[15deg] transition-all duration-300 group-hover:opacity-0"></div>
              </motion.div>

              {/* Counter value */}
              <h3 className="text-5xl font-bold mb-2">
                <Counter target={item.value} />
              </h3>
              <p className="text-lg font-medium">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
