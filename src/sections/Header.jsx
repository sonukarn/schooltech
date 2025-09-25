// import React, { useState, useEffect } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaWhatsapp,
//   FaSearch,
//   FaTimes,
//   FaBars,
// } from "react-icons/fa";
// import { FiChevronDown } from "react-icons/fi";

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isMobileMenu, setIsMobileMenu] = useState(false);
//   const [hideMiddle, setHideMiddle] = useState(false);

//   // Hide middle header on scroll
//   useEffect(() => {
//     let lastScroll = 0;
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       if (currentScroll > lastScroll && currentScroll > 50) {
//         setHideMiddle(true);
//       } else {
//         setHideMiddle(false);
//       }
//       lastScroll = currentScroll;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Top Header (Envato bar) */}
//       <div className="bg-[#262626] text-white px-4 lg:px-8 py-3 flex justify-between items-center sticky top-0 z-50 text-sm lg:text-lg font-semibold">
//         <span>
//           envato<span className="text-green-500">market</span>
//         </span>
//         <button className="bg-lime-500 text-white px-3 py-1.5 lg:px-5 lg:py-2 rounded font-bold hover:bg-lime-600 text-sm lg:text-base">
//           Buy now
//         </button>
//       </div>

//       {/* Middle Header (only on lg+) */}
//       {!hideMiddle && (
//         <div className="hidden lg:flex w-full">
//           {/* Left side (30%) */}
//           <div className="w-[30%] bg-[#FDA31B] text-white px-6 py-4 flex items-center space-x-3 text-base font-bold">
//             <span>Follow Us:</span>
//             <FaFacebookF className="hover:text-gray-200 cursor-pointer" />
//             <FaInstagram className="hover:text-gray-200 cursor-pointer" />
//             <FaYoutube className="hover:text-gray-200 cursor-pointer" />
//             <FaWhatsapp className="hover:text-gray-200 cursor-pointer" />
//           </div>
//           {/* Right side (70%) */}
//           <div className="w-[70%] bg-teal-800 text-white px-6 py-4 flex justify-end items-center space-x-8 text-sm font-semibold">
//             <span>📍 25/B Milford Road, New York</span>
//             <span>✉ info@example.com</span>
//             <span>📞 +2 123 654 7898</span>
//           </div>
//         </div>
//       )}

//       {/* Bottom Header */}
//       <div className="sticky top-[48px] lg:top-[52px] z-40 bg-white shadow-md">
//         <div className="flex items-center justify-between px-4 lg:px-8 py-4">
//           {/* Logo */}
//           <div className="text-3xl lg:text-4xl font-extrabold text-green-600">
//             edu<span className="text-orange-500">ka</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex space-x-8 font-semibold text-lg">
//             {[
//               "Home",
//               "Courses",
//               "Academics",
//               "Pages",
//               "Admissions",
//               "Blog",
//               "Contact",
//             ].map((item, i) => (
//               <li
//                 key={i}
//                 className="flex items-center space-x-1 cursor-pointer transition-colors hover:text-green-600"
//               >
//                 <span>{item}</span>
//                 <FiChevronDown className="text-gray-500" />
//               </li>
//             ))}
//           </ul>

//           {/* Right Side */}
//           <div className="flex items-center space-x-4 lg:space-x-5">
//             {/* Search Icon */}
//             <button
//               onClick={() => setIsSearchOpen(true)}
//               className="text-xl lg:text-2xl text-gray-700 hover:text-green-600"
//             >
//               <FaSearch />
//             </button>
//             <button className="hidden lg:block bg-orange-500 text-white font-bold px-6 py-3 rounded hover:bg-orange-600 shadow-md">
//               Apply Now
//             </button>
//             {/* Hamburger for mobile */}
//             <button
//               className="lg:hidden text-2xl text-gray-700"
//               onClick={() => setIsMobileMenu(true)}
//             >
//               <FaBars />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenu && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex">
//           <div className="w-72 bg-white h-full shadow-lg p-6 animate-slideLeft">
//             {/* Close */}
//             <button
//               className="mb-6 text-gray-600 hover:text-red-600"
//               onClick={() => setIsMobileMenu(false)}
//             >
//               <FaTimes size={22} />
//             </button>

//             {/* Menu */}
//             <ul className="space-y-6 font-semibold text-lg">
//               {[
//                 "Home",
//                 "Courses",
//                 "Academics",
//                 "Pages",
//                 "Admissions",
//                 "Blog",
//                 "Contact",
//               ].map((item, i) => (
//                 <li
//                   key={i}
//                   className="cursor-pointer hover:text-green-600 transition-colors"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Apply Button */}
//             <button className="mt-8 w-full bg-orange-500 text-white font-bold px-6 py-3 rounded hover:bg-orange-600 shadow-md">
//               Apply Now
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Search Modal */}
//       {isSearchOpen && (
//         <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsSearchOpen(false)}
//             className="mb-8 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition"
//           >
//             <FaTimes size={22} />
//           </button>

//           {/* Search Box */}
//           <div className="w-full max-w-xl bg-white rounded-lg shadow-xl animate-slideDown">
//             <div className="flex items-center px-6 py-5">
//               <input
//                 type="text"
//                 placeholder="Search Here..."
//                 className="flex-grow px-4 py-4 border border-gray-300 rounded-l-lg focus:outline-none text-lg"
//               />
//               <button className="px-6 py-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600">
//                 <FaSearch />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animations */}
//       <style>{`
//         @keyframes slideDown {
//           from { transform: translateY(-100%); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes slideLeft {
//           from { transform: translateX(-100%); }
//           to { transform: translateX(0); }
//         }
//         .animate-slideDown { animation: slideDown 0.6s ease forwards; }
//         .animate-slideLeft { animation: slideLeft 0.4s ease forwards; }
//       `}</style>
//     </>
//   );
// };

// export default Header;

// Header.jsx
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaSearch,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Courses",
    to: "/courses",
    children: ["All Courses", "Single Course"],
  },
  {
    label: "Academics",
    to: "/academics",
    children: ["Departments", "Faculty"],
  },
  { label: "Pages", to: "/pages" },
  { label: "Admissions", to: "/admissions" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({}); // { Courses: true }
  const [hideMiddle, setHideMiddle] = useState(false);

  // hide middle on scroll down, show on scroll up
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const cur = window.scrollY;
      if (cur > last && cur > 50) setHideMiddle(true);
      else setHideMiddle(false);
      last = cur;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close overlays on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleSub = (label) =>
    setOpenSubmenus((s) => ({ ...s, [label]: !s[label] }));

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#262626] text-white px-4 lg:px-8 py-3 flex justify-between items-center sticky top-0 z-50 text-sm lg:text-lg font-semibold">
        <span>
          envato<span className="text-green-500">market</span>
        </span>
        <button className="bg-lime-500 text-white px-3 py-1.5 lg:px-5 lg:py-2 rounded font-bold hover:bg-lime-600 text-sm lg:text-base">
          Buy now
        </button>
      </div>

      {/* MIDDLE BAR (only visible on lg) */}
      {!hideMiddle && (
        <div className="hidden lg:flex w-full">
          <div className="w-[30%] bg-[#FDA31B] text-white px-6 py-4 flex items-center space-x-3 text-base font-bold">
            <span>Follow Us:</span>
            <FaFacebookF className="hover:text-gray-200 cursor-pointer" />
            <FaInstagram className="hover:text-gray-200 cursor-pointer" />
            <FaYoutube className="hover:text-gray-200 cursor-pointer" />
            <FaWhatsapp className="hover:text-gray-200 cursor-pointer" />
          </div>
          <div className="w-[70%] bg-teal-800 text-white px-6 py-4 flex justify-end items-center space-x-8 text-sm font-semibold">
            <span>📍 25/B Milford Road, New York</span>
            <span>✉ info@example.com</span>
            <span>📞 +2 123 654 7898</span>
          </div>
        </div>
      )}

      {/* BOTTOM BAR */}
      <div className="sticky top-[48px] lg:top-[52px] z-40 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4">
          {/* Logo */}
          <div className="text-3xl lg:text-4xl font-extrabold text-green-600">
            edu<span className="text-orange-500">ka</span>
          </div>

          {/* Desktop menu (lg+) */}
          <ul className="hidden lg:flex space-x-8 font-semibold text-lg">
            {navLinks.map((n) => (
              <li
                key={n.label}
                className="group flex items-center space-x-1 cursor-pointer transition-colors hover:text-green-600"
              >
                <span>{n.label}</span>
                <FiChevronDown
                  className="text-gray-500 group-hover:text-green-600 transition-colors"
                  size={16}
                />
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center space-x-3 lg:space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-xl lg:text-2xl text-gray-700 hover:text-green-600"
              aria-label="open search"
            >
              <FaSearch />
            </button>

            {/* On small devices, keep Apply visible (you can change to hidden lg:block if you prefer) */}
            <button className="hidden lg:block bg-orange-500 text-white font-bold px-6 py-3 rounded hover:bg-orange-600 shadow-md">
              Apply Now
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setIsMobileMenu(true)}
              className="lg:hidden text-2xl text-gray-700"
              aria-label="open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (slide-in from left) */}
      {isMobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex"
          onClick={() => setIsMobileMenu(false)}
        >
          <aside
            className="w-80 bg-white h-full shadow-lg p-6 animate-slideLeft overflow-auto"
            onClick={(e) => e.stopPropagation()}
            aria-label="mobile menu"
          >
            {/* Top row: logo (left) + close (right) */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-bold text-green-600">
                edu<span className="text-orange-500">ka</span>
              </div>
              <button
                onClick={() => setIsMobileMenu(false)}
                className="p-2 rounded hover:bg-gray-100"
                aria-label="close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Menu links with chevrons (mobile) */}
            <nav>
              <ul className="space-y-4">
                {navLinks.map((n) => (
                  <li key={n.label}>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (n.children) toggleMobileSub(n.label);
                          else setIsMobileMenu(false);
                        }}
                        className="text-lg font-semibold text-left"
                        style={{ width: "calc(100% - 30px)" }}
                      >
                        {n.label}
                      </button>

                      {/* show chevron if has children (always visible on mobile) */}
                      <button
                        onClick={() => toggleMobileSub(n.label)}
                        className="p-1 rounded hover:bg-gray-100"
                        aria-label={`toggle ${n.label}`}
                      >
                        <FiChevronDown
                          className={`transform transition-transform ${
                            openSubmenus[n.label] ? "rotate-180" : "rotate-0"
                          }`}
                          size={18}
                        />
                      </button>
                    </div>

                    {/* mobile submenu */}
                    {n.children && openSubmenus[n.label] && (
                      <ul className="mt-2 ml-3 space-y-2">
                        {n.children.map((c) => (
                          <li
                            key={c}
                            className="text-base text-gray-700 pl-2 py-1 rounded hover:text-green-600 cursor-pointer"
                            onClick={() => setIsMobileMenu(false)}
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Apply button always inside mobile menu */}
              <div className="mt-8">
                <button
                  className="w-full bg-orange-500 text-white font-bold px-4 py-3 rounded hover:bg-orange-600 shadow-md"
                  onClick={() => setIsMobileMenu(false)}
                >
                  Apply Now
                </button>
              </div>
            </nav>
          </aside>
        </div>
      )}

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close circle top center */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="mb-8 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition"
              aria-label="close search"
            >
              <FaTimes size={20} />
            </button>

            {/* centered search box */}
            <div className="w-full bg-white rounded-lg shadow-xl animate-slideDown">
              <div className="flex items-center px-6 py-5">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search Here..."
                  className="flex-grow px-4 py-4 border border-gray-300 rounded-l-lg focus:outline-none text-lg"
                />
                <button
                  className="px-6 py-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600"
                  aria-label="submit search"
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideDown { animation: slideDown 0.45s ease forwards; }
        .animate-slideLeft { animation: slideLeft 0.32s ease forwards; }
      `}</style>
    </>
  );

  // helper defined inside component to use latest state
  function toggleMobileSub(label) {
    setOpenSubmenus((s) => ({ ...s, [label]: !s[label] }));
  }
}
