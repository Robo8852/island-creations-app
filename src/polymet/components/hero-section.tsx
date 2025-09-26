import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with tropical gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-600 to-amber-500">
        <div className="absolute inset-0 bg-emerald-900/30"></div>
      </div>

      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-20 text-emerald-300 opacity-30"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-amber-200">Transform Your Space</span>
              <br />

              <span className="text-amber-400">Into Paradise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Professional excavation, palm tree services, and island-style
              landscaping.
              <span className="text-amber-300 font-semibold">
                {" "}
                Quality and Affordability
              </span>{" "}
              you can trust.
            </p>
          </div>

          {/* Service highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="bg-emerald-900/70 px-4 py-2 rounded-full border border-amber-600 text-amber-100">
              🚛 Excavation Services
            </div>
            <div className="bg-emerald-900/70 px-4 py-2 rounded-full border border-amber-600 text-amber-100">
              🌴 Palm Tree Experts
            </div>
            <div className="bg-emerald-900/70 px-4 py-2 rounded-full border border-amber-600 text-amber-100">
              🏝️ Island Landscaping
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-semibold px-8 py-4 text-lg border-2 border-amber-700 shadow-lg"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-400 text-amber-200 hover:bg-amber-400 hover:text-emerald-950 px-8 py-4 text-lg bg-transparent"
            >
              View Our Work
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-[#D3D3D3] pt-8">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-[#FFA500]" />

              <span className="font-medium">(555) 123-PALM</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#FFA500]" />

              <span className="font-medium">info@islandcreations.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for tropical feel */}
      <div className="absolute top-20 left-10 text-emerald-300 opacity-20 text-6xl animate-pulse">
        🌴
      </div>
      <div className="absolute top-40 right-20 text-amber-200 opacity-30 text-4xl animate-bounce">
        🏝️
      </div>
      <div className="absolute bottom-40 left-20 text-teal-200 opacity-25 text-5xl animate-pulse">
        🌊
      </div>
    </section>
  );
}
