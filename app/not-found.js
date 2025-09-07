"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
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
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#002B55] via-[#1B7FE1] to-[#002B55] flex flex-col items-center justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center px-4">
        {/* Logo */}
        <motion.div className="mb-8" variants={floatingVariants}>
          <motion.div
            className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full p-3 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/logo.png"
              alt="JF Products Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 404 Number */}
        <motion.div className="relative" variants={numberVariants}>
          <motion.h1
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white/90 leading-none"
            animate={{
              textShadow: [
                "0 0 20px rgba(176, 221, 30, 0.5)",
                "0 0 40px rgba(176, 221, 30, 0.8)",
                "0 0 20px rgba(176, 221, 30, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.h1>

          {/* Glowing Effect */}
          <motion.div
            className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-bold text-[#b0dd1e] opacity-30 blur-sm"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          variants={titleVariants}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
          variants={textVariants}
        >
          The page you're looking for seems to have wandered off into the
          digital wilderness. Don't worry, even the best fencing can't contain
          our amazing products!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          variants={buttonVariants}
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button text="Go Home" size="lg" />
            </motion.div>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#002B55] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Go Back
          </motion.button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div className="mt-12 space-y-4" variants={textVariants}>
          <p className="text-white/60 text-sm">
            Or try one of these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Products", href: "/#products" },
              { name: "About Us", href: "/#about" },
              { name: "Contact", href: "/#contact" },
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-[#b0dd1e] hover:text-white transition-colors duration-300 text-sm font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-6 h-6 bg-[#b0dd1e] rounded-full opacity-60"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-24 w-8 h-8 bg-white/20 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/3 right-16 w-4 h-4 bg-[#b0dd1e] rounded-full opacity-40"
        animate={{
          x: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-16 w-5 h-5 bg-white/30 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </motion.div>
  );
}
