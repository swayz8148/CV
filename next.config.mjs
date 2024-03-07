/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/https://swayz8148.github.io/',
  assetPrefix: '/https://swayz8148.github.io/',
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['api2.sololearn.com', 'media.licdn.com'],
  },
};

export default nextConfig;
