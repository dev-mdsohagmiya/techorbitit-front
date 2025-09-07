"use client";

import React, { useEffect } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Auto-slide functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoSlide = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 5 seconds

    return () => clearInterval(autoSlide);
  }, [emblaApi]);

  return (
    <section className="embla relative">
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
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>

      {/* Right Arrow Button - positioned within main card width */}
      <div className="absolute right-[calc(50%-640px+20px)] top-1/2 -translate-y-1/2 z-[9999]">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* Dots Navigation - responsive positioning */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-[9999]">
        <div className="embla__dots flex flex-col md:flex-row justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
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
