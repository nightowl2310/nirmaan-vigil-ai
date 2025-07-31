import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintDashboard from "./pages/ComplaintDashboard";
import CitizenPanel from "./pages/CitizenPanel";
// import AdminDashboard from "./pages/AdminDashboard";      // ✅ Import this
// import EmployeeDashboard from "./pages/EmployeeDashboard"; // ✅ Import this

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          
          {/* <Route path="/admin" element={<AdminDashboard />} />       {/* ✅ Added */}
          {/* <Route path="/employee" element={<EmployeeDashboard />} /> ✅ Added */} 
          <Route path="/citizen" element={<CitizenPanel />} />
          <Route path="/complain" element={<ComplaintForm />} />
          <Route path="/complaints" element={<ComplaintDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
