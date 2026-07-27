import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "4xl" | "5xl" | "6xl" | "7xl";
}

const maxWidthClasses = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function SectionContainer({
  children,
  className,
  maxWidth = "7xl",
}: SectionContainerProps) {
  return (
    <div
      className={clsx(
        "relative z-10 mx-auto px-6",
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
}