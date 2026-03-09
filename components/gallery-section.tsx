'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Camera } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
  outcome: string;
  turnaround: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Backyard Eyesore',
    image: '/gallery-1-before.jpg',
    description: 'Old sailboat removal from residential property',
    outcome: 'Property cleared and haul-away completed without damaging the driveway or fence line.',
    turnaround: 'Completed in 1 day',
  },
  {
    id: 2,
    title: 'Marina Recovery',
    image: '/gallery-1-before.jpg',
    description: 'Sunken vessel professional recovery',
    outcome: 'Recovered, documented, and removed with coordinated marina access and cleanup.',
    turnaround: 'Emergency response',
  },
  {
    id: 3,
    title: 'Overgrown Property',
    image: '/gallery-1-before.jpg',
    description: 'Complete property cleanup and restoration',
    outcome: 'Boat, debris, and abandoned materials removed so the lot could be reused immediately.',
    turnaround: 'Scheduled within 48 hrs',
  },
];

export function GallerySection() {
  return (
    <section id="results" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="section-kicker mb-5">
            <Camera className="h-4 w-4 text-teal" />
            Recent Work
          </div>
          <h2 className="section-title mb-5">
            See Our Work
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            A sample of the removals and recoveries our team handles across residential lots, marinas, and coastal properties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <Card
              key={item.id}
              className="soft-card overflow-hidden rounded-[1.8rem] border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(11,49,92,0.1)]"
            >
              <div className="relative h-72 w-full overflow-hidden bg-gray-light">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-navy">
                  {item.turnaround}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(11,49,92,0.72))] px-6 pb-5 pt-12">
                  <div className="font-display text-2xl font-bold text-white">{item.title}</div>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal">{item.description}</p>
                <p className="text-sm leading-7 text-gray-body">
                  {item.outcome}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
