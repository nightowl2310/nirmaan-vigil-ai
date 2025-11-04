import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Cpu, Map, Zap, Shield, Clock } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Satellite,
      title: "Data Collection",
      description: "Satellite imagery and drone data are collected regularly to monitor land usage changes across the city."
    },
    {
      number: "02", 
      icon: Cpu,
      title: "AI Analysis",
      description: "Computer vision models analyze the imagery to detect unauthorized constructions and encroachments automatically."
    },
    {
      number: "03",
      icon: Map,
      title: "Verification & Tracking",
      description: "Officials use the interactive dashboard to verify reports, track cases, and coordinate enforcement actions."
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Real-time Detection",
      description: "Identify encroachments as soon as they occur with continuous monitoring capabilities."
    },
    {
      icon: Clock,
      title: "Predictive Analytics",
      description: "AI models predict high-risk zones for proactive monitoring and prevention."
    },
    {
      icon: Zap,
      title: "Efficient Enforcement",
      description: "Streamlined workflow from detection to resolution reduces response time significantly."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Nirmaan Vigil AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced technology pipeline for detecting and managing illegal encroachments
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
            Key Benefits
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