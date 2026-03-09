'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Results', href: '/#results' },
  { label: 'Coverage', href: '/#service-areas' },
  { label: 'Contact', href: '/#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/70 bg-white/88 shadow-[0_18px_60px_rgba(11,49,92,0.12)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-[rgb(11_49_92/0.45)] via-[rgb(11_49_92/0.18)] to-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/eastcoast.png"
              alt="East Coast Boat Removal"
              width={200}
              height={52}
              className={cn(
                'h-auto w-[160px] object-contain transition-all sm:w-[200px]',
                isScrolled ? '' : 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isScrolled ? 'text-navy hover:text-teal' : 'text-white/88 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <a
              href="tel:+15614040669"
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                isScrolled
                  ? 'bg-[rgb(0_166_153/0.08)] text-teal hover:bg-[rgb(0_166_153/0.14)]'
                  : 'bg-white/10 text-white hover:bg-white/16'
              )}
            >
              (561) 404-0669
            </a>
            <Button
              asChild
              className="rounded-full bg-teal px-6 py-2 font-bold text-white shadow-[0_16px_32px_rgba(0,166,153,0.3)] transition-all hover:-translate-y-0.5 hover:bg-teal/90"
            >
              <a href="/#contact">Get Quote</a>
            </Button>
          </div>

          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn('h-6 w-6', isScrolled ? 'text-navy' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', isScrolled ? 'text-navy' : 'text-white')} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mb-4 rounded-3xl border border-white/60 bg-white/92 p-4 shadow-[0_18px_60px_rgba(11,49,92,0.14)] backdrop-blur-xl md:hidden">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-navy transition-colors hover:bg-[rgb(11_49_92/0.04)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:+15614040669"
              className="mt-4 block rounded-2xl bg-[rgb(0_166_153/0.08)] px-4 py-3 font-bold text-teal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              (561) 404-0669
            </a>
            <Button
              asChild
              className="mt-3 w-full rounded-2xl bg-teal px-6 py-3 font-bold text-white transition-colors hover:bg-teal/90"
            >
              <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Quote
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
