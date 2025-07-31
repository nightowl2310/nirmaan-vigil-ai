import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useComplaintStore } from "../store/complaintStore";
import { motion } from "framer-motion";

const ComplaintForm = () => {
  const navigate = useNavigate();
  const addComplaint = useComplaintStore((state) => state.addComplaint);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addComplaint({ ...formData, status: "new", id: Date.now().toString() });
    navigate("/complaints");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f0e0] px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl p-8 rounded-2xl shadow-2xl bg-white border border-[#ccc]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#d62828] sticky top-2">
          ✍️ Submit a Complaint
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#333]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#d62828] focus:border-[#d62828] outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#333]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#d62828] focus:border-[#d62828] outline-none"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-[#333]">
              Location of Issue
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#d62828] focus:border-[#d62828] outline-none"
            />
          </div>

          <div>
            <label htmlFor="complaint" className="block text-sm font-medium text-[#333]">
              Complaint Description
            </label>
            <textarea
              name="complaint"
              required
              value={formData.complaint}
              onChange={handleChange}
              rows={5}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-[#d62828] focus:border-[#d62828] outline-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#003049] text-white px-6 py-2 rounded-full hover:bg-[#001f2e] transition duration-300"
            >
              🚀 Submit Complaint
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ComplaintForm;
