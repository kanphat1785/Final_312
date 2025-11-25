/** @type {import('next').NextConfig} */
const API_HOST = process.env.API_HOST || 'http://localhost:3001';

const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_HOST: API_HOST,
  },

  reactStrictMode: true,
  images: {
    domains: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfE4fnUPGLsOY-6HVFZIXXR_8W4yT0bUKkQ&s','https://comencrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8Q_RrELDLpBSuhHF9CEAWgSBo9mRQtSy-g&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrb93v-Kx_YJnZANXJcRhUSCsuH3HiOfoGQ&s'],
  },
};


export default nextConfig;

