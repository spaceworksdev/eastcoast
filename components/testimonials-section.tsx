'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-body">
            Real experiences from satisfied boat removal customers
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonial Card */}
          <Card className="p-8 md:p-12 bg-gray-light border-0 min-h-80">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange text-orange"
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl italic text-navy mb-8 leading-relaxed">
              "{testimonial.text}"
            </blockquote>

            <div className="space-y-2">
              <div className="font-bold text-lg text-navy">
                — {testimonial.name}
              </div>
              <div className="text-sm text-gray-body">
                {testimonial.location} • {testimonial.date}
              </div>
              {testimonial.verified && (
                <div className="text-xs text-orange font-medium flex items-center gap-2">
                  <span className="inline-block w-4 h-4 bg-orange text-white rounded-full flex items-center justify-center text-xs">
                    ✓
                  </span>
                  Verified Google Review
                </div>
              )}
            </div>
          </Card>

          {/* Navigation Arrows */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-0 -mx-16">
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoRotate(false)}
              className="p-3 rounded-full bg-navy text-white hover:bg-navy/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoRotate(false)}
              className="p-3 rounded-full bg-navy text-white hover:bg-navy/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-navy text-white hover:bg-navy/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-navy text-white hover:bg-navy/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-orange w-8'
                  : 'bg-gray-body/30 w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
