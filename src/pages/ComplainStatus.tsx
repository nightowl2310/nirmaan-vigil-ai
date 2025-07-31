// src/pages/ComplaintStatus.tsx
import React from "react";
import { motion } from "framer-motion";

const ComplaintStatus: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-2xl border border-orange-200"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          🔍 Check Your Complaint Status
        </h2>

        <form className="space-y-6">
          <input type="text" placeholder="Enter Complaint ID" className="w-full border p-3 rounded-md" />
          <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600">
            Check Status
          </button>
        </form>

        {/* Placeholder result */}
        <div className="mt-6 text-center text-gray-600 italic">
          Status will appear here after you search.
        </div>
      </motion.div>
    </div>
  );
};

export default ComplaintStatus;
