// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaYoutube,
//   FaPaperPlane,
// } from "react-icons/fa";
// import logo from "../assets/logo-light.png"; // replace later with your actual logo

// const Footer = () => {
//   return (
//     <footer className="bg-[#07294D] text-white pt-16 pb-8 relative">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Left Section - Logo & Contact */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <img src={logo} alt="Eduka Logo" className="w-10 h-10" />
//             <h2 className="text-3xl font-bold">
//               edu<span className="text-orange-500">ka</span>
//             </h2>
//           </div>
//           <p className="text-gray-300 leading-relaxed mb-6">
//             We are many variations of passages available but the majority have
//             suffered alteration in some form by injected humour words
//             believable.
//           </p>

//           <ul className="space-y-3">
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaPhoneAlt className="text-white" />
//               </div>
//               <span>+2 123 654 7898</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaMapMarkerAlt className="text-white" />
//               </div>
//               <span>25/B Milford Road, New York</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaEnvelope className="text-white" />
//               </div>
//               <span>info@example.com</span>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Quick Links
//           </h3>
//           <ul className="space-y-3 text-gray-300">
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> About Us
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> FAQ's
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Testimonials
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Terms Of Service
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Privacy Policy
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Update News
//             </li>
//           </ul>
//         </div>

//         {/* Our Campus */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Our Campus
//           </h3>
//           <ul className="space-y-3 text-gray-300">
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Campus Safety
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Student Activities
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Academic Department
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Planning &
//               Administration
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Office Of The
//               Chancellor
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500 transition">
//               <span className="text-orange-500">▶</span> Facility Services
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Newsletter
//           </h3>
//           <p className="text-gray-300 mb-6">
//             Subscribe Our Newsletter To Get Latest Update And News
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
//             />
//             <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2">
//               SUBSCRIBE NOW <FaPaperPlane className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-6">
//         <p className="text-gray-300 text-center">
//           © Copyright 2025{" "}
//           <span className="text-orange-500 font-semibold">Eduka</span> All
//           Rights Reserved.
//         </p>

//         {/* Social Icons */}
//         <div className="flex items-center gap-4">
//           <div className="bg-white/10 hover:bg-orange-500 transition p-3 rounded-md cursor-pointer">
//             <FaFacebookF />
//           </div>
//           <div className="bg-white/10 hover:bg-orange-500 transition p-3 rounded-md cursor-pointer">
//             <FaLinkedinIn />
//           </div>
//           <div className="bg-white/10 hover:bg-orange-500 transition p-3 rounded-md cursor-pointer">
//             <FaWhatsapp />
//           </div>
//           <div className="bg-white/10 hover:bg-orange-500 transition p-3 rounded-md cursor-pointer">
//             <FaYoutube />
//           </div>
//         </div>
//       </div>

//       {/* Scroll To Top Button */}
//       <div className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 transition w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
//         <span className="text-white text-xl">↑</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaYoutube,
//   FaPaperPlane,
// } from "react-icons/fa";
// import logo from "../assets/logo-light.png"; // replace later with your logo
// import background from "../assets/03.png"; // replace later with your logo

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#07294D] text-white pt-16 pb-8 overflow-hidden">
//       {/* --- Watermark Background --- */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `${background}`, // use your faint logo here
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center right",
//           backgroundSize: "contain",
//         }}
//       ></div>

//       {/* --- Main Footer Content --- */}
//       <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Left Section - Logo & Contact */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <img src={logo} alt="Eduka Logo" className="w-10 h-10" />
//             <h2 className="text-3xl font-bold">
//               edu<span className="text-orange-500">ka</span>
//             </h2>
//           </div>
//           <p className="text-gray-300 leading-relaxed mb-6">
//             We are many variations of passages available but the majority have
//             suffered alteration in some form by injected humour words
//             believable.
//           </p>

//           <ul className="space-y-3">
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaPhoneAlt className="text-white" />
//               </div>
//               <span>+2 123 654 7898</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaMapMarkerAlt className="text-white" />
//               </div>
//               <span>25/B Milford Road, New York</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaEnvelope className="text-white" />
//               </div>
//               <span>info@example.com</span>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Quick Links
//           </h3>
//           <ul className="space-y-3 text-gray-300">
//             {[
//               "About Us",
//               "FAQ's",
//               "Testimonials",
//               "Terms Of Service",
//               "Privacy Policy",
//               "Update News",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-2 hover:text-orange-500 transition"
//               >
//                 <span className="text-orange-500">▶</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Our Campus */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Our Campus
//           </h3>
//           <ul className="space-y-3 text-gray-300">
//             {[
//               "Campus Safety",
//               "Student Activities",
//               "Academic Department",
//               "Planning & Administration",
//               "Office Of The Chancellor",
//               "Facility Services",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-2 hover:text-orange-500 transition"
//               >
//                 <span className="text-orange-500">▶</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Newsletter
//           </h3>
//           <p className="text-gray-300 mb-6">
//             Subscribe Our Newsletter To Get Latest Update And News
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
//             />
//             <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2">
//               SUBSCRIBE NOW <FaPaperPlane className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="relative max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-6">
//         <p className="text-gray-300 text-center">
//           © Copyright 2025{" "}
//           <span className="text-orange-500 font-semibold">Eduka</span> All
//           Rights Reserved.
//         </p>

//         {/* Social Icons */}
//         <div className="flex items-center gap-4">
//           {[FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube].map((Icon, i) => (
//             <div
//               key={i}
//               className="bg-white/10 hover:bg-orange-500 transition p-3 rounded-md cursor-pointer"
//             >
//               <Icon />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll To Top Button */}
//       <div className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 transition w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
//         <span className="text-white text-xl">↑</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaYoutube,
//   FaPaperPlane,
// } from "react-icons/fa";
// import logo from "../assets/logo-light.png";
// import background from "../assets/03.png"; // your faint footer background image

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#07294D] text-white pt-16 pb-8 overflow-hidden">
//       {/* --- Background Watermark Image --- */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `url(${background})`, // ✅ FIXED → must be url(${background})
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center right",
//           backgroundSize: "contain",
//         }}
//       ></div>

//       {/* --- Main Footer Content --- */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Left Section */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <img src={logo} alt="Eduka Logo" className="w-10 h-10" />
//             <h2 className="text-3xl font-bold">
//               edu<span className="text-orange-500">ka</span>
//             </h2>
//           </div>
//           <p className="text-gray-300 leading-relaxed mb-6">
//             We are many variations of passages available but the majority have
//             suffered alteration in some form by injected humour words
//             believable.
//           </p>

//           <ul className="space-y-3">
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaPhoneAlt className="text-white" />
//               </div>
//               <span>+2 123 654 7898</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaMapMarkerAlt className="text-white" />
//               </div>
//               <span>25/B Milford Road, New York</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="bg-orange-500 p-3 rounded-md">
//                 <FaEnvelope className="text-white" />
//               </div>
//               <span>info@example.com</span>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Quick Links
//           </h3>
//           <ul className="space-y-3 text-gray-300">
//             {[
//               "About Us",
//               "FAQ's",
//               "Testimonials",
//               "Terms Of Service",
//               "Privacy Policy",
//               "Update News",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-2 hover:text-orange-500 transition"
//               >
//                 <span className="text-orange-500">▶</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Our Campus */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Our Campus
//           </h3>
//           <ul className="space-y-3 text-gray-300">
//             {[
//               "Campus Safety",
//               "Student Activities",
//               "Academic Department",
//               "Planning & Administration",
//               "Office Of The Chancellor",
//               "Facility Services",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-2 hover:text-orange-500 transition"
//               >
//                 <span className="text-orange-500">▶</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
//             Newsletter
//           </h3>
//           <p className="text-gray-300 mb-6">
//             Subscribe Our Newsletter To Get Latest Update And News
//           </p>

//           {/* ✅ Responsive Input + Button */}
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0"
//           >
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full sm:flex-1 px-4 py-3 rounded-l-lg sm:rounded-l-lg sm:rounded-r-none text-gray-800 focus:outline-none"
//             />
//             <button className="mt-3 sm:mt-0 w-full sm:w-auto bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg flex items-center justify-center gap-2">
//               SUBSCRIBE NOW <FaPaperPlane className="text-white" />
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-6">
//         <p className="text-gray-300 text-center">
//           © Copyright 2025{" "}
//           <span className="text-orange-500 font-semibold">Eduka</span> All
//           Rights Reserved.
//         </p>

//         {/* Social Icons */}
//         <div className="flex items-center gap-4">
//           {[FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube].map((Icon, i) => (
//             <div
//               key={i}
//               className="bg-white/10 hover:bg-orange-500 transition p-3 rounded-md cursor-pointer"
//             >
//               <Icon />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll To Top Button */}
//       <div className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 transition w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
//         <span className="text-white text-xl">↑</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import logo from "../assets/logo-light.png";
import background from "../assets/03.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#07294D] text-white pt-16 pb-8 overflow-hidden">
      {/* --- Faint Background Image / Watermark --- */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "60%",
        }}
      ></div>

      {/* --- Main Footer Grid --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Eduka Logo" className="w-10 h-10" />
            <h2 className="text-3xl font-bold">
              edu<span className="text-orange-500">ka</span>
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            We are many variations of passages available but the majority have
            suffered alteration in some form by injected humour words
            believable.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="bg-orange-500 p-3 rounded-md">
                <FaPhoneAlt className="text-white" />
              </div>
              <span>+2 123 654 7898</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-orange-500 p-3 rounded-md">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <span>25/B Milford Road, New York</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-orange-500 p-3 rounded-md">
                <FaEnvelope className="text-white" />
              </div>
              <span>info@example.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "About Us",
              "FAQ's",
              "Testimonials",
              "Terms Of Service",
              "Privacy Policy",
              "Update News",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                <span className="text-orange-500">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Campus */}
        <div>
          <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
            Our Campus
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "Campus Safety",
              "Student Activities",
              "Academic Department",
              "Planning & Administration",
              "Office Of The Chancellor",
              "Facility Services",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                <span className="text-orange-500">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[3px] after:bg-orange-500">
            Newsletter
          </h3>
          <p className="text-gray-300 mb-6">
            Subscribe Our Newsletter To Get Latest Update And News
          </p>

          {/* ✅ Vertical layout input + button */}
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none placeholder-gray-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2">
              SUBSCRIBE NOW <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-300 text-center">
          © Copyright 2025{" "}
          <span className="text-orange-500 font-semibold">Eduka</span> All
          Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube].map((Icon, i) => (
            <div
              key={i}
              className="bg-white/10 hover:bg-orange-500 transition p-3 rounded-md cursor-pointer"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* --- Scroll To Top Button --- */}
      <div className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 transition w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <span className="text-white text-xl">↑</span>
      </div>
    </footer>
  );
};

export default Footer;
