import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CitizenPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f0e0] text-[#222] p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 sticky top-4 bg-[#f6f0e0] z-10"
      >
        🧑‍💼 Welcome, Citizen!
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-col gap-6 w-full max-w-md"
      >
        <button
          onClick={() => navigate("/complain")}
          className="bg-[#d62828] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-[#ba1b1b] transition duration-300"
        >
          ✍️ File a New Complaint
        </button>

        <button
          onClick={() => navigate("/complaints")}
          className="bg-[#003049] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-[#001f2e] transition duration-300"
        >
          📋 View Complaint Status
        </button>
      </motion.div>
    </div>
  );
};

export default CitizenPanel;
