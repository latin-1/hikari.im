import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://hikari.im",

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fredoka",
      cssVariable: "--font-fredoka",
      weights: ["400 700"],
      fallbacks: [],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Figtree",
      cssVariable: "--font-figtree",
      weights: ["400 700"],
      fallbacks: [],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Iosevka",
      cssVariable: "--font-iosevka",
      weights: ["400", "700"],
      fallbacks: [],
    },
  ],

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
