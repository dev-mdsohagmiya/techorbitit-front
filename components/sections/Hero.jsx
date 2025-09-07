"use client";

import { Button } from "../ui/Button";
import EmblaCarousel from "../ui/EmblaCarousel";
import { motion } from "framer-motion";

// Sample data for carousel slides
const slidesData = [
  {
    id: 1,
    title: "JF Privezy Grass Wall",
    subtitle: "The Perfect Blend of Greenery",
    image: "/hero/photo.svg",
    bgImage: "/hero/bg.svg",
  },
  {
    id: 2,
    title: "Premium Fencing Solutions",
    subtitle: "Quality That Lasts Forever",
    image: "/hero/photo.svg",
    bgImage: "/hero/bg.svg",
  },
  {
    id: 3,
    title: "Chain Link Fencing",
    subtitle: "Secure and Durable Protection",
    image: "/hero/photo.svg",
    bgImage: "/hero/bg.svg",
  },
];

export const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
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

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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

  const subtitleVariants = {
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

  const slides = slidesData.map((slide) => (
    <motion.div
      key={slide.id}
      className="h-[calc(100vh-80px)] md:h-[calc(80vh-100px)] lg:h-[670px] grid grid-cols-1 lg:grid-cols-12 bg-[#f2f4f6] p-2 md:p-3 lg:p-5 items-center rounded-[16px] md:rounded-[20px] lg:rounded-[24px] relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image Section */}
      <motion.div
        className="col-span-1 lg:col-span-6 w-full h-[calc(60vh-30px)] md:h-[calc(50vh-40px)] lg:h-full order-1 lg:order-1"
        variants={imageVariants}
      >
        <div className="w-full h-full">
          <div className="bg-[url('/hero/bg.svg')] h-full w-full bg-cover bg-center p-3 md:p-4 lg:p-5">
            <motion.img
              className="w-full h-full object-contain"
              src={slide.image}
              alt={slide.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="col-span-1 lg:col-span-6 flex justify-center items-center p-2 md:p-3 lg:p-16 order-2 lg:order-2 h-[calc(40vh-50px)] md:h-[calc(30vh-60px)] lg:h-full"
        variants={contentVariants}
      >
        <div className="grid gap-1 md:gap-2 text-center lg:text-left">
          <motion.div variants={titleVariants}>
            <h1 className="leading-[32px] md:leading-[40px] lg:leading-[72px] font-[500] text-[22px] md:text-[28px] lg:text-[62px] text-[var(--Black, rgba(26, 26, 26, 1))]">
              {slide.title}
            </h1>
          </motion.div>
          <motion.div variants={subtitleVariants}>
            <span className="text-[13px] md:text-[16px] lg:text-[24px] font-[400] leading-[18px] md:leading-[22px] lg:leading-[32px] text-[var(--Black, rgba(26, 26, 26, 1))]">
              {slide.subtitle}
            </span>
          </motion.div>
          <motion.div
            className="pt-1 md:pt-2 lg:pt-10"
            variants={buttonVariants}
          >
            <Button size="md" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  ));

  const options = {
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  };

  return (
    <motion.div
      className="w-full px-4 md:px-6 lg:px-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="mt-4 md:mt-6 lg:mt-8 -translate-y-[20px] md:-translate-y-[30px] lg:-translate-y-[45px]"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <EmblaCarousel slides={slides} options={options} />
      </motion.div>
    </motion.div>
  );
};
