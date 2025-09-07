"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex justify-between items-center relative py-4 md:py-6 lg:py-10 px-4 md:px-6 lg:px-0 max-w-[1280px] m-auto"
        style={{ zIndex: 10 }}
      >
        {/* Desktop Navigation - Hidden on mobile */}
        <motion.div className="hidden md:block" variants={navItemVariants}>
          <div>
            <ul className="flex gap-6 lg:gap-10 text-[14px] md:text-[16px] lg:text-[18px] font-[400]">
              <motion.li
                className="cursor-pointer hover:text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.li>
              <motion.li
                className="cursor-pointer hover:text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Shop
              </motion.li>
              <motion.li
                className="cursor-pointer hover:text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Blog
              </motion.li>
              <motion.li
                className="cursor-pointer hover:text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <motion.div className="md:hidden" variants={iconVariants}>
          <motion.button
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-gray-700"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 2 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="w-6 h-0.5 bg-gray-700"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                scale: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="w-6 h-0.5 bg-gray-700"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -2 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[9999] md:hidden"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-white p-6 shadow-lg overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex justify-between items-center mb-8">
                  <motion.img
                    src="/logo.png"
                    className="w-20 h-20"
                    variants={mobileMenuItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                  />
                  <motion.button
                    onClick={toggleMobileMenu}
                    className="w-10 h-10 flex items-center justify-center text-3xl font-bold text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                    variants={mobileMenuItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </div>
                <motion.ul
                  className="space-y-3 text-[18px] font-[500]"
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  <motion.li
                    className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Home
                  </motion.li>
                  <motion.li
                    className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Shop
                  </motion.li>
                  <motion.li
                    className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Blog
                  </motion.li>
                  <motion.li
                    className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Contact
                  </motion.li>
                </motion.ul>
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200"
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-4 text-[18px] font-[500]">
                    <span>Login</span>
                    <div className="w-[28px] h-[28px]">
                      <img className="w-full h-full" src="/icons/user.svg" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right side icons */}
        <motion.div className="" variants={iconVariants}>
          <ul className="flex gap-4 md:gap-6 lg:gap-10 text-[14px] md:text-[16px] lg:text-[18px] font-[400]">
            <motion.li
              className="flex gap-2 md:gap-3 items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="hidden md:inline-block">Login</div>
              <motion.div
                className="inline-block w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <img className="w-full h-full" src="/icons/user.svg" />
              </motion.div>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <motion.div
                  className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img className="w-full h-full" src="/icons/search.svg" />
                </motion.div>
              </div>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <motion.div
                  className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img className="w-full h-full" src="/icons/card.svg" />
                </motion.div>
              </div>
            </motion.li>
          </ul>
        </motion.div>

        {/* Logo - Responsive sizing */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-[70px] h-[80px] md:w-[95px] md:h-[110px] lg:w-[111px] lg:h-[127px]"
          variants={logoVariants}
        >
          <motion.div
            className="translate-y-2 md:translate-y-3 lg:translate-y-5 bg-white p-1 md:p-1.5 lg:p-2 rounded-full shadow-lg"
            style={{ zIndex: 11 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="/logo.png"
              className="w-full h-full"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
