import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, MapPin, ExternalLink } from "lucide-react";

const IMCSection = () => {
  const facts = [
    {
      icon: Building,
      title: "Municipal Governance",
      description: "Governing body of Indore, Madhya Pradesh, administering infrastructure and public services."
    },
    {
      icon: Users,
      title: "Democratic Leadership",
      description: "Headed by a mayor and elected representatives ensuring democratic governance."
    },
    {
      icon: MapPin,
      title: "Rich Municipal Body",
      description: "One of the richest municipal bodies in Madhya Pradesh with robust financial management."
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
              Indore Municipal Corporation (IMC) is the governing body of Indore, Madhya Pradesh. 
              As a progressive municipal corporation, IMC is committed to leveraging technology 
              and citizen participation to build a better, more transparent city.
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
                <p className="text-sm text-muted-foreground">Citizen Services</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Digital Initiatives</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">35L+</div>
                <p className="text-sm text-muted-foreground">Citizens Served</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">#1</div>
                <p className="text-sm text-muted-foreground">Cleanest City India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IMCSection;