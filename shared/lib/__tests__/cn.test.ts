import { describe, it, expect } from "vitest";
import { cn } from "../cn";

describe("cn utility function", () => {
  it("should merge multiple class strings", () => {
    const result = cn("text-red-500", "ng-blue-200", "p-4");

    expect(result).toBe("text-red-500 bg-blue-200 p-4");
  });

  it("should handle Tailwind class conflicts corrently", () => {
    const result = cn("p-2", "p-4");

    expect(result).toBe("p-4");
  });

  it("should resolve multiple Tailwind conflicts", () => {
    const result = cn(
      "text-sm text-lg", // text-lg vence
      "bg-red-500 bg-blue-500", // bg-blue-500 vence
      "px-2 px-4" // px-4 vence
    );

    expect(result).toBe("text-lg bg-blue-500 px-4");
  });

  it("should handle conditional classes", () => {
    const isActive = true;
    const isDisabled = false;

    const result = cn(
      "base-class",
      isActive && "active-class",
      isDisabled && "disabled-class",
      "another-class"
    );

    expect(result).toBe("base-class active-class another-class");
  });

  it("should handle object syntax", () => {
    const result = cn({
      "text-red-500": true,
      "bg-blue-200": false,
      "p-4": true,
    });

    expect(result).toBe("text-red-500 p-4");
  });

  it("should handle arrays of classes", () => {
    const baseClasses = ["flex", "items-center"];
    const additionalClasses = ["gap-2", "p-4"];
    const result = cn(baseClasses, additionalClasses);
    expect(result).toBe("flex items-center gap-2 p-4");
  });
});
