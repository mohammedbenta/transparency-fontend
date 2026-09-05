import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "standalone",
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
