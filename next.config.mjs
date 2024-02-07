/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  },

  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
