'use client';

import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James Martinez',
    location: 'Marina Bay',
    rating: 5,
    text: 'They removed my old sailboat in less than a day. Professional, efficient, and the price was better than I expected. Highly recommend!',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    location: 'Fort Lauderdale',
    rating: 5,
    text: 'Amazing service from start to finish. The crew was respectful of my property and handled everything quickly. Best decision ever!',
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 3,
    name: 'Robert Chen',
    location: 'Miami',
    rating: 5,
    text: 'Sunken boat recovery is complicated, but they made it easy. Clear communication, fair pricing, and excellent follow-up. Top-notch!',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 4,
    name: 'Linda Rodriguez',
    location: 'Naples',
    rating: 5,
    text: 'Got a quote within an hour. They came the next day and removed our junk boat. Professional and courteous throughout. Worth every penny.',
    date: '1 month ago',
    verified: true,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const goToPrevious = () => {
    setAutoRotate(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setAutoRotate(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setAutoRotate(false);
    setCurrentIndex(index);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[rgb(11_49_92)] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-kicker mb-5 border-white/14 bg-[rgb(255_255_255/0.08)] text-white shadow-none">
            Customer Trust
          </div>
          <h2 className="font-display mb-4 text-4xl font-bold text-balance text-white md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Real experiences from satisfied boat removal customers
          </p>
        </div>

        <div className="relative">
          <Card className="min-h-80 rounded-4xl border border-white/12 bg-[rgb(255_255_255/0.08)] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-12">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange text-orange"
                  />
                ))}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[rgb(255_209_143)]">
                <Quote className="h-5 w-5" />
              </div>
            </div>

            <blockquote className="mb-8 text-xl italic leading-relaxed text-white/92 md:text-2xl">
              "{testimonial.text}"
            </blockquote>

            <div className="space-y-2">
              <div className="font-display text-lg font-bold text-white">
                — {testimonial.name}
              </div>
              <div className="text-sm text-white/62">
                {testimonial.location} • {testimonial.date}
              </div>
              {testimonial.verified && (
                <div className="flex items-center gap-2 text-xs font-medium text-[rgb(255_209_143)]">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange text-xs text-white">
                    ✓
                  </span>
                  Verified Google Review
                </div>
              )}
            </div>
          </Card>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-0 -mx-16">
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoRotate(false)}
              className="rounded-full border border-white/14 bg-white/10 p-3 text-white transition-colors hover:bg-white/16"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoRotate(false)}
              className="rounded-full border border-white/14 bg-white/10 p-3 text-white transition-colors hover:bg-white/16"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="md:hidden flex justify-center gap-2 mt-6">
            <button
              onClick={goToPrevious}
              className="rounded-full border border-white/14 bg-white/10 p-2 text-white transition-colors hover:bg-white/16"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="rounded-full border border-white/14 bg-white/10 p-2 text-white transition-colors hover:bg-white/16"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${index === currentIndex
                  ? 'bg-orange w-8'
                  : 'bg-white/25 w-3'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
