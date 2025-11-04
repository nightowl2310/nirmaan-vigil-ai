import React, { useState, useEffect } from "react";
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

  const [saveInfo, setSaveInfo] = useState(false);

  // Load saved user info on component mount
  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userComplaintInfo");
    if (savedUserInfo) {
      try {
        const parsedInfo = JSON.parse(savedUserInfo);
        setFormData(prev => ({
          ...prev,
          name: parsedInfo.name || "",
          email: parsedInfo.email || "",
          mobile: parsedInfo.mobile || "",
          house: parsedInfo.house || "",
          street: parsedInfo.street || "",
          city: parsedInfo.city || "",
          state: parsedInfo.state || "",
          pincode: parsedInfo.pincode || "",
        }));
        setSaveInfo(true);
      } catch (e) {
        console.error("Failed to parse saved user info", e);
      }
    }
  }, []);

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

  const handleSaveInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaveInfo(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save user info if requested
    if (saveInfo) {
      const userInfo = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        house: formData.house,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      };
      localStorage.setItem("userComplaintInfo", JSON.stringify(userInfo));
    } else {
      // Clear saved info if user unchecks the option
      localStorage.removeItem("userComplaintInfo");
    }

    const fullComplaint = {
      name: formData.name,
      email: formData.email,
      complaint: `${formData.reason} | Address: ${formData.house}, ${formData.street}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
      status: "Pending" as const,
    };

    addComplaint(fullComplaint);
    navigate("/complain_done");
  };

  const handleAutofill = () => {
    // For demo purposes, we'll fill with sample data
    setFormData(prev => ({
      ...prev,
      name: "John Doe",
      email: "johndoe@example.com",
      mobile: "9876543210",
      house: "123",
      street: "Main Street",
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452001",
    }));
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

      <div className="mb-6">
        <button
          type="button"
          onClick={handleAutofill}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Autofill with sample data
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="mobile"
          placeholder="Mobile Number"
          required
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="house"
          placeholder="House No."
          required
          value={formData.house}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="street"
          placeholder="Street Name"
          required
          value={formData.street}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="city"
          placeholder="City"
          required
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="state"
          placeholder="State"
          required
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="pincode"
          placeholder="Pincode"
          required
          value={formData.pincode}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          name="optionalName"
          placeholder="Complainant Name (Optional)"
          value={formData.optionalName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="reason"
          placeholder="Describe your complaint"
          required
          value={formData.reason}
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

        <div className="flex items-center">
          <input
            id="saveInfo"
            type="checkbox"
            checked={saveInfo}
            onChange={handleSaveInfoChange}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
            Save my information for future complaints
          </label>
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