/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['api2.sololearn.com', 'media.licdn.com'],
  },
};

export default nextConfig;
