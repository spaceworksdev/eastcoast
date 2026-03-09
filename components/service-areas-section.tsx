import { Card } from '@/components/ui/card';
import { MapPin, Check } from 'lucide-react';

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
    <section id="service-areas" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-balance">
            We Serve All of Florida
          </h2>
          <p className="text-xl text-gray-body max-w-2xl mx-auto">
            Licensed and insured boat removal available in all major coastal areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Map Placeholder */}
          <div className="bg-white rounded-xl p-8 border border-gray-light/50">
            <div className="bg-gradient-to-br from-orange/10 to-navy/10 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
              {/* Decorative Map */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-orange rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-navy rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-orange rounded-full"></div>
              </div>
              <div className="text-center relative z-10">
                <MapPin className="w-16 h-16 text-orange mx-auto mb-4" />
                <p className="text-navy font-bold text-lg">
                  Statewide Coverage
                </p>
                <p className="text-gray-body">
                  All Florida Coastal Areas
                </p>
              </div>
            </div>
          </div>

          {/* Right: Service Areas List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy mb-6">
              Primary Service Areas
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-light/50 hover:border-orange hover:shadow-md transition-all"
                >
                  <Check className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-navy font-medium">{area}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="p-6 bg-white border-orange/30 border-2">
              <p className="text-gray-body text-sm mb-3">
                <span className="font-bold text-navy">Can't find your area?</span>
              </p>
              <a
                href="tel:+15614040669"
                className="inline-flex items-center gap-2 text-orange font-bold hover:text-orange/80 transition-colors"
              >
                Call us at (561) 404-0669
                <span className="text-lg">→</span>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
