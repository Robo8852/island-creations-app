import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface LandscapingLayoutProps {
  children: React.ReactNode;
}

export function LandscapingLayout({ children }: LandscapingLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Top Contact Bar */}
      <div className="bg-[#FAFAFA] text-[#333333] py-2 px-4 hidden md:block border-b border-[#4A6741]/20">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#4A6741]" />

              <span>(555) 123-PALM</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#4A6741]" />

              <span>info@islandcreations.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#4A6741]" />

              <span>Serving South Florida</span>
            </div>
          </div>
          <div className="text-[#333333]">
            Monday - Saturday: 7:00 AM - 6:00 PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#FAFAFA] shadow-md border-b border-[#4A6741]/30 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://assets.polymet.ai/adjacent-beige-153482"
                alt="Island Creations Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-[#4A6741] hover:text-[#1E90FF] font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E90FF] group-hover:w-full transition-all duration-200"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button className="bg-[#FFA500] hover:bg-[#FFA500]/90 text-[#333333] font-semibold border-2 border-[#4A6741]">
                Free Estimate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A6741] hover:text-[#1E90FF] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-[#4A6741]/20 py-4 bg-[#FAFAFA]">
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-[#4A6741] hover:text-[#1E90FF] font-medium transition-colors px-2 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-[#4A6741]/20">
                  <Button
                    variant="outline"
                    className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call (555) 123-PALM
                  </Button>
                  <Button className="bg-[#FFA500] hover:bg-[#FFA500]/90 text-[#333333] font-semibold border-2 border-[#4A6741]">
                    Get Free Estimate
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="text-[#333333]">{children}</main>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] text-[#333333] border-t border-[#4A6741]/20">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img
                src="https://assets.polymet.ai/adjacent-beige-153482"
                alt="Island Creations Logo"
                className="h-10 w-auto"
              />

              <p className="text-[#333333] leading-relaxed">
                Transform your property into a tropical paradise with our expert
                landscaping, excavation, and palm tree services.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center text-[#333333] font-bold text-sm">
                  f
                </div>
                <div className="w-8 h-8 bg-[#1E90FF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  t
                </div>
                <div className="w-8 h-8 bg-[#4A6741] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  i
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-[#4A6741] mb-4">
                Our Services
              </h3>
              <ul className="space-y-2 text-[#333333]">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Excavation Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Palm Tree Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Island Landscaping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Landscape Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Hardscaping
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-[#4A6741] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-[#333333]">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Get Estimate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Emergency Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    Service Areas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-[#4A6741] mb-4">
                Contact Info
              </h3>
              <div className="space-y-3 text-[#333333]">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#1E90FF]" />

                  <span>(555) 123-PALM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#1E90FF]" />

                  <span>info@islandcreations.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#1E90FF] mt-0.5" />

                  <span>
                    123 Tropical Way
                    <br />
                    Paradise Island, FL 33101
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#4A6741]/20 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#333333] text-sm">
                © 2024 Island Creations. All rights reserved. Licensed &
                Insured.
              </p>
              <div className="flex gap-6 text-sm text-[#333333]">
                <Link
                  to="/privacy"
                  className="hover:text-[#1E90FF] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-[#1E90FF] transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/sitemap"
                  className="hover:text-[#1E90FF] transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
