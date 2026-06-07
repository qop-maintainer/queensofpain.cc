// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://queensofpain.cc",
  markdown: {
    processor: satteri({
      features: { directive: true },
    }),
  },
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
        "img-src 'self' data: maps.gstatic.com *.google.com *.googleapis.com *.ggpht.com",
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
