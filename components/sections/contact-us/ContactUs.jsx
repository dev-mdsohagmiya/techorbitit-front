"use client";

import { Branch } from "./Branch";
import { Form } from "./Form";
import { motion } from "framer-motion";

export const ContactUS = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const branchVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const mapVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="border-[1px] border-gray-300 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] relative"
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute -top-[12px] md:-top-[15px] left-4 right-4 flex justify-center z-10"
          variants={badgeVariants}
        >
          <motion.div
            className="text-[14px] md:text-[16px] font-[500] bg-[#b0dd1e] w-[100px] md:w-[123px] h-[22px] md:h-[25px] cursor-pointer flex items-center justify-center rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[12px] md:text-[14px] font-[500] text-black uppercase">
              Branches
            </span>
          </motion.div>
        </motion.div>

        <div className="pt-12 md:pt-14 lg:pt-16">
          <motion.div
            className="px-4 md:px-6 lg:px-0"
            variants={branchVariants}
          >
            <Branch />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 p-4 md:p-6 lg:p-10 gap-6 md:gap-8 lg:gap-10">
            <motion.div
              className="lg:col-span-5 order-1"
              variants={formVariants}
            >
              <Form />
            </motion.div>

            <motion.div
              className="lg:col-span-7 w-full order-2"
              variants={mapVariants}
            >
              <motion.img
                className="w-full h-auto select-none cursor-pointer rounded-[12px] md:rounded-[16px] lg:rounded-[20px]"
                src="/contact/location.svg"
                alt="Location map"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
