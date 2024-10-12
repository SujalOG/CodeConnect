import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../constants/sampleData2";

const Testimonials = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="mt-60 tracking-wide"
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-20 mb-16 font-bold tracking-wide"
        variants={headingVariants}
      >
        What people{" "}
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          whileInView={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-800 text-transparent bg-clip-text bg-[length:300%_300%]"
        >
          are saying
        </motion.span>
      </motion.h2>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            variants={cardVariants}
          >
            <motion.div
              className="bg-neutral rounded-lg p-6 text-md border border-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-neutral-300"
              >
                {testimonial.text}
              </motion.p>
              <motion.div className="flex mt-8 items-start">
                <motion.img
                  variants={imageVariants}
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt="testimonial-image"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h5 className="font-semibold">{testimonial.user}</h5>
                  <h5 className="text-sm bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
                    {testimonial.company}
                  </h5>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;