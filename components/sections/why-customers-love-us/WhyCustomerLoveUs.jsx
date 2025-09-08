"use client";

import { Title } from "@/components/ui/Title";
import { motion } from "framer-motion";
import { useState } from "react";

// Customer testimonials data
const testimonials = [
  {
    id: 1,
    name: "Samuel Varughese",
    text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "Excellent quality fencing material! The installation was smooth and the team was very professional. Our property looks secure and beautiful now. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    text: "Best fencing solution in the market. Durable, cost-effective, and looks great. The customer service was outstanding throughout the entire process.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Anita Patel",
    text: "Amazing experience from start to finish. The product quality exceeded our expectations and the installation team was very efficient. Worth every penny!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Michael Johnson",
    text: "Professional service and top-notch quality. The fencing has been standing strong for over a year now with no issues. Great value for money!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Sarah Williams",
    text: "Outstanding customer service and product quality. The team was punctual, professional, and completed the installation ahead of schedule. Our garden looks amazing now!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "David Chen",
    text: "Perfect solution for our commercial property. The fencing is robust, weather-resistant, and has significantly improved our security. Excellent investment!",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 8,
    name: "Lisa Rodriguez",
    text: "From consultation to completion, everything was handled professionally. The quality of materials and workmanship exceeded our expectations. Highly satisfied!",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 9,
    name: "James Thompson",
    text: "Great value for money! The fencing installation was quick and efficient. The team was knowledgeable and provided excellent advice throughout the process.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 10,
    name: "Maria Garcia",
    text: "Beautiful and functional fencing solution. The design perfectly complements our property, and the installation team was courteous and skilled. Love the results!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 11,
    name: "Ahmed Hassan",
    text: "Reliable and durable fencing that has withstood harsh weather conditions. The customer support team was responsive and helpful. Great company to work with!",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 12,
    name: "Jennifer Lee",
    text: "Exceptional quality and service. The fencing has enhanced both the security and aesthetic appeal of our property. Would definitely recommend to others!",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face",
  },
];

export const WhyCustomerLoveUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
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

            <motion.div
              key={currentTestimonial.id}
              variants={testimonialVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[18px] md:text-[22px] lg:text-[28px] font-[400] text-[#1a1a1a] leading-relaxed">
                {currentTestimonial.text}
              </span>
            </motion.div>
          </div>

          <motion.div
            className="bg-[url('/love/bg.png')] bg-cover bg-center h-[80px] md:h-[90px] lg:h-[100px] flex justify-between items-center p-4 md:p-5 rounded-xl md:rounded-2xl"
            variants={authorVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[20px] md:text-[26px] lg:text-[32px] font-[600]">
                - {currentTestimonial.name}
              </h2>
            </motion.div>
            <div className="flex gap-2">
              <motion.div
                className="h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={handlePrevious}
              >
                <img
                  src="/love/left.svg"
                  alt="Previous testimonial"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </motion.div>
              <motion.div
                className="h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={handleNext}
              >
                <img
                  src="/love/right.svg"
                  alt="Next testimonial"
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
            key={currentTestimonial.id}
            src={currentTestimonial.image}
            className="w-full h-full object-cover rounded-[16px] md:rounded-[20px] lg:rounded-[24px]"
            alt={`${currentTestimonial.name} profile`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
