'use client';

import { Card } from '@/components/ui/card';
import { Anchor, ArrowRight, Phone, Trash2, Waves, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookingModal } from './booking-modal';

const services = [
  {
    id: 1,
    title: 'Junk Boat Removal',
    description: 'For unwanted boats in any condition. Quick, affordable removal with proper disposal.',
    icon: Trash2,
    features: ['Backyard or marina pickup', 'Disposal and haul-away included', 'Best for aging or abandoned vessels'],
  },
  {
    id: 2,
    title: 'Salvage & Recovery',
    description: 'Damaged or partially submerged vessels. Fast, insured service for complex recoveries.',
    icon: Anchor,
    features: ['Lift coordination and transport', 'Insurance-ready documentation', 'Experienced marine recovery crew'],
  },
  {
    id: 3,
    title: 'Sunken Boat Recovery',
    description: 'Underwater recovery operations in any water environment. 24/7 emergency response.',
    icon: Zap,
    features: ['Rapid-response dispatch', 'Environmental safety protocols', 'Shoreline and dock cleanup'],
  },
];

export function ServicesSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="section-kicker mb-5">
              <Waves className="h-4 w-4 text-orange" />
              Core Services
            </div>
            <h2 className="section-title mb-5">
              What We Specialize In
            </h2>
            <p className="section-copy max-w-2xl mx-auto">
              Complete boat removal solutions tailored to the condition of the vessel, the access constraints, and how quickly you need the job handled.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="soft-card rounded-[1.75rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(11,49,92,0.12)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(255_140_0/0.1)]">
                      <Icon className="h-7 w-7 text-orange" />
                    </div>
                    {service.id === 1 && (
                      <span className="rounded-full bg-[rgb(11_49_92/0.06)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy">
                        Most Requested
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="min-h-20 text-gray-body leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mb-8 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-gray-body">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-orange" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      onClick={() => setShowModal(true)}
                      className="h-11 rounded-full bg-navy px-5 text-white transition-all hover:bg-navy/90"
                    >
                      Request Quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <a
                      href="tel:+15614040669"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:text-orange/80"
                    >
                      <Phone className="h-4 w-4" />
                      Talk to a specialist
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="surface-tint mt-12 rounded-4xl border border-[rgb(11_49_92/0.08)] px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="font-display text-2xl font-bold text-navy">Need something more specialized?</div>
                <p className="mt-2 max-w-2xl text-gray-body">
                  We also handle marina recovery, transport-ready removals, storm-damaged vessels, and multi-boat cleanup projects.
                </p>
              </div>
              <Button
                asChild
                className="h-11 rounded-full bg-orange px-6 text-white hover:bg-orange/90"
              >
                <a href="tel:+15614040669">Call About Your Project</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
