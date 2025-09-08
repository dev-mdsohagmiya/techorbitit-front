"use client";

import { Title } from "@/components/ui/Title";
import { motion } from "framer-motion";

export const WhyCustomerLoveUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const testimonialVariants = {
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

  const authorVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
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
      <motion.div className="text-center" variants={titleVariants}>
        <Title text={"Why Customers Love ❤️ Us?"} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 h-auto lg:h-[600px] gap-6 lg:gap-10 pt-7">
        <motion.div
          className="bg-[#f2f4f6] lg:col-span-8 h-auto lg:h-full flex flex-col gap-8 lg:gap-14 justify-between p-2 md:p-8 lg:p-12 rounded-[16px] md:rounded-[20px] lg:rounded-[24px]"
          variants={contentVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/love/dot.svg"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </motion.div>

            <motion.div variants={testimonialVariants}>
              <span className="text-[18px] md:text-[22px] lg:text-[28px] font-[400] text-[#1a1a1a] leading-relaxed">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very
                fast(400ft.) Value for money and easy to install. Happy with the
                product
              </span>
            </motion.div>
          </div>

          <motion.div
            className="bg-[url('/love/bg.png')] bg-cover bg-center h-[80px] md:h-[90px] lg:h-[100px] flex justify-between items-center p-4 md:p-5 rounded-xl md:rounded-2xl"
            variants={authorVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h2 className="text-[20px] md:text-[26px] lg:text-[32px] font-[600]">
                {" "}
                - Samuel Varughese
              </h2>
            </div>
            <div className="flex gap-2">
              <motion.div
                className="h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/love/left.svg"
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </motion.div>
              <motion.div
                className="h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/love/right.svg"
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-4 bg-[#f2f4f6] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] h-[280px] md:h-[350px] lg:h-full"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="/love/profile.svg"
            className="w-full h-full object-cover rounded-[16px] md:rounded-[20px] lg:rounded-[24px]"
            alt="Customer profile"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
