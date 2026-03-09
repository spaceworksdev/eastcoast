'use client';

import { Button } from '@/components/ui/button';
import { BookingModal } from './booking-modal';
import { useState } from 'react';

export function FinalCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="contact" className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-[rgb(11_49_92)]" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[10%] top-0 h-96 w-96 rounded-full bg-[rgb(255_140_0/0.34)] blur-3xl"></div>
          <div className="absolute bottom-[-8rem] right-[8%] h-96 w-96 rounded-full bg-white/12 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="soft-panel rounded-[2.2rem] border-white/10 bg-[rgb(255_255_255/0.08)] px-6 py-10 text-center sm:px-10 md:px-14">
            <div className="mx-auto mb-5 inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(255_209_143)]">
              Fast Scheduling. Clear Pricing. Clean Finish.
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
              Ready to clear the boat and move on?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/74 md:text-xl">
              Send a few details and get a quote from a crew that knows marine removals, not a generic junk-hauler.
            </p>

            <div className="my-8 grid gap-4 md:grid-cols-3">
              {[
                'Transparent quote before dispatch',
                'Licensed team with insured removal',
                'Emergency service for urgent recovery',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/12 bg-[rgb(255_255_255/0.08)] px-4 py-4 text-sm font-medium text-white/88">
                  {item}
                </div>
              ))}
            </div>

            <div className="mb-8 space-y-4">
              <div className="font-display text-3xl font-bold text-[rgb(255_198_116)]">
                Get Your Free Estimate Today
              </div>
              <a
                href="tel:+15614040669"
                className="block text-2xl font-bold text-white transition-colors hover:text-[rgb(255_209_143)]"
              >
                (561) 404-0669
              </a>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                onClick={() => setShowModal(true)}
                className="h-12 rounded-full bg-white px-8 text-lg font-bold text-navy transition-colors hover:bg-[rgb(247_243_236)]"
              >
                Get Instant Quote
              </Button>
              <Button
                asChild
                className="h-12 rounded-full bg-orange px-8 text-lg font-bold text-white transition-colors hover:bg-orange/90"
              >
                <a href="tel:+15614040669">Call Now</a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/58">
              Available 24/7 for emergency removal | Licensed • Insured • Professional
            </p>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
