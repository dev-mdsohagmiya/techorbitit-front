import { Title } from "@/components/ui/Title";
import { Card } from "../agricultural-products/Card";
import ProductEmblaCarousel from "../../ui/ProductEmblaCarousel";

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
  // Create slides for carousel
  const slides = landscapeProducts.map((product) => (
    <div key={product.id} className="px-2">
      <Card product={product} />
    </div>
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
    <div>
      <div>
        <Title text="Landscape Products" />
      </div>

      <div className="pt-3 md:pt-6 lg:pt-8">
        <ProductEmblaCarousel
          slides={slides}
          options={options}
          autoSlideDelay={10000}
          startDelay={2000}
          products={landscapeProducts}
        />
      </div>
    </div>
  );
};
