import { cn } from "@/shared/lib/cn";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full",
        "flex items-start justify-between",
        "p-8 z-(--z-navigation)",
        className
      )}
    >
      <div className="w-8">
        <a
          href="#"
          className="text-foreground uppercase text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          Nordic Studio
        </a>
      </div>

      <div className="flex gap-3">
        <a
          href="#"
          className="text-foreground uppercase text-sm font-semibold hover:opacity-70 transition-opacity"
        >
          Home
        </a>
        <a
          href="#"
          className="text-foreground uppercase text-sm font-semibold hover:opacity-70 transition-opacity"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-foreground uppercase text-sm font-semibold hover:opacity-70 transition-opacity"
        >
          About Us
        </a>
      </div>
    </nav>
  );
}
