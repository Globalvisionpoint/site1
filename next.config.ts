import type {NextConfig} from 'next';

export const headers = async () => [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        // CSP securizat - păstrez 'unsafe-inline' pentru Next.js și Tailwind
        value: "default-src 'self' 'unsafe-inline'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' http://localhost:3000;"
      },
      // CORS strict: permite doar domeniul principal
      {
        key: 'Access-Control-Allow-Origin',
        value: 'http://localhost:3000'
      },
      {
        key: 'Permissions-Policy',
        value: 'geolocation=(), microphone=(), camera=(), payment=()'
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      }
    ]
  }
];

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    modern: true,
    polyfillsOptimization: true,
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
  experimental: {
    // allowedDevOrigins: [
    //     'https://*.cluster-c3a7z3wnwzapkx3rfr5kz62dac.cloudworkstations.dev'
    // ]
  },
  webpack: (config, { isServer }) => {
    // Ignoră avertismentul specific din 'handlebars' care nu poate fi rezolvat
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      /require.extensions/,
    ];

    // Previne eroarea "module not found" pentru pachetele opționale de pe client
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        '@opentelemetry/exporter-jaeger': false,
        'path': false, // Un alt pachet care poate cauza probleme
      };
    }

    return config;
  },
  headers,
};

export default nextConfig;
