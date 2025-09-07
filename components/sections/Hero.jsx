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
      className="h-[400px] md:h-[500px] lg:h-[670px] grid grid-cols-1 lg:grid-cols-12 bg-[#f2f4f6] p-3 md:p-4 lg:p-5 items-center rounded-[16px] md:rounded-[20px] lg:rounded-[24px] relative"
    >
      {/* Image Section */}
      <div className="col-span-1 lg:col-span-6 w-full h-[200px] md:h-[250px] lg:h-full order-1 lg:order-1">
        <div className="w-full h-full">
          <div className="bg-[url('/hero/bg.svg')] h-full w-full bg-cover bg-center p-3 md:p-4 lg:p-5">
            <img
              className="w-full h-full object-contain"
              src={slide.image}
              alt={slide.title}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="col-span-1 lg:col-span-6 flex justify-center items-center p-4 md:p-8 lg:p-16 order-2 lg:order-2">
        <div className="grid gap-1 md:gap-2 text-center lg:text-left">
          <div>
            <h1 className="leading-[40px] md:leading-[50px] lg:leading-[72px] font-[500] text-[28px] md:text-[40px] lg:text-[62px] text-[var(--Black, rgba(26, 26, 26, 1))]">
              {slide.title}
            </h1>
          </div>
          <div>
            <span className="text-[16px] md:text-[20px] lg:text-[24px] font-[400] leading-[24px] md:leading-[28px] lg:leading-[32px] text-[var(--Black, rgba(26, 26, 26, 1))]">
              {slide.subtitle}
            </span>
          </div>
          <div className="pt-4 md:pt-6 lg:pt-10">
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
    <div className="w-full px-4 md:px-6 lg:px-0">
      <div
        className="mt-4 md:mt-6 lg:mt-8 -translate-y-[20px] md:-translate-y-[30px] lg:-translate-y-[45px]"
        style={{ zIndex: 1 }}
      >
        <EmblaCarousel slides={slides} options={options} />
      </div>
    </div>
  );
};
