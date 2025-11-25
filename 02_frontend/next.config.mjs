/** @type {import('next').NextConfig} */
const API_HOST = process.env.API_HOST || 'http://localhost:3001';

const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_HOST: API_HOST,
  },

  reactStrictMode: true,
  
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'comencrypted-tbn0.gstatic.com',
      // เพิ่มโดเมนอื่นๆ ถ้ามี
    ],
  },
};

export default nextConfig;
