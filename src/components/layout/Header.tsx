
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/Logo';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/preturi-site', label: 'Preturi Site' },
  { href: '/promovare-online', label: 'Promovare Online' },
  { href: '/portofoliu', label: 'Portofoliu'},
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-8">
        <div className="flex-1">
          <Logo />
        </div>

        <div className="hidden md:flex items-center justify-end flex-1 gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
               <Link href="/contact" className={cn(
                    'transition-colors hover:text-primary',
                    pathname === "/contact" ? 'text-primary' : 'text-muted-foreground'
                  )}>Contact</Link>
            </nav>

            <div className="flex items-center">
                 <Button asChild variant="ghost" size="icon" className="hover:bg-transparent">
                    <Link href="https://wa.me/40758653550" target="_blank" rel="noopener noreferrer">
                        <img src="/whatsappIco.webp" alt="WhatsApp" className="h-8 w-8" />
                        <span className="sr-only">Contact WhatsApp</span>
                    </Link>
                </Button>
            </div>
        </div>

        <div className="md:hidden flex items-center">
           <Button asChild variant="ghost" size="icon" className="mr-2 hover:bg-transparent">
                <Link href="https://wa.me/40758653550" target="_blank" rel="noopener noreferrer">
                    <img src="/whatsappIco.webp" alt="WhatsApp" className="h-8 w-8" />
                    <span className="sr-only">Contact WhatsApp</span>
                </Link>
            </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="default" size="icon" className="bg-primary text-primary-foreground h-10 w-10 min-w-0 p-0 flex items-center justify-center">
                <Menu className="h-8 w-8 text-primary-foreground" strokeWidth={3} />
                <span className="sr-only">Deschide meniul</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby={undefined}>
              <SheetTitle className="sr-only">Meniu</SheetTitle>
              <SheetDescription id="sheet-desc" className="mb-4 mt-2 px-2 text-base leading-relaxed text-muted-foreground">Navigație principală și linkuri către paginile site-ului.</SheetDescription>
              <div className="flex flex-col gap-6">
                <Logo />
                <nav className="flex flex-col gap-4 mt-2">
                  {[...navLinks, { href: '/contact', label: 'Contact' }].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-foreground'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
