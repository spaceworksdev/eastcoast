'use client';

import { Button } from '@/components/ui/button';
import { BookingModal } from './booking-modal';
import { useState } from 'react';
import { Phone, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Request a Quote',
    description: 'Call or text with photos. Get an upfront quote in less than 1 hour.',
    icon: Phone,
  },
  {
    number: 2,
    title: 'We Handle Logistics',
    description: 'We coordinate permits, towing, paperwork, and safe removal via licensed crew.',
    icon: Truck,
  },
  {
    number: 3,
    title: 'Clean Space',
    description: 'Your boat is gone. Area is cleared. Full documentation provided.',
    icon: CheckCircle,
  },
];

export function HowItWorks() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="how-it-works" className="surface-tint py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="section-kicker mb-5">Simple Process</div>
            <h2 className="section-title mb-5">
              How It Works
            </h2>
            <p className="section-copy">
              A simple, transparent process from start to finish
            </p>
          </div>

          <div className="hidden md:block">
            <div className="relative grid grid-cols-3 gap-8">
              <div className="absolute left-[16%] right-[16%] top-16 h-px bg-[linear-gradient(90deg,rgb(255_140_0/0.15),rgb(255_140_0),rgb(255_140_0/0.15))]" />

              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="soft-card relative rounded-[1.8rem] px-8 pb-8 pt-10 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(255_140_0),rgb(255_184_76))] shadow-[0_18px_40px_rgba(255,140,0,0.24)]">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange">
                      Step {step.number}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-body leading-relaxed">
                      {step.description}
                    </p>
                    {idx < steps.length - 1 && (
                      <div className="absolute right-[-1.5rem] top-14 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-orange shadow-[0_10px_30px_rgba(11,49,92,0.1)] lg:flex">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:hidden space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="soft-card flex gap-6 rounded-[1.6rem] p-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(255_140_0),rgb(255_184_76))]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {step.number < steps.length && (
                      <div className="mt-2 h-8 w-1 bg-orange"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange">Step {step.number}</div>
                    <h3 className="font-display text-lg font-bold text-navy mb-1">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-gray-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="soft-panel mt-14 rounded-4xl px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="font-display text-2xl font-bold text-navy">You send the photos. We handle the rest.</div>
                <p className="mt-2 max-w-2xl text-gray-body">
                  Clear quote, scheduled pickup, documented removal, and a final handoff that leaves the site clean.
                </p>
              </div>
              <Button
                onClick={() => setShowModal(true)}
                className="h-12 rounded-full bg-orange px-8 font-bold text-white shadow-[0_18px_40px_rgba(255,140,0,0.24)] hover:bg-orange/90"
              >
                Request Your Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
