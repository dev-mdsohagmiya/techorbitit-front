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
import { GoToTop } from "@/components/ui/GoToTop";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full">
        <Navbar />
      </div>
      <Hero />

      <div className="max-w-[1280px] m-auto px-3 md:px-6 lg:px-0 py-10">
        <AgriculturalProducts />
      </div>
      <div className="max-w-[1280px] m-auto px-3 md:px-6 lg:px-0 py-10">
        <LandscapeProducts />
      </div>
      <div className="max-w-[1280px] m-auto px-3 md:px-6 lg:px-0 py-10">
        <TrustedSection />
      </div>

      <div className="max-w-[1280px] m-auto px-3 md:px-6 lg:px-0 pt-10">
        <WhyUs />
      </div>

      <div className="">
        <HowWeDoProgress />
      </div>
      <div className="max-w-[1280px] m-auto px-3 md:px-6 lg:px-0 pt-10">
        <WhyCustomerLoveUs />
      </div>

      <div className="max-w-[1280px] m-auto px-3 md:px-6 lg:px-0 pt-8 md:pt-16 lg:pt-[130px]">
        <ContactUS />
      </div>
      <div className="px-3 md:px-6 lg:px-10 py-6 md:py-8 lg:py-10">
        <Footer />
      </div>

      {/* Go to Top Button */}
      <GoToTop />
    </div>
  );
}
