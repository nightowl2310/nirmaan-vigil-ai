import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MapPin, Clock, Zap } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const PredictiveAnalytics = () => {
  // Sample data for risk prediction
  const riskData = [
    { month: "Jan", risk: 45, cases: 12 },
    { month: "Feb", risk: 52, cases: 19 },
    { month: "Mar", risk: 48, cases: 15 },
    { month: "Apr", risk: 61, cases: 22 },
    { month: "May", risk: 67, cases: 28 },
    { month: "Jun", risk: 72, cases: 35 },
  ];

  // Sample data for zone predictions
  const zonePredictions = [
    { zone: "Zone A", currentRisk: 85, predictedRisk: 92, confidence: 95 },
    { zone: "Zone B", currentRisk: 72, predictedRisk: 78, confidence: 88 },
    { zone: "Zone C", currentRisk: 65, predictedRisk: 71, confidence: 92 },
    { zone: "Zone D", currentRisk: 58, predictedRisk: 62, confidence: 85 },
    { zone: "Zone E", currentRisk: 45, predictedRisk: 51, confidence: 90 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Predictive Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI-powered models predict high-risk areas for future encroachments, enabling proactive monitoring and prevention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Risk Trend Chart */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                Encroachment Risk Trend
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={riskData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="risk" 
                      stackId="1" 
                      stroke="#f87171" 
                      fill="#f87171" 
                      fillOpacity={0.6}
                      name="Risk Score"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="cases" 
                      stackId="2" 
                      stroke="#4ade80" 
                      fill="#4ade80" 
                      fillOpacity={0.6}
                      name="New Cases"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Zone Predictions */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-accent" />
                Zone Risk Predictions
              </h3>
              <div className="h-80 overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Zone</th>
                      <th className="text-left py-2">Current</th>
                      <th className="text-left py-2">Predicted</th>
                      <th className="text-left py-2">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zonePredictions.map((zone, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">{zone.zone}</td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: getColorForRisk(zone.currentRisk) }}
                            ></div>
                            {zone.currentRisk}%
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: getColorForRisk(zone.predictedRisk) }}
                            ></div>
                            {zone.predictedRisk}%
                          </div>
                        </td>
                        <td className="py-3">{zone.confidence}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">96%</h3>
              <p className="text-muted-foreground">Prediction Accuracy</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">72h</h3>
              <p className="text-muted-foreground">Avg. Early Detection</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">42%</h3>
              <p className="text-muted-foreground">Reduction in Cases</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Helper function to get color based on risk level
const getColorForRisk = (risk: number): string => {
  if (risk >= 80) return "#f87171"; // red
  if (risk >= 60) return "#fbbf24"; // yellow
  if (risk >= 40) return "#60a5fa"; // blue
  return "#4ade80"; // green
};

export default PredictiveAnalytics;