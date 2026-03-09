import Link from 'next/link';
import { Facebook, Youtube, Phone, Mail, Clock, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange mb-4">ECB</h3>
            <p className="text-gray-light text-sm leading-relaxed mb-4">
              Professional boat removal and disposal services across Florida. Licensed, insured, and available 24/7.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-orange/20 rounded-full hover:bg-orange/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-orange" />
              </a>
              <a
                href="#"
                className="p-2 bg-orange/20 rounded-full hover:bg-orange/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-orange" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-light hover:text-orange transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-light hover:text-orange transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-gray-light hover:text-orange transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#service-areas"
                  className="text-gray-light hover:text-orange transition-colors text-sm"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-light hover:text-orange transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-light hover:text-orange transition-colors"
                >
                  Fort Lauderdale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-light hover:text-orange transition-colors"
                >
                  Miami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-light hover:text-orange transition-colors"
                >
                  Tampa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-light hover:text-orange transition-colors"
                >
                  Naples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-light hover:text-orange transition-colors"
                >
                  Cape Coral
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-light">Phone</div>
                  <a
                    href="tel:+15614040669"
                    className="text-white font-bold hover:text-orange transition-colors"
                  >
                    (561) 404-0669
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-light">Hours</div>
                  <div className="text-white text-sm">
                    <div>Mon-Fri: 7am-6pm</div>
                    <div>Sat-Sun: 8am-4pm</div>
                    <div>24/7 Emergency</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-sm text-gray-light">
              <p>© {currentYear} East Coast Boat Removal. All rights reserved.</p>
              <p className="mt-2">Serving Florida boat removal and disposal since 2015</p>
            </div>
            <div className="flex justify-end gap-6 text-sm">
              <a
                href="#"
                className="text-gray-light hover:text-orange transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-light hover:text-orange transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-light hover:text-orange transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
