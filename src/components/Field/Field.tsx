
import { useId, type InputHTMLAttributes } from "react";
import * as RadixLabel from "@radix-ui/react-label";

import {
  fieldContainer,
  fieldLabel,
  requiredIndicator,
  inputStyles,
  helperText as helperTextStyle,
  errorText,
  fieldWrapper,
} from "./Field.css";

export interface FieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  helperText?: string;
  error?: string;
  inputSize?: "sm" | "md" | "lg";
}

export function Field({
  label,
  helperText,
  error,
  inputSize = "md",
  required = false,
  disabled = false,
  id,
  className,
  "aria-describedby": ariaDescribedBy,
  ...inputProps
}: FieldProps) {
  const generatedId = useId();

  const inputId = id || generatedId;

  const descriptionId = `${inputId}-description`;

  const describedBy = [
    ariaDescribedBy,
    helperText || error ? descriptionId : undefined,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className={fieldContainer}>
      <div className={fieldWrapper}>
        <RadixLabel.Root
          htmlFor={inputId}
          className={fieldLabel}
        >
          {label}

          {required && (
            <span className={requiredIndicator}>
              *
            </span>
          )}
        </RadixLabel.Root>

        <input
          id={inputId}
          className={[
            inputStyles({
              inputSize,
              invalid: Boolean(error),
            }),
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...inputProps}
        />

        {(error || helperText) && (
          <span
            id={descriptionId}
            className={error ? errorText : helperTextStyle}
            role={error ? "alert" : undefined}
          >
            {error || helperText}
          </span>
        )}
      </div>
    </div>
  );
}
