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
  address: string;
};

type Address = {
  area: string;
  building: string;
  streetName: string;
  colonyName: string;
  landmark: string;
  wardNumber: string;
  pinCode: string;
  city: string;
  state: string;
};

type Complaint = {
  id: number;
  title: string;
  area: string;
  details: {
    address: Address;
    complainer: Complainer;
  };
};

const COLORS = ["#ef4444", "#f97316", "#22c55e"];

const ComplaintDashboard: React.FC = () => {
  const [newComplaints, setNewComplaints] = useState<Complaint[]>([
    {
      id: 1,
      title: "Illegal Construction",
      area: "Sector 15",
      details: {
        address: {
          area: "Sector 15",
          building: "12-A",
          streetName: "Main Street",
          colonyName: "Green Park Colony",
          landmark: "Near City Mall",
          wardNumber: "22",
          pinCode: "452001",
          city: "Indore",
          state: "Madhya Pradesh"
        },
        complainer: {
          name: "Raj",
          age: 45,
          phone: "1234567890",
          address: "Boys Hostel,IET DAVV,Indore(M.P)"
        },
      },
    },
    {
      id: 2,
      title: "Unauthorized Shop Extension",
      area: "MG Road",
      details: {
        address: {
          area: "MG Road",
          building: "23-B",
          streetName: "Central Avenue",
          colonyName: "Rajwada Area",
          landmark: "Opp. Treasure Island Mall",
          wardNumber: "11",
          pinCode: "452001",
          city: "Indore",
          state: "Madhya Pradesh"
        },
        complainer: {
          name: "Sunita Sharma",
          age: 38,
          phone: "9876543210",
          address: "Flat 304, Shree Residency, Vijay Nagar, Indore"
        }
      }
    },
    {
      id: 3,
      title: "Illegal Parking Space",
      area: "Vijay Nagar",
      details: {
        address: {
          area: "Vijay Nagar",
          building: "B-45",
          streetName: "LIG Square Road",
          colonyName: "Saket Nagar",
          landmark: "Near Apollo Tower",
          wardNumber: "18",
          pinCode: "452010",
          city: "Indore",
          state: "Madhya Pradesh"
        },
        complainer: {
          name: "Ankit Verma",
          age: 30,
          phone: "7894561230",
          address: "D-12, MIG Colony, Indore"
        }
      }
    },
    {
      id: 4,
      title: "Blocked Drainage System",
      area: "Annapurna Nagar",
      details: {
        address: {
          area: "Annapurna Nagar",
          building: "67-C",
          streetName: "Temple Street",
          colonyName: "Rani Bagh",
          landmark: "Behind Annapurna Temple",
          wardNumber: "34",
          pinCode: "452009",
          city: "Indore",
          state: "Madhya Pradesh"
        },
        complainer: {
          name: "Meera Joshi",
          age: 52,
          phone: "7412589630",
          address: "House No. 101, Rani Bagh, Indore"
        }
      }
    },
    {
      id: 5,
      title: "Garbage Dump on Road",
      area: "Bhavarkua",
      details: {
        address: {
          area: "Bhavarkua",
          building: "9-A",
          streetName: "University Road",
          colonyName: "Moti Tabela",
          landmark: "Near DAVV Main Gate",
          wardNumber: "27",
          pinCode: "452001",
          city: "Indore",
          state: "Madhya Pradesh"
        },
        complainer: {
          name: "Rahul Singh",
          age: 26,
          phone: "9517538426",
          address: "Room 15, Boys Hostel, IET DAVV, Indore"
        }
      }
    }
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

      {/* Chart */}
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

      {/* New Complaints */}
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pending Complaints */}
      <section>
        <h3
          className="text-xl font-semibold mt-6 mb-2 cursor-pointer"
          
        >
          {showAllPending ? "All Pending Complaints" : "Pending Complaints"}
        </h3>
        <div
          className={`space-y-3 ${showAllPending ? "max-h-[80vh]" : "max-h-48"} overflow-y-auto`}
        >
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
        <div className="flex justify-center items-center mt-6">
          <p
            className="text-2xl text-gray-400 transform rotate-90 tracking-tight select-none"
            style={{ cursor: "pointer" }}
            onClick={() => setShowAllPending((prev) => !prev)}
          >
            {showAllPending ? "‹‹" : "››"}
          </p>
        </div>
      </section>

      {/* Resolved Complaints */}
      <section>
        <h3
          className="text-xl font-semibold mt-6 mb-2 cursor-pointer"
          onClick={() => setShowAllResolved((prev) => !prev)}
        >
          {showAllResolved ? "All Resolved Complaints" : "Resolved Complaints"}
        </h3>
        <div
          className={`space-y-3 ${showAllResolved ? "max-h-[80vh]" : "max-h-48"} overflow-y-auto`}
        >
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
        <div className="flex justify-center items-center mt-6">
          <p
            className="text-2xl text-gray-400 transform rotate-90 tracking-tight select-none"
            style={{ cursor: "pointer" }}
            onClick={() => setShowAllResolved((prev) => !prev)}
          >
            {showAllResolved ? "‹‹" : "››"}
          </p>
        </div>
      </section>

      {/* Complaint Detail Popup */}
      {popupComplaint && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md relative">
            <h3 className="text-xl font-bold mb-2">{popupComplaint.title}</h3>
            <div className="space-y-1 text-sm">
              <p><strong>Area:</strong> {popupComplaint.area}</p>
              <p><strong>Full Address:</strong></p>
              <ul className="pl-4 list-disc">
                {Object.entries(popupComplaint.details.address).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 border-t pt-2">
              <h4 className="text-lg font-semibold">Complainer Info</h4>
              <div className="space-y-1 text-sm">
                <p><strong>Name:</strong> {popupComplaint.details.complainer.name}</p>
                <p><strong>Age:</strong> {popupComplaint.details.complainer.age}</p>
                <p><strong>Phone:</strong> {popupComplaint.details.complainer.phone}</p>
              </div>
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
