import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { HOP_EASE, HOP_EASE_NAME } from "../model/animation-config";

let isGsapInitialized = false;

export function initializeGsap(): void {
  if (isGsapInitialized) return;
  gsap.registerPlugin(CustomEase);

  CustomEase.create(HOP_EASE_NAME, HOP_EASE);

  isGsapInitialized = true;
}

export function killAnimations(target: gsap.TweenTarget): void {
  gsap.killTweensOf(target);
}

export function setInstant(
  target: gsap.TweenTarget,
  vars: gsap.TweenVars
): void {
  gsap.set(target, vars);
}

export function animateFrom(
  target: gsap.TweenTarget,
  vars: gsap.TweenVars
): gsap.core.Tween {
  return gsap.from(target, vars);
}

export function animateTo(
  target: gsap.TweenTarget,
  vars: gsap.TweenVars
): gsap.core.Tween {
  return gsap.to(target, vars);
}

export function animateFromTo(
  target: gsap.TweenTarget,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
): gsap.core.Tween {
  return gsap.fromTo(target, fromVars, toVars);
}

export function createTimeline(config?: gsap.TimelineVars): gsap.core.Timeline {
  return gsap.timeline(config);
}

export function clearInlineStyles(target: gsap.TweenTarget): void {
  gsap.set(target, { clearProps: "all" });
}
