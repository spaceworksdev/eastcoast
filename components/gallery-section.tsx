'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface GalleryItem {
  id: number;
  title: string;
  before: string;
  after: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Backyard Eyesore',
    before: '/gallery-1-before.jpg',
    after: '/gallery-1-before.jpg',
    description: 'Old sailboat removal from residential property',
  },
  {
    id: 2,
    title: 'Marina Recovery',
    before: '/gallery-1-before.jpg',
    after: '/gallery-1-before.jpg',
    description: 'Sunken vessel professional recovery',
  },
  {
    id: 3,
    title: 'Overgrown Property',
    before: '/gallery-1-before.jpg',
    after: '/gallery-1-before.jpg',
    description: 'Complete property cleanup and restoration',
  },
];

export function GallerySection() {
  const [activeSlider, setActiveSlider] = useState<number>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-balance">
            See Our Work
          </h2>
          <p className="text-xl text-gray-body max-w-2xl mx-auto">
            Real boat removals. Real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <Card
              key={item.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Before/After Slider */}
              <div className="relative w-full h-64 bg-gray-light overflow-hidden">
                <Image
                  src={item.after}
                  alt={`${item.title} after`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />

                {/* Before Image Overlay */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    width: `${activeSlider === idx ? 50 : 100}%`,
                  }}
                >
                  <Image
                    src={item.before}
                    alt={`${item.title} before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                  AFTER
                </div>

                {/* Slider Divider */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize transition-all"
                  style={{
                    left: `${activeSlider === idx ? 50 : 100}%`,
                  }}
                  onMouseEnter={() => setActiveSlider(idx)}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block text-orange font-bold hover:text-orange/80 transition-colors text-lg"
          >
            View Full Project Gallery →
          </a>
        </div>
      </div>
    </section>
  );
}
