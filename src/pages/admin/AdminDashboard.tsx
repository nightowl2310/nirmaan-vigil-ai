import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { complaints as dummyComplaints } from "../../data/complaints";
import ComplaintPopup from "../../components/ComplaintPopup";
import type { Complaint } from "@/types";
import { motion } from "framer-motion";

const COLORS = ["#f87171", "#facc15", "#4ade80"]; // red, yellow, green

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState<Complaint[]>(dummyComplaints);
  const [popupComplaint, setPopupComplaint] = useState<Complaint | null>(null);
  const [showAllNew, setShowAllNew] = useState(false);
  const [showAllPending, setShowAllPending] = useState(false);
  const [showAllResolved, setShowAllResolved] = useState(false);

  const countByStatus = (status: string) =>
    complaints.filter((c) => c.status === status).length;

  const pieData = [
    { name: "New", value: countByStatus("New") },
    { name: "Pending", value: countByStatus("Pending") },
    { name: "Resolved", value: countByStatus("Resolved") },
  ];

  const renderSection = (
    status: string,
    showAll: boolean,
    toggleShow: () => void
  ) => {
    const filtered = complaints.filter((c) => c.status === status);
    const visibleComplaints = showAll ? filtered : filtered.slice(0, 4);

    return (
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white shadow-xl rounded-2xl p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-bistre border-b pb-2">
          {status} Complaints
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleComplaints.map((complaint, i) => (
            <motion.div
              key={complaint.id}
              custom={i}
              variants={fadeInUp}
              className="cursor-pointer bg-[#f9f9f9] shadow-sm hover:shadow-md border border-gray-100 rounded-xl p-5 transition-all duration-200"
              onClick={() => setPopupComplaint(complaint)}
            >
              <h3 className="font-semibold text-lg text-midnight-green mb-1">
                {complaint.title}
              </h3>
              <p className="text-sm text-french-gray mb-1">
                {complaint.location}
              </p>
              <p
                className={`text-sm mb-1 font-medium ${
                  complaint.status === "Resolved"
                    ? "text-green-600"
                    : complaint.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                Status: {complaint.status}
              </p>
              <p className="text-xs text-brown-sugar">{complaint.date}</p>
            </motion.div>
          ))}
        </div>
        {filtered.length > 4 && (
          <div className="mt-4 text-center">
            <button
              onClick={toggleShow}
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="p-6 md:p-10 bg-[#f3f4f6] min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-midnight-green"
      >
        Complaint Dashboard
      </motion.h1>

      {/* Pie Chart Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white shadow-xl rounded-2xl p-6 mb-10"
      >
        <h2 className="text-xl font-semibold mb-4 text-bistre">
          Complaint Status Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Complaint Sections */}
      {renderSection("New", showAllNew, () => setShowAllNew(!showAllNew))}
      {renderSection("Pending", showAllPending, () =>
        setShowAllPending(!showAllPending)
      )}
      {renderSection("Resolved", showAllResolved, () =>
        setShowAllResolved(!showAllResolved)
      )}

      {/* Complaint Popup */}
      {popupComplaint && (
        <ComplaintPopup
          complaint={popupComplaint}
          onClose={() => setPopupComplaint(null)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
