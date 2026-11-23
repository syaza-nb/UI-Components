
import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#4F46E5",
    primaryHover: "#4338CA",
    secondary: "#64748B",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#0F172A",
    muted: "#64748B",
    border: "#E2E8F0",
    danger: "#DC2626",
    success: "#16A34A",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "999px",
  },
});