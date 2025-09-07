import { Navbar } from "@/components/Navbar";
import { AgriculturalProducts } from "@/components/sections/agricultural-products/AgriculturalProducts";
import { ContactUS } from "@/components/sections/contact-us/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { HowWeDoProgress } from "@/components/sections/how-we-do-progress/HowWeDoProgress";
import { LandscapeProducts } from "@/components/sections/lndscape-products/LandscapeProducts";
import { TrustedSection } from "@/components/sections/trusted/TrustedSection";
import { WhyCustomerLoveUs } from "@/components/sections/why-customers-love-us/WhyCustomerLoveUs";
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

    <div className="max-w-[1280px] m-auto pt-10">
      <WhyUs />
    </div>

    <div className="">
      <HowWeDoProgress />
    </div>
    <div className="max-w-[1280px] m-auto pt-10">
      <WhyCustomerLoveUs />
    </div>

    <div className="max-w-[1280px] m-auto pt-[220px]">
      <ContactUS />
    </div>

  </div>
}
