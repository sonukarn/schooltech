import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaGlobe,
  FaPhoneAlt,
  FaQuoteRight,
  FaUserGraduate,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE GRID */}
        <div className="relative w-full max-w-[500px] mx-auto">
          <div className="grid grid-cols-2 gap-5 items-center">
            {/* Left main portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[25px] overflow-hidden shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=500&q=60"
                alt="main portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right side (2 stacked images) */}
            <div className="flex flex-col gap-5">
              {/* Top circular image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-full overflow-hidden shadow-md border-[5px] border-orange-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=60"
                  alt="students working"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom rounded rectangle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-[25px] overflow-hidden shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=60"
                  alt="students studying"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Orange Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 left-0 bg-orange-500 text-white rounded-[20px] p-5 shadow-lg flex flex-col items-center justify-center w-[180px] h-[110px]"
          >
            <div className="bg-white text-orange-500 w-10 h-10 flex items-center justify-center rounded-full mb-2">
              <FaUserGraduate size={22} />
            </div>
            <p className="font-semibold text-sm text-center leading-tight">
              30 Years Of <br /> Quality Service
            </p>
          </motion.div>
        </div>

        {/* RIGHT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-semibold uppercase tracking-wide mb-2">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            Our <span className="text-orange-500">Edukation</span> System <br />{" "}
            Inspires You More.
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words which don’t look even slightly believable.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="text-orange-500 mt-1">
                  <FaBookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Edukation Services
                  </h4>
                  <p className="text-gray-600 text-sm leading-snug">
                    It is a long established fact that a reader will be using
                    content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-orange-500 mt-1">
                  <FaGlobe size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    International Hubs
                  </h4>
                  <p className="text-gray-600 text-sm leading-snug">
                    It is a long established fact that a reader will be using
                    content.
                  </p>
                </div>
              </div>
            </div>

            {/* Right quote card */}
            <motion.div
              className="bg-[#f4f9f9] shadow-md rounded-[15px] p-5 flex flex-col justify-between max-w-[220px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-sm leading-snug mb-3">
                It is a long established fact that a reader will be distracted
                by the content of a page when looking at its reader layout.
              </p>
              <div className="text-orange-500 text-right">
                <FaQuoteRight size={22} />
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="bg-orange-500 text-white px-7 py-3 rounded-full font-medium shadow-md hover:bg-orange-600 transition"
            >
              Discover More →
            </motion.a>

            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-700 text-sm">Call Now</p>
                <p className="text-green-700 font-bold text-lg">
                  +2 123 654 7898
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
