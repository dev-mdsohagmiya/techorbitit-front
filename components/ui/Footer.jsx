"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmitNewsletter = async (data) => {
    try {
      console.log("Newsletter data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Successfully subscribed to newsletter!");
      reset();
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Failed to subscribe. Please try again.");
    }
  };

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

  const sectionVariants = {
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

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const bottomVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="bg-[#002B55] text-white p-2 md:p-8 lg:p-12 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] w-full relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Blur Circle - Bottom Left */}
      <div
        className="absolute -bottom-[80px] -left-[80px] w-[297px] h-[297px] rounded-full"
        style={{
          filter: "blur(80px)",
          background:
            "radial-gradient(circle, rgba(27, 127, 225, 0.8) 0%, rgba(27, 127, 225, 0.5) 40%, rgba(27, 127, 225, 0.2) 80%, rgba(27, 127, 225, 0.05) 100%)",
        }}
      />
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Join Our JF Products Section */}
        <motion.div className="lg:col-span-1" variants={sectionVariants}>
          <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-[600] mb-3 md:mb-4">
            Join Our JF Products
          </h2>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white/70 mb-4 md:mb-6 leading-relaxed">
            We'll tell you about store updates and discounts
          </p>
          <form
            onSubmit={handleSubmit(onSubmitNewsletter)}
            className="space-y-4"
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Enter your email"
                className={`w-full bg-[#FFFFFF1A] text-white placeholder-white/50 px-4 py-3 rounded-[12px] md:rounded-[16px] border transition-all duration-300 focus:outline-none ${
                  errors.email
                    ? "border-red-400 focus:border-red-400"
                    : "border-transparent focus:border-[#b0dd1e]"
                }`}
              />
              {errors.email && (
                <motion.p
                  className="text-red-400 text-[12px] mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.email.message}
                </motion.p>
              )}
            </motion.div>
            <div className="flex items-start space-x-3">
              <input
                id="newsletter"
                type="checkbox"
                {...register("newsletter", {
                  required: "Please accept to continue",
                })}
                className="w-4 h-4 text-[#b0dd1e] bg-[#FFFFFF1A] rounded border-white/30 focus:ring-[#b0dd1e] mt-1"
              />
              <label
                htmlFor="newsletter"
                className="text-[12px] md:text-[13px] lg:text-[14px] text-white/70 leading-relaxed"
              >
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            {errors.newsletter && (
              <motion.p
                className="text-red-400 text-[12px]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.newsletter.message}
              </motion.p>
            )}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#b0dd1e] text-black font-[600] py-3 px-6 rounded-[12px] md:rounded-[16px] hover:bg-[#a0c91a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {isSubmitting ? "Subscribing..." : "Join Now"}
            </motion.button>
          </form>
        </motion.div>

        {/* Information Links */}
        <motion.div className="lg:col-span-1" variants={sectionVariants}>
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-[600] mb-4 md:mb-6">
            Information
          </h3>
          <ul className="space-y-3 text-[14px] md:text-[15px] lg:text-[16px] text-white/70">
            {["Home", "Shop", "Our Story", "Blogs", "Contact"].map(
              (link, index) => (
                <motion.li
                  key={link}
                  variants={linkVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="hover:text-[#b0dd1e] transition-colors duration-300 block"
                  >
                    {link}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Helpful Links */}
        <motion.div className="lg:col-span-1" variants={sectionVariants}>
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-[600] mb-4 md:mb-6">
            Helpful
          </h3>
          <ul className="space-y-3 text-[14px] md:text-[15px] lg:text-[16px] text-white/70">
            {[
              "FAQs",
              "Terms & Conditions",
              "Privacy Policy",
              "Shipping Policy",
              "My Account",
            ].map((link, index) => (
              <motion.li
                key={link}
                variants={linkVariants}
                custom={index}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  className="hover:text-[#b0dd1e] transition-colors duration-300 block"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.hr
        className="border-t border-white/20 my-6 md:my-8 lg:my-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Bottom Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        variants={bottomVariants}
      >
        {/* Logo and Branches */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          {/* Logo */}
          <motion.div
            className="bg-white/10 p-3 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </motion.div>
          {/* Branches Text */}
          <div className="text-center md:text-left">
            <span className="text-[12px] md:text-[13px] lg:text-[14px] font-[500] text-white/70 block">
              Our Branches
            </span>
            <p className="text-[13px] md:text-[14px] lg:text-[15px] font-[400] text-white/80">
              Coimbatore, Chennai, Hyderabad, Goa, Kochi
            </p>
          </div>
        </div>

        {/* Contact Us Button */}
        <motion.button
          className="bg-[#b0dd1e] text-black font-[600] py-3 px-6 md:px-8 rounded-[12px] md:rounded-[16px] hover:bg-[#a0c91a] transition-all duration-300 text-[14px] md:text-[15px] lg:text-[16px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </motion.footer>
  );
}
