
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const header = style({
  width: "100%",
  backgroundColor: vars.color.background,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const container = style({
  width: "100%",
  maxWidth: "1280px",
  minHeight: "72px",
  margin: "0 auto",
  padding: "0 32px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media": {
    "(max-width: 768px)": {
      minHeight: "64px",
      padding: "0 20px",
    },
  },
});

export const brand = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  color: vars.color.text,
  fontSize: "22px",
  fontWeight: 700,
  textDecoration: "none",
  whiteSpace: "nowrap",
});

export const desktopNavigation = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.xl,

  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
});

export const navigationList = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.lg,
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const navigationLink = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 0",
  color: vars.color.muted,
  fontSize: "14px",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s ease",

  selectors: {
    "&:hover": {
      color: vars.color.primary,
    },
  },
});

export const activeLink = style({
  color: vars.color.primary,
  fontWeight: 600,
});

export const ctaButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 18px",
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.primary,
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease",

  selectors: {
    "&:hover": {
      backgroundColor: vars.color.primaryHover,
    },
  },
});

export const mobileActions = style({
  display: "none",

  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      gap: vars.spacing.sm,
    },
  },
});

export const menuButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  padding: 0,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  cursor: "pointer",
  fontSize: "22px",

  selectors: {
    "&:hover": {
      backgroundColor: vars.color.surface,
    },
  },
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 100,
  backgroundColor: "rgba(15, 23, 42, 0.45)",
});

export const mobileMenu = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 101,
  width: "min(320px, 85vw)",
  padding: "32px 24px",
  backgroundColor: vars.color.background,
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
  outline: "none",
});

export const mobileMenuHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: vars.spacing.xl,
});

export const mobileTitle = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.text,
});

export const closeButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  border: "none",
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.surface,
  color: vars.color.text,
  cursor: "pointer",
  fontSize: "20px",
});

export const mobileNavigation = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.md,
});

export const mobileNavigationLink = style({
  display: "block",
  padding: "12px 14px",
  borderRadius: vars.radius.md,
  color: vars.color.text,
  fontSize: "15px",
  textDecoration: "none",

  selectors: {
    "&:hover": {
      backgroundColor: vars.color.surface,
      color: vars.color.primary,
    },
  },
});

export const mobileCta = style({
  display: "block",
  marginTop: vars.spacing.lg,
  textAlign: "center",
});
