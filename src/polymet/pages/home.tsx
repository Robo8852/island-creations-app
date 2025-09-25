import { HeroSection } from "@/polymet/components/hero-section";
import { ServicesGrid } from "@/polymet/components/services-grid";
import { AboutSection } from "@/polymet/components/about-section";
import { ContactSection } from "@/polymet/components/contact-section";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ServicesGrid />

      <AboutSection />

      <ContactSection />
    </div>
  );
}
