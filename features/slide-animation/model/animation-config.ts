import { ANIMATION_DURATIONS, SLIDE_OFFSETS } from "@/shared/lib/constants";

export const HOP_EASE =
  "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1";

export const HOP_EASE_NAME = "hop";

export const SLIDE_ANIMATION_CONFIG = {
  duration: ANIMATION_DURATIONS.slideTransition / 1000,
  ease: HOP_EASE_NAME,
  offsetDesktop: SLIDE_OFFSETS.desktop,
  offsetMobile: SLIDE_OFFSETS.mobile,
} as const;

export const TEXT_BLUR_IN_CONFIG = {
  duration: ANIMATION_DURATIONS.textBlurIn / 1000,
  ease: "power3.out",
  filter: "blur(0px)",
  opacity: 1,
} as const;

export const TEXT_BLUR_OUT_CONFIG = {
  duration: ANIMATION_DURATIONS.textBlurOut / 1000,
  ease: "power1.out",
  filter: "blur(75px)",
  opacity: 0,
} as const;

export const CLIP_PATH_CONFIG = {
  left: {
    from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  right: {
    from: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
} as const;
