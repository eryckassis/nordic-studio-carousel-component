"use client";

import { useCallback, useRef, useEffect } from "react";
import { useCarouselControls } from "@/features/carousel-navigation/model/useCarouselControls";
import { useSlideTransition } from "@/features/slide-animation/model/useSlideTransition";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { BREAKPOINTS, SLIDE_OFFSETS } from "@/shared/lib/constants";
import { SLIDES } from "@/entities/slide/lib/slides-data";

export function useCarousel() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.mobile}px)`);
  const offset = isMobile ? SLIDE_OFFSETS.mobile : SLIDE_OFFSETS.desktop;
  const currentSlideRef = useRef<HTMLDivElement | null>(null);
  const newSlideRef = useRef<HTMLDivElement | null>(null);
  const textContainersRef = useRef<HTMLDivElement[]>([]);

  const [state, actions] = useCarouselControls({
    initialIndex: 0,
    onNavigate: ({ newIndex, direction }) => {
      handleSlideTransition(newIndex, direction);
    },
  });

  const { animateSlideTransition, animateTextTransition } = useSlideTransition({
    offset,
    onComplete: () => {
      actions.setIsAnimating(false);
      currentSlideRef.current = newSlideRef.current;
    },
  });

  const handleSlideTransition = useCallback(
    (newIndex: number, direction: "left" | "right") => {
      if (!currentSlideRef.current || !newSlideRef.current) return;

      actions.setIsAnimating(true);

      const newImageRef = newSlideRef.current.querySelector(
        "img"
      ) as HTMLElement;

      if (!newImageRef) return;

      animateSlideTransition({
        currentSlideRef: currentSlideRef.current,
        newSlideRef: newSlideRef.current,
        newImageRef,
        direction,
      });

      animateTextTransition({
        currentIndex: newIndex,
        textContainers: textContainersRef.current,
      });
    },
    [actions, animateSlideTransition, animateTextTransition]
  );

  useEffect(() => {
    if (textContainersRef.current.length > 0) {
      animateTextTransition({
        currentIndex: 0,
        textContainers: textContainersRef.current,
      });
    }
  }, [animateTextTransition]);
  return {
    state,
    slides: SLIDES,
    isMobile,
    actions,
    currentSlideRef,
    newSlideRef,
    textContainersRef,
  };
}
