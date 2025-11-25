/** @type {import('next').NextConfig} */
const API_HOST = process.env.API_HOST || 'http://localhost:3001';

const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_HOST: API_HOST,
  },
};

export default nextConfig;

