export interface Slide {
  id: number;
  title: string;
  image: string;
}

export enum NavigationDirection {
  Left = "left",
  Right = "right",
}

export type Direction = "left" | "right";

export interface SlideAnimationConfig {
  Direction: Direction;
  duration: number;
  offset: number;
}

export interface CarouselState {
  currentIndex: number;
  isAnmating: boolean;
  totalSlides: number;
}
