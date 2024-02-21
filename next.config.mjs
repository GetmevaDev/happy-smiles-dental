/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    unoptimized: true
  },
  reactStrictMode: true,
  output: 'export',

  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
