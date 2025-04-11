// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelServerless({
    webAnalytics: {
      enabled: false,
    },
    maxDuration: 8,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
