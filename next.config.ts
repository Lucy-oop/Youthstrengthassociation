import type { NextConfig } from "next";

/**
 * Sub-path for GitHub Pages project sites (https://<user>.github.io/<repo>/).
 * Set by the deploy workflow; empty for local dev and custom domains.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (writes to ./out).
  output: "export",
  basePath,
  // GitHub Pages serves /about/ → about/index.html.
  trailingSlash: true,
  images: {
    // No image optimization server on GitHub Pages; photos are pre-optimized in public/photos.
    unoptimized: true,
  },
  // Cache Components / Partial Prefetching need a server (PPR) and are not
  // supported with `output: "export"`, so they stay off for GitHub Pages.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
