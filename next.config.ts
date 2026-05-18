import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-sanity", "sanity", "@sanity/ui", "@sanity/icons"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  webpack(config) {
    // Sanity v5 uses `import { useEffectEvent } from 'react'`.
    // Webpack's strict named-export check fails even though React 19 CJS
    // exports it, because webpack can't statically follow the conditional
    // require in react/index.js. Disabling the check for sanity packages
    // lets the build succeed; the symbol resolves correctly at runtime.
    config.module.rules.push({
      test: /node_modules[\\/](sanity|@sanity)[\\/].*\.(js|mjs|cjs)$/,
      resolve: { fullySpecified: false },
      parser: { importExportsPresence: false },
    });
    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
