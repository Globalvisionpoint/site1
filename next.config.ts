import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    // Forțează eliminarea codului JavaScript vechi și alte optimizări
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';
    const scriptSrc = [
      "'self'",
      "'unsafe-inline'",
      'https://www.googletagmanager.com',
      ...(isDev ? ["'unsafe-eval'"] : []),
    ].join(' ');
    const connectSrc = [
      "'self'",
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      ...(isDev ? ['ws:', 'http://localhost:*', 'http://0.0.0.0:*'] : []),
    ].join(' ');
    const csp = [
      "default-src 'self';",
      `script-src ${scriptSrc};`,
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: https:;",
      "font-src 'self';",
      `connect-src ${connectSrc};`,
      "frame-src 'self' https://www.googletagmanager.com;",
      "base-uri 'self'; form-action 'self';",
    ].join(' ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=(), payment=()' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
