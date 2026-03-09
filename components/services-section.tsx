'use client';

import { Card } from '@/components/ui/card';
import { Anchor, Trash2, Zap, AlertTriangle, Waves } from 'lucide-react';
import { BookingModal } from './booking-modal';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Junk Boat Removal',
    description: 'For unwanted boats in any condition. Quick, affordable removal with proper disposal.',
    icon: Trash2,
    color: 'text-orange',
  },
  {
    id: 2,
    title: 'Salvage & Recovery',
    description: 'Damaged or partially submerged vessels. Fast, insured service for complex recoveries.',
    icon: Anchor,
    color: 'text-orange',
  },
  {
    id: 3,
    title: 'Sunken Boat Recovery',
    description: 'Underwater recovery operations in any water environment. 24/7 emergency response.',
    icon: Zap,
    color: 'text-orange',
  },
];

export function ServicesSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-balance">
              What We Specialize In
            </h2>
            <p className="text-xl text-gray-body max-w-2xl mx-auto">
              Complete boat removal solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-light/50"
                >
                  <Icon className={`${service.color} w-12 h-12 mb-4`} />
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-body leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setSelectedService(service.title);
                        setShowModal(true);
                      }}
                      className="block w-full text-orange font-bold hover:text-orange/80 transition-colors text-left text-sm"
                    >
                      Book Service →
                    </button>
                    <a
                      href="#"
                      className="block text-gray-body hover:text-navy transition-colors text-sm"
                    >
                      Learn More →
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Services Hint */}
          <div className="text-center mt-12">
            <p className="text-gray-body mb-4">
              Plus: Marina Recovery, Transport-Ready Removal, and more specialized services
            </p>
            <a
              href="#"
              className="inline-block text-orange font-bold hover:text-orange/80 transition-colors"
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
