
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const footer = style({
  width: "100%",
  backgroundColor: vars.color.text,
  color: "#FFFFFF",
  padding: `${vars.spacing.xl} ${vars.spacing.lg}`,

  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.spacing.lg} ${vars.spacing.md}`,
    },
  },
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
});

export const topSection = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: vars.spacing.xl,

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const brandSection = style({
  maxWidth: "320px",
});

export const brandName = style({
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: vars.spacing.sm,
});

export const description = style({
  fontSize: "14px",
  lineHeight: 1.6,
  color: "#CBD5E1",
});

export const linksSection = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(120px, 1fr))",
  gap: vars.spacing.xl,

  "@media": {
    "(max-width: 600px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      width: "100%",
    },
  },
});

export const linkGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.sm,
});

export const groupTitle = style({
  fontSize: "14px",
  fontWeight: 600,
  marginBottom: vars.spacing.xs,
});

export const link = style({
  fontSize: "13px",
  color: "#CBD5E1",
  textDecoration: "none",
  transition: "color 0.2s ease",

  selectors: {
    "&:hover": {
      color: "#FFFFFF",
    },

    "&:focus-visible": {
      outline: "2px solid #FFFFFF",
      outlineOffset: "3px",
    },
  },
});

export const divider = style({
  border: 0,
  borderTop: "1px solid #334155",
  margin: `${vars.spacing.xl} 0`,
});

export const bottomSection = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: vars.spacing.md,
  flexWrap: "wrap",

  "@media": {
    "(max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const copyright = style({
  fontSize: "12px",
  color: "#94A3B8",
});
