import { Star, Shield, Users } from 'lucide-react';

export function TrustBar() {
  return (
    <div className="bg-gray-light border-b border-gray-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Ratings */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange text-orange"
                />
              ))}
            </div>
            <div>
              <div className="font-bold text-navy text-lg">4.9 / 5</div>
              <div className="text-sm text-gray-body">127 Google Reviews</div>
            </div>
          </div>

          {/* Licensed & Insured */}
          <div className="flex items-center justify-center gap-4">
            <Shield className="w-8 h-8 text-orange flex-shrink-0" />
            <div>
              <div className="font-bold text-navy">Fully Licensed</div>
              <div className="text-sm text-gray-body">& Insured</div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <Users className="w-8 h-8 text-orange flex-shrink-0" />
            <div>
              <div className="font-bold text-navy">500+</div>
              <div className="text-sm text-gray-body">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
