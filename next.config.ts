import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // needed to prevent long build times
    optimizePackageImports: [
      "@chtc/web-components",
      "@mui/material",
      "@mui/system",
      "@mui/icons-material",
    ],
  },
};

export default nextConfig;
