import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export on Cloudflare Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
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
  // Enable SWC minification for better performance
  swcMinify: true,
  // Reduce bundle size
  experimental: {
    optimizePackageImports: ['posthog-js', 'posthog-js/react'],
  },
};

export default nextConfig;