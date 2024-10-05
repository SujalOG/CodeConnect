import React from "react";
import { motion } from "framer-motion";
import { aboutUs } from "../../constants/sampleData2";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="container mx-auto px-4 py-16 max-w-6xl"
      id="About"
    >
      <motion.div 
        className="text-center mb-16"
        variants={headingVariants}
      >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
          About{" "}
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            whileInView={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-800 text-transparent bg-clip-text bg-[length:300%_300%]"
          >
            Us
          </motion.span>
        </h2>
        {/* <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"
        /> */}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {aboutUs.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            className="bg-white dark:bg-neutral-800/20 rounded-lg shadow-lg p-8 transition-all duration-300 relative overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "200%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-blue-100 dark:via-blue-900 to-transparent skew-x-12"
            />
            <div className="relative z-10">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;