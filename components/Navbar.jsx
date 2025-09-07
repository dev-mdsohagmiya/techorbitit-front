"use client";

import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex justify-between items-center relative py-4 md:py-6 lg:py-10 px-4 md:px-6 lg:px-0 max-w-[1280px] m-auto"
        style={{ zIndex: 10 }}
      >
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:block">
          <div>
            <ul className="flex gap-6 lg:gap-10 text-[14px] md:text-[16px] lg:text-[18px] font-[400]">
              <li className="cursor-pointer hover:text-gray-600">Home</li>
              <li className="cursor-pointer hover:text-gray-600">Shop</li>
              <li className="cursor-pointer hover:text-gray-600">Blog</li>
              <li className="cursor-pointer hover:text-gray-600">Contact</li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9999] md:hidden"
            onClick={toggleMobileMenu}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-white p-6 shadow-lg overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <img src="/logo.png" className="w-20 h-20" />
                <button
                  onClick={toggleMobileMenu}
                  className="w-10 h-10 flex items-center justify-center text-3xl font-bold text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>
              <ul className="space-y-3 text-[18px] font-[500]">
                <li className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors">
                  Home
                </li>
                <li className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors">
                  Shop
                </li>
                <li className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors">
                  Blog
                </li>
                <li className="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-200 transition-colors">
                  Contact
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4 text-[18px] font-[500]">
                  <span>Login</span>
                  <div className="w-[28px] h-[28px]">
                    <img className="w-full h-full" src="/icons/user.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right side icons */}
        <div className="">
          <ul className="flex gap-4 md:gap-6 lg:gap-10 text-[14px] md:text-[16px] lg:text-[18px] font-[400]">
            <li className="flex gap-2 md:gap-3 items-center">
              <div className="hidden md:inline-block">Login</div>
              <div className="inline-block w-[20px] h-[20px] md:w-[24px] md:h-[24px]">
                <img className="w-full h-full" src="/icons/user.svg" />
              </div>
            </li>
            <li>
              <div>
                <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]">
                  <img className="w-full h-full" src="/icons/search.svg" />
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]">
                  <img className="w-full h-full" src="/icons/card.svg" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Logo - Responsive sizing */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[70px] h-[80px] md:w-[95px] md:h-[110px] lg:w-[111px] lg:h-[127px]">
          <div
            className="translate-y-2 md:translate-y-3 lg:translate-y-5 bg-white p-1 md:p-1.5 lg:p-2 rounded-full shadow-lg"
            style={{ zIndex: 11 }}
          >
            <img src="/logo.png" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
