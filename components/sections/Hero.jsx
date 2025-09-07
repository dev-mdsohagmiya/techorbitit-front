import { Button } from "../ui/Button";
import EmblaCarousel from "../ui/EmblaCarousel";

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
  const slides = slidesData.map((slide) => (
    <div
      key={slide.id}
      className="h-[670px] grid grid-cols-12 bg-[#f2f4f6] p-5 items-center rounded-[24px] relative"
    >
      <div className="col-span-6 w-full h-full">
        <div className="w-full h-full">
          <div className="bg-[url('/hero/bg.svg')] h-full w-full bg-cover bg-center p-5">
            <img
              className="w-full h-full"
              src={slide.image}
              alt={slide.title}
            />
          </div>
        </div>
      </div>
      <div className="col-span-6 flex justify-center items-center p-16">
        <div className="grid gap-2">
          <div>
            <h1 className="leading-[72px] font-[500] text-[62px] text-[var(--Black, rgba(26, 26, 26, 1))]">
              {slide.title}
            </h1>
          </div>
          <div>
            <span className="text-[24px] font-[400] leading-[32px] text-[var(--Black, rgba(26, 26, 26, 1))]">
              {slide.subtitle}
            </span>
          </div>
          <div className="pt-10">
            <Button size="md" />
          </div>
        </div>
      </div>
    </div>
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
    <div className="w-full">
      <div className="mt-8 -translate-y-[45px]" style={{ zIndex: 1 }}>
        <EmblaCarousel slides={slides} options={options} />
      </div>
    </div>
  );
};
