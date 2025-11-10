import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8, 44, 84, 0.9), rgba(8, 44, 84, 0.9)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        {/* Left Form Box */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-orange-500 rounded-tr-[40px] rounded-bl-[40px] p-8 md:p-10 shadow-xl text-white relative"
        >
          <h3 className="text-2xl font-bold mb-2">Start Your Enrollment</h3>
          <p className="text-white/90 mb-8 text-sm leading-relaxed">
            We are variations of passages the have suffered.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white text-gray-700 rounded-md px-4 py-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white text-gray-700 rounded-md px-4 py-3 focus:outline-none"
            />
            <select className="w-full bg-white text-gray-700 rounded-md px-4 py-3 focus:outline-none">
              <option>Choose Course</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
            <textarea
              placeholder="Type Message"
              rows="3"
              className="w-full bg-white text-gray-700 rounded-md px-4 py-3 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 mt-3 transition"
            >
              ENROLL NOW <FaArrowRight />
            </button>
          </form>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <p className="text-orange-400 uppercase font-semibold tracking-wider mb-2 flex items-center gap-2">
            <FaBookOpen className="text-lg" /> Our Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Explore Your{" "}
            <span className="text-orange-400">Creativity And Talent</span> With
            Us
          </h2>

          <p className="text-white/80 mb-10 leading-relaxed">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words which don’t look even slightly believable.
          </p>

          {/* Skill Bars */}
          <div className="space-y-6 mb-10">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Our Students</span> <span>85%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Our Teachers</span> <span>65%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-[65%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Our Courses</span> <span>75%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
            LEARN MORE <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
