import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

// ✅ Use a reliable hosted image
const BG_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Rajwada_Indore_01.jpg";

// ✅ Type for user role (for scalability)
type UserRole = "admin" | "employee" | "citizen" | "unknown";

const Login: React.FC = () => {
  const navigate = useNavigate();

  // -------------------------
  // State Management
  // -------------------------
  const [username, setUsername] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPasscode, setShowPasscode] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // -------------------------
  // Event Handlers
  // -------------------------
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const roleMap: Record<string, UserRole> = {
      admin: "admin",
      employee: "employee",
      citizen: "citizen",
    };

    const userRole = roleMap[username.toLowerCase()] ?? "unknown";

    if (userRole !== "unknown" && passcode === "1") {
      navigate(`/${userRole}`);
    } else {
      setError("Invalid username or passcode. Please try again.");
    }
  };

  // -------------------------
  // Component Render
  // -------------------------
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900">
      {/* ---------- Left Side (Form) ---------- */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 bg-gray-50 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
            Welcome!
          </h2>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm mb-4 text-center"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-sm font-medium">
                User ID
              </label>
              <input
                id="username"
                type="text"
                placeholder="e.g., admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Passcode */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="passcode" className="text-sm font-medium">
                Passcode
              </label>
              <div className="relative">
                <input
                  id="passcode"
                  type={showPasscode ? "text" : "password"}
                  placeholder="••••••••"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-3 pr-10 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label={showPasscode ? "Hide passcode" : "Show passcode"}
                >
                  {showPasscode ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-gray-700">Remember Me</span>
              </label>

              <a href="#" className="text-blue-600 hover:underline">
                Forgot passcode?
              </a>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
            >
              Sign In
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* ---------- Right Side (Image) ---------- */}
      <div className="hidden md:block flex-1 relative overflow-hidden">
        <img
          src={BG_IMAGE_URL}
          alt="Rajwada Palace, Indore"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="absolute bottom-10 left-10 text-white space-y-2"
        >
          <h3 className="text-3xl font-bold drop-shadow-lg">
            City of Poise and Progress
          </h3>
          <p className="text-sm opacity-90">Indore — Where Innovation Meets Heritage</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
