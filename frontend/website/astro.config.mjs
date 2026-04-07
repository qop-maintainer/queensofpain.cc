// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://queensofpain.cc",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["astro-leaflet > leaflet"],
    },
  },
  security: {
    csp: {
      directives: [
        "base-uri 'self'",
        "default-src 'none'",
        "img-src 'self' data:",
        "font-src 'self' data:",
        "connect-src 'self'",
        "worker-src 'self'",
        "form-action 'self'",
        "object-src 'none'",
        "frame-src https:",
        "media-src https:",
        "upgrade-insecure-requests",
        "manifest-src 'self'",
      ],
    },
  },
});
