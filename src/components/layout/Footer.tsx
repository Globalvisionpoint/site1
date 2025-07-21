'use client';

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  // This hook is used to prevent a hydration mismatch error, which can occur
  // in the rare case that the server and client render the component across
  // a year change.
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary/50 border-t border-border/40">
      <div className="px-8 py-8">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            &copy; {year} Digital-Online.ro. Toate drepturile rezervate.
          </p>
          <nav className="flex gap-x-6 gap-y-2 flex-wrap justify-center">
            <Link href="/termeni-si-conditii" className="hover:text-primary transition-colors">
              Termeni și Condiții
            </Link>
            <Link href="/politica-de-confidentialitate" className="hover:text-primary transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link href="/politica-cookie" className="hover:text-primary transition-colors">
              Politica Cookie
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
