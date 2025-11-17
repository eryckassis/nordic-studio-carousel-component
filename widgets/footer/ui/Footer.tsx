import { cn } from "@/shared/lib/cn";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "fixed bottom-0 left-0 w-full",
        "flex items-end justify-between",
        "p-8 z-(--z-navigation)",
        className
      )}
    >
      <p className="text-foreground uppercase text-sm font-semibold">
        Experiment 3
      </p>
      <p className="text-foreground uppercase text-sm font-semibold">
        Developed by NS
      </p>
    </footer>
  );
}
