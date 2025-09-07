"use client";

import { Title } from "@/components/ui/Title";
import { Card } from "./Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

// Random data for Why Us cards
const whyUsData = [
  {
    id: 1,
    icon: "/why-us/1.svg",
    title: "Unmatched Durability with Corrosion-Free Technology",
    description:
      "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
    bgColor: "#1B7FE1",
  },
  {
    id: 2,
    icon: "/why-us/2.svg",
    title: "Premium Quality Materials & Expert Craftsmanship",
    description:
      "We use only the finest materials sourced from trusted suppliers, combined with decades of expertise in fencing installation. Our skilled technicians ensure every project meets the highest standards of quality and precision.",
    bgColor: "#1B7FE1",
  },
  {
    id: 3,
    icon: "/why-us/3.svg",
    title: "24/7 Customer Support & Maintenance Services",
    description:
      "Our commitment doesn't end with installation. We provide round-the-clock customer support and comprehensive maintenance services to ensure your fencing remains in perfect condition for years to come.",
    bgColor: "#1B7FE1",
  },
];

export const WhyUs = () => {
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
      y: 30 
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

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
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

  const cardsVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.div className="flex justify-center" variants={titleVariants}>
          <Title text={"Why Us"} />
        </motion.div>
        
        <motion.div className="flex justify-center" variants={descriptionVariants}>
          <div className="max-w-[800px] text-center">
            <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-center leading-relaxed">
              We specialize in delivering durable and innovative fencing
              solutions built to last. With a focus on quality and trust, we
              help secure spaces across industries and{" "}
              <br className="hidden md:block" /> communities.
            </span>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-6 md:mt-10 lg:mt-16"
          variants={cardsVariants}
        >
          {whyUsData.map((card, index) => (
            <motion.div 
              key={card.id} 
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <Card
                id={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        className="flex justify-center pt-6 md:pt-8"
        variants={buttonVariants}
      >
        <Button text={"Contact Us"} size={"md"} />
      </motion.div>
    </motion.div>
  );
};
