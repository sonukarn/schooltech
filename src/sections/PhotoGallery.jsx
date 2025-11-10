import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [
  {
    // src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    src: gallery1,
    alt: "Students working together",
    size: "h-64",
  },
  {
    // src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=500&fit=crop",
    src: gallery2,
    alt: "Classroom learning",
    size: "h-80",
  },
  {
    // src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=450&fit=crop",
    src: gallery3,
    alt: "Group discussion",
    // size: "h-72",
    size: "h-90",
  },
  {
    // src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=450&fit=crop",
    src: gallery4,
    alt: "Students walking",
    size: "h-90",
  },
  {
    // src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop",
    src: gallery5,
    alt: "Student studying outdoor",
    size: "h-80",
  },
  {
    // src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=300&fit=crop",
    src: gallery6,
    alt: "Group of students",
    size: "h-64",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PhotoGallery = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <FaCrown className="text-yellow-500 text-sm" />
            <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">
              Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Photo <span className="text-yellow-500">Gallery</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer ${img.size}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                // className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                // className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                // className="w-full h-full object-cover bg-gray-100 rounded-3xl transition-transform duration-500 group-hover:scale-105"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
