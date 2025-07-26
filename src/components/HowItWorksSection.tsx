import { Card, CardContent } from "@/components/ui/card";
import { Camera, MapPin, Brain, Gift, Shield, Clock } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Capture & Upload",
      description: "Take a photo of the suspected construction site and upload it to the platform securely."
    },
    {
      number: "02", 
      icon: MapPin,
      title: "Tag Location",
      description: "Select or scan the address using QR (Digital Pata) integration for precise location tagging."
    },
    {
      number: "03",
      icon: Brain,
      title: "Let AI Verify",
      description: "Our system analyzes the image and forwards verified cases to departments. Get rewarded for valid reports."
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Anonymous Reporting",
      description: "Reports stay anonymous unless you opt-in for rewards."
    },
    {
      icon: Clock,
      title: "Faster Enforcement",
      description: "Quick verification and faster action on illegal constructions."
    },
    {
      icon: Gift,
      title: "Citizen Rewards",
      description: "Get a share of fines imposed on verified illegal constructions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works for Citizens
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process to report illegal constructions and help build a better Indore
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card h-full">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 text-accent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Why Choose NirmanChecker?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;