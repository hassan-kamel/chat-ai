import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // https://randomuser.me
  images: {
    domains: ['randomuser.me'],
  },
};

export default nextConfig;
