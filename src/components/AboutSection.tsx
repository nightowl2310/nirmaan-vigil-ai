import { Card, CardContent } from "@/components/ui/card";
import { Eye, MapPin, Brain, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous surveillance of public lands, roads, and community spaces using satellite imagery and drone data."
    },
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced computer vision algorithms to automatically identify unauthorized constructions and land usage changes."
    },
    {
      icon: MapPin,
      title: "Geospatial Analysis",
      description: "Interactive mapping interface for officials to verify reports and track encroachment cases with precision."
    },
    {
      icon: Shield,
      title: "Predictive Analytics",
      description: "Machine learning models to predict high-risk areas for future encroachments and enable proactive monitoring."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Nirmaan   AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An advanced AI-powered system that helps government officials monitor and prevent illegal land encroachments 
            through real-time detection and predictive analytics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;