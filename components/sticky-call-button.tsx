'use client';

import { Phone } from 'lucide-react';

export function StickyCallButton() {
  return (
    <a
      href="tel:+15614040669"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-orange px-5 py-3 text-white shadow-[0_18px_45px_rgba(255,140,0,0.34)] transition-all hover:scale-[1.03] hover:bg-orange/90 active:scale-95 md:hidden"
      aria-label="Call East Coast Boat Removal"
    >
      <Phone className="w-6 h-6" />
      <span className="text-sm font-bold tracking-wide">Call Now</span>
    </a>
  );
}
