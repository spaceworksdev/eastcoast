'use client';

import { Button } from '@/components/ui/button';
import { BookingModal } from './booking-modal';
import { useState } from 'react';

export function FinalCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="contact" className="bg-[rgb(11_49_92)] py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgb(150_228_222)]">
            Fast Scheduling. Clear Pricing. Clean Finish.
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
            Ready to clear the boat and move on?
          </h2>



          <a
            href="tel:+15614040669"
            className="mt-8 block font-display text-3xl font-bold text-[rgb(120_218_210)] transition-colors hover:text-[rgb(150_228_222)]"
          >
            (561) 404-0669
          </a>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => setShowModal(true)}
              className="h-12 rounded-full bg-teal px-8 text-lg font-bold text-white transition-colors hover:bg-teal/90"
            >
              Get Instant Quote
            </Button>
            <Button
              asChild
              className="h-12 rounded-full border border-white/18 bg-transparent px-8 text-lg font-bold text-white transition-colors hover:bg-white/10"
            >
              <a href="tel:+15614040669">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
