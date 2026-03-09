'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingModal } from './booking-modal';

export function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative isolate flex min-h-160 w-full items-center overflow-hidden text-white">
        <Image
          src="/hero-boat-removal.jpg"
          alt="Professional boat removal service in progress"
          fill
          className="object-cover object-center"
          priority
          quality={75}
        />

        <div className="hero-wash absolute inset-0" />
        <div className="absolute inset-0 opacity-70 mix-blend-screen">
          <div className="absolute -left-24 -top-16 h-64 w-64 rounded-full bg-[rgb(0_166_153/0.18)] blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        </div>

        <div className="relative mx-auto flex min-h-160 w-full max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-4xl border border-white/12 bg-[rgb(11_49_92/0.26)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/86 backdrop-blur-md">
              <Check className="h-4 w-4 text-[rgb(64_200_188)]" />
              Licensed and insured across Florida
            </div>

            <div className="space-y-5">
              <h1 className="animate-fade-up font-display text-5xl font-bold leading-[0.95] text-balance sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.06s' }}>
                Boat removal,
                <span className="block text-gradient-accent">without the headache.</span>
              </h1>

              <p className="animate-fade-up max-w-2xl text-lg leading-8 text-white/82 md:text-xl" style={{ animationDelay: '0.12s' }}>
                Fast scheduling, clear pricing, and a professional crew that handles removal, recovery, and cleanup from start to finish.
              </p>
            </div>

            <div className="animate-fade-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.18s' }}>
              <Button
                onClick={() => setShowModal(true)}
                className="h-12 rounded-full bg-teal px-8 text-base font-bold text-white shadow-[0_18px_40px_rgba(0,166,153,0.32)] transition-all hover:-translate-y-0.5 hover:bg-teal/90"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                asChild
                className="h-12 rounded-full border border-white/24 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/16"
              >
                <a href="tel:+15614040669">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
