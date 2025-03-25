import { useState, CSSProperties } from "react";
import api from "../../config/axios.config";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/forgot-password", { email });
      showSuccessToast("Password reset link sent to your email!");
      setEmail(""); // Clear input after success
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div style={containerStyle}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <label htmlFor="email"></label>
        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

const containerStyle: CSSProperties = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "20px",
  textAlign: "center", 
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0)",
  backgroundColor: "rgb(103, 99, 99);",
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle: CSSProperties = {
  padding: "12px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  color: "black",
  backgroundColor: "rgb(234, 234, 234);",
};

const buttonStyle: CSSProperties = {
  padding: "12px",
  fontSize: "16px",
  backgroundColor: "#04d4f0",
  color: "#000000",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "0.3s",
};

export default ForgotPassword;
