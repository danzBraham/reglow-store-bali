import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.reglowstorebali.com/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },
  output: "static",
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
  }),
});
