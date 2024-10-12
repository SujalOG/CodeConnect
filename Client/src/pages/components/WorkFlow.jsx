import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../../assets/code.jpg";
import { checklistItems } from "../../constants/sampleData2";

const WorkFlow = () => {
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

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const checklistVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16 mt-60"
      id="workflow"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center mb-16 font-bold tracking-wide"
        variants={headingVariants}
      >
        Accelerate your{" "}
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
          coding workflow
        </motion.span>
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center">
        <motion.div className="p-2 w-full lg:w-1/2" variants={imageVariants}>
          <motion.img
            src={codeImg}
            alt="ImageCode"
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="pt-12 w-full lg:w-1/2"
          variants={checklistVariants}
        >
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-green-400 mx-6 bg-neutral h-10 w-10 p-2 flex justify-center items-center rounded-full"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 />
              </motion.div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkFlow;
