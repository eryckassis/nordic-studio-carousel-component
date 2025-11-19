"use client";

import { useCallback, useRef, useEffect } from "react";
import { useCarouselControls } from "@/features/carousel-navigation/model/useCarouselControls";
import { useSlideTransition } from "@/features/slide-animation/model/useSlideTransition";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { BREAKPOINTS, SLIDE_OFFSETS } from "@/shared/lib/constants";
import { SLIDES } from "@/entities/slide/lib/slides-data";

/**
 * Hook principal que orquestra todo o carrossel
 */
export function useCarousel() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.mobile}px)`);
  const offset = isMobile ? SLIDE_OFFSETS.mobile : SLIDE_OFFSETS.desktop;

  // Refs para DOM
  const currentSlideRef = useRef<HTMLDivElement | null>(null);
  const newSlideRef = useRef<HTMLDivElement | null>(null);
  const textContainersRef = useRef<HTMLDivElement[]>([]);

  // Feature: Navegação
  const [state, actions] = useCarouselControls({
    initialIndex: 0,
    onNavigate: ({ newIndex, direction }) => {
      handleSlideTransition(newIndex, direction);
    },
  });

  // Feature: Animação
  const { animateSlideTransition, animateTextTransition } = useSlideTransition({
    offset,
    onComplete: () => {
      actions.setIsAnimating(false);
      currentSlideRef.current = newSlideRef.current;
    },
  });

  // Handler de transição
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

  // Inicializa primeira animação de texto
  useEffect(() => {
    if (textContainersRef.current.length > 0) {
      animateTextTransition({
        currentIndex: 0,
        textContainers: textContainersRef.current,
      });
    }
  }, [animateTextTransition]);

  // Setter para textContainers
  const setTextContainers = useCallback((containers: HTMLDivElement[]) => {
    textContainersRef.current = containers;
  }, []);

  // Retorno: apenas valores e callbacks
  return {
    state,
    slides: SLIDES,
    isMobile,
    actions,
    setTextContainers,
    // Callbacks para refs (não expõe refs diretamente)
    getCurrentSlideRef: useCallback(() => currentSlideRef, []),
    getNewSlideRef: useCallback(() => newSlideRef, []),
  };
}
