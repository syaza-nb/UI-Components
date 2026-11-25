
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
  ],

  build: {
    lib: {
      entry: "src/index.ts",
      name: "UIComponents",
      formats: ["es", "cjs"],
      fileName: (format) =>
        format === "es" ? "index.js" : "index.cjs",
      cssFileName: "style",
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
      ],
    },
  },
});
