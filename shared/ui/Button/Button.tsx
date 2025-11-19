import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "ghost" | "solid";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "outline", size = "md", children, ...props },
    ref
  ) => {
    const variants = {
      outline:
        "border border-white/75 border-dashed bg-transparent hover:bg-white hover:text-black",
      ghost: "bg-transparent hover:bg-white/10",
      solid: "bg-white text-black hover:bg-white/90",
    };

    const sizes = {
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
      xl: "p-8",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded transition-all duration-200",

          "disabled:opacity-50 disabled:cursor-not-allowed",

          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",

          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
