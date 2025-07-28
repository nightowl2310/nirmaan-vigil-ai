import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: "var(--imc-cream)",
        padding: "2rem",
      }}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-8 text-center max-w-lg w-full"
        style={{ border: "2px solid var(--imc-orange)" }}
      >
        <h1
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--imc-navy)" }}
        >
          Thank You!
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          Your complaint has been sent. Further information will be informed to
          you by a message on your registered mobile number. <br />
          <span className="font-semibold text-gray-900">
            Thank You for complaining and being a responsible citizen.
          </span>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/complain")}
            className="bg-white text-[var(--imc-orange)] font-medium px-4 py-2 rounded hover:bg-orange-600 hover:text-white transition"
          >
            File Another Complaint
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-[var(--imc-navy)] font-medium px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
