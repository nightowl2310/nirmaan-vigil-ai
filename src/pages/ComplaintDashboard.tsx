import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Complainer = {
  name: string;
  age: number;
  phone: string;
};

type Complaint = {
  id: number;
  title: string;
  area: string;
  details: {
    address: string;
    complainer: Complainer;
  };
};

const COLORS = ["#ef4444", "#f97316", "#22c55e"]; // red, orange, green

const ComplaintDashboard: React.FC = () => {
  const [newComplaints, setNewComplaints] = useState<Complaint[]>([
    {
      id: 1,
      title: "Illegal Construction",
      area: "Sector 15",
      details: {
        address: "12-A, Sector 15, Noida",
        complainer: {
          name: "Raj",
          age: 45,
          phone: "1234567890",
        },
      },
    },
    {
      id: 2,
      title: "Encroachment",
      area: "MG Road",
      details: {
        address: "MG Road, Delhi",
        complainer: {
          name: "Seema",
          age: 39,
          phone: "9876543210",
        },
      },
    },
    {
      id: 4,
      title: "Encroachment",
      area: "MG Road",
      details: {
        address: "MG Road, Delhi",
        complainer: {
          name: "Seema",
          age: 39,
          phone: "9876543210",
        },
      },
    },
    {
      id: 3,
      title: "Encroachment",
      area: "MG Road",
      details: {
        address: "MG Road, Delhi",
        complainer: {
          name: "Seema",
          age: 39,
          phone: "9876543210",
        },
      },
    },
  ]);

  const [pendingComplaints, setPendingComplaints] = useState<Complaint[]>([]);
  const [resolvedComplaints, setResolvedComplaints] = useState<Complaint[]>([]);
  const [popupComplaint, setPopupComplaint] = useState<Complaint | null>(null);

  const [showAllPending, setShowAllPending] = useState(false);
  const [showAllResolved, setShowAllResolved] = useState(false);

  const handleView = (complaint: Complaint) => {
    setPopupComplaint(complaint);
    setNewComplaints((prev) => prev.filter((c) => c.id !== complaint.id));
    setPendingComplaints((prev) => [...prev, complaint]);
  };

  const handleResolve = (complaint: Complaint) => {
    setPendingComplaints((prev) => prev.filter((c) => c.id !== complaint.id));
    setResolvedComplaints((prev) => [...prev, complaint]);
    setPopupComplaint(null);
  };

  const chartData = [
    { name: "New", value: newComplaints.length },
    { name: "Pending", value: pendingComplaints.length },
    { name: "Resolved", value: resolvedComplaints.length },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-primary">Complaint Dashboard</h2>

      {/* 📊 Chart */}
      <div className="w-full h-72 bg-white rounded-xl shadow-md p-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} dataKey="value" nameKey="name" outerRadius={80} label>
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 🆕 New Complaints */}
      <section>
        <h3 className="text-xl font-semibold mb-2">New Complaints</h3>
        <div className="space-y-3">
          {newComplaints.map((complaint) => (
            <div
              key={complaint.id}
              className="p-3 border bg-red-100 rounded-md flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{complaint.title}</p>
                <p className="text-sm text-gray-600">{complaint.area}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                  onClick={() => handleView(complaint)}
                >
                  View
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-1 rounded"
                  onClick={() => handleResolve(complaint)}
                >
                  Resolved
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔶 Pending Complaints */}
      <section>
        <h3
          className="text-xl font-semibold mt-6 mb-2 cursor-pointer"
          onClick={() => setShowAllPending((prev) => !prev)}
        >
          {showAllPending ? "All Pending Complaints" : "Pending Complaints"}
        </h3>
        <div className={`space-y-3 ${showAllPending ? "max-h-[80vh]" : "max-h-48"} overflow-y-auto`}>
          {(showAllPending ? pendingComplaints : pendingComplaints.slice(0, 2)).map((complaint) => (
            <div
              key={complaint.id}
              className="p-3 border bg-orange-100 rounded-md cursor-pointer"
              onClick={() => setPopupComplaint(complaint)}
            >
              <p className="font-semibold">{complaint.title}</p>
              <p className="text-sm text-gray-600">{complaint.area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Resolved Complaints */}
      <section>
        <h3
          className="text-xl font-semibold mt-6 mb-2 cursor-pointer"
          onClick={() => setShowAllResolved((prev) => !prev)}
        >
          {showAllResolved ? "All Resolved Complaints" : "Resolved Complaints"}
        </h3>
        <div className={`space-y-3 ${showAllResolved ? "max-h-[80vh]" : "max-h-48"} overflow-y-auto`}>
          {(showAllResolved ? resolvedComplaints : resolvedComplaints.slice(0, 2)).map((complaint) => (
            <div
              key={complaint.id}
              className="p-3 border bg-green-100 rounded-md"
            >
              <p className="font-semibold">{complaint.title}</p>
              <p className="text-sm text-gray-600">{complaint.area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔍 Popup for Complaint */}
      {popupComplaint && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md relative">
            <h3 className="text-xl font-bold mb-2">{popupComplaint.title}</h3>
            <div className="space-y-1 text-sm">
              <p><strong>Area:</strong> {popupComplaint.area}</p>
              <p><strong>Full Address:</strong> {popupComplaint.details.address}</p>
            </div>
            <div className="mt-4 border-t pt-2">
              <h4 className="text-lg font-semibold">Complainer Info</h4>
              {popupComplaint.details.complainer.name ? (
                <div className="space-y-1 text-sm">
                  <p><strong>Name:</strong> {popupComplaint.details.complainer.name}</p>
                  <p><strong>Age:</strong> {popupComplaint.details.complainer.age}</p>
                  <p><strong>Phone:</strong> {popupComplaint.details.complainer.phone}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-600 italic">No complainer details provided.</p>
              )}
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-green-500 text-white px-4 py-1 rounded"
                onClick={() => handleResolve(popupComplaint)}
              >
                Mark as Resolved
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-1 rounded"
                onClick={() => setPopupComplaint(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintDashboard;
