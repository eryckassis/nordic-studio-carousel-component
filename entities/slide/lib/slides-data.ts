import type { Slide } from "../model/types";

export const SLIDES: readonly Slide[] = [
  {
    id: 1,
    title: "Feast of Color",
    image: "/carousel/slide-img-1.jpg",
  },
  {
    id: 2,
    title: "The Matador",
    image: "/carousel/slide-img-2.jpg",
  },
  {
    id: 3,
    title: "Final Plea",
    image: "/carousel/slide-img-3.jpg",
  },
  {
    id: 4,
    title: "Old Philosopher",
    image: "/carousel/slide-img-4.jpg",
  },
  {
    id: 5,
    title: "Viva Le France",
    image: "/carousel/slide-img-5.jpg",
  },
] as const;

export const TOTAL_SLIDES = SLIDES.length;

export function getSlideByIndex(index: number): Slide {
  const normalizedIndex =
    ((index % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
  return SLIDES[normalizedIndex];
}

export function getNextIndex(currentIndex: number): number {
  return (currentIndex + 1) % TOTAL_SLIDES;
}

export function getPrevIndex(currentIndex: number): number {
  return (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
}

export function isValidaIndex(index: number): boolean {
  return index >= 0 && index < TOTAL_SLIDES;
}
