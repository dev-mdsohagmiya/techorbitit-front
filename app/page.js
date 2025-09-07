import { Navbar } from "@/components/Navbar";
import { AgriculturalProducts } from "@/components/sections/agricultural-products/AgriculturalProducts";
import { ContactUS } from "@/components/sections/contact-us/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { HowWeDoProgress } from "@/components/sections/how-we-do-progress/HowWeDoProgress";
import { LandscapeProducts } from "@/components/sections/lndscape-products/LandscapeProducts";
import { TrustedSection } from "@/components/sections/trusted/TrustedSection";
import { WhyCustomerLoveUs } from "@/components/sections/why-customers-love-us/WhyCustomerLoveUs";
import { WhyUs } from "@/components/sections/why-us/WhyUs";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>
      <Hero />

      <div className="w-full px-4 md:px-6 lg:px-0">
        <div className="max-w-[1280px] m-auto py-6 md:py-8 lg:py-10">
          <AgriculturalProducts />
        </div>
      </div>
      <div className="w-full px-4 md:px-6 lg:px-0">
        <div className="max-w-[1280px] m-auto py-6 md:py-8 lg:py-10">
          <LandscapeProducts />
        </div>
      </div>
      <div className="w-full px-4 md:px-6 lg:px-0">
        <div className="max-w-[1280px] m-auto py-6 md:py-8 lg:py-10">
          <TrustedSection />
        </div>
      </div>

      <div className="w-full px-4 md:px-6 lg:px-0">
        <div className="max-w-[1280px] m-auto pt-6 md:pt-8 lg:pt-10">
          <WhyUs />
        </div>
      </div>

      <div className="">
        <HowWeDoProgress />
      </div>
      <div className="max-w-[1280px] m-auto pt-10">
        <WhyCustomerLoveUs />
      </div>

      <div className="max-w-[1280px] m-auto pt-[220px] hidden">
        <ContactUS />
      </div>
      <div className="px-10 py-10 hidden">
        <Footer />
      </div>
    </div>
  );
}
