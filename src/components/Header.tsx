import { Button } from "@/components/ui/button";
import { ExternalLink, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">NV</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Nirmaan Vigil AI</h1>
            <p className="text-xs text-muted-foreground">By Indore Municipal Corporation</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => { navigate('/admin'); }}>
            <Shield className="w-4 h-4 mr-2" />
            Official Dashboard
          </Button>
          <Button variant="cta" size="sm" onClick={() => { navigate('/login'); }}>
            Login to Report
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;