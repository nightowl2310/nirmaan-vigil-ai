import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useComplaintStore } from "@/store/complaintStore";

const ComplaintForm: React.FC = () => {
  const navigate = useNavigate();
  const addComplaint = useComplaintStore((state) => state.addComplaint);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    optionalName: "",
    reason: "",
    qr: null as File | null,
    images: [] as File[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQRChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, qr: e.target.files![0] }));
    }
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 4);
      setFormData((prev) => ({ ...prev, images: filesArray }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullComplaint = {
      name: formData.name,
      email: formData.email,
      complaint: `${formData.reason} | Address: ${formData.house}, ${formData.street}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
      status: "Pending" as const,
    };

    addComplaint(fullComplaint);
    navigate("/complain_done");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg mt-8 border border-orange-350"
    >
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
        Submit Your Complaint 🚨
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="mobile"
          placeholder="Mobile Number"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="house"
          placeholder="House No."
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="street"
          placeholder="Street Name"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="city"
          placeholder="City"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="state"
          placeholder="State"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="pincode"
          placeholder="Pincode"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="optionalName"
          placeholder="Complainant Name (Optional)"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="reason"
          placeholder="Describe your complaint"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md h-24 resize-none"
        ></textarea>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Upload QR Code:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleQRChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Upload Building Images (Max 4):
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            className="w-full"
          />
          {formData.images.length > 0 && (
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
              {formData.images.map((img, idx) => (
                <li key={idx}>{img.name}</li>
              ))}
            </ul>
          )}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ComplaintForm;
