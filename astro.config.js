import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./build",
  build: {
    format: "file",
  },
  scopedStyleStrategy: "where",
});
