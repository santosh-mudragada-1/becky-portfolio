import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Enforce strong production hygiene without blocking local iteration.
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    // Optimize barrel imports for the icon / animation libraries.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add trusted external image hosts here (e.g. a CMS or CDN).
      // { protocol: "https", hostname: "images.example.com" },
    ],
  },
};

export default nextConfig;
