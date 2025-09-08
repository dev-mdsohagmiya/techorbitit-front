"use client";

import { motion } from "framer-motion";

export const TrustedSection = () => {
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="bg-[#002B55] relative p-2 md:p-8 lg:p-16 rounded-[12px] md:rounded-[18px] lg:rounded-[24px] overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div className="flex justify-center" variants={titleVariants}>
          <h2 className="text-[20px] md:text-[28px] lg:text-[42px] font-[500] text-white text-center leading-tight">
            Trusted by over 6K+ customers
          </h2>
        </motion.div>

        <motion.div
          className="flex justify-center pt-4 md:pt-6 lg:pt-10"
          variants={statsVariants}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16">
            <motion.div
              className="flex gap-3 md:gap-4 items-center"
              variants={statItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] bg-white rounded-full flex justify-center items-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/trusted/3.svg"
                  alt=""
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </motion.div>
              <div className="">
                <div>
                  <h3 className="text-[14px] md:text-[16px] lg:text-[21px] font-[500] text-white">
                    Premium
                  </h3>
                </div>
                <div>
                  <span className="text-[12px] md:text-[14px] lg:text-[16px] text-white font-light opacity-[.9]">
                    Product
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 md:gap-4 items-center"
              variants={statItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] bg-white rounded-full flex justify-center items-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/trusted/1.svg"
                  alt=""
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </motion.div>
              <div className="">
                <div>
                  <h3 className="text-[14px] md:text-[16px] lg:text-[21px] font-[500] text-white">
                    4000+
                  </h3>
                </div>
                <div>
                  <span className="text-[12px] md:text-[14px] lg:text-[16px] text-white font-light opacity-[.9]">
                    Google Reviews
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 md:gap-4 items-center"
              variants={statItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] bg-white rounded-full flex justify-center items-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/trusted/2.svg"
                  alt=""
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </motion.div>
              <div className="">
                <div>
                  <h3 className="text-[14px] md:text-[16px] lg:text-[21px] font-[500] text-white">
                    Delivery
                  </h3>
                </div>
                <div>
                  <span className="text-[12px] md:text-[14px] lg:text-[16px] text-white font-light opacity-[.9]">
                    Across India
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full absolute right-0 left-0 top-16 md:top-24 lg:top-32 m-auto blur-[50px] md:blur-[75px] lg:blur-[100px] bg-[rgba(27,127,225,0.4)]"
          variants={backgroundVariants}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};
