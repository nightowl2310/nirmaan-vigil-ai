import React from "react";
import AdminNavigation from "@/components/AdminNavigation";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";
import { motion } from "framer-motion";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200">
      <AdminNavigation />

      <div className="p-6 md:p-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Predictive Analytics Dashboard
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PredictiveAnalytics />
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsPage;