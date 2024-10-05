import React from "react";
import { motion } from "framer-motion";
import { resourcesLinks, platformLinks, communityLinks } from "../../constants/sampleData2";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const columnVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const linkVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const FooterColumn = ({ title, links }) => (
    <motion.div variants={columnVariants}>
      <motion.h3
        className="text-md font-semibold mb-4 bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {title}
      </motion.h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li key={index} variants={linkVariants}>
            <motion.a
              className="text-neutral-300 hover:text-red-700 inline-block"
              href={link.href}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.text}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <footer className="mt-60 border-t py-10 border-neutral-700">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <FooterColumn title="Resources" links={resourcesLinks} />
        <FooterColumn title="Platform" links={platformLinks} />
        <FooterColumn title="Community" links={communityLinks} />
      </motion.div>
    </footer>
  );
};

export default Footer;