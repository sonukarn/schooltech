// import React from "react";
// import { FaUserTie, FaBookOpen, FaLaptop, FaDollarSign } from "react-icons/fa";
import rightImg from "../assets/whychose.jpg"; // replace with your actual image
import bgShape from "../assets/shape.png"; // your blue shape background

// export default function WhyChooseUs() {
//   return (
//     <section
//       className="relative w-full bg-[#0B1F45] text-white py-20 overflow-hidden"
//       style={{
//         backgroundImage: `url(${bgShape})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <div className="space-y-6">
//           {/* Small title */}
//           <div className="flex items-center gap-2 text-orange-400 font-semibold tracking-wider uppercase">
//             <span className="text-lg">⚙️</span>
//             <span>Why Choose Us</span>
//           </div>

//           {/* Main title */}
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             We Are Expert & <span className="text-orange-400">Do Our Best</span>{" "}
//             For Your Goal
//           </h2>

//           {/* Paragraph */}
//           <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when many desktop and web page
//             editors looking at its layout.
//           </p>

//           {/* Info Cards */}
//           <div className="grid sm:grid-cols-2 gap-6 pt-4">
//             <div className="bg-white text-gray-900 rounded-[24px] shadow-lg p-6 flex gap-4 items-start">
//               <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
//                 <FaUserTie />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Expert Teachers</h4>
//                 <p className="text-sm text-gray-600">
//                   There are many variations of the suffered.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white text-gray-900 rounded-[24px] shadow-lg p-6 flex gap-4 items-start">
//               <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
//                 <FaBookOpen />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Courses Material</h4>
//                 <p className="text-sm text-gray-600">
//                   There are many variations of the suffered.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white text-gray-900 rounded-[24px] shadow-lg p-6 flex gap-4 items-start">
//               <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
//                 <FaLaptop />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Online Courses</h4>
//                 <p className="text-sm text-gray-600">
//                   There are many variations of the suffered.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white text-gray-900 rounded-[24px] shadow-lg p-6 flex gap-4 items-start">
//               <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
//                 <FaDollarSign />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Affordable Price</h4>
//                 <p className="text-sm text-gray-600">
//                   There are many variations of the suffered.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center items-center">
//           {/* Outer Border */}
//           <div className="relative rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] overflow-hidden border-[4px] border-orange-400">
//             <img
//               src={rightImg}
//               alt="Students walking"
//               className="w-full h-[500px] object-cover rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { FaUserTie, FaBookOpen, FaLaptop, FaDollarSign } from "react-icons/fa";
// import rightImg from "../assets/choose-us.jpg"; // replace with your actual image
// import bgShape from "../assets/bg-shape.png"; // your existing shape

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1F45] text-white py-20">
      {/* Background Shape with Blue Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgShape})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0B1F45]/85"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Section Tag */}
          <div className="flex items-center gap-2 text-orange-400 font-semibold tracking-wider uppercase">
            <span className="text-lg">⚙️</span>
            <span>Why Choose Us</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We Are Expert & <span className="text-orange-400">Do Our Best</span>{" "}
            For Your Goal
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when many desktop and web page
            editors looking at its layout.
          </p>

          {/* Four Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {/* 1 */}
            <div className="bg-white text-gray-900 rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] shadow-xl p-6 flex items-start gap-4">
              <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                <FaUserTie />
              </div>
              <div>
                <h4 className="font-bold text-lg">Expert Teachers</h4>
                <p className="text-sm text-gray-600">
                  There are many variations of the suffered.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-white text-gray-900 rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] shadow-xl p-6 flex items-start gap-4">
              <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                <FaBookOpen />
              </div>
              <div>
                <h4 className="font-bold text-lg">Courses Material</h4>
                <p className="text-sm text-gray-600">
                  There are many variations of the suffered.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="bg-white text-gray-900 rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] shadow-xl p-6 flex items-start gap-4">
              <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                <FaLaptop />
              </div>
              <div>
                <h4 className="font-bold text-lg">Online Courses</h4>
                <p className="text-sm text-gray-600">
                  There are many variations of the suffered.
                </p>
              </div>
            </div>

            {/* 4 (bottom-left flat corner) */}
            <div className="bg-white text-gray-900 rounded-tr-[40px] rounded-br-[40px] shadow-xl p-6 flex items-start gap-4">
              <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                <FaDollarSign />
              </div>
              <div>
                <h4 className="font-bold text-lg">Affordable Price</h4>
                <p className="text-sm text-gray-600">
                  There are many variations of the suffered.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="relative rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px] overflow-hidden border-[4px] border-orange-400 shadow-2xl">
            <img
              src={rightImg}
              alt="Students walking"
              className="w-full h-[520px] object-cover rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
