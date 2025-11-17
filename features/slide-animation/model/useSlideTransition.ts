"use client";

import { useCallback, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/shared/hooks/useIsomorphicLayoutEffect";
import type { Direction } from "@/entities/slide/model/types";
import {
  initializeGsap,
  animateTo,
  animateFromTo,
  setInstant,
  killAnimations,
} from "../lib/gsap-utils";
import {
  SLIDE_ANIMATION_CONFIG,
  TEXT_BLUR_IN_CONFIG,
  TEXT_BLUR_OUT_CONFIG,
  CLIP_PATH_CONFIG,
} from "./animation-config";

interface UseSlideTransitionProps {
  /** Callback quando animação termina */
  onComplete?: () => void;
  /** Offset customizado (sobrescreve o padrão) */
  offset?: number;
}

interface SlideTransitionParams {
  /** Container da imagem atual */
  currentSlideRef: HTMLElement;
  /** Container da nova imagem */
  newSlideRef: HTMLElement;
  /** Imagem dentro do novo container */
  newImageRef: HTMLElement;
  /** Direção da transição */
  direction: Direction;
}

interface TextTransitionParams {
  /** Índice do slide atual */
  currentIndex: number;
  /** Todos os containers de texto */
  textContainers: HTMLElement[];
}

export function useSlideTransition({
  onComplete,
  offset = SLIDE_ANIMATION_CONFIG.offsetDesktop,
}: UseSlideTransitionProps = {}) {
  const isInitialized = useRef(false);

  // Inicializa GSAP uma única vez
  useIsomorphicLayoutEffect(() => {
    if (!isInitialized.current) {
      initializeGsap();
      isInitialized.current = true;
    }
  }, []);

  const animateSlideTransition = useCallback(
    ({
      currentSlideRef,
      newSlideRef,
      newImageRef,
      direction,
    }: SlideTransitionParams) => {
      const { duration, ease } = SLIDE_ANIMATION_CONFIG;

      // Define direção do movimento
      const offsetValue = direction === "left" ? -offset : offset;
      const clipPath = CLIP_PATH_CONFIG[direction];

      // 1. Posiciona nova imagem fora da tela
      setInstant(newImageRef, { x: offsetValue });

      // 2. Slide atual sai
      const currentImage = currentSlideRef.querySelector("img");
      if (currentImage) {
        animateTo(currentImage, {
          x: -offsetValue, // Direção oposta
          duration,
          ease,
        });
      }

      animateFromTo(
        newSlideRef,
        { clipPath: clipPath.from },
        {
          clipPath: clipPath.to,
          duration,
          ease,
          onComplete,
        }
      );

      // 4. Nova imagem entra
      animateTo(newImageRef, {
        x: 0,
        duration,
        ease,
      });
    },
    [offset, onComplete]
  );

  const animateTextTransition = useCallback(
    ({ currentIndex, textContainers }: TextTransitionParams) => {
      killAnimations(".word");

      textContainers.forEach((container, index) => {
        const words = container.querySelectorAll(".word");

        if (index !== currentIndex) {
          animateTo(words, {
            filter: TEXT_BLUR_OUT_CONFIG.filter,
            opacity: TEXT_BLUR_OUT_CONFIG.opacity,
            duration: TEXT_BLUR_OUT_CONFIG.duration,
            ease: TEXT_BLUR_OUT_CONFIG.ease,
            overwrite: true,
          });
        }
      });

      const currentWords =
        textContainers[currentIndex]?.querySelectorAll(".word");

      if (currentWords && currentWords.length > 0) {
        animateTo(currentWords, {
          filter: TEXT_BLUR_IN_CONFIG.filter,
          opacity: TEXT_BLUR_IN_CONFIG.opacity,
          duration: TEXT_BLUR_IN_CONFIG.duration,
          ease: TEXT_BLUR_IN_CONFIG.ease,
          overwrite: true,
          onComplete: () => {
            setInstant(currentWords, {
              filter: TEXT_BLUR_IN_CONFIG.filter,
              opacity: TEXT_BLUR_IN_CONFIG.opacity,
            });
          },
        });
      }
    },
    []
  );

  return {
    animateSlideTransition,
    animateTextTransition,
  };
}
