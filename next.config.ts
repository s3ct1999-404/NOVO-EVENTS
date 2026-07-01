import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash — primary image CDN
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // Pexels — secondary CDN with rich African/Black content
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      // Plus.unsplash CDN variant
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // Generous device sizes for full-width hero and gallery sections
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 400, 600, 800],
    // Cache optimised images for 1 year
    minimumCacheTTL: 31536000,
  },
  // Security headers appropriate for Uganda deployment
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
