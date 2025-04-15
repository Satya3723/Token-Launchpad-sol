/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hatrabbits.com'],
  },
  output: 'export', // 👈 required for static export (replaces next export)
};

export default nextConfig;
