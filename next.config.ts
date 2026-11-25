import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: import.meta.dirname,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;