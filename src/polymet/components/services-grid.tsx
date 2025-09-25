import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  TreePine,
  Mountain,
  Scissors,
  Compass,
  ArrowRight,
} from "lucide-react";
import { landscapingServices } from "@/polymet/data/landscaping-services";

const iconMap = {
  Truck,
  TreePine,
  Mountain,
  Scissors,
  Compass,
  Palmtree: TreePine, // Using TreePine as fallback for Palmtree
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#D3D3D3] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-[#2F2F2F] max-w-3xl mx-auto leading-relaxed">
            From excavation to tropical paradise creation, we provide
            comprehensive landscaping solutions that transform your property
            into an island oasis.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#FFA500] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {landscapingServices.map((service) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || TreePine;

            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-[#8B4513]/20 hover:border-[#FFA500] bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-[#2F4F2F] to-[#8B4513] w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-[#FFA500]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#800000] group-hover:text-[#2F4F2F] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-[#2F2F2F] leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Category Badge */}
                  <div className="flex justify-center">
                    <Badge
                      variant="secondary"
                      className="bg-[#1E90FF]/10 text-[#1E90FF] border border-[#1E90FF]/30 capitalize"
                    >
                      {service.category.replace("-", " ")}
                    </Badge>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 text-sm text-[#2F2F2F]">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#FFA500] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-[#1E90FF] font-medium">
                        +{service.features.length - 3} more services
                      </li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-[#2F4F2F] text-[#2F4F2F] hover:bg-[#2F4F2F] hover:text-white group-hover:border-[#FFA500] group-hover:text-[#FFA500] transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#2F4F2F] to-[#8B4513] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Landscape?
          </h3>
          <p className="text-[#D3D3D3] mb-6 max-w-2xl mx-auto">
            Get a free consultation and estimate for your tropical landscaping
            project. Our experts are ready to bring your island paradise vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-[#2F2F2F] font-semibold border-2 border-[#FFA500]"
            >
              Get Free Estimate
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-[#2F2F2F] bg-transparent"
            >
              Call (555) 123-PALM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
