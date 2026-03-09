'use client';

import { Phone } from 'lucide-react';

export function StickyCallButton() {
  return (
    <a
      href="tel:+15614040669"
      className="fixed bottom-6 right-6 md:hidden z-40 w-14 h-14 bg-orange rounded-full shadow-lg flex items-center justify-center text-white hover:bg-orange/90 transition-all transform hover:scale-110 active:scale-95"
      aria-label="Call East Coast Boat Removal"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
