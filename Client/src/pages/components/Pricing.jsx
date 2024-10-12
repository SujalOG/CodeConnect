import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { pricingOptions } from "../../constants/sampleData2";


const Pricing = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16" 
      id="pricing"
    >
      <motion.h2 
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center mb-16 font-bold tracking-wide"
      >
        Choose Your <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">Plan</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {pricingOptions.map((option, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] relative"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`h-full p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow ${
                option.title === "Pro" ? "border-2 border-blue-500" : "border border-gray-200 dark:border-gray-700"
              }`}
            >
              {option.title === "Pro" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-red-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
              
              <div className="mb-8">
                <span className="text-5xl font-bold">{option.price}</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  option.title === "Pro"
                    ? "bg-gradient-to-r from-blue-500 to-red-800 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Pricing;