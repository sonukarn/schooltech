import offersImg from "../assets/offers.jpg";
// export default function OfferSection() {
//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4">
//         {/* Left Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={offersImg}
//             alt="Student reading book"
//             className="w-full h-[350px] md:h-[400px] object-cover rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]"
//           />
//         </div>

//         {/* Right Offer Box */}
//         <div className="w-full md:w-1/2 bg-[#FFA31A] text-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] p-8 relative">
//           {/* White Double Border */}
//           <div className="absolute inset-0 border-4 border-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] pointer-events-none"></div>

//           <div className="relative z-10">
//             <h2 className="text-3xl font-bold mb-4 leading-snug">
//               Our 20% Offer Running - <br /> Join Today For Your Course
//             </h2>
//             <p className="text-white/90 mb-6 leading-relaxed">
//               There are many variations of passages available but the majority
//               have suffered alteration in some form by injected humour
//               randomised words which don't look even slightly believable.
//             </p>

//             <button className="bg-white text-[#1E1E1E] px-6 py-2 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300 flex items-center gap-2">
//               APPLY NOW →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const OfferSection = () => {
  return (
    <section className="relative w-full bg-white py-10">
      {/* Background Image */}
      <div className="relative w-full overflow-hidden rounded-tr-[50px] rounded-tl-none rounded-br-[50px] rounded-bl-none">
        <img
          src={offersImg}
          alt="Student reading book"
          className="w-full h-[420px] md:h-[500px] object-cover"
        />

        {/* Orange Offer Box */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-1/2 right-12 transform -translate-y-1/2 bg-[#FFA31A] text-white 
                     rounded-tr-[50px] rounded-br-[50px] rounded-tl-[50px] rounded-bl-none
                     p-10 md:p-12 shadow-xl w-[90%] md:w-[45%] max-w-[480px]"
        >
          {/* Inner white double border */}
          <div className="absolute inset-0 border-4 border-white rounded-tr-[50px] rounded-br-[50px] rounded-tl-[50px] rounded-bl-none pointer-events-none"></div>
          <div className="absolute inset-[10px] border-2 border-white rounded-tr-[45px] rounded-br-[45px] rounded-tl-[45px] rounded-bl-none pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Our 20% Offer Running - <br />
              Join Today For Your Course
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour
              randomised words which don’t look even slightly believable.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-gray-100 transition"
            >
              APPLY NOW <FaArrowRight className="text-sm" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
