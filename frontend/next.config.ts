import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output only for production/CI builds
  ...(process.env.NODE_ENV === "production" && { output: "standalone" }),
};

export default nextConfig;
