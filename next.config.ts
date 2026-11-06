import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export on Cloudflare Pages
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Optimize for production builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;