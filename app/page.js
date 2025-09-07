import { Navbar } from "@/components/Navbar";
import { AgriculturalProducts } from "@/components/sections/agricultural-products/AgriculturalProducts";
import { Hero } from "@/components/sections/Hero";
import { LandscapeProducts } from "@/components/sections/lndscape-products/LandscapeProducts";
import { TrustedSection } from "@/components/sections/trusted/TrustedSection";
import { WhyUs } from "@/components/sections/why-us/WhyUs";
export default function Home() {
  return <div>

    <div className="max-w-[1280px] m-auto">
      <Navbar />
    </div>
    <Hero />

    <div className="max-w-[1280px] m-auto py-10">
      <AgriculturalProducts />
    </div>
    <div className="max-w-[1280px] m-auto py-10">
      <LandscapeProducts />
    </div>
    <div className="max-w-[1280px] m-auto py-10">
      <TrustedSection />
    </div>

    <div className="max-w-[1280px] m-auto py-10">
      <WhyUs />
    </div>

  </div>
}
