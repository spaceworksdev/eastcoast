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
      <section id="how-it-works" className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-balance">
              How It Works
            </h2>
            <p className="text-xl text-gray-body">
              A simple, transparent process from start to finish
            </p>
          </div>

          {/* Desktop Process Flow */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8 relative">
              {/* Connection Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange to-transparent -z-10"></div>

              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-20 h-20 bg-orange rounded-full flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      Step {step.number}
                    </h3>
                    <h4 className="text-lg font-bold text-navy mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Process Flow */}
          <div className="md:hidden space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {step.number < steps.length && (
                      <div className="w-1 h-8 bg-orange mt-2"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-4">
                    <h3 className="text-lg font-bold text-navy mb-1">
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

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              onClick={() => setShowModal(true)}
              className="bg-orange hover:bg-orange/90 text-white font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Ready to Get Started? Call Now
            </Button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
