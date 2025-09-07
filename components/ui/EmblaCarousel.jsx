"use client";

import React, { useEffect, useRef } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const autoSlideRef = useRef(null);
  const [intersectionRef, isIntersecting, hasIntersected] =
    useIntersectionObserver();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
      }, 12000); // 12 seconds
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
      startAutoSlide();
    } else {
      // Clear auto-slide when not in viewport
      if (autoSlideRef.current) {
        clearTimeout(autoSlideRef.current);
      }
    }

    // Listen for drag events to reset timer
    const onPointerDown = () => {
      if (isIntersecting) {
        resetAutoSlide();
      }
    };

    const onSelect = () => {
      if (isIntersecting) {
        resetAutoSlide();
      }
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("select", onSelect);

    return () => {
      if (autoSlideRef.current) {
        clearTimeout(autoSlideRef.current);
      }
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, isIntersecting]);

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
    onDotButtonClick(index);
    resetAutoSlide();
  };

  return (
    <section className="embla relative" ref={intersectionRef}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow Button - positioned within main card width */}
      <div className="absolute left-[calc(50%-640px+20px)] top-1/2 -translate-y-1/2 z-[9999]">
        <PrevButton onClick={handlePrevClick} disabled={prevBtnDisabled} />
      </div>

      {/* Right Arrow Button - positioned within main card width */}
      <div className="absolute right-[calc(50%-640px+20px)] top-1/2 -translate-y-1/2 z-[9999]">
        <NextButton onClick={handleNextClick} disabled={nextBtnDisabled} />
      </div>

      {/* Dots Navigation - responsive positioning */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-[9999]">
        <div className="embla__dots flex flex-col md:flex-row justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => handleDotClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
