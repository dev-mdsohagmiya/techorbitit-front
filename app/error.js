"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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

  const iconVariants = {
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

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#002B55] via-[#1B7FE1] to-[#002B55] flex flex-col items-center justify-center relative overflow-hidden px-4"
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
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center max-w-2xl">
        {/* Logo */}
        <motion.div className="mb-8" variants={iconVariants}>
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

        {/* Error Icon */}
        <motion.div className="relative" variants={iconVariants}>
          <motion.div
            className="w-24 h-24 md:w-32 md:h-32 bg-red-500/20 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.svg
              className="w-12 h-12 md:w-16 md:h-16 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          variants={textVariants}
        >
          Something went wrong!
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white/80 leading-relaxed"
          variants={textVariants}
        >
          We encountered an unexpected error. Our team has been notified and is
          working to fix this issue.
        </motion.p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <motion.div
            className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left"
            variants={textVariants}
          >
            <p className="text-red-300 text-sm font-mono">
              {error?.message || "Unknown error occurred"}
            </p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          variants={buttonVariants}
        >
          <motion.button
            onClick={reset}
            className="px-8 py-4 bg-[#b0dd1e] text-black font-semibold rounded-xl hover:bg-[#a0c91a] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Try Again
          </motion.button>

          <motion.button
            onClick={() => (window.location.href = "/")}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#002B55] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Go Home
          </motion.button>
        </motion.div>

        {/* Help Text */}
        <motion.p
          className="text-white/60 text-sm mt-8"
          variants={textVariants}
        >
          If this problem persists, please contact our support team.
        </motion.p>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-6 h-6 bg-red-400/60 rounded-full"
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
    </motion.div>
  );
}
