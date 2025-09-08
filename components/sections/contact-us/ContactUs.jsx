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
        className="border-[1px] border-gray-300 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] lg:pb-10 relative"
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute -top-[12px] md:-top-[15px] left-2 right-2 md:left-4 md:right-4 flex justify-center z-10"
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
            className="px-2 md:px-6 lg:px-0"
            variants={branchVariants}
          >
            <Branch />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 p-2 md:p-6 lg:p-10 gap-6 md:gap-8 lg:gap-10">
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
              <motion.div
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2156!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JF Products Location"
                  className="rounded-[12px] md:rounded-[16px] lg:rounded-[20px]"
                />

              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
