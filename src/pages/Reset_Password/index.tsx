// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../../config/axios.config";
// import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
// import "./index.css"

// const ResetPassword: React.FC = () => {
//   console.log("ResetPassword component is loaded!"); // Debugging log

//   const { token } = useParams(); // Get token from URL
//   const navigate = useNavigate();

//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       showErrorToast("Passwords do not match!");
//       return;
//     }

//     try {
//       setLoading(true);
//       await api.post("/auth/reset-password", { token, newPassword });
//       showSuccessToast("Password reset successful!");
//       navigate("/login"); // Redirect to login page
//     } catch (error: any) {
//       showErrorToast(error.response?.data?.error || "Password reset failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: "black", padding: "20px", minHeight: "100vh" }}>
//       <h2>Reset Your Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Resetting..." : "Reset Password"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ResetPassword;

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../config/axios.config";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import "./index.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ResetPassword: React.FC = () => {
//   console.log("ResetPassword component is loaded!"); 

  const query = useQuery();
  const token = query.get("token"); // Extract token from query parameters
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      showErrorToast("Invalid or expired reset link!");
      return;
    }

    if (newPassword !== confirmPassword) {
      showErrorToast("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      console.log("Sending request to reset password:", { token, password: newPassword });
      const response = await api.post("/auth/reset-password", {
        token, // Pass token from query params
        newPassword,
      });

      console.log("Response:", response.data);
      showSuccessToast("Password reset successful!");
      navigate("/login");
    } catch (error: any) {
        console.error("Error response:", error.response?.data);
      showErrorToast(error.response?.data?.error || "Password reset failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <h2>Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;