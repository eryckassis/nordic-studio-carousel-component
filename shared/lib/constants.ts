export const BREAKPOINTS = {
  mobile: 900,
  desktop: 1000,
} as const;

export const Z_INDEX = {
  base: 0,
  navigation: 2,
  titles: 2,
  controls: 10,
} as const;

export const SLIDE_OFFSETS = {
  mobile: 100,
  desktop: 500,
} as const;

export const ANIMATION_DURATIONS = {
  slideTransition: 1500,
  textBlurIn: 2000,
  textBlurOut: 2500,
} as const;

export const SVG_FILTERS = {
  blurMatrix: "blur-matrix",
} as const;
