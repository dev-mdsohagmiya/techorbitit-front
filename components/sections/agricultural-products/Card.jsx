"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Card = ({ product }) => {
  return (
    <motion.div
      className="bg-[#F2F4F6] rounded-[8px] md:rounded-[15px] p-2 md:p-3 overflow-hidden"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="mb-2 md:mb-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          className="rounded-[6px] md:rounded-[17px] w-full h-auto object-cover"
          src={product?.image || "/products/card.svg"}
          alt={product?.title || "Product"}
        />
      </motion.div>
      <div className="px-1 md:px-2 pb-2 md:pb-0">
        <motion.div
          className="mb-1"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-[#1A1A1A] text-[13px] md:text-[16px] lg:text-[18px] font-[600] leading-tight">
            {product?.title || "JF Barbed Wire- 270 GSM"}
          </h3>
        </motion.div>
        <motion.div
          className="mb-2 md:mb-0"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <span className="text-[#1A1A1A] opacity-[0.9] text-[11px] md:text-[14px] lg:text-[16px]">
            {product?.price || "₹4,995.00"}
          </span>
        </motion.div>
        <motion.div
          className="mt-1 md:mt-4 lg:mt-5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Button size="sm" />
        </motion.div>
      </div>
    </motion.div>
  );
};
