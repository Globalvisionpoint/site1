import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} prefetch={false}>
      <img src="/web-app-manifest-512x512.webp" alt="Logo" className="h-7 w-7" />
      <span className="text-lg font-bold font-headline text-white whitespace-nowrap">
        Digital-Online.ro
      </span>
    </Link>
  );
}
