/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
      },
    ],
    deviceSizes: [420, 768, 1024, 1200, 1920],
    imageSizes: [256],
  },
};

export default nextConfig;
