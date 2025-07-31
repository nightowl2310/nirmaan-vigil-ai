// src/pages/ComplainDone.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import confetti from "canvas-confetti";

const ComplainDone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 🎉 Confetti on page load
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // ⏳ Redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate("/complaint-dashboard"); // 🔁 Redirect to dashboard
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center text-white text-5xl shadow-2xl"
      >
        <FaCheck />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6 text-xl font-bold text-green-700"
      >
        Your complaint is done!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-gray-600 mt-2"
      >
        Redirecting to complaint dashboard...
      </motion.p>
    </div>
  );
};

export default ComplainDone;
