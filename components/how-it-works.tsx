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
            <div className="mb-8 grid grid-cols-3 gap-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative flex justify-center">
                    {idx > 0 && (
                      <div className="absolute left-0 right-1/2 top-10 h-px bg-[linear-gradient(90deg,rgb(0_166_153/0.08),rgb(0_166_153/0.55))]" />
                    )}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-1/2 right-0 top-10 h-px bg-[linear-gradient(90deg,rgb(0_166_153/0.55),rgb(0_166_153/0.08))]" />
                    )}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(0_166_153),rgb(64_200_188))] shadow-[0_18px_40px_rgba(0,166,153,0.24)] ring-8 ring-[rgb(248_250_252)]">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                        Step {step.number}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="soft-card rounded-[1.8rem] px-8 pb-8 pt-8 text-center">
                  <h3 className="font-display mb-3 text-2xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-gray-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative pl-22">
                  {idx < steps.length - 1 && (
                    <div className="absolute -bottom-8 left-8 top-16 w-px bg-[linear-gradient(180deg,rgb(0_166_153/0.55),rgb(0_166_153/0.08))]" />
                  )}
                  <div className="absolute left-0 top-0 flex w-16 flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(0_166_153),rgb(64_200_188))] ring-6 ring-[rgb(248_250_252)]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="soft-card rounded-[1.6rem] p-6">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">Step {step.number}</div>
                    <h3 className="font-display mb-1 text-lg font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="text-gray-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Button
              onClick={() => setShowModal(true)}
              className="h-12 rounded-full bg-teal px-8 font-bold text-white shadow-[0_18px_40px_rgba(0,166,153,0.24)] hover:bg-teal/90"
            >
              Request Your Quote
            </Button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
