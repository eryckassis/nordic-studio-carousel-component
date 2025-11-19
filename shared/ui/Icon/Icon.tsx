import { cn } from "@/shared/lib/cn";
import type { ReactElement } from "react";

export type IconName = "chevron-left" | "chevron-right";

interface IconProps {
  name: IconName;
  className?: string;
  "aria-label"?: string;
}

export function Icon({ name, className, "aria-label": ariaLabel }: IconProps) {
  const icons: Record<IconName, ReactElement> = {
    "chevron-left": (
      <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    ),
    "chevron-right": (
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      className={cn("w-6 h-6", "transition-colors", className)}
      aria-label={ariaLabel}
      role="img"
    >
      {icons[name]}
    </svg>
  );
}
