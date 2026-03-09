import { Star, Shield, Users } from 'lucide-react';

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-10 px-4 pb-6 sm:px-6 lg:px-8">
      <div className="soft-panel mx-auto max-w-7xl rounded-4xl px-6 py-6 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          <div className="rounded-[1.4rem] border border-[rgb(11_49_92/0.08)] bg-white/80 px-5 py-5 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-teal text-teal"
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-navy">4.9 / 5</div>
              <div className="text-sm text-gray-body">127 verified Google reviews</div>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-[rgb(11_49_92/0.08)] bg-white/80 px-5 py-5 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(0_166_153/0.1)]">
                <Shield className="h-6 w-6 shrink-0 text-teal" />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-navy">Fully Licensed & Insured</div>
                <div className="text-sm text-gray-body">Professional handling, transport, and disposal documentation</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-[rgb(11_49_92/0.08)] bg-white/80 px-5 py-5 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(11_49_92/0.08)]">
                <Users className="h-6 w-6 shrink-0 text-navy" />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-navy">500+ successful removals</div>
                <div className="text-sm text-gray-body">Trusted by homeowners, marinas, insurers, and property managers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
