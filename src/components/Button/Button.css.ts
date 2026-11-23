
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";

export const buttonStyles = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "1px solid transparent",
    borderRadius: vars.radius.md,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",

    selectors: {
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },

      "&:focus-visible": {
        outline: `3px solid ${vars.color.primary}40`,
        outlineOffset: "2px",
      },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: "#FFFFFF",

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.primaryHover,
          },
        },
      },

      secondary: {
        backgroundColor: vars.color.surface,
        color: vars.color.text,
        borderColor: vars.color.border,
      },

      outline: {
        backgroundColor: "transparent",
        color: vars.color.primary,
        borderColor: vars.color.primary,
      },

      destructive: {
        backgroundColor: vars.color.danger,
        color: "#FFFFFF",
      },

      ghost: {
        backgroundColor: "transparent",
        color: vars.color.text,
      },
    },

    size: {
      sm: {
        padding: "6px 12px",
        fontSize: "12px",
      },

      md: {
        padding: "10px 16px",
        fontSize: "14px",
      },

      lg: {
        padding: "14px 20px",
        fontSize: "16px",
      },
    },

    fullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "auto",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
});