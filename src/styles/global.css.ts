
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily: "Inter, Arial, sans-serif",
  backgroundColor: "#F8FAFC",
  color: "#0F172A",
});

globalStyle("button, input", {
  font: "inherit",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});