'use client';

import { Star, Shield, Users, BadgeCheck } from 'lucide-react';

const trustItems = [
  {
    icon: BadgeCheck,
    accent: 'teal' as const,
    title: '4.9 / 5',
    subtitle: '127 verified Google reviews',
    hasStars: true,
  },
  {
    icon: Shield,
    accent: 'teal' as const,
    title: 'Fully Licensed & Insured',
    subtitle: 'Professional handling, transport & disposal documentation',
  },
  {
    icon: Users,
    accent: 'navy' as const,
    title: '500+ Successful Removals',
    subtitle: 'Trusted by homeowners, marinas, insurers & property managers',
  },
];

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-10 px-4 pb-8 sm:px-6 lg:px-8">
      <div className="soft-panel mx-auto max-w-7xl rounded-4xl px-5 py-5 sm:px-8 sm:py-7">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            const isTeal = item.accent === 'teal';

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[1.4rem] border border-[rgb(11_49_92/0.07)] bg-white/85 px-5 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgb(11_49_92/0.1)] animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Subtle top accent line */}
                <div
                  className={`absolute inset-x-5 top-0 h-[2px] rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${isTeal ? 'bg-teal' : 'bg-navy'
                    }`}
                />

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${isTeal
                        ? 'bg-[rgb(0_166_153/0.1)]'
                        : 'bg-[rgb(11_49_92/0.07)]'
                      }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${isTeal ? 'text-teal' : 'text-navy'
                        }`}
                    />
                  </div>

                  <div className="min-w-0">
                    {item.hasStars && (
                      <div className="mb-1 flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-teal text-teal"
                          />
                        ))}
                      </div>
                    )}
                    <div className="font-display text-lg font-bold leading-snug text-navy sm:text-xl">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-[13px] leading-snug text-gray-body">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
