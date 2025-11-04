import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
} from "recharts";
import { complaints as dummyComplaints } from "../../data/complaints";
import ComplaintPopup from "../../components/ComplaintPopup";
import type { Complaint } from "@/types";
import { motion } from "framer-motion";
import { MapPin, AlertTriangle, TrendingUp, Eye } from "lucide-react";
import AdminNavigation from "@/components/AdminNavigation";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

// Colors for Pie Chart (New, Pending, Resolved)
const COLORS = ["#f87171", "#facc15", "#4ade80"]; // red, yellow, green

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const cardHover = {
  y: -5,
  scale: 1.02,
  transition: { duration: 0.2 }
};

const itemHover = {
  scale: 1.03,
  transition: { duration: 0.2 }
};

// --- TypeScript Interface for StatCard ---
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  colorClass: string;
  index: number;
}

// Stat Card Component
const StatCard = ({
  icon,
  label,
  value,
  colorClass,
  index,
}: StatCardProps) => (
  <motion.div
    custom={index}
    variants={fadeInUp}
    whileHover={cardHover}
    className="bg-slate-800 shadow-lg rounded-2xl p-6 flex items-center border border-slate-700"
  >
    <div
      className={`w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mr-4 ${colorClass}`}
    >
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-2xl font-bold text-gray-100">{value}</p>
    </div>
  </motion.div>
);

// Custom Tooltip component for type safety
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-lg">
        <p className="label text-sm text-gray-200">{`${label}`}</p>
        {payload.map((pld, index) => (
          <p key={index} style={{ color: pld.color }} className="text-xs">
            {`${pld.name}: ${pld.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
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

  const resolutionRate =
    complaints.length > 0
      ? Math.round((countByStatus("Resolved") / complaints.length) * 100)
      : 0;
      
  // Sample data for predictive analytics
  const riskZones = [
    { zone: "Zone A", risk: 85, cases: 12 },
    { zone: "Zone B", risk: 72, cases: 8 },
    { zone: "Zone C", risk: 65, cases: 6 },
    { zone: "Zone D", risk: 58, cases: 4 },
    { zone: "Zone E", risk: 45, cases: 3 },
  ];

  const renderSection = (
    status: string,
    showAll: boolean,
    toggleShow: () => void,
    animationIndex: number
  ) => {
    const filtered = complaints.filter((c) => c.status === status);
    const visibleComplaints = showAll ? filtered : filtered.slice(0, 3); // Changed to 3 for a tighter grid

    return (
      <motion.div
        custom={animationIndex}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-slate-800 shadow-xl rounded-2xl p-6 mb-8 border border-slate-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-100 border-b border-slate-600 pb-2">
          {status} Encroachments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleComplaints.map((complaint, i) => (
            <motion.div
              key={complaint.id}
              custom={i}
              variants={fadeInUp}
              whileHover={itemHover}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="cursor-pointer bg-slate-700 shadow-md hover:shadow-lg border border-slate-600 rounded-xl p-5 transition-all duration-200"
              onClick={() => setPopupComplaint(complaint)}
            >
              <h3 className="font-semibold text-lg text-gray-100 mb-1">
                {complaint.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                {complaint.location}
              </p>
              <p
                className={`text-sm mb-2 font-medium ${
                  complaint.status === "Resolved"
                    ? "text-green-400"
                    : complaint.status === "Pending"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                Status: {complaint.status}
              </p>
              <p className="text-xs text-gray-500">{complaint.date}</p>
            </motion.div>
          ))}
        </div>
        {filtered.length > 3 && (
          <div className="mt-6 text-center">
            <button
              onClick={toggleShow}
              className="text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </motion.div>
    );
  };

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
          Encroachment Monitoring Dashboard
        </motion.h1>

        {/* Stats Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <StatCard
            index={1}
            icon={<Eye className="w-6 h-6" />}
            label="Total Cases"
            value={complaints.length}
            colorClass="text-blue-400"
          />
          <StatCard
            index={2}
            icon={<AlertTriangle className="w-6 h-6" />}
            label="Pending"
            value={countByStatus("Pending")}
            colorClass="text-yellow-400"
          />
          <StatCard
            index={3}
            icon={<MapPin className="w-6 h-6" />}
            label="New Reports"
            value={countByStatus("New")}
            colorClass="text-red-400"
          />
          <StatCard
            index={4}
            icon={<TrendingUp className="w-6 h-6" />}
            label="Resolution Rate"
            value={`${resolutionRate}%`}
            colorClass="text-green-400"
          />
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pie Chart Section */}
          <motion.div
            custom={5}
            variants={fadeInUp}
            whileHover={cardHover}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-slate-800 shadow-xl rounded-2xl p-6 border border-slate-700"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              Encroachment Status Overview
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: { name: string; percent: number }) =>
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
                <Legend
                  wrapperStyle={{ color: "#d1d5db", paddingTop: "10px" }}
                />
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Risk Zones Chart */}
          <motion.div
            custom={6}
            variants={fadeInUp}
            whileHover={cardHover}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-slate-800 shadow-xl rounded-2xl p-6 border border-slate-700"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              High-Risk Zones (Predictive Analytics)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={riskZones}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="zone" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ color: "#d1d5db", paddingTop: "10px" }}
                />
                <Bar dataKey="risk" fill="#f87171" name="Risk Score" />
                <Bar dataKey="cases" fill="#4ade80" name="Current Cases" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Complaint Sections */}
        {renderSection("New", showAllNew, () => setShowAllNew(!showAllNew), 7)}
        {renderSection(
          "Pending",
          showAllPending,
          () => setShowAllPending(!showAllPending),
          8
        )}
        {renderSection(
          "Resolved",
          showAllResolved,
          () => setShowAllResolved(!showAllResolved),
          9
        )}

        {/* Complaint Popup */}
        {popupComplaint && (
          <ComplaintPopup
            complaint={popupComplaint}
            onClose={() => setPopupComplaint(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;