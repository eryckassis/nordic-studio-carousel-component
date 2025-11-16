"use client";

import { useState, useCallback } from "react";
import {
  getNextIndex,
  getPrevIndex,
  TOTAL_SLIDES,
} from "@/entities/slide/lib/slides-data";
import type { Direction } from "@/entities/slide/model/types";

interface CarouselControlsState {
  currentIndex: number;
  isAnimating: boolean;
  totalSlides: number;
}

interface CarouselControlsActions {
  goToNext: () => void;
  goToPrev: () => void;
  goToIndex: (index: number) => void;
  setIsAnimating: (value: boolean) => void;
}

interface OnNavigateParams {
  newIndex: number;
  previousIndex: number;
  direction: Direction;
}

interface UseCarouselControlsProps {
  initialIndex?: number;
  onNavigate?: (params: OnNavigateParams) => void;
}

type UseCarouselControlsReturn = [
  CarouselControlsState,
  CarouselControlsActions
];

export function useCarouselControls({
  initialIndex = 0,
  onNavigate,
}: UseCarouselControlsProps = {}): UseCarouselControlsReturn {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;

    const previousIndex = currentIndex;
    const newIndex = getNextIndex(currentIndex);

    setCurrentIndex(newIndex);

    onNavigate?.({
      newIndex,
      previousIndex,
      direction: "right",
    });
  }, [currentIndex, isAnimating, onNavigate]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;

    const previousIndex = currentIndex;
    const newIndex = getPrevIndex(currentIndex);

    setCurrentIndex(newIndex);

    onNavigate?.({
      newIndex,
      previousIndex,
      direction: "left",
    });
  }, [currentIndex, isAnimating, onNavigate]);

  const goToIndex = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;

      const previousIndex = currentIndex;
      const direction: Direction = index > currentIndex ? "right" : "left";

      setCurrentIndex(index);

      onNavigate?.({
        newIndex: index,
        previousIndex,
        direction,
      });
    },
    [currentIndex, isAnimating, onNavigate]
  );

  const state: CarouselControlsState = {
    currentIndex,
    isAnimating,
    totalSlides: TOTAL_SLIDES,
  };

  const actions: CarouselControlsActions = {
    goToNext,
    goToPrev,
    goToIndex,
    setIsAnimating,
  };

  return [state, actions];
}
