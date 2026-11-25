
import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

import { buttonStyles } from "./Button.css";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "destructive"
    | "ghost";

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;

  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  asChild = false,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  const combinedClassName = [
    buttonStyles({
      variant,
      size,
      fullWidth,
    }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={combinedClassName}
      {...(!asChild ? { type } : {})}
      {...props}
    >
      {children}
    </Component>
  );
}
