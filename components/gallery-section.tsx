'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            <Camera className="h-4 w-4 text-orange" />
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
              className="soft-card overflow-hidden rounded-[1.8rem] border-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(11,49,92,0.12)]"
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(11,49,92,0.82)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-navy">
                  {item.turnaround}
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/12 p-4 backdrop-blur-md">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(255_209_143)]">Project Snapshot</div>
                  <div className="font-display text-2xl font-bold text-white">{item.title}</div>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange">{item.description}</p>
                <p className="text-sm leading-7 text-gray-body">
                  {item.outcome}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="surface-tint mt-12 rounded-4xl border border-[rgb(11_49_92/0.08)] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-orange">
                <Sparkles className="h-4 w-4" />
                Clean finish, not just haul-away
              </div>
              <p className="mt-3 max-w-2xl text-gray-body leading-7">
                Every project is scoped for access, equipment, safety, and cleanup so the job ends with the site usable again.
              </p>
            </div>
            <Button
              asChild
              className="h-11 rounded-full bg-navy px-6 text-white hover:bg-navy/90"
            >
              <a href="#contact">
                Request a Project Review
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
