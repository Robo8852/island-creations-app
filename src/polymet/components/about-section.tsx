import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Award,
  Users,
  Clock,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { companyInfo } from "@/polymet/data/landscaping-services";

export function AboutSection() {
  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: CheckCircle, label: "Projects Completed", value: "1,200+" },
    { icon: Leaf, label: "Trees Planted", value: "5,000+" },
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description:
        "Every project is executed with meticulous attention to detail and professional expertise.",
      icon: Award,
    },
    {
      title: "Affordable Solutions",
      description:
        "We believe beautiful landscapes should be accessible to everyone without compromising quality.",
      icon: CheckCircle,
    },
    {
      title: "Tropical Expertise",
      description:
        "Specialized knowledge in island-style landscaping and native tropical plant care.",
      icon: Leaf,
    },
    {
      title: "Reliable Service",
      description:
        "Dependable scheduling and communication throughout every phase of your project.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] text-[#333333]">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#4A6741] mb-4">
                About Island Creations
              </h2>
              <div className="w-24 h-1 bg-[#1E90FF] rounded-full mb-6"></div>
              <p className="text-lg text-[#333333] leading-relaxed mb-6">
                {companyInfo.description}
              </p>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-xl font-semibold text-[#4A6741] mb-4">
                Our Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {companyInfo.specialties.map((specialty, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#4A6741]/10 text-[#4A6741] border border-[#4A6741]/30 px-3 py-1"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#FFA500] hover:bg-[#FFA500]/90 text-[#333333] font-semibold border-2 border-[#4A6741]"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 border-2 border-[#4A6741]/20 hover:border-[#1E90FF] transition-colors bg-white"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#4A6741]/10 border border-[#4A6741]/30 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-[#4A6741]" />
                    </div>
                    <div className="text-3xl font-bold text-[#4A6741]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#333333] font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[#FAFAFA] rounded-2xl p-8 md:p-12 border border-[#4A6741]/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#4A6741] mb-4">
              Why Choose Island Creations?
            </h3>
            <p className="text-lg text-[#333333] max-w-2xl mx-auto">
              Our commitment to excellence and tropical expertise sets us apart
              in the landscaping industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#4A6741]/10 border border-[#4A6741]/30 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-[#4A6741]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#4A6741]">
                    {value.title}
                  </h4>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-[#FAFAFA] border border-[#4A6741]/20 rounded-2xl p-8 text-[#333333]">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Tropical Transformation?
          </h3>
          <p className="text-[#333333] mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can
            turn your property into the tropical paradise you've always dreamed
            of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFA500] hover:bg-[#FFA500]/90 text-[#333333] font-semibold border-2 border-[#4A6741]"
            >
              Get Your Free Estimate
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white bg-transparent"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
