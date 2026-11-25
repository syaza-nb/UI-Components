
import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const labelStyles = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: vars.spacing.xs,
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    color: vars.color.text,
    lineHeight: 1.5,
    cursor: "default",
  },

  variants: {
    size: {
      sm: {
        fontSize: "12px",
      },

      md: {
        fontSize: "14px",
      },

      lg: {
        fontSize: "16px",
      },
    },

    disabled: {
      true: {
        color: vars.color.muted,
        opacity: 0.5,
        cursor: "not-allowed",
      },

      false: {},
    },

    error: {
      true: {
        color: vars.color.danger,
      },

      false: {},
    },
  },

  defaultVariants: {
    size: "md",
    disabled: false,
    error: false,
  },
});

export const requiredIndicator = style({
  color: "#DC2626",
  fontWeight: 700,
  display: "inline-block",
});

export const optionalIndicator = style({
  color: "#64748B",
  fontSize: "12px",
  fontWeight: 400,
  marginLeft: "4px",
  display: "inline-block",
});
