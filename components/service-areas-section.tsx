import { Card } from '@/components/ui/card';
import { Check, Compass, MapPin, PhoneCall } from 'lucide-react';

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
            <Compass className="h-4 w-4 text-orange" />
            Coverage Area
          </div>
          <h2 className="section-title mb-5">
            We Serve All of Florida
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            Licensed and insured boat removal available in all major coastal areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="soft-panel rounded-4xl p-8">
            <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,rgb(236_244_249),rgb(255_255_255))]">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute inset-0 opacity-45">
                <div className="absolute left-[18%] top-[20%] h-24 w-24 rounded-full bg-[rgb(255_140_0/0.16)] blur-xl" />
                <div className="absolute right-[20%] top-[30%] h-16 w-16 rounded-full bg-[rgb(11_49_92/0.16)] blur-lg" />
                <div className="absolute bottom-[18%] left-[35%] h-24 w-24 rounded-full bg-[rgb(255_140_0/0.16)] blur-xl" />
              </div>
              <div className="text-center relative z-10">
                <div className="mx-auto mb-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white shadow-[0_14px_36px_rgba(11,49,92,0.12)]">
                  <MapPin className="w-10 h-10 text-orange" />
                </div>
                <p className="font-display text-2xl font-bold text-navy">
                  Statewide Coverage
                </p>
                <p className="mt-2 text-gray-body">
                  Dispatch support across Atlantic coast, Gulf coast, inland marinas, and the Keys.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">
              Primary Service Areas
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-[rgb(11_49_92/0.08)] bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[rgb(255_140_0/0.28)] hover:shadow-[0_14px_28px_rgba(11,49,92,0.08)]"
                >
                  <Check className="h-5 w-5 shrink-0 text-orange" />
                  <span className="text-navy font-medium">{area}</span>
                </div>
              ))}
            </div>

            <Card className="soft-card rounded-[1.6rem] border-2 border-[rgb(255_140_0/0.18)] p-6">
              <p className="mb-3 text-sm text-gray-body">
                <span className="font-bold text-navy">Outside these cities?</span>
              </p>
              <a
                href="tel:+15614040669"
                className="inline-flex items-center gap-2 font-bold text-orange transition-colors hover:text-orange/80"
              >
                <PhoneCall className="h-4 w-4" />
                Call us at (561) 404-0669
                <span className="text-lg">→</span>
              </a>
              <p className="mt-3 text-sm text-gray-body">
                If the haul-out logistics make sense, we can often service surrounding locations as well.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
