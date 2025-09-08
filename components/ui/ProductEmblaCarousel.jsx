"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ProductEmblaCarousel = (props) => {
  const {
    slides,
    options,
    autoSlideDelay = 5000,
    startDelay = 0,
    products = [],
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const autoSlideRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [intersectionRef, isIntersecting, hasIntersected] =
    useIntersectionObserver();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Function to start auto-slide timer
  const startAutoSlide = () => {
    if (autoSlideRef.current) {
      clearTimeout(autoSlideRef.current);
    }

    const scheduleNext = () => {
      autoSlideRef.current = setTimeout(() => {
        if (emblaApi) {
          emblaApi.scrollNext();
          scheduleNext(); // Schedule the next slide
        }
      }, autoSlideDelay); // Use custom delay
    };

    scheduleNext();
  };

  // Function to reset auto-slide timer (starts immediately)
  const resetAutoSlide = () => {
    startAutoSlide();
  };

  // Auto-slide functionality - only when in viewport
  useEffect(() => {
    if (!emblaApi) return;

    // Only start auto-slide if the carousel is in the viewport
    if (isIntersecting) {
      // Add initial delay to stagger carousel starts
      const initialDelay = setTimeout(() => {
        startAutoSlide();
      }, startDelay);

      // Listen for drag events to reset timer
      const onPointerDown = () => {
        resetAutoSlide();
      };

      const onSelect = () => {
        resetAutoSlide();
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("pointerDown", onPointerDown);
      emblaApi.on("select", onSelect);

      return () => {
        clearTimeout(initialDelay);
        if (autoSlideRef.current) {
          clearTimeout(autoSlideRef.current);
        }
        emblaApi.off("pointerDown", onPointerDown);
        emblaApi.off("select", onSelect);
      };
    } else {
      // Clear auto-slide when not in viewport
      if (autoSlideRef.current) {
        clearTimeout(autoSlideRef.current);
      }
    }
  }, [emblaApi, isIntersecting, startDelay]);

  // Enhanced button click handlers that reset auto-slide
  const handlePrevClick = () => {
    onPrevButtonClick();
    resetAutoSlide();
  };

  const handleNextClick = () => {
    onNextButtonClick();
    resetAutoSlide();
  };

  const handleDotClick = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
      resetAutoSlide();
    }
  };

  return (
    <div className="relative w-full" ref={intersectionRef}>
      {/* Carousel Container with overflow hidden */}
      <section className="embla product-embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Left Arrow Button - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-[calc(50%-640px+20px)] top-1/2 -translate-y-1/2 z-[9999]">
        <div
          onClick={handlePrevClick}
          disabled={prevBtnDisabled}
          className="w-[47px] h-[47px]"
        >
          <img src="/products/left.svg" alt="" />
        </div>
      </div>

      {/* Right Arrow Button - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute right-[calc(50%-640px+20px)] top-1/2 -translate-y-1/2 z-[9999]">
        <button
          onClick={handleNextClick}
          disabled={nextBtnDisabled}
          className="w-[47px] h-[47px]"
        >
          <img src="/products/right.svg" alt="" />
        </button>
      </div>

      {/* Mobile Preview Cards - Show all small cards below on mobile */}
      <div className="md:hidden mt-4">
        <div className="flex justify-center gap-1.5 overflow-x-auto pb-2 px-2 scrollbar-hide">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-12 h-12 rounded-md cursor-pointer transition-all border-2 ${
                index === selectedIndex
                  ? "border-[#b0dd1e] scale-105"
                  : "border-gray-200 opacity-70"
              }`}
              onClick={() => handleDotClick(index)}
            >
              <div className="w-full h-full bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={product?.image || "/products/card.svg"}
                  alt={product?.title || "Product preview"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full font-medium">
            {products.length} products available
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductEmblaCarousel;
