import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80],
  },
};

export default nextConfig;
