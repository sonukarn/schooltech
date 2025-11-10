// // src/components/LatestVideoSection.jsx
// import { motion } from "framer-motion";
// import { FaPlay } from "react-icons/fa";
// import thumbnailImg from "../assets/01.jpg";

// const LatestVideoSection = () => {
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6">
//           <div className="flex items-center justify-center md:justify-start gap-2 text-orange-500 font-semibold tracking-widest">
//             <span className="text-2xl">📚</span>
//             <span className="border-b-2 border-orange-500 pb-1">
//               LATEST VIDEO
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Let’s Check Our <span className="text-orange-500">Latest</span>{" "}
//             Video
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             There are many variations of passages available but the majority
//             have suffered alteration in some form by injected humour look even
//             slightly believable.
//           </p>

//           <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
//             Learn More →
//           </button>
//         </div>

//         {/* Right Image Section */}
//         <div className="relative md:w-1/2 w-full flex justify-center">
//           <div className="overflow-hidden rounded-l-[50px] rounded-r-[150px] shadow-xl relative">
//             <img
//               src={thumbnailImg}
//               alt="Video Thumbnail"
//               className="w-full h-full object-cover"
//             />
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="bg-orange-500 w-20 h-20 flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:bg-orange-600 transition duration-300">
//                 <FaPlay className="text-white text-2xl" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestVideoSection;

// src/components/LatestVideoSection.jsx
// import { motion } from "framer-motion";
// import { FaPlay } from "react-icons/fa";
// import thumbnailImg from "../assets/01.jpg";

// const LatestVideoSection = () => {
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
//         {/* Left Content (slightly narrower) */}
//         <div className="md:w-[40%] text-center md:text-left space-y-6">
//           <div className="flex items-center justify-center md:justify-start gap-2 text-orange-500 font-semibold tracking-widest">
//             <span className="text-2xl">📚</span>
//             <span className="border-b-2 border-orange-500 pb-1">
//               LATEST VIDEO
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Let’s Check Our <span className="text-orange-500">Latest</span>{" "}
//             Video
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             There are many variations of passages available but the majority
//             have suffered alteration in some form by injected humour look even
//             slightly believable.
//           </p>

//           <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
//             Learn More →
//           </button>
//         </div>

//         {/* Right Image Section (slightly wider) */}
//         <div className="relative md:w-[60%] w-full flex justify-center">
//           <div className="overflow-hidden rounded-l-[50px] rounded-r-[150px] shadow-xl relative w-full">
//             <img
//               src={thumbnailImg}
//               alt="Video Thumbnail"
//               className="w-full h-full object-cover"
//             />

//             {/* Play Button with Glow Animation */}
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative">
//                 {/* Glow pulse ring */}
//                 <div className="absolute inset-0 rounded-full bg-orange-500 opacity-60 blur-md animate-ping"></div>

//                 {/* Main play button */}
//                 <div className="relative bg-orange-500 w-24 h-24 flex items-center justify-center rounded-full shadow-2xl cursor-pointer hover:bg-orange-600 transition duration-300">
//                   <FaPlay className="text-white text-3xl pl-1" />
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestVideoSection;

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import thumbnailImg from "../assets/01.jpg";

const LatestVideoSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        {/* Left Content (smaller width) */}
        <div className="md:w-[38%] text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-2 text-orange-500 font-semibold tracking-widest">
            <span className="text-2xl">📚</span>
            <span className="border-b-2 border-orange-500 pb-1">
              LATEST VIDEO
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Let’s Check Our <span className="text-orange-500">Latest</span>{" "}
            Video
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour look even
            slightly believable.
          </p>

          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
            Learn More →
          </button>
        </div>

        {/* Right Image Section (larger width, rounded as in screenshot) */}
        <div className="relative md:w-[62%] w-full flex justify-center">
          <div className="relative w-full max-w-2xl aspect-[16/9] overflow-hidden shadow-2xl rounded-tl-[80px] rounded-tr-[120px] rounded-br-[150px]">
            <img
              src={thumbnailImg}
              alt="Video Thumbnail"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Play Button with Glow Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Glow pulse ring */}
                <div className="absolute inset-0 rounded-full bg-orange-500 opacity-60 blur-md animate-ping"></div>

                {/* Main play button */}
                <div className="relative bg-orange-500 w-24 h-24 flex items-center justify-center rounded-full shadow-2xl cursor-pointer hover:bg-orange-600 transition duration-300">
                  <FaPlay className="text-white text-3xl pl-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVideoSection;
