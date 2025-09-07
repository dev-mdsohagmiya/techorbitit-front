"use client";

import { useForm } from "react-hook-form";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmitNewsletter = async (data) => {
    try {
      console.log("Newsletter data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Successfully subscribed to newsletter!");
      reset();
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-[#002B55] text-white p-6 md:p-8 lg:p-12 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] w-full">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Join Our JF Products Section */}
        <div className="lg:col-span-1">
          <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-[600] mb-3 md:mb-4">
            Join Our JF Products
          </h2>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white/70 mb-4 md:mb-6 leading-relaxed">
            We'll tell you about store updates and discounts
          </p>
          <form
            onSubmit={handleSubmit(onSubmitNewsletter)}
            className="space-y-4"
          >
            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Enter your email"
                className={`w-full bg-[#FFFFFF1A] text-white placeholder-white/50 px-4 py-3 rounded-[12px] md:rounded-[16px] border transition-all duration-300 focus:outline-none ${
                  errors.email
                    ? "border-red-400 focus:border-red-400"
                    : "border-transparent focus:border-[#b0dd1e]"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-[12px] mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex items-start space-x-3">
              <input
                id="newsletter"
                type="checkbox"
                {...register("newsletter", {
                  required: "Please accept to continue",
                })}
                className="w-4 h-4 text-[#b0dd1e] bg-[#FFFFFF1A] rounded border-white/30 focus:ring-[#b0dd1e] mt-1"
              />
              <label
                htmlFor="newsletter"
                className="text-[12px] md:text-[13px] lg:text-[14px] text-white/70 leading-relaxed"
              >
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            {errors.newsletter && (
              <p className="text-red-400 text-[12px]">
                {errors.newsletter.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#b0dd1e] text-black font-[600] py-3 px-6 rounded-[12px] md:rounded-[16px] hover:bg-[#a0c91a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Subscribing..." : "Join Now"}
            </button>
          </form>
        </div>

        {/* Information Links */}
        <div className="lg:col-span-1">
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-[600] mb-4 md:mb-6">
            Information
          </h3>
          <ul className="space-y-3 text-[14px] md:text-[15px] lg:text-[16px] text-white/70">
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="lg:col-span-1">
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-[600] mb-4 md:mb-6">
            Helpful
          </h3>
          <ul className="space-y-3 text-[14px] md:text-[15px] lg:text-[16px] text-white/70">
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b0dd1e] transition-colors duration-300 block"
              >
                My Account
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-white/20 my-6 md:my-8 lg:my-10" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo and Branches */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          {/* Logo */}
          <div className="bg-white/10 p-3 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>
          {/* Branches Text */}
          <div className="text-center md:text-left">
            <span className="text-[12px] md:text-[13px] lg:text-[14px] font-[500] text-white/70 block">
              Our Branches
            </span>
            <p className="text-[13px] md:text-[14px] lg:text-[15px] font-[400] text-white/80">
              Coimbatore, Chennai, Hyderabad, Goa, Kochi
            </p>
          </div>
        </div>

        {/* Contact Us Button */}
        <button className="bg-[#b0dd1e] text-black font-[600] py-3 px-6 md:px-8 rounded-[12px] md:rounded-[16px] hover:bg-[#a0c91a] transition-all duration-300 text-[14px] md:text-[15px] lg:text-[16px]">
          Contact Us
        </button>
      </div>
    </footer>
  );
}
