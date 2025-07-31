import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CitizenPanel from "./pages/CitizenPanel";
import ComplaintDashboard from "./pages/citizen/ComplaintDashboard";



// ✅ Updated paths after moving to /citizen folder
import ComplaintForm from "./pages/citizen/ComplaintForm";
import ComplainDone from "./pages/citizen/ComplainDone";
// import ComplaintDashboard from "./pages/citizen/ComplaintDashboard";
import ComplaintStatus from "./pages/citizen/ComplainStatus";
import AdminDashboard from "./pages/admin/AdminDashboard";


// Optionally later you can uncomment below
// import AdminDashboard from "./pages/AdminDashboard";
// import EmployeeDashboard from "./pages/EmployeeDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Common Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/citizen" element={<CitizenPanel />} />
          <Route path="*" element={<NotFound />} />

          {/* ✅ Citizen Routes */}
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/complain_done" element={<ComplainDone />} />
          <Route path="/complaint-dashboard" element={<ComplaintDashboard />} />
          <Route path="/complaint-status" element={<ComplaintStatus />} />

          {/* ✅ Admin Route */}
          <Route path="/admin" element={<AdminDashboard />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
