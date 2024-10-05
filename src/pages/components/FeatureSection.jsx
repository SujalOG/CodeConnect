import React from "react";
import { motion } from "framer-motion";
import { features } from "../../constants/sampleData2";

const FeatureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tagVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
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

  const featureVariants = {
    hidden: { y: 50, opacity: 0 },
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

  return (
    <motion.div
      className="relative mt-60 min-h-[800px]"
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="text-center" variants={containerVariants}>
        <motion.span
          variants={tagVariants}
          className="bg-neutral-900 text-blue-500 rounded-full text-sm font-medium px-4 py-1 uppercase inline-flex items-center justify-center"
        >
          Features
        </motion.span>
        <motion.h2
          variants={headingVariants}
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 font-bold tracking-wide"
        >
          Easily test{" "}
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            whileInView={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-800 text-transparent bg-clip-text bg-[length:300%_300%]"
          >
            your code
          </motion.span>
        </motion.h2>
      </motion.div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
            variants={featureVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex bg-neutral-800/20 p-6 rounded-lg hover:bg-neutral-800/30 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex mx-4 h-12 w-12 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <div>
                <motion.h5
                  className="mt-1 mb-4 text-xl font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {feature.text}
                </motion.h5>
                <motion.p
                  className="text-md text-neutral-500 max-w-4xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureSection;
