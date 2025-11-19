"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/shared/lib/cn";
import Image from "next/image";
import { NavigationButtons } from "@/features/carousel-navigation/ui/NavigationButtons";
import { useSlideTransition } from "@/features/slide-animation/model/useSlideTransition";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { BREAKPOINTS, SLIDE_OFFSETS } from "@/shared/lib/constants";
import { SLIDES } from "@/entities/slide/lib/slides-data";
import { CarouselTitles } from "./CarouselTitles";

interface CarouselProps {
  className?: string;
}

export function Carousel({ className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselImagesRef = useRef<HTMLDivElement | null>(null);
  const textContainersRef = useRef<HTMLDivElement[]>([]);

  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.mobile}px)`);
  const offset = isMobile ? SLIDE_OFFSETS.mobile : SLIDE_OFFSETS.desktop;

  const { animateSlideTransition, animateTextTransition } = useSlideTransition({
    offset,
    onComplete: () => {
      setIsAnimating(false);
      cleanupSlides();
    },
  });

  const cleanupSlides = useCallback(() => {
    if (!carouselImagesRef.current) return;
    const imgElements = carouselImagesRef.current.querySelectorAll(".img");
    if (imgElements.length > 1) {
      for (let i = 0; i < imgElements.length - 1; i++) {
        imgElements[i].remove();
      }
    }
  }, []);

  const animateSlide = useCallback(
    (newIndex: number, direction: "left" | "right") => {
      if (!carouselImagesRef.current) return;

      setIsAnimating(true);

      const currentSlide = carouselImagesRef.current.querySelector(
        ".img:last-child"
      ) as HTMLElement;
      if (!currentSlide) return;

      const newSlideContainer = document.createElement("div");
      newSlideContainer.className = "img absolute inset-0";

      const newImg = document.createElement("img");
      newImg.src = SLIDES[newIndex].image;
      newImg.alt = SLIDES[newIndex].title;
      newImg.className = "w-full h-full object-cover";

      newSlideContainer.appendChild(newImg);
      carouselImagesRef.current.appendChild(newSlideContainer);

      animateSlideTransition({
        currentSlideRef: currentSlide,
        newSlideRef: newSlideContainer,
        newImageRef: newImg,
        direction,
      });

      animateTextTransition({
        currentIndex: newIndex,
        textContainers: textContainersRef.current,
      });
    },
    [animateSlideTransition, animateTextTransition]
  );

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    const newIndex = (currentIndex + 1) % SLIDES.length;
    setCurrentIndex(newIndex);
    animateSlide(newIndex, "right");
  }, [currentIndex, isAnimating, animateSlide]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    const newIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
    setCurrentIndex(newIndex);
    animateSlide(newIndex, "left");
  }, [currentIndex, isAnimating, animateSlide]);

  const setTextContainers = useCallback((containers: HTMLDivElement[]) => {
    textContainersRef.current = containers;
  }, []);

  useEffect(() => {
    if (textContainersRef.current.length > 0) {
      animateTextTransition({
        currentIndex: 0,
        textContainers: textContainersRef.current,
      });
    }
  }, [animateTextTransition]);

  return (
    <div
      className={cn("relative w-full h-screen-safe overflow-hidden", className)}
    >
      <div ref={carouselImagesRef} className="absolute inset-0 opacity-85">
        <div className="img absolute inset-0">
          <Image
            src={SLIDES[0].image}
            alt={SLIDES[0].title}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <CarouselTitles
        slides={SLIDES}
        onTitleContainersReady={setTextContainers}
      />

      <NavigationButtons
        onPrevClick={goToPrev}
        onNextClick={goToNext}
        disabled={isAnimating}
      />

      <svg
        viewBox="0 0 0 0"
        aria-hidden="true"
        className="absolute -z-10 opacity-0"
      >
        <defs>
          <filter id="blur-matrix">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
