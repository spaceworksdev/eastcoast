'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { BookingModal } from './booking-modal';
import { useState } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative h-screen md:h-[600px] min-h-[500px] w-full text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-boat-removal.jpg"
          alt="Professional boat removal service in progress"
          fill
          className="object-cover"
          priority
          quality={75}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative pt-24 pb-20 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Hassle-Free Boat Removal & Disposal on the East Coast
              </h1>

              <p className="text-xl text-gray-light leading-relaxed max-w-xl">
                We handle all the logistics. Licensed, insured removal in 24-48 hours. No surprises. Just professional service.
              </p>

              {/* Trust Bullets */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-white">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-white">Serves All of Florida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-white">24/7 Emergency Service</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  onClick={() => setShowModal(true)}
                  className="bg-orange hover:bg-orange/90 text-white font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 text-base"
                >
                  Get Free Quote
                </Button>
                <Button
                  asChild
                  className="border-2 border-white bg-transparent hover:bg-white/10 text-white font-bold px-8 py-3 rounded-lg transition-colors text-base"
                >
                  <a href="tel:+15614040669">Call Now</a>
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:block">
              <div className="relative h-96 bg-gradient-to-br from-orange/20 to-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-orange">24/7</div>
                  <p className="text-lg text-white">Emergency Boat Removal Service</p>
                  <p className="text-gray-light">Available in Florida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
