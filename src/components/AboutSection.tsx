import { Card, CardContent } from "@/components/ui/card";
import { Eye, MapPin, Brain, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Citizen Reporting",
      description: "Web and mobile-based platform for citizens to report suspected illegal constructions."
    },
    {
      icon: Brain,
      title: "AI-Based Detection",
      description: "Upload a photo, tag location, and let our AI Floor Detection System verify against permitted limits."
    },
    {
      icon: MapPin,
      title: "Digital Pata Integration",
      description: "Integrated with IMC's 'Har Ghar Ka Digital Pata' project for precise site tagging and accountability."
    },
    {
      icon: Shield,
      title: "Transparency & Enforcement",
      description: "Faster enforcement with complete transparency in the reporting and verification process."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About NirmanChecker
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A revolutionary digital platform that empowers citizens to report illegal constructions 
            and helps build a legally compliant Indore through AI-powered verification.
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