import { Title } from "@/components/ui/Title";
import { Card } from "./Card";
import ProductEmblaCarousel from "../../ui/ProductEmblaCarousel";

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
  // Create slides for carousel
  const slides = agriculturalProducts.map((product) => (
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
        <Title text="Agricultural Products" />
      </div>

      <div className="pt-3 md:pt-6 lg:pt-8">
        <ProductEmblaCarousel
          slides={slides}
          options={options}
          autoSlideDelay={7000}
          startDelay={1000}
          products={agriculturalProducts}
        />
      </div>
    </div>
  );
};
