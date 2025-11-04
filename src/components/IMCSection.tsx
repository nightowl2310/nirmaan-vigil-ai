import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, MapPin, ExternalLink } from "lucide-react";

const IMCSection = () => {
  const facts = [
    {
      icon: Building,
      title: "Smart City Initiative",
      description: "Leveraging technology to build a more transparent and efficient municipal governance system."
    },
    {
      icon: Users,
      title: "Citizen Engagement",
      description: "Empowering citizens to participate in city planning and report violations through digital platforms."
    },
    {
      icon: MapPin,
      title: "Urban Planning",
      description: "Using data-driven insights to make informed decisions about land usage and development policies."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <Building className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  About IMC
                </h2>
                <p className="text-lg text-muted-foreground">
                  Indore Municipal Corporation
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Indore Municipal Corporation (IMC) is at the forefront of smart city governance, 
              using innovative technologies like Nirmaan   AI to protect public spaces and 
              ensure sustainable urban development.
            </p>
            
            <div className="space-y-4 mb-8">
              {facts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <fact.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {fact.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {fact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" size="lg" className="group">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Visit IMC Website
            </Button>
          </div>
          
          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Monitoring Coverage</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Detection Accuracy</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Encroachments Prevented</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">#1</div>
                <p className="text-sm text-muted-foreground">Smart City India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IMCSection;