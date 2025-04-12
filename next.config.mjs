/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hatrabbits.com'],
  },
  output: 'export', // Add this line for static export
  basePath: '/token-launchpad-solana', // Adjust this to your repository name
  assetPrefix: '/token-launchpad-solana/', // Adjust this to your repository name
};

export default nextConfig;