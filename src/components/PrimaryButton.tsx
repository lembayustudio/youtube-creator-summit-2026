import type { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface PrimaryButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <a
      {...props}
      className={clsx(
        "inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition-all duration-200",
        "hover:bg-green-400 hover:scale-[1.02]",
        "focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-950",
        className
      )}
    >
      {children}
    </a>
  );
}