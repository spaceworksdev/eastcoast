import { Card } from '@/components/ui/card';
import { ArrowRight, Check, Compass, MapPin, PhoneCall } from 'lucide-react';

const serviceRegions = [
  {
    title: 'Atlantic Coast',
    description: 'Palm Beach, Fort Lauderdale, Miami, and surrounding marinas.',
  },
  {
    title: 'Gulf Coast',
    description: 'Tampa, St. Petersburg, Sarasota, Naples, Fort Myers, and nearby areas.',
  },
  {
    title: 'Florida Keys',
    description: 'Key West, Marathon, and other Keys recovery and haul-away jobs.',
  },
];

const serviceAreas = [
  'Fort Lauderdale',
  'Miami',
  'Cape Coral',
  'Naples',
  'Clearwater',
  'Sarasota',
  'Palm Beach',
  'Key West',
  'Punta Gorda',
  'Destin',
  'St. Petersburg',
  'Tampa',
  'Fort Myers',
  'Jupiter',
  'Marathon',
];

export function ServiceAreasSection() {
  return (
    <section id="service-areas" className="surface-tint py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="section-kicker mb-5">
            <Compass className="h-4 w-4 text-teal" />
            Coverage Area
          </div>
          <h2 className="section-title mb-5">
            We Serve All of Florida
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            Licensed and insured boat removal available in all major coastal areas
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="soft-card rounded-4xl p-7 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(0_166_153/0.1)]">
                <MapPin className="h-7 w-7 text-teal" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">Statewide coverage</h3>
                <p className="mt-1 text-gray-body">Dispatch support for coastal properties, marinas, and inland haul-out access points.</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {serviceRegions.map((region) => (
                <div key={region.title} className="rounded-3xl border border-[rgb(11_49_92/0.08)] bg-[rgb(248_249_250)] px-5 py-4">
                  <div className="font-display text-lg font-bold text-navy">{region.title}</div>
                  <p className="mt-1 text-sm leading-6 text-gray-body">{region.description}</p>
                </div>
              ))}
            </div>

            <a
              href="tel:+15614040669"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-teal transition-colors hover:text-teal/80"
            >
              <PhoneCall className="h-4 w-4" />
              Need to confirm your location?
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-4xl border border-[rgb(11_49_92/0.08)] bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-bold text-navy">Primary service areas</h3>
              <div className="hidden rounded-full bg-[rgb(0_166_153/0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-teal sm:inline-flex">
                Mobile statewide
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-[rgb(11_49_92/0.08)] px-4 py-3"
                >
                  <Check className="h-5 w-5 shrink-0 text-teal" />
                  <span className="text-sm font-medium text-navy sm:text-base">{area}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
