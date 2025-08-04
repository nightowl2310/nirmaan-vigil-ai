import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Complaint = {
  id: number;
  title: string;
  status: string;
  description: string;
  submittedBy: string;
  submittedAt: string;
};

interface ComplaintPopupProps {
  complaint: Complaint;
  onClose: () => void;
}

const ComplaintPopup: React.FC<ComplaintPopupProps> = ({ complaint, onClose }) => {
  const navigate=useNavigate();
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-2">{complaint.title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Submitted By:</span> {complaint.submittedBy} <br />
          <span className="font-semibold">Submitted At:</span> {complaint.submittedAt}
        </p>
        <p className="mb-4">{complaint.description}</p>
        <p className="text-sm">
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`px-2 py-1 rounded-full ${
              complaint.status === "new"
                ? "bg-yellow-200 text-yellow-800"
                : complaint.status === "pending"
                ? "bg-orange-200 text-orange-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {complaint.status.toUpperCase()}
          </span>
        </p>

        <button
        onClick={()=>navigate('/verify')}
          className="mt-6 w-full bg-red-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Verify
        </button>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ComplaintPopup;
