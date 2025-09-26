import { HeroSection } from "@/polymet/components/hero-section";
import { ServicesGrid } from "@/polymet/components/services-grid";
import { AboutSection } from "@/polymet/components/about-section";
import { ContactSection } from "@/polymet/components/contact-section";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Wave transition between hero and services */}
      <div 
        style={{ 
          width: '100vw', 
          height: '80px', 
          marginLeft: 'calc(-50vw + 50%)',
          position: 'relative',
          marginTop: '-20px'
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          style={{ 
            width: '100%', 
            height: '100%', 
            display: 'block',
            overflow: 'visible'
          }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
            fill="rgba(30, 144, 255, 0.2)"
            style={{ width: '100%' }}
          />
        </svg>
      </div>

      <ServicesGrid />

      <AboutSection />

      <ContactSection />
    </div>
  );
}
