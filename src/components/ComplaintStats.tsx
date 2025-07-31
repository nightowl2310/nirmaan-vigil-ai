// components/ComplaintStats.tsx
import React from "react";
import { motion, Variants } from "framer-motion"; // ✅ import Variants

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

type ComplaintStatsProps = {
  stats: string[]; // Example: ["Total: 10", "Resolved: 4"]
  textColor?: string; // Optional tailwind color like text-midnight-green
};

const ComplaintStats: React.FC<ComplaintStatsProps> = ({
  stats,
  textColor = "text-midnight-green",
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((text, i) => (
        <motion.div
          key={i}
          className={`bg-white shadow-xl p-6 rounded-2xl text-center text-lg font-semibold ${textColor}`}
          variants={cardVariants}
          custom={i}
          initial="hidden"
          animate="visible"
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default ComplaintStats;
