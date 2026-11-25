
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import * as styles from "./Label.css";

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  size?: "sm" | "md" | "lg";
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(
  (
    {
      children,
      size = "md",
      required = false,
      optional = false,
      disabled = false,
      error = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={`${styles.labelStyles({
          size,
          disabled,
          error,
        })} ${className ?? ""}`}
        {...props}
      >
        {children}

        {required && (
          <span className={styles.requiredIndicator} aria-hidden="true">
            *
          </span>
        )}

        {optional && (
          <span className={styles.optionalIndicator}>
            (Optional)
          </span>
        )}
      </LabelPrimitive.Root>
    );
  }
);

Label.displayName = "Label";

export default Label;
