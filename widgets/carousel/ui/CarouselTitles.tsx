"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/shared/lib/cn";
import type { Slide } from "@/entities/slide/model/types";

interface CarouselTitlesProps {
  slides: readonly Slide[];
  onTitleContainersReady?: (containers: HTMLDivElement[]) => void;
  className?: string;
}

export function CarouselTitles({
  slides,
  onTitleContainersReady,
  className,
}: CarouselTitlesProps) {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const splitIntoWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span
        key={`${word}-${index}`}
        className="word inline-block blur-[75px] opacity-0"
      >
        {word}
        {index < text.split(" ").length - 1 && "\u00A0"}
      </span>
    ));
  };

  useEffect(() => {
    const validContainers = containerRefs.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );

    if (validContainers.length === slides.length) {
      onTitleContainersReady?.(validContainers);
    }
  }, [slides.length, onTitleContainersReady]);

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => {
            containerRefs.current[index] = el;
          }}
          className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2",
            "w-2/5 h-full",
            "flex items-center justify-center",
            "pointer-events-none z-(--z-titles)",
            "max-md:w-full max-md:px-8",
            className
          )}
        >
          <h1
            className={cn(
              "font-display text-center text-8xl",
              "blur-matrix",
              "max-md:text-5xl"
            )}
          >
            {splitIntoWords(slide.title)}
          </h1>
        </div>
      ))}
    </>
  );
}
