import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { companyInfo } from "@/polymet/data/landscaping-services";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: companyInfo.contact.phone,
      description: "Speak directly with our landscaping experts",
      color: "text-[#FFA500]",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: companyInfo.contact.email,
      description: "Send us your project details and questions",
      color: "text-[#1E90FF]",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: companyInfo.contact.address,
      description: "Stop by our office for in-person consultation",
      color: "text-[#4A6741]",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: companyInfo.contact.hours,
      description: "We're here when you need us most",
      color: "text-[#4A6741]",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] text-[#333333]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A6741] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Ready to transform your landscape? Contact us today for a free
            consultation and let's discuss how we can bring your tropical
            paradise vision to life.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#1E90FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-[#4A6741]/20 shadow-lg bg-white">
            <CardHeader className="bg-[#FAFAFA] text-[#333333] rounded-t-lg border-b border-[#4A6741]/20">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Send className="h-6 w-6 text-[#1E90FF]" />
                Request Your Free Estimate
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-[#333333] font-medium"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="border-[#4A6741]/30 focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-[#333333] font-medium"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="border-[#4A6741]/30 focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#333333] font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-[#4A6741]/30 focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#333333] font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="border-[#4A6741]/30 focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-[#333333] font-medium">
                  Service Interested In
                </Label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-[#4A6741]/30 rounded-md focus:border-[#1E90FF] focus:ring-[#1E90FF] focus:ring-1 bg-white text-[#333333]"
                >
                  <option value="">Select a service...</option>
                  <option value="excavation">Excavation Services</option>
                  <option value="palm-trees">Palm Tree Services</option>
                  <option value="landscaping">Island-Style Landscaping</option>
                  <option value="maintenance">Landscape Maintenance</option>
                  <option value="hardscaping">Hardscaping & Stonework</option>
                  <option value="consultation">Design Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#333333] font-medium">
                  Project Details
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your landscaping project, timeline, and any specific requirements..."
                  rows={4}
                  className="border-[#4A6741]/30 focus:border-[#1E90FF] focus:ring-[#1E90FF] resize-none"
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-[#FFA500] hover:bg-[#FFA500]/90 text-[#333333] font-semibold border-2 border-[#4A6741] shadow-lg"
              >
                Send Message & Get Free Estimate
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-[#333333]/70 text-center">
                We'll respond within 24 hours with your personalized estimate
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 border-[#4A6741]/20 hover:border-[#1E90FF] transition-colors bg-white hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#4A6741]/10 border border-[#4A6741]/30">
                          <IconComponent
                            className={`h-6 w-6 ${method.color}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#4A6741] text-lg mb-1">
                            {method.title}
                          </h3>
                          <p className="text-[#333333] font-medium mb-2">
                            {method.info}
                          </p>
                          <p className="text-sm text-[#333333]/70">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <Card className="border-2 border-[#1E90FF]/30 bg-[#FAFAFA]">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-[#4A6741] text-lg mb-2">
                  Emergency Services Available
                </h3>
                <p className="text-[#333333] mb-4">
                  Storm damage cleanup and emergency tree removal services
                  available 24/7
                </p>
                <Button
                  variant="outline"
                  className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
                >
                  Emergency Hotline: (555) 911-TREE
                </Button>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="border-2 border-[#4A6741]/20 bg-[#FAFAFA]">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-[#4A6741] text-lg mb-2">
                  Service Areas
                </h3>
                <p className="text-[#333333] mb-4">
                  Proudly serving South Florida and surrounding tropical
                  communities
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Miami-Dade", "Broward", "Palm Beach", "Monroe County"].map(
                    (area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-[#FFA500]/20 text-[#333333] rounded-full text-sm border border-[#FFA500]/30"
                      >
                        {area}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
