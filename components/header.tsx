'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-navy">
              ECB
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-navy hover:text-orange transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/#how-it-works" className="text-navy hover:text-orange transition-colors text-sm font-medium">
              How It Works
            </Link>
            <Link href="/#service-areas" className="text-navy hover:text-orange transition-colors text-sm font-medium">
              Service Areas
            </Link>
            <Link href="/#contact" className="text-navy hover:text-orange transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* Right Side: Phone + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+15614040669"
              className="text-orange font-bold text-sm hover:text-orange/80 transition-colors"
            >
              (561) 404-0669
            </a>
            <Button
              asChild
              className="bg-orange hover:bg-orange/90 text-white font-bold px-6 py-2 rounded-md transition-colors"
            >
              <a href="#book">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-light py-4 space-y-4">
            <Link
              href="/#services"
              className="block px-4 py-2 text-navy hover:bg-gray-light transition-colors rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#how-it-works"
              className="block px-4 py-2 text-navy hover:bg-gray-light transition-colors rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#service-areas"
              className="block px-4 py-2 text-navy hover:bg-gray-light transition-colors rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <a
              href="tel:+15614040669"
              className="block px-4 py-2 text-orange font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              (561) 404-0669
            </a>
            <Button
              asChild
              className="w-full bg-orange hover:bg-orange/90 text-white font-bold px-6 py-3 rounded-md transition-colors mx-4"
            >
              <a href="#book">Get Quote</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
