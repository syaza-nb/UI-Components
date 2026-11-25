
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

    fontFamily: "inherit",
    fontWeight: 600,
    textDecoration: "none",
    whiteSpace: "nowrap",

    cursor: "pointer",
    transition: "all 0.2s ease",

    selectors: {
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
        pointerEvents: "none",
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

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.border,
          },
        },
      },

      outline: {
        backgroundColor: "transparent",
        color: vars.color.primary,
        borderColor: vars.color.primary,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `${vars.color.primary}10`,
          },
        },
      },

      destructive: {
        backgroundColor: vars.color.danger,
        color: "#FFFFFF",

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: "#B91C1C",
          },
        },
      },

      ghost: {
        backgroundColor: "transparent",
        color: vars.color.text,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.surface,
          },
        },
      },
    },

    size: {
      sm: {
        minHeight: "32px",
        padding: "6px 12px",
        fontSize: "12px",
      },

      md: {
        minHeight: "40px",
        padding: "10px 16px",
        fontSize: "14px",
      },

      lg: {
        minHeight: "48px",
        padding: "12px 20px",
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
