/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  i18n: {
    locales: ['ru', 'uk', 'en'],
    defaultLocale: 'ru',
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Kosyan-Sergey' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Kosyan-Sergey/' : '',
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https://api.example.com;"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          }
        ],
      },
    ];
  },
};

module.exports = withPWA(nextConfig); 