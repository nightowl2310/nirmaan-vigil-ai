import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IMCSection from "@/components/IMCSection";
import Footer from "@/components/Footer";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <PredictiveAnalytics />
      <IMCSection />
      <Footer />
    </div>
  );
};

export default Index;