import React from "react";
import { motion } from "framer-motion";
import video1 from "../../assets/video1.mp4";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const videoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center mt-6 lg:mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold tracking-wide"
        variants={itemVariants}
      >
        Solve Together,
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-800 text-transparent bg-clip-text bg-[length:300%_300%]"
        >
          {" "}
          Solve as One!
        </motion.span>
      </motion.h1>

      <motion.p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
        variants={itemVariants}
      >
        Discover the power of collaborative coding on our cutting-edge platform.
        Solve complex problems alongside fellow developers in a shared live
        compiler
      </motion.p>

      <motion.div
        className="flex justify-center my-10 gap-4"
        variants={containerVariants}
      >
        <motion.a
          href="/signup"
          className="bg-gradient-to-r from-blue-500 to-red-800 py-3 px-6 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Get Started
        </motion.a>

        <motion.a
          href="#"
          className="py-3 px-6 rounded-md border border-neutral-400 hover:border-neutral-200 font-semibold transition-colors"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Documentation
        </motion.a>
      </motion.div>

      <motion.div
        className="mt-10 w-full max-w-4xl"
        variants={videoVariants}
      >
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-full border border-blue-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </motion.video>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;