import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['127.0.0.1'],
    unoptimized: true,
  },
};

export default nextConfig;