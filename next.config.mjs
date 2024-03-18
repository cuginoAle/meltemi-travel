/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    deviceSizes: [420, 768, 1024, 1200, 1920],
    imageSizes: [256],
  },
};

export default nextConfig;
