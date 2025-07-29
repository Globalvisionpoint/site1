import localFont from 'next/font/local';

export const inter = localFont({
  variable: '--font-inter',
  src: [
    {
      path: '../fonts/inter-v19-latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/inter-v19-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/inter-v19-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/inter-v19-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const spaceGrotesk = localFont({
  variable: '--font-space-grotesk',
  src: [
    {
      path: '../fonts/space-grotesk-v21-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/space-grotesk-v21-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/space-grotesk-v21-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
