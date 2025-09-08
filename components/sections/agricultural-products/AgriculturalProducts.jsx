"use client";

import { Title } from "@/components/ui/Title";
import { Card } from "./Card";
import ProductEmblaCarousel from "../../ui/ProductEmblaCarousel";
import { motion } from "framer-motion";

// Dummy product data
const agriculturalProducts = [
  {
    id: 1,
    title: "JF Barbed Wire - 270 GSM",
    price: "₹4,995.00",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Premium Chain Link Fence",
    price: "₹8,750.00",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Heavy Duty Welded Mesh",
    price: "₹12,500.00",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Galvanized Steel Posts",
    price: "₹3,200.00",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Electric Fence Wire",
    price: "₹6,800.00",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Farm Gate Hardware",
    price: "₹4,500.00",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 7,
    title: "Cattle Fence Panel",
    price: "₹9,200.00",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 8,
    title: "Field Boundary Fence",
    price: "₹15,500.00",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
  },
];

export const AgriculturalProducts = () => {
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
  const slides = agriculturalProducts.map((product) => (
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
        <Title text="Agricultural Products" />
      </motion.div>

      <motion.div
        className="pt-3 md:pt-6 lg:pt-8 px-4 md:px-8"
        variants={carouselVariants}
      >
        <ProductEmblaCarousel
          slides={slides}
          options={options}
          autoSlideDelay={7000}
          startDelay={1000}
          products={agriculturalProducts}
        />
      </motion.div>
    </motion.div>
  );
};
