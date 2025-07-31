import React from "react";
import useComplaintStore from "@/store/complaintStore";

const ComplaintDashboard = () => {
  const complaints = useComplaintStore((state) => state.complaints);

  return (
    <div className="min-h-screen bg-orange-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-800 font-comic">
        Complaint Dashboard
      </h1>

      {complaints.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">No complaints yet!</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {complaints.map((c, i) => (
            <div
              key={i}
              className="bg-white border-2 border-orange-300 rounded-xl p-5 shadow-md"
            >
              <h2 className="text-2xl font-semibold text-orange-700">
                {c.name}
              </h2>
              <p className="text-gray-700">{c.email}</p>
              <p className="mt-2 text-gray-800">{c.complaint}</p>
              <p className="mt-3 font-bold text-orange-600">
                Status: {c.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComplaintDashboard;
