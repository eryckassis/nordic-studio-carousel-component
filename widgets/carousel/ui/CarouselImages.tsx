"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import type { Slide } from "@/entities/slide/model/types";

interface CarouselImagesProps {
  currentSlide: Slide;
  className?: string;
}

export const CarouselImages = forwardRef<HTMLDivElement, CarouselImagesProps>(
  ({ currentSlide, className }, ref) => {
    return (
      <div className={cn("absolute inset-0 opacity-85", className)}>
        <div ref={ref} className="absolute inset-0 gpu-accelerated">
          {" "}
          {/* ✅ CORRIGIDO */}
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    );
  }
);

CarouselImages.displayName = "CarouselImages";
