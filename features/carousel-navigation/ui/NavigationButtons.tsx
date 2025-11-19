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
    <>
      <Button
        variant="outline"
        size="xl"
        onClick={onPrevClick}
        disabled={disabled}
        aria-label="Slide anterior"
        className={cn(
          "group absolute left-32 top-1/2 -translate-y-1/2 z-10",
          "max-lg:left-1/4 max-lg:top-[65%]",
          className
        )}
      >
        <Icon
          name="chevron-left"
          className="w-15 h-15 max-lg:w-15 max-lg:h-15"
        />
      </Button>

      <Button
        variant="outline"
        size="xl"
        onClick={onNextClick}
        disabled={disabled}
        aria-label="Próximo slide"
        className={cn(
          "group absolute right-32 top-1/2 -translate-y-1/2 z-10",
          "max-lg:right-1/4 max-lg:top-[65%]",
          className
        )}
      >
        <Icon
          name="chevron-right"
          className="w-15 h-15 max-lg:w-15 max-lg:h-15"
        />
      </Button>
    </>
  );
}
