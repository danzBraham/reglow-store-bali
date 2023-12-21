import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()],
  i18n: {
    defaultLocale: "id",
    locales: ["id"]
  },
  output: "server",
  adapter: vercel()
});