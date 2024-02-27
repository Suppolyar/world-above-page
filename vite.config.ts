import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/world-above-page/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
  ],
});
