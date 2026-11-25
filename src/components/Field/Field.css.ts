
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";

export const fieldContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.xs,
  width: "100%",
});
   
export const fieldLabel = style({
  display: "inline-flex",
  alignItems: "center", 
  gap: "4px",
  fontSize: "14px",
  fontWeight: 600,
  color: vars.color.text,
});

export const requiredIndicator = style({
  color: vars.color.danger,
});

export const inputStyles = recipe({
  base: {
    width: "100%",
    border: `1px solid ${vars.color.border}`,
    borderRadius: vars.radius.md,
    backgroundColor: vars.color.background,
    color: vars.color.text,
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.2s ease",

    selectors: {
      "&::placeholder": {
        color: vars.color.muted,
      },

      "&:focus": {
        borderColor: vars.color.primary,
        boxShadow: `0 0 0 3px ${vars.color.primary}20`,
      },

      "&:disabled": {
        backgroundColor: vars.color.surface,
        color: vars.color.muted,
        cursor: "not-allowed",
        opacity: 0.7,
      },
    },
  },

  variants: {
    inputSize: {
      sm: {
        height: "34px",
        padding: "3px 5px",
        fontSize: "12px",
      },

      md: {
        height: "42px",
        padding: "10px 12px",
        fontSize: "14px",
      },

      lg: {
        height: "50px",
        padding: "12px 16px",
        fontSize: "16px",
      },
    },

    invalid: {
      true: {
        borderColor: vars.color.danger,

        selectors: {
          "&:focus": {
            borderColor: vars.color.danger,
            boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.12)",
          },
        },
      },

      false: {},
    },
  },

  defaultVariants: {
    inputSize: "md",
    invalid: false,
  },
});

export const helperText = style({
  fontSize: "12px",
  color: vars.color.muted,
  lineHeight: 1.5,
});

export const errorText = style({
  fontSize: "12px",
  color: vars.color.danger,
  lineHeight: 1.5,
});

export const fieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.xs,
});
