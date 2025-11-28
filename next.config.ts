import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cấu hình static export cho Netlify
  output: 'export',
  
  // React strict mode
  reactStrictMode: false,
  
  // Bỏ qua lỗi TypeScript khi build (nếu cần)
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Bỏ qua lỗi ESLint khi build (nếu cần)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Cấu hình images để cho phép external hosts
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.provenexpert.com',
        pathname: '/**',
      },
    ],
    // Với static export, cần unoptimized
    unoptimized: true,
  },
  
  // Cấu hình để serve static files từ public folder
  // Mặc định Next.js tự động serve các file trong public/
  // Tất cả các file trong public/ có thể truy cập trực tiếp từ root URL
  
  // Ví dụ: public/media/css/style.css → /media/css/style.css
  // Ví dụ: public/templates/js/app.js → /templates/js/app.js
  
  // Lưu ý: Headers phải được cấu hình trong netlify.toml
  // Vì với static export, headers() trong next.config.ts không hoạt động
};

export default nextConfig;
