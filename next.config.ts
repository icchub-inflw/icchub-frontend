import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /** @type {import('next').NextConfig} */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "archive.org",
      },
      
    ],
  },
};

export default nextConfig;
