import { Button } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { cn } from "@/shared/lib/cn";

interface NavigationButtonsProps {
  onPrevClick: () => void;

  onNextClick: () => void;

  disabled?: boolean;

  className?: string;
}

export function NavigationButtons({
  onPrevClick,
  onNextClick,
  disabled = false,
  className,
}: NavigationButtonsProps) {
  return (
    <div
      className={cn(
        // Layout
        "absolute inset-x-0 top-1/2 -translate-y-1/2",
        "flex items-center justify-between",
        "px-8 z-[var(--z-controls)]",
        // Responsivo
        "max-md:top-[65%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-1/2",
        "max-md:justify-center max-md:gap-4",
        className
      )}
      role="group"
      aria-label="Controles do carrossel"
    >
      <Button
        variant="outline"
        size="lg"
        onClick={onPrevClick}
        disabled={disabled}
        aria-label="Slide anterior"
        className="group max-md:p-4"
      >
        <Icon
          name="chevron-left"
          className={cn(
            "w-6 h-6 transition-colors",
            "group-hover:fill-black",
            "max-md:w-4 max-md:h-4"
          )}
        />
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={onNextClick}
        disabled={disabled}
        aria-label="Próximo slide"
        className="group max-md:p-4"
      >
        <Icon
          name="chevron-right"
          className={cn(
            "w-6 h-6 transition-colors",
            "group-hover:fill-black",
            "max-md:w-4 max-md:h-4"
          )}
        />
      </Button>
    </div>
  );
}
