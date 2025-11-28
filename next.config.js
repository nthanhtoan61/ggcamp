/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Bỏ qua lỗi TypeScript khi build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Bỏ qua lỗi ESLint khi build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Nếu bạn build từ node_modules lỗi syntax, bật dòng dưới:
  // transpilePackages: [],
};

module.exports = nextConfig;