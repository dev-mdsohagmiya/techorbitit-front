"use client";

import { Title } from "@/components/ui/Title";
import { Card } from "../agricultural-products/Card";
import ProductEmblaCarousel from "../../ui/ProductEmblaCarousel";
import { motion } from "framer-motion";

// Dummy landscape product data
const landscapeProducts = [
  {
    id: 1,
    title: "Decorative Garden Fence",
    price: "₹6,800.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Ornamental Metal Gate",
    price: "₹15,500.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Privacy Screen Panel",
    price: "₹9,200.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Garden Trellis System",
    price: "₹4,500.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Modern Garden Screen",
    price: "₹7,200.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Decorative Balcony Rail",
    price: "₹5,800.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 7,
    title: "Garden Partition Wall",
    price: "₹12,800.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 8,
    title: "Outdoor Privacy Fence",
    price: "₹11,500.00",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },
];

export const LandscapeProducts = () => {
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

  const carouselVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Create slides for carousel
  const slides = landscapeProducts.map((product) => (
    <motion.div
      key={product.id}
      className="px-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card product={product} />
    </motion.div>
  ));

  const options = {
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={titleVariants}>
        <Title text="Landscape Products" />
      </motion.div>

      <motion.div
        className="pt-3 md:pt-6 lg:pt-8 px-4 md:px-8"
        variants={carouselVariants}
      >
        <ProductEmblaCarousel
          slides={slides}
          options={options}
          autoSlideDelay={10000}
          startDelay={2000}
          products={landscapeProducts}
        />
      </motion.div>
    </motion.div>
  );
};
