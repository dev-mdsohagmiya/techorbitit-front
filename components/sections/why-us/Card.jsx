"use client";

import { motion } from "framer-motion";

export const Card = ({ id, icon, title, description, bgColor = "#1B7FE1" }) => {
  return (
    <motion.div
      className={`grid gap-3 md:gap-4 lg:gap-5 p-4 md:p-6 lg:p-10 rounded-[12px] md:rounded-[16px] lg:rounded-[24px] ${
        id === 2 ? "bg-[#002B55] " : "bg-[#f2f4f6]"
      } relative overflow-hidden ${id === 2 ? "md:-translate-y-20" : null}`}
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={icon}
          alt=""
          className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        />
      </motion.div>

      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
        <h3
          className={`text-[16px] md:text-[20px] lg:text-[26px] font-[500] ${
            id === 2 ? "text-white" : "text-[#1a1a1a]"
          } leading-[130%]`}
        >
          {title}
        </h3>
      </motion.div>

      <motion.div
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <span
          className={`text-[13px] md:text-[15px] lg:text-[17px] font-[400] ${
            id === 2 ? "text-white opacity-[0.8]" : "text-[#1a1a1a]"
          } leading-relaxed`}
        >
          {description}
        </span>
      </motion.div>

      <motion.div
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[340px] lg:h-[340px] rounded-full absolute -right-15 -top-15 md:-right-20 md:-top-20 lg:-right-40 lg:-top-40 m-auto blur-[40px] md:blur-[60px] lg:blur-[100px] opacity-[0.4] md:opacity-[0.5]"
        style={{ backgroundColor: bgColor }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.div>
  );
};
