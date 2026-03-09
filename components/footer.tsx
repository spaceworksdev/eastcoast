import Link from 'next/link';
import { Clock, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(8_37_70)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-[rgb(255_198_116)] mb-4">East Coast Boat Removal</h3>
            <p className="text-white/68 text-sm leading-relaxed mb-4">
              Professional boat removal and disposal services across Florida. Licensed, insured, and available 24/7.
            </p>
            <div className="rounded-[1.4rem] border border-white/10 bg-[rgb(255_255_255/0.06)] p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/42">Emergency Recovery Line</div>
              <a href="tel:+15614040669" className="mt-2 block font-display text-2xl font-bold text-white transition-colors hover:text-[rgb(255_209_143)]">
                (561) 404-0669
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/68 hover:text-[rgb(255_209_143)] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/68 hover:text-[rgb(255_209_143)] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-white/68 hover:text-[rgb(255_209_143)] transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#service-areas"
                  className="text-white/68 hover:text-[rgb(255_209_143)] transition-colors text-sm"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/68 hover:text-[rgb(255_209_143)] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {['Fort Lauderdale', 'Miami', 'Tampa', 'Naples', 'Cape Coral', 'Palm Beach'].map((area) => (
                <li key={area} className="text-white/68">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <div className="text-sm text-white/48">Phone</div>
                  <a
                    href="tel:+15614040669"
                    className="text-white font-bold hover:text-[rgb(255_209_143)] transition-colors"
                  >
                    (561) 404-0669
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <div className="text-sm text-white/48">Hours</div>
                  <div className="text-sm text-white/78">
                    <div>Mon-Fri: 7am-6pm</div>
                    <div>Sat-Sun: 8am-4pm</div>
                    <div>24/7 Emergency</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-sm text-white/56">
              <p>© {currentYear} East Coast Boat Removal. All rights reserved.</p>
            </div>
            <div className="flex justify-end gap-6 text-sm">
              <Link href="/#contact" className="text-white/56 transition-colors hover:text-[rgb(255_209_143)]">
                Contact Us
              </Link>
              <Link href="/#services" className="text-white/56 transition-colors hover:text-[rgb(255_209_143)]">
                Services
              </Link>
              <Link href="/#service-areas" className="text-white/56 transition-colors hover:text-[rgb(255_209_143)]">
                Coverage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
