import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TrustBar } from '@/components/trust-bar';
import { ServicesSection } from '@/components/services-section';
import { HowItWorks } from '@/components/how-it-works';
import { GallerySection } from '@/components/gallery-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ServiceAreasSection } from '@/components/service-areas-section';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { StickyCallButton } from '@/components/sticky-call-button';

export default function Home() {
  return (
    <>
      <StickyCallButton />
      <main className="relative min-h-screen overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-136 bg-[radial-gradient(circle_at_top,rgb(236_244_249),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-40 top-112 h-104 w-104 rounded-full bg-[rgb(0_166_153/0.06)] blur-3xl" />
        <Header />
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <HowItWorks />
        <GallerySection />
        <TestimonialsSection />
        <ServiceAreasSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
