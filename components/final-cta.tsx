'use client';

import { Button } from '@/components/ui/button';
import { BookingModal } from './booking-modal';
import { useState } from 'react';

export function FinalCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            Ready to Get Rid of That Boat?
          </h2>

          <p className="text-xl text-gray-light mb-8 leading-relaxed">
            We make removal easy. Fair pricing. Honest service. Licensed & Insured.
          </p>

          <div className="space-y-4 mb-8">
            <div className="text-3xl font-bold text-orange">
              Get Your Free Estimate Today
            </div>
            <a
              href="tel:+15614040669"
              className="text-2xl font-bold text-orange hover:text-orange/80 transition-colors block"
            >
              (561) 404-0669
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => setShowModal(true)}
              className="bg-white hover:bg-gray-light text-navy font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get Instant Quote
            </Button>
            <Button
              asChild
              className="bg-orange hover:bg-orange/90 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <a href="tel:+15614040669">Call Now</a>
            </Button>
          </div>

          <p className="text-sm text-gray-light/80">
            Available 24/7 for emergency removal | Licensed • Insured • Professional
          </p>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
