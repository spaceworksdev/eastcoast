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
      <main className="min-h-screen bg-white">
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
